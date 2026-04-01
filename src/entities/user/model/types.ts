export interface User {
  id: string
  email: string
  name: string
  createdAt: string
}

export interface AuthCredentials {
  email: string
  password: string
}

export interface SignUpData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface AuthResponse {
  user: User
  token: string
}

export type FormErrors<T extends Record<string, string>> = Partial<
  Record<keyof T, string>
>
