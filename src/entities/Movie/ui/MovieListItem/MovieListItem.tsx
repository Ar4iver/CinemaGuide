import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Movie.module.scss'
import { MovieSchema } from 'entities/Movie'
import { AppLink } from 'shared/ui/AppLink/AppLink'

interface MovieListItemProps {
  movie: MovieSchema
  className?: string
  showTopRating?: boolean
  index?: number
}

export const MovieListItem = ({ className, movie, showTopRating, index }: MovieListItemProps) => {
  return (
    <div className={classNames(cls.Movie, {}, [className])}>
      {showTopRating && <span className={cls.positionTop}>{index! + 1}</span>}
       <AppLink to={`/movie/${movie?.id}`}>
          <img src={`${movie?.posterUrl}`} alt={`${movie?.title}`} />
       </AppLink>
    </div>
  )
}