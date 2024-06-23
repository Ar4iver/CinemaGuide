import React, { useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MovieList.module.scss'
import { MovieListItem } from '../MovieListItem/MovieListItem'
import { MovieSchema } from 'entities/Movie/model/types/MovieSchema'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { getFavoritesMovie } from 'features/profile/model/services/getFavoritesMovies/getFavoritesMovies'
import { useSelector } from 'react-redux'
import { isMovieInFavorites } from 'features/profile/model/selectors/getFavoriteMovies/getFavoriteMovies'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { useGetfavoritesMovie } from 'entities/Movie/model/api/useGetFavoritesMovie'
import { fetchProfile } from 'features/profile/model/services/fetchProfile/fetchProfile'

interface MovieListProps {
  className?: string
  data: MovieSchema[]
  showTopRating: boolean
  deleteFavoritesFn: boolean
}

export const MovieList = ({ className, data, showTopRating = false, deleteFavoritesFn = false }: MovieListProps) => {

  return (
    <div className={classNames(cls.MovieList, {}, [className])}>
        {data.map((movie: MovieSchema, index: number) => (
          <MovieListItem movie={movie} showTopRating={showTopRating} deleteFavoritesFn={deleteFavoritesFn} index={index} key={index}  />
        )) }
    </div>
  )
}