import { z } from 'zod'

const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .email('Invalid email format')

const passwordSchema = z
  .string()
  .min(1, 'Password is required')
  .min(8, 'Minimum 8 characters')
  .regex(/[A-Z]/, 'At least one uppercase letter')
  .regex(/[0-9]/, 'At least one number')

export const signInSchema = z.object({
  email: emailSchema,
  password: z.string(),
})

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Name is required')
      .min(2, 'At least 2 characters'),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type SignInSchema = z.infer<typeof signInSchema>
export type SignUpSchema = z.infer<typeof signUpSchema>
