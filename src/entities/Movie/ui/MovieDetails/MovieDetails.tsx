import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MovieDetails.module.scss'
import { MovieSchema } from 'entities/Movie'

interface MovieDetailsProps {
  className?: string
  movie: MovieSchema
}

export const MovieDetails = ({ className, movie }: MovieDetailsProps) => {
  return (
    <div className={classNames(cls.details, {}, [className])}>
          <h2>О фильме</h2>
          <div><span>Язык оригинала</span><span>{movie.language}</span></div>
          <div><span>Бюджет</span><span>{movie.budget}</span></div>
          <div><span>Выручка</span><span>{movie.revenue}</span></div>
          <div><span>Режиссёр</span><span>{movie.director}</span></div>
          <div><span>Продакшен</span><span>{movie.production}</span></div>
          <div><span>Награды</span><span>{movie.awardsSummary}</span></div>
    </div>
  )
}