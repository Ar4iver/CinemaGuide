export interface RegisterSchema {
  email: string,
  password: string,
  name: string,
  surname: string
  isLoading: boolean
  error?: string
}