import { MovieSchema } from "entities/Movie";

export interface ProfileSchemas {
  favorites: string[]
  surname: string,
  name: string,
  email: string
}

export interface ProfileDetails {
  isAuth: boolean
  data?: ProfileSchemas
  isLoading: boolean,
  error?: string,
}