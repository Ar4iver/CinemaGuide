import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getFavoritesMovieData = (state: StateSchema) => state.profile?.data?.favorites

export const isMovieInFavorites = createSelector(
  [getFavoritesMovieData, (state: StateSchema, movieId: string) => movieId],
  (favorites, movieId) => {
    return favorites?.some(movie => movie === movieId )
  }
)

// export const isMovieInFavorites = createSelector(
//   [getFavoritesMovieData, (state: StateSchema, movieId: number) => movieId],
//   (favoriteMovies, movieId) => {
//     return favoriteMovies.some(movie => movie.id === movieId);
//   }
// );