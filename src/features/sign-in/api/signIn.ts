import type { AuthCredentials, AuthResponse } from '@entities/user'
import { apiClient } from '@shared/api'

export async function signInRequest(
  credentials: AuthCredentials,
): Promise<AuthResponse> {
  return apiClient<AuthResponse>('/auth/sign-in', {
    method: 'POST',
    body: JSON.stringify(credentials),
  })
}
