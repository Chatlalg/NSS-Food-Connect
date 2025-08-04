'use client'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import signInSchema from "@/schemas/signInSchema"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"
import { authAPI } from "@/lib/api"

const SignIn = () => {
  const router = useRouter()
  const { login } = useAuth()
  
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    try {
      const response = await authAPI.login(data.email, data.password)
      
      if (response.success) {
        toast.success("Successfully logged in", {
          description: response.message[0]
        })
        
        // Get token from cookies and decode user
        console.log("All cookies:", document.cookie)
        const token = document.cookie
          .split('; ')
          .find((row) => row.startsWith('access_token='))
          ?.split('=')[1]
        
        console.log("Token found:", token ? "Yes" : "No")
        console.log("Token value:", token ? token.substring(0, 20) + "..." : "None")
        
        if (!token) {
          toast.error("Authentication failed", {
            description: "Token not found"
          })
          return
        }
        
        // Login user in context
        const loginSuccess = login(token)
        console.log("Login success:", loginSuccess)
        
        if (!loginSuccess) {
          toast.error("Authentication failed", {
            description: "Invalid token"
          })
          return
        }
        
        // Decode token and redirect
        try {
          const decodedUser = JSON.parse(atob(token.split('.')[1]))
          console.log("Decoded user:", decodedUser)
          
          const redirectPath = decodedUser.userType === 0 ? "/admin/donations" : "/volunteer/donate"
          console.log("Redirecting to:", redirectPath)
          
          // Use push instead of replace for better navigation
          router.push(redirectPath)
          
          // Fallback redirect after a short delay
          setTimeout(() => {
            if (window.location.pathname === '/auth/login') {
              console.log("Fallback redirect triggered")
              window.location.href = redirectPath
            }
          }, 1000)
        } catch (decodeError) {
          console.error("Token decode error:", decodeError)
          toast.error("Authentication failed", {
            description: "Invalid token format"
          })
        }
      } else {
        toast.error("Login failed", {
          description: response.message[0]
        })
      }
    } catch (error: any) {
      console.error("Error in signin of user", error)
      let errorMessage = "An unexpected error occurred"
      
      if (error.response?.data?.message) {
        errorMessage = Array.isArray(error.response.data.message) 
          ? error.response.data.message[0] 
          : error.response.data.message
      } else if (error.message) {
        errorMessage = error.message
      }
      
      toast.error("Sign in failed", {
        description: errorMessage
      })
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}>
             <div className="w-full max-w-md p-8 space-y-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
        <div className="text-center ">
          <div className="flex justify-center">
            <img src="/nsslogo.jpeg" alt="Logo" className="h-25 w-25 rounded-full shadow-md" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Join NSS Food Connect
          </h1>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="atharva@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button type="submit" className="px-8">Sign In</Button>
            </div>
          </form>
        </Form>
                 <div className="text-center mt-4">
           <p>
             Not registered? {' '}
             <Link href="/auth/register" className="text-blue-600 hover:text-blue-800">
               Sign up
             </Link>
           </p>
         </div>
       </div>
    </div>
  )
}

export default SignIn 