import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MoviesPageByGenre.module.scss'
import Arrow from 'shared/assets/icons/arrow_genre.svg'
import { Layout } from 'shared/ui/Layout/Layout'
import { Container } from 'shared/ui/Container/ui/Container'
import { MovieList } from 'entities/Movie/ui/MovieList/MovieList'
import { useLocation } from 'react-router-dom'
import { useGetMoviesByGenre } from 'entities/Movie/model/api/useGetMovieByGenre'
import { AppLink } from 'shared/ui/AppLink/AppLink'

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

  const genreH2 = genre!.charAt(0).toUpperCase() + genre!.slice(1)

  return (
    <Layout>
      <Container>
        <AppLink className={cls.redirectFromGenres} to={`/genres`}>
        <div className={cls.breadCrumbs}><span className={cls.arrowIcon}><Arrow /></span><span>{genreH2}</span></div>
        </AppLink>
        {movieByGenreIsSuccess && <MovieList data={moviesByGenre}  /> }
      </Container>
    </Layout>
  )
}

export default MoviesPageByGenre