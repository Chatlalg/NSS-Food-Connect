import * as z from "zod"

export const donationSchema = z.object({
  messname: z.string().min(1, "Mess name is required"),
  foodtype: z.enum(["Veg", "Non Veg"], {
    required_error: "Please select a food type",
  }),
  category: z.enum(["Dry Vegetable", "Gravy Vegetable", "Rice", "Chapati", "Snacks"], {
    required_error: "Please select a category",
  }),
  bestbefore: z.string().min(1, "Use before date is required"),
  description: z.string().optional(),
  quantity: z.string().min(1, "Quantity is required"),
  imgurl: z.string().optional(),
})

export type DonationFormData = z.infer<typeof donationSchema> 