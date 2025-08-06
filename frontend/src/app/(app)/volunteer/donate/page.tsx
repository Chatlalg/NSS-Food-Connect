// 'use client'
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
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
// import { Textarea } from "@/components/ui/textarea"
// import { donationSchema, type DonationFormData } from "@/schemas/donationSchema"
// import { volunteerAPI } from "@/lib/api"
// import { toast } from "sonner"
// import { useRouter } from "next/navigation"

// const Donate = () => {
//   const router = useRouter()
  
//   const form = useForm<DonationFormData>({
//     resolver: zodResolver(donationSchema),
//     defaultValues: {
//       messname: "",
//       foodtype: undefined,
//       category: undefined,
//       bestbefore: "",
//       description: "",
//       quantity: "",
//       imgurl: ""
//     }
//   })

//   const onSubmit = async (data: DonationFormData) => {
//     try {
//       const donationData = {
//         ...data,
//         donationdate: new Date().toISOString(),
//         description: data.description || ""
//       }

//       const response = await volunteerAPI.donate(donationData)
      
//       if (response.success) {
//         toast.success("Donation submitted successfully!", {
//           description: response.message[0]
//         })
        
//         // Reset form
//         form.reset()
        
//         // Optionally redirect to activities page
//         setTimeout(() => {
//           router.push("/volunteer/activities")
//         }, 2000)
//       } else {
//         toast.error("Failed to submit donation", {
//           description: response.message[0]
//         })
//       }
//     } catch (error: any) {
//       console.error("Error submitting donation:", error)
//       let errorMessage = "An unexpected error occurred"
      
//       if (error.response?.data?.message) {
//         errorMessage = Array.isArray(error.response.data.message) 
//           ? error.response.data.message[0] 
//           : error.response.data.message
//       } else if (error.message) {
//         errorMessage = error.message
//       }
      
//       toast.error("Failed to submit donation", {
//         description: errorMessage
//       })
//     }
//   }

//   return (
//     <div className="w-full h-full max-w-2xl mx-auto p-6">
//       <div className="w-full mb-6">
//         <h1 className="text-center text-3xl font-bold mb-2">Donate Food</h1>
//         <p className="text-center text-gray-600">Help reduce food waste by donating excess food</p>
//       </div>
      
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           <FormField
//             control={form.control}
//             name="messname"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Mess Name</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter mess name" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
          
//           <FormField
//             control={form.control}
//             name="foodtype"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Food Type</FormLabel>
//                 <Select onValueChange={field.onChange} defaultValue={field.value}>
//                   <FormControl>
//                     <SelectTrigger className="w-full">
//                       <SelectValue placeholder="Select food type" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="Veg">Vegetarian</SelectItem>
//                     <SelectItem value="Non Veg">Non-Vegetarian</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
          
//           <FormField
//             control={form.control}
//             name="category"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Food Category</FormLabel>
//                 <Select onValueChange={field.onChange} defaultValue={field.value}>
//                   <FormControl>
//                     <SelectTrigger className="w-full">
//                       <SelectValue placeholder="Select category" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="Dry Vegetable">Dry Vegetable</SelectItem>
//                     <SelectItem value="Gravy Vegetable">Gravy Vegetable</SelectItem>
//                     <SelectItem value="Rice">Rice</SelectItem>
//                     <SelectItem value="Chapati">Chapati</SelectItem>
//                     <SelectItem value="Snacks">Snacks</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
          
//           <FormField
//             control={form.control}
//             name="quantity"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Quantity</FormLabel>
//                 <FormControl>
//                   <Input placeholder="e.g., 10 plates, 5 kg, 20 pieces" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
          
//           <FormField
//             control={form.control}
//             name="bestbefore"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Use Before</FormLabel>
//                 <FormControl>
//                   <Input 
//                     type="datetime-local" 
//                     placeholder="Use before date and time" 
//                     {...field} 
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
          
//           <FormField
//             control={form.control}
//             name="description"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Additional Information</FormLabel>
//                 <FormControl>
//                   <Textarea 
//                     placeholder="Any additional details about the food (optional)" 
//                     className="resize-none"
//                     {...field} 
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
          
//           <FormField
//             control={form.control}
//             name="imgurl"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Image URL (Optional)</FormLabel>
//                 <FormControl>
//                   <Input 
//                     type="url" 
//                     placeholder="https://example.com/food-image.jpg" 
//                     {...field} 
//                   />
//                 </FormControl>
//                 <FormDescription>
//                   Provide a URL to an image of the food if available
//                 </FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
          
//           <div className="flex justify-center pt-4">
//             <Button type="submit" className="px-8">
//               Submit Donation
//             </Button>
//           </div>
//         </form>
//       </Form>
//     </div>
//   )
// }

// export default Donate

// design changes ------------------------------------------------------------------------------------

'use client'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { donationSchema, type DonationFormData } from "@/schemas/donationSchema"
import { volunteerAPI } from "@/lib/api"
import { toast } from "sonner"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"
import { adminItems, volunteerItems, type SidebarItem } from "@/lib/sidebar"
import { LogOut, UserCircle } from "lucide-react"

const Donate = () => {
  // Hooks for various functionalities
  const router = useRouter()
  const pathname = usePathname()
  const { user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Logic for the donation form
  const form = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      messname: "",
      foodtype: undefined,
      category: undefined,
      bestbefore: "",
      description: "",
      quantity: "",
      imgurl: ""
    }
  })

  const onFormSubmit = async (data: DonationFormData) => {
    try {
      const donationData = {
        ...data,
        donationdate: new Date().toISOString(),
        description: data.description || ""
      }
      const response = await volunteerAPI.donate(donationData)
      if (response.success) {
        toast.success("Donation submitted successfully!")
        form.reset()
        setTimeout(() => router.push("/volunteer/activities"), 2000)
      } else {
        toast.error("Failed to submit donation", { description: response.message[0] })
      }
    } catch (error: any) {
      toast.error("Failed to submit donation", { description: "An unexpected error occurred." })
    }
  }

  // Logic for the sidebar navigation
  const items: SidebarItem[] = user?.userType === 0 ? adminItems : volunteerItems;

  const handleMenuClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  const handleLogout = async () => {
    try {
      logout()
      router.push('/auth/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen relative">
      
      {/* --- FLOATING HAMBURGER MENU BUTTON (Now conditionally rendered) --- */}
      { !isMenuOpen && (
        <button 
          onClick={() => setIsMenuOpen(true)} 
          className="fixed top-6 left-6 z-50 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md text-gray-700 hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-black animate-in fade-in duration-300"
          aria-label="Open menu"
        >
          <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      )}


      {/* --- BACKGROUND OVERLAY --- */}
      {isMenuOpen && (
        <div 
          onClick={() => setIsMenuOpen(false)} 
          className="fixed inset-0 bg-black/40 z-30 transition-opacity duration-300"
          aria-hidden="true"
        ></div>
      )}

      {/* --- LEFT SLIDING SIDEBAR --- */}
      <aside 
        className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-[#333333]">Navigation</h2>
            <button onClick={() => setIsMenuOpen(false)} className="p-1 rounded-full hover:bg-gray-100" aria-label="Close menu">
                <svg className="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        
        <div className="flex flex-col h-[calc(100vh-77px)]">
            <div className="p-6 text-center border-b border-gray-200">
                <UserCircle className="h-16 w-16 text-gray-400 mx-auto" />
                <h3 className="text-lg font-semibold text-[#333333] mt-2">{user?.name || "User"}</h3>
                {user?.userType === 1 ? (
                    <p className="text-sm text-gray-500 mt-1">Total Credits: {user.credits}</p>
                ) : (
                    <p className="text-sm text-gray-500 mt-1">Administrator</p>
                )}
            </div>

            <nav className="flex-grow p-4 space-y-2">
                {items.map((item) => {
                    const isActive = pathname === item.url;
                    return (
                        <Link
                            key={item.title}
                            href={item.url}
                            onClick={handleMenuClick}
                            className={`flex items-center w-full p-3 rounded-lg text-md font-medium transition-colors ${
                                isActive 
                                ? 'bg-black text-white shadow-sm' 
                                : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                            }`}
                        >
                            <item.icon className="h-5 w-5 mr-4" /> 
                            {item.title}
                        </Link>
                    )
                })}
            </nav>
            
            <div className="p-4 mt-auto border-t border-gray-200">
                <Button 
                    onClick={handleLogout} 
                    variant="ghost" 
                    className="w-full justify-start text-md font-medium text-red-500 hover:text-red-500 hover:bg-red-50 p-3 h-auto"
                >
                    <LogOut className="h-5 w-5 mr-4" />
                    Logout
                </Button>
            </div>
        </div>
      </aside>
      
      {/* --- MAIN CONTENT (Donation Form) --- */}
      <main className="pt-10 pb-10">
        <div className="w-full max-w-3xl mx-auto p-8 md:p-10 bg-white rounded-2xl shadow-lg mt-16">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-[#333333]">Make a Donation</h1>
            <p className="text-gray-500 mt-2">Fill out the details below to list your available food.</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                <div className="md:col-span-2">
                  <FormField control={form.control} name="messname" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#333333]">Mess/Restaurant Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter mess name" {...field} className="bg-white border-[#EAEAEA]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                </div>
                
                <FormField control={form.control} name="foodtype" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#333333]">Food Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white border-[#EAEAEA]"><SelectValue placeholder="Select food type" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Veg">Vegetarian</SelectItem>
                        <SelectItem value="Non Veg">Non-Vegetarian</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}/>

                <FormField control={form.control} name="category" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#333333]">Food Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white border-[#EAEAEA]"><SelectValue placeholder="Select category" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Dry Vegetable">Dry Vegetable</SelectItem>
                        <SelectItem value="Gravy Vegetable">Gravy Vegetable</SelectItem>
                        <SelectItem value="Rice">Rice</SelectItem>
                        <SelectItem value="Chapati">Chapati</SelectItem>
                        <SelectItem value="Snacks">Snacks</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}/>
                
                <FormField control={form.control} name="quantity" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#333333]">Quantity</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 10 plates, 5 kg" {...field} className="bg-white border-[#EAEAEA]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>
                
                <FormField control={form.control} name="bestbefore" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#333333]">Use Before</FormLabel>
                    <FormControl>
                      <Input type="datetime-local" {...field} className="bg-white border-[#EAEAEA]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>
                
                <div className="md:col-span-2">
                  <FormField control={form.control} name="description" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#333333]">Additional Information</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Any details like spice level, allergens, etc. (optional)" className="resize-none bg-white border-[#EAEAEA]" {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                </div>
                
                <div className="md:col-span-2">
                  <FormField control={form.control} name="imgurl" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#333333]">Image URL (Optional)</FormLabel>
                      <FormControl>
                        <Input type="url" placeholder="https://example.com/food-image.jpg" {...field} className="bg-white border-[#EAEAEA]"/>
                      </FormControl>
                      <FormDescription className="text-xs text-gray-400">Provide a direct link to an image of the food.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}/>
                </div>
              </div>
              
              <div className="flex justify-center pt-4">
                <Button type="submit" className="w-full md:w-auto text-white font-bold bg-[#000000] hover:bg-[#024B05] py-3 px-8 rounded-lg text-md">
                  Submit Donation
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  )
}

export default Donate