'use client'
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
import { useRouter } from "next/navigation"

const Donate = () => {
  const router = useRouter()
  
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

  const onSubmit = async (data: DonationFormData) => {
    try {
      const donationData = {
        ...data,
        donationdate: new Date().toISOString(),
        description: data.description || ""
      }

      const response = await volunteerAPI.donate(donationData)
      
      if (response.success) {
        toast.success("Donation submitted successfully!", {
          description: response.message[0]
        })
        
        // Reset form
        form.reset()
        
        // Optionally redirect to activities page
        setTimeout(() => {
          router.push("/volunteer/activities")
        }, 2000)
      } else {
        toast.error("Failed to submit donation", {
          description: response.message[0]
        })
      }
    } catch (error: any) {
      console.error("Error submitting donation:", error)
      let errorMessage = "An unexpected error occurred"
      
      if (error.response?.data?.message) {
        errorMessage = Array.isArray(error.response.data.message) 
          ? error.response.data.message[0] 
          : error.response.data.message
      } else if (error.message) {
        errorMessage = error.message
      }
      
      toast.error("Failed to submit donation", {
        description: errorMessage
      })
    }
  }

  return (
    <div className="w-full h-full max-w-2xl mx-auto p-6">
      <div className="w-full mb-6">
        <h1 className="text-center text-3xl font-bold mb-2">Donate Food</h1>
        <p className="text-center text-gray-600">Help reduce food waste by donating excess food</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="messname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mess Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter mess name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="foodtype"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Food Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select food type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Veg">Vegetarian</SelectItem>
                    <SelectItem value="Non Veg">Non-Vegetarian</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Food Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
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
            )}
          />
          
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 10 plates, 5 kg, 20 pieces" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="bestbefore"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Use Before</FormLabel>
                <FormControl>
                  <Input 
                    type="datetime-local" 
                    placeholder="Use before date and time" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Any additional details about the food (optional)" 
                    className="resize-none"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="imgurl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL (Optional)</FormLabel>
                <FormControl>
                  <Input 
                    type="url" 
                    placeholder="https://example.com/food-image.jpg" 
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Provide a URL to an image of the food if available
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex justify-center pt-4">
            <Button type="submit" className="px-8">
              Submit Donation
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default Donate