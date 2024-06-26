import { z } from "zod"




export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Too Short' }).max(50),
    username: z.string().min(2, { message: 'Too Short' }).max(50),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must at least be 8 characters' }), 
})


export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: 'Password must at least be 8 characters' }), 
})