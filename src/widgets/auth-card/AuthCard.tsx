import { useState, useCallback, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { cn } from '@shared/lib'
import { Card } from '@shared/ui'
import { useAuth } from '@app/providers'
import { SignInForm } from '@features/sign-in'
import { SignUpForm } from '@features/sign-up'
import type { User } from '@entities/user'

export function AuthCard() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const { login } = useAuth()

  const toggleMode = useCallback(() => {
    setIsSignUp((prev) => !prev)
  }, [])

  const handleFocusCapture = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlurCapture = useCallback(
    (e: React.FocusEvent) => {
      if (!containerRef.current?.contains(e.relatedTarget as Node)) {
        setIsFocused(false)
      }
    },
    [],
  )

  const handleAuthSuccess = useCallback(
    (user: User, token: string) => {
      login(user, token)
      setIsExiting(true)
      setTimeout(() => {
        navigate('/dashboard', { replace: true })
      }, 400)
    },
    [login, navigate],
  )

  const handleSignIn = useCallback(
    async (values: { email: string; password: string }) => {
      const user: User = {
        id: crypto.randomUUID(),
        email: values.email,
        name: values.email.split('@')[0],
        createdAt: new Date().toISOString(),
      }
      handleAuthSuccess(user, 'mock_token_' + Date.now())
    },
    [handleAuthSuccess],
  )

  const handleSignUp = useCallback(
    async (values: {
      name: string
      email: string
      password: string
      confirmPassword: string
    }) => {
      const user: User = {
        id: crypto.randomUUID(),
        email: values.email,
        name: values.name,
        createdAt: new Date().toISOString(),
      }
      handleAuthSuccess(user, 'mock_token_' + Date.now())
    },
    [handleAuthSuccess],
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      containerRef.current
        ?.querySelector<HTMLInputElement>('input[type="email"]')
        ?.focus()
    }, 650)
    return () => clearTimeout(timer)
  }, [isSignUp])

  return (
    <div
      ref={containerRef}
      className={cn(
        'perspective-1200 w-[420px] max-w-[90vw] transition-all duration-500 ease-out',
        isFocused && !isExiting && 'scale-[1.02]',
        isExiting && 'scale-90 opacity-0',
      )}
      role="region"
      aria-label="Authentication"
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
    >
      <div
        className={cn(
          'relative w-full',
          '[transform-style:preserve-3d]',
          isSignUp && 'rotate-y-180',
        )}
        style={{
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Card className="backface-hidden absolute w-full p-10 @max-[480px]:p-6">
          <SignInForm
            onToggleMode={toggleMode}
            onSubmit={handleSignIn}
          />
        </Card>

        <Card className="backface-hidden relative inset-0 w-full rotate-y-180 p-10 @max-[480px]:p-6">
          <SignUpForm
            onToggleMode={toggleMode}
            onSubmit={handleSignUp}
          />
        </Card>
      </div>
    </div>
  )
}
