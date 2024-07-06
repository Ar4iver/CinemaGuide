import { MovieListItem } from "./ui/MovieListItem/MovieListItem";
import { MovieList } from './ui/MovieList/MovieList'
import { MovieDetails } from "./ui/MovieDetails/MovieDetails";
import { MovieSchema } from "./model/types/MovieSchema";
import { useGetMovieById } from './model/api/useGetMovieById'
import { useGetMovieTop10 } from './model/api/useGetMovieTop10'
import { useGetRandomMovie } from './model/api/useGetRandomMovie'
import { useSearchMovies } from './model/api/useSearchMovies'
import { useGetfavoritesMovie } from './model/api/useGetFavoritesMovie'
import { moviesActions } from './model/slice/movieSlice'
import { useGetMoviesByGenre } from './model/api/useGetMovieByGenre'
import { MovieListSkeleton } from './ui/MovieList/MovieListSkeleton'

/** UI */
export { 
  MovieListItem,
  MovieList,
  MovieDetails,
  MovieListSkeleton
}

/** SCHEMAs */
export {
  MovieSchema
}

/**slice */
export { moviesActions }

/** HOOKs */
export {
  useGetMovieById, useGetMovieTop10, useSearchMovies, useGetRandomMovie, useGetfavoritesMovie, useGetMoviesByGenre
}

