import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Movie.module.scss'

interface MovieProps {
  className?: string
}

export const Movie = ({ className }: MovieProps) => {
  return (
    <div className={classNames(cls.Movie, {}, [className])}></div>
  )
}