import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema, type SignInSchema } from '@shared/lib'

interface UseSignInFormReturn {
  register: ReturnType<typeof useForm<SignInSchema>>['register']
  errors: ReturnType<typeof useForm<SignInSchema>>['formState']['errors']
  isSubmitting: boolean
  showPassword: boolean
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
  togglePassword: () => void
}

export function useSignInForm(
  handleSubmit: (values: SignInSchema) => Promise<void> | void,
): UseSignInFormReturn {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit: rhfHandleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = useCallback(
    rhfHandleSubmit(async (values) => {
      await handleSubmit(values)
    }),
    [rhfHandleSubmit, handleSubmit],
  )

  const togglePassword = useCallback(() => setShowPassword((p) => !p), [])

  return {
    register,
    errors,
    isSubmitting,
    showPassword,
    onSubmit,
    togglePassword,
  }
}
