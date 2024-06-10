export interface User {
  name: string
  surname: string
  email: string
  favorites: string[]
}

export interface UserDetailsSchema {
  authData?: User
}

