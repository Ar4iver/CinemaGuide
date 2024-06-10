import { MovieSchema } from "entities/Movie";
import { MovieDetailsSchema } from "entities/Movie/model/types/MovieDetailsSchema";
import { UserDetailsSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
  movie: MovieDetailsSchema
  user: UserDetailsSchema
  loginForm: LoginSchema
}