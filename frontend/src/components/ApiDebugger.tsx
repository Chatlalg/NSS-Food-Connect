'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { authAPI } from '@/lib/api'
import { config } from '@/lib/config'

export default function ApiDebugger() {
  const [testResults, setTestResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const runTests = async () => {
    setLoading(true)
    setTestResults([])
    
    const results = []

    // Test 1: Check config
    try {
      results.push({
        test: 'Config Check',
        status: 'success',
        message: `API URL: ${config.apiUrl}`
      })
    } catch (error) {
      results.push({
        test: 'Config Check',
        status: 'error',
        message: `Error: ${error}`
      })
    }

    // Test 2: Check server connection
    try {
      const response = await fetch(`${config.apiUrl}/`)
      if (response.ok) {
        const data = await response.json()
        results.push({
          test: 'Server Connection',
          status: 'success',
          message: `Server is running: ${JSON.stringify(data)}`
        })
      } else {
        results.push({
          test: 'Server Connection',
          status: 'error',
          message: `Server responded with status: ${response.status}`
        })
      }
    } catch (error) {
      results.push({
        test: 'Server Connection',
        status: 'error',
        message: `Connection failed: ${error}`
      })
    }

    // Test 3: Test admin login
    try {
      const loginResponse = await authAPI.login('admin@foodconnect.com', 'admin123')
      results.push({
        test: 'Admin Login',
        status: 'success',
        message: `Login successful: ${JSON.stringify(loginResponse)}`
      })
    } catch (error: any) {
      results.push({
        test: 'Admin Login',
        status: 'error',
        message: `Login failed: ${error.response?.data?.message || error.message}`
      })
    }

    setTestResults(results)
    setLoading(false)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>API Connection Debugger</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={runTests} 
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Running Tests...' : 'Run API Tests'}
        </Button>

        {testResults.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-semibold">Test Results:</h3>
            {testResults.map((result, index) => (
              <div 
                key={index} 
                className={`p-3 rounded border ${
                  result.status === 'success' 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-red-200 bg-red-50'
                }`}
              >
                <div className="font-medium">
                  {result.status === 'success' ? '✅' : '❌'} {result.test}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {result.message}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
} 