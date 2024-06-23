import { MovieListItem } from "./ui/MovieListItem/MovieListItem";
import { MovieSchema } from "./model/types/MovieSchema";
import { useGetMovieById } from './model/api/useGetMovieById'
import { useGetMovieTop10 } from './model/api/useGetMovieTop10'
import { useGetRandomMovie } from './model/api/useGetRandomMovie'
import { useSearchMovies } from './model/api/useSearchMovies'

/** UI */
export { 
  MovieListItem,
}

/** SCHEMAs */
export {
  MovieSchema
}

/** HOOKs */
export {
  useGetMovieById, useGetMovieTop10, useSearchMovies, useGetRandomMovie
}

