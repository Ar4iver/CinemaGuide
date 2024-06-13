export interface ProfileSchemas {
  favorites: string[]
  surname: string,
  name: string,
  email: string
}

export interface ProfileDetails {
  data?: ProfileSchemas
  isLoading: boolean,
  error?: string,
}