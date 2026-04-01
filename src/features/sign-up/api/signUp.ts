import type { SignUpData, AuthResponse } from '@entities/user'
import { apiClient } from '@shared/api'

export async function signUpRequest(
  data: SignUpData,
): Promise<AuthResponse> {
  return apiClient<AuthResponse>('/auth/sign-up', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
