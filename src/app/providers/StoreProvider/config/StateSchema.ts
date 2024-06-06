import { MovieSchema } from "entities/Movie";
import { MovieDetailsSchema } from "entities/Movie/model/types/MovieDetailsSchema";

export interface StateSchema {
  movie: MovieDetailsSchema
}