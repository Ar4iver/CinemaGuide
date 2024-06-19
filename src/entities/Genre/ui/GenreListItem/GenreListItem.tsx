import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './GenreListItem.module.scss'

interface GenreListItemProps {
  className?: string
  genre: string
}

export const GenreListItem = ({ className, genre }: GenreListItemProps) => {
  return (
    <div className={classNames(cls.GenreListItem, {}, [className])}>
      {genre}
    </div>
  )
}