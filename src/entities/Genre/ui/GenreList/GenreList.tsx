import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './GenreList.module.scss'
import { GenreListItem } from '../GenreListItem/GenreListItem'
import { AppLink } from 'shared/ui/AppLink/AppLink'

interface GenreListProps {
  className?: string
  genres: string[]
}

export const GenreList = ({ className, genres }: GenreListProps) => {

  console.log(genres)

  return (
    <div className={classNames(cls.GenreList, {}, [className])}>
      {genres.map((genre: string) => (
        <AppLink to={`${genre}`}>
          <GenreListItem genre={genre} />
        </AppLink>
      ))}
    </div>
  )
}