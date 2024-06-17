import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './TopListMovie.module.scss'

interface TopListMovieProps {
  className?: string
}

export const TopListMovie = ({ className }: TopListMovieProps) => {
  return (
    <div className={classNames(cls.TopListMovie, {}, [className])}></div>
  )
}