import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema, type SignUpSchema } from '@shared/lib'

interface UseSignUpFormReturn {
  register: ReturnType<typeof useForm<SignUpSchema>>['register']
  errors: ReturnType<typeof useForm<SignUpSchema>>['formState']['errors']
  isSubmitting: boolean
  showPassword: boolean
  showConfirmPassword: boolean
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
  togglePassword: () => void
  toggleConfirmPassword: () => void
}

export function useSignUpForm(
  handleSubmit: (values: SignUpSchema) => Promise<void> | void,
): UseSignUpFormReturn {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    register,
    handleSubmit: rhfHandleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = useCallback(
    rhfHandleSubmit(async (values) => {
      await handleSubmit(values)
    }),
    [rhfHandleSubmit, handleSubmit],
  )

  const togglePassword = useCallback(() => setShowPassword((p) => !p), [])
  const toggleConfirmPassword = useCallback(
    () => setShowConfirmPassword((p) => !p),
    [],
  )

  return {
    register,
    errors,
    isSubmitting,
    showPassword,
    showConfirmPassword,
    onSubmit,
    togglePassword,
    toggleConfirmPassword,
  }
}
