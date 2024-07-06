import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MovieList.module.scss'
import { MovieListItem } from '../MovieListItem/MovieListItem'
import { MovieSchema } from 'entities/Movie/model/types/MovieSchema'
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