import { MovieSchema } from "entities/Movie";

export interface SearchSchema {
  result: MovieSchema[]
}

export interface SearchDetailsSchema {
  isLoading: boolean,
  error?: string,
  data?: SearchSchema,
}