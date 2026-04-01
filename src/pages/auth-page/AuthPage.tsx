import { AuthCard } from '@widgets/auth-card'
import { useAuth } from '@app/providers'
import { Navigate } from 'react-router-dom'

export function AuthPage() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="blob-1 absolute rounded-full opacity-60 blur-3xl animate-float-blob" />
      <div className="blob-2 absolute rounded-full opacity-60 blur-3xl animate-float-blob" />
      <div className="blob-3 absolute rounded-full opacity-60 blur-3xl animate-float-blob" />

      <div className="relative z-10 animate-flip-in">
        <AuthCard />
      </div>
    </div>
  )
}
