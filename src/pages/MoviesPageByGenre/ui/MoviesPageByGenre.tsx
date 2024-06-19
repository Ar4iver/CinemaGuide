import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MoviesPageByGenre.module.scss'
import { Layout } from 'shared/ui/Layout/Layout'
import { Container } from 'shared/ui/Container/ui/Container'
import { MovieList } from 'entities/Movie/ui/MovieList/MovieList'
import { useGetGenres } from 'entities/Genre'
import { useLocation } from 'react-router-dom'
import { useGetMoviesByGenre } from 'entities/Movie/model/api/useGetMovieByGenre'

interface MoviesPageByGenreProps {
  className?: string
}

const MoviesPageByGenre = ({ className }: MoviesPageByGenreProps) => {

  const useGenreFromPath = (): string | null => {
    const location = useLocation();
    const path = location.pathname;
    
    if (path.startsWith('/genres/')) {
      const genre = path.split('/genres/')[1];
      return genre;
    }
    
    return null;
  };

  const genre = useGenreFromPath()

  const { moviesByGenre, movieByGenreIsSuccess } = useGetMoviesByGenre(genre!)

  return (
    <Layout>
      <Container>
        Страница Фильмов отфильтрованных по жанру: {genre}
        {movieByGenreIsSuccess && <MovieList data={moviesByGenre}  /> }
      </Container>
    </Layout>
  )
}

export default MoviesPageByGenre