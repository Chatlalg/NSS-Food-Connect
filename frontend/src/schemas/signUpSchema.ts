import z from "zod";

const signUpSchema = z.object({
    name: z.string(),
    email: z.string().email("Invalid email address"),
    year: z.enum(["First Year", "Second Year", "Third Year", "Fourth Year"]),
    password: z.string()
        .min(8, "Password cannot be fewer than 8 characters")
        .refine((val) => /[A-Z]/.test(val), {
            message: "Password must contain at least one uppercase letter"
        })
        .refine((val) => /[a-z]/.test(val), {
            message: "Password must contain at least one lowercase letter"
        })
        .refine((val) => /[0-9]/.test(val), {
            message: "Password must contain at least one number"
        })
        .refine((val) => /[!@#$%^&*]/.test(val), {
            message: "Password must contain at least one special character"
        }),
    enrollmentNumber: z.string(),
})

export default signUpSchema