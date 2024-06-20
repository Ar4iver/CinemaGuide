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
          <ul>
            <li className={cls.param}>
              <span className={cls.param__value}>{movie.language ? movie.language : `Н/Д`}</span>
              <span className={cls.param__prop}>Язык оригинала</span>
            </li>
            <li className={cls.param}>
              <span className={cls.param__value}>{movie.budget ? movie.budget : `Н/Д` }</span>
              <span className={cls.param__prop}>Бюджет</span>
            </li>
            <li className={cls.param}>
              <span className={cls.param__value}>{movie.revenue ? movie.budget : `Н/Д`}</span>
              <span className={cls.param__prop}>Выручка</span>
            </li>
            <li className={cls.param}>
              <span className={cls.param__value}>{movie.director ? movie.director : `Н/Д`}</span>
              <span className={cls.param__prop}>Режиссёр</span>
            </li>
            <li className={cls.param}>
              <span className={cls.param__value}>{movie.production ? movie.production : `Н/Д`}</span>
              <span className={cls.param__prop}>Продакшен</span>
            </li>
            <li className={cls.param}>
              <span className={cls.param__value}>{movie.awardsSummary ? movie.awardsSummary : `Н/Д`}</span>
              <span className={cls.param__prop}>Награды</span>
            </li>
          </ul>
          {/* <div><span>Язык оригинала</span><span>{movie.language}</span></div>
          <div><span>Бюджет</span><span>{movie.budget}</span></div>
          <div><span>Выручка</span><span>{movie.revenue}</span></div>
          <div><span>Режиссёр</span><span>{movie.director}</span></div>
          <div><span>Продакшен</span><span>{movie.production}</span></div>
          <div><span>Награды</span><span>{movie.awardsSummary}</span></div> */}
    </div>
  )
}