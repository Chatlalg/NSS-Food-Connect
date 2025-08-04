'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function TokenDebugger() {
  const [tokenInfo, setTokenInfo] = useState<any>(null)

  const debugToken = () => {
    try {
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('access_token='))
        ?.split('=')[1]

      if (!token) {
        setTokenInfo({ error: 'No token found in cookies' })
        return
      }

      const decodedUser = JSON.parse(atob(token.split('.')[1]))
      setTokenInfo({
        token: token.substring(0, 20) + '...',
        decodedUser,
        userType: decodedUser.userType,
        redirectPath: decodedUser.userType === 0 ? "/admin/donations" : "/volunteer/donate"
      })
    } catch (error) {
      setTokenInfo({ error: `Token decode error: ${error}` })
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Token Debugger</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={debugToken} className="w-full">
          Debug Current Token
        </Button>

        {tokenInfo && (
          <div className="space-y-2">
            <h3 className="font-semibold">Token Info:</h3>
            <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
              {JSON.stringify(tokenInfo, null, 2)}
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 