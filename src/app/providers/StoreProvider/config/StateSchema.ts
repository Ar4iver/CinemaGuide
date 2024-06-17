import { MovieSchema } from "entities/Movie";
import { MovieDetailsSchema } from "entities/Movie/model/types/MovieDetailsSchema";
import { UserDetailsSchema } from "entities/User";
import { LoginSchema } from "features/auth/forms/AuthByEmail";
import { RegisterSchema } from "features/auth/forms/AuthByEmail/model/types/registerSchema";
import { AuthSchema } from "features/auth/model/types/authSchemas";
import { ProfileDetails } from "features/profile/model/types/profileSchemas";
import { SearchSchema } from "features/search/model/types/SearchSchema";

export interface StateSchema {
  movie: MovieDetailsSchema
  user: UserDetailsSchema
  registerForm: RegisterSchema
  loginForm: LoginSchema
  auth: AuthSchema
  profile: ProfileDetails
  search: SearchSchema
}