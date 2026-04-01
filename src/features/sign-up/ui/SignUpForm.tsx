import { Button, Input, IconButton } from '@shared/ui'
import { useSignUpForm } from '../model/useSignUpForm'
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon, UserIcon } from '@shared/ui/Icons'

interface SignUpFormProps {
  onToggleMode: () => void
  onSubmit: (values: {
    name: string
    email: string
    password: string
    confirmPassword: string
  }) => Promise<void> | void
}

export function SignUpForm({ onToggleMode, onSubmit }: SignUpFormProps) {
  const {
    register,
    errors,
    isSubmitting,
    showPassword,
    showConfirmPassword,
    onSubmit: handleFormSubmit,
    togglePassword,
    toggleConfirmPassword,
  } = useSignUpForm(onSubmit)

  return (
    <div>
      <h2 className="mb-1 text-center text-2xl font-semibold text-white">Create account</h2>
      <p className="mb-7 text-center text-sm text-text-muted">Start your journey with us</p>

      <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
        <Input
          label="Full Name"
          type="text"
          placeholder="John Doe"
          icon={<UserIcon />}
          error={errors.name?.message}
          autoComplete="name"
          {...register('name')}
        />

        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          icon={<MailIcon />}
          error={errors.email?.message}
          autoComplete="email"
          {...register('email')}
        />

        <Input
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Create a password"
          icon={<LockIcon />}
          error={errors.password?.message}
          autoComplete="new-password"
          rightElement={
            <IconButton
              type="button"
              onClick={togglePassword}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </IconButton>
          }
          {...register('password')}
        />

        <Input
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Confirm your password"
          icon={<LockIcon />}
          error={errors.confirmPassword?.message}
          autoComplete="new-password"
          rightElement={
            <IconButton
              type="button"
              onClick={toggleConfirmPassword}
              aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
            >
              {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
            </IconButton>
          }
          {...register('confirmPassword')}
        />

        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? 'Creating account...' : 'Create Account'}
        </Button>
      </form>

      <p className="mt-6 text-center text-[13px] text-text-muted">
        <button
          type="button"
          onClick={onToggleMode}
          className="cursor-pointer border-none bg-transparent font-semibold text-brand-400 transition-colors duration-200 hover:text-brand-300 focus-visible:outline-2 focus-visible:outline-brand-500 focus-visible:outline-offset-2"
        >
          Sign in
        </button>
      </p>
    </div>
  )
}
