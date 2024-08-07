import React, { useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MovieCard.module.scss'
import { MovieSchema, useGetfavoritesMovie } from 'entities/Movie'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import CrossIcon from 'shared/assets/icons/cross_icon.svg'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { deleteFavoriteMovieById } from 'features/profile'

interface MovieListItemProps {
  movie: MovieSchema
  className?: string
  showTopRating?: boolean
  deleteFavoritesFn?: boolean
  index?: number
}

export const MovieListItem = ({ className, movie, showTopRating, index, deleteFavoritesFn }: MovieListItemProps) => {

  const dispatch = useAppDispatch()

  const { favoritesMovieRefetch } = useGetfavoritesMovie()

  const handleDelete = useCallback(async () => {
      await dispatch(deleteFavoriteMovieById(String(movie.id)))
      favoritesMovieRefetch
  }, [dispatch, movie, favoritesMovieRefetch])

  return (
    <div className={classNames(cls.Movie, {}, [className])}>
      {deleteFavoritesFn && <button className={cls.crossIcon} onClick={handleDelete}><CrossIcon /></button>}
      {showTopRating && <span className={cls.positionTop}>{index! + 1}</span>}
       <AppLink to={`/movie/${movie?.id}`}>
          <img src={`${movie?.posterUrl}`} alt={`${movie?.title}`} />
       </AppLink>
    </div>
  )
}