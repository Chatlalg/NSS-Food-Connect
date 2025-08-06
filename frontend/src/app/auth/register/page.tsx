// 'use client'
// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import signUpSchema from "@/schemas/signUpSchema"
// import { zodResolver } from "@hookform/resolvers/zod"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { useForm } from "react-hook-form"
// import { toast } from "sonner"
// import * as z from "zod"
// import { authAPI } from "@/lib/api"

// const SignUp = () => {
//   const router = useRouter()
//   const form = useForm<z.infer<typeof signUpSchema>>({
//     resolver: zodResolver(signUpSchema),
//     defaultValues: {
//       email: "",
//       name: "",
//       enrollmentNumber: "",
//       password: "",
//       year: "First Year"
//     }
//   })

//   const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
//     const mapping: Record<string, number> = {
//       "First Year": 1,
//       "Second Year": 2,
//       "Third Year": 3,
//       "Fourth Year": 4
//     }
//     try {
//       const newData = { 
//         name: data.name,
//         email: data.email,
//         password: data.password,
//         enrollmentNumber: data.enrollmentNumber,
//         year: mapping[data.year]
//       }
      
//       const response = await authAPI.register(newData.name, newData.email, newData.password)
      
//       if (response.success) {
//         toast.success("Successfully registered", {
//           description: response.message[0]
//         })
//         router.replace("/auth/login")
//       } else {
//         toast.error("Registration failed", {
//           description: response.message[0]
//         })
//       }
//     } catch (error: any) {
//       console.error("Error in signup of user", error)
//       let errorMessage = "An unexpected error occurred"
      
//       if (error.response?.data?.message) {
//         errorMessage = Array.isArray(error.response.data.message) 
//           ? error.response.data.message[0] 
//           : error.response.data.message
//       } else if (error.message) {
//         errorMessage = error.message
//       }
      
//       toast.error("Sign up failed", {
//         description: errorMessage
//       })
//     }
//   }
  
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/bg.jpg')" }}>
//       <div className="w-full max-w-md p-8 space-y-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
//         <div className="text-center">
//           <div className="flex justify-center">
//             <img src="/nsslogo.jpeg" alt="Logo" className="h-25 w-25 rounded-full shadow-md" />
//           </div>
//           <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
//             Join NSS Food Connect
//           </h1>
//         </div>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input type="email" placeholder="atharva@gmail.com" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Name</FormLabel>
//                   <FormControl>
//                     <Input type="text" placeholder="Atharva Kuldhar" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="enrollmentNumber"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Enrollment Number</FormLabel>
//                   <FormControl>
//                     <Input type="text" placeholder="C2K... , I2K..., E2K..." {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="year"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Year of study</FormLabel>
//                   <Select onValueChange={field.onChange} defaultValue={field.value}>
//                     <FormControl>
//                       <SelectTrigger className="w-full">
//                         <SelectValue placeholder="Select year of study" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="First Year">First Year</SelectItem>
//                       <SelectItem value="Second Year">Second Year</SelectItem>
//                       <SelectItem value="Third Year">Third Year</SelectItem>
//                       <SelectItem value="Fourth Year">Fourth Year</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input type="password" placeholder="Password" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <div className="flex justify-center">
//               <Button type="submit" className="px-8">Register</Button>
//             </div>
//           </form>
//         </Form>
//         <div className="text-center mt-4">
//           <p>
//             Already a volunteer? {' '}
//             <Link href="/auth/login" className="text-blue-600 hover:text-blue-800">
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignUp

// design changes ----------------------------------------------------------------------------

'use client'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import signUpSchema from "@/schemas/signUpSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { authAPI } from "@/lib/api"

const SignUp = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      name: "",
      enrollmentNumber: "",
      password: "",
      year: "First Year"
    }
  })

  // All your existing logic is preserved
  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    const mapping: Record<string, number> = {
      "First Year": 1,
      "Second Year": 2,
      "Third Year": 3,
      "Fourth Year": 4
    }
    try {
      const newData = { 
        name: data.name,
        email: data.email,
        password: data.password,
        enrollmentNumber: data.enrollmentNumber,
        year: mapping[data.year]
      }
      console.log("New Data:", newData)
      const response = await authAPI.register(newData.name, newData.email, newData.password, newData.enrollmentNumber, newData.year)
      
      if (response.success) {
        toast.success("Successfully registered", {
          description: response.message[0]
        })
        router.replace("/auth/login")
      } else {
        toast.error("Registration failed", {
          description: response.message[0]
        })
      }
    } catch (error: any) {
      console.error("Error in signup of user", error)
      let errorMessage = "An unexpected error occurred"
      
      if (error.response?.data?.message) {
        errorMessage = Array.isArray(error.response.data.message) 
          ? error.response.data.message[0] 
          : error.response.data.message
      } else if (error.message) {
        errorMessage = error.message
      }
      
      toast.error("Sign up failed", {
        description: errorMessage
      })
    }
  }
  
  // START OF VISUAL REDESIGN
  return (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-t from-[#2C3E50]/90 to-white px-4">
      <div className="w-full max-w-4xl mx-auto flex rounded-2xl shadow-lg overflow-hidden bg-white ">
        
        {/* Left Panel: Image and Tagline */}
        <div 
          className="w-1/2 bg-cover bg-center hidden md:block bg-[url('/pict.jpg')]"
        >
          <div className="p-12 text-white bg-opacity-100 h-full flex flex-col justify-end">
            <h2 className="text-4xl font-bold leading-tight">Join a Cause,</h2>
            <p className="text-xl mt-2">Make an Impact.</p>
          </div>
        </div>

        {/* Right Panel: Registration Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          
          <div className="text-center mb-8">
            <img src="/nsslogo.jpeg" alt="Logo" className="h-20 w-20 mx-auto rounded-full shadow-md mb-4" />
            <h1 className="text-3xl font-bold text-[#333333]">
              Create an Account
            </h1>
            <p className="text-gray-500 mt-2">Become a part of our volunteer network.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#333333]">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} className="bg-[#FDFDFD] border-[#EAEAEA]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#333333]">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} className="bg-[#FDFDFD] border-[#EAEAEA]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="enrollmentNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#333333]">Enrollment Number</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., C2K22..." {...field} className="bg-[#FDFDFD] border-[#EAEAEA]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#333333]">Year of Study</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-[#FDFDFD] border-[#EAEAEA]">
                          <SelectValue placeholder="Select your year of study" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="First Year">First Year</SelectItem>
                        <SelectItem value="Second Year">Second Year</SelectItem>
                        <SelectItem value="Third Year">Third Year</SelectItem>
                        <SelectItem value="Fourth Year">Fourth Year</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#333333]">Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} className="bg-[#FDFDFD] border-[#EAEAEA]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full text-white font-bold bg-[#000000] hover:bg-[#024B05] py-6 text-md mt-4 !important">
                Register
              </Button>
            </form>
          </Form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Already a volunteer?{' '}
              <Link href="/auth/login" className="font-semibold text-[#000000] hover:text-[#024B05]">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  // END OF VISUAL REDESIGN
}

export default SignUp