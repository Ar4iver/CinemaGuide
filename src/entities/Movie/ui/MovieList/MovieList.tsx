import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MovieList.module.scss'
import { MovieListItem } from '../MovieListItem/MovieListItem'
import { useGetMovieTop10 } from 'shared/hooks/useGetMovieTop10'
import { MovieSchema } from 'entities/Movie/model/types/MovieSchema'

interface MovieListProps {
  className?: string
}

export const MovieList = ({ className }: MovieListProps) => {

  
 const { data, isError, isLoading, isSuccess } = useGetMovieTop10()

 console.log(data)

  return (
    <div className={classNames(cls.MovieList, {}, [className])}>
        { isSuccess && data.map((movie: MovieSchema, index: number) => (
          <MovieListItem movie={movie} showTopRating={true} index={index} key={index}  />
        )) }
    </div>
  )
}