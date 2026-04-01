import { Button, Input, IconButton } from '@shared/ui'
import { useSignInForm } from '../model/useSignInForm'
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from '@shared/ui/Icons';

interface SignInFormProps {
  onToggleMode: () => void
  onSubmit: (values: { email: string; password: string }) => Promise<void> | void
}

export function SignInForm({ onToggleMode, onSubmit }: SignInFormProps) {
  const { register, errors, isSubmitting, showPassword, onSubmit: handleFormSubmit, togglePassword } =
    useSignInForm(onSubmit)

  return (
    <div>
      <h2 className="mb-1 text-center text-2xl font-semibold text-white">Welcome back</h2>
      <p className="mb-7 text-center text-sm text-text-muted">Sign in to your account</p>

      <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
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
          placeholder="Enter your password"
          icon={<LockIcon />}
          error={errors.password?.message}
          autoComplete="current-password"
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

        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>

      <p className="mt-6 text-center text-[13px] text-text-muted">
        <button
          type="button"
          onClick={onToggleMode}
          className="cursor-pointer border-none bg-transparent font-semibold text-brand-400 transition-colors duration-200 hover:text-brand-300 focus-visible:outline-2 focus-visible:outline-brand-500 focus-visible:outline-offset-2"
        >
          Create account
        </button>
      </p>
    </div>
  )
}
