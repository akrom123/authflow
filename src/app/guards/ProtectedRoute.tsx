import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@app/providers'

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />
  }

  return <Outlet />
}
