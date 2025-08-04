'use client'
import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles?: (0 | 1)[]
  redirectTo?: string
}

const ProtectedRoute = ({ 
  children, 
  allowedRoles = [0, 1], 
  redirectTo 
}: ProtectedRouteProps) => {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        toast.error("Authentication required", {
          description: "Please log in to access this page"
        })
        router.replace("/auth/login")
        return
      }

      if (!allowedRoles.includes(user.userType)) {
        toast.error("Access denied", {
          description: "You don't have permission to access this page"
        })
        if (redirectTo) {
          router.replace(redirectTo)
        } else {
          router.replace(user.userType === 0 ? "/admin/donations" : "/volunteer/donate")
        }
        return
      }
    }
  }, [user, loading, allowedRoles, redirectTo, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!user || !allowedRoles.includes(user.userType)) {
    return null
  }

  return <>{children}</>
}

export default ProtectedRoute 