import { MovieSchema } from "./MovieSchema";

export interface MovieDetailsSchema {
  isLoading: boolean,
  error?: string,
  data?: MovieSchema,
}