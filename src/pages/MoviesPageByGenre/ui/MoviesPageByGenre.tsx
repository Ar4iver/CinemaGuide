import React, { useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MoviesPageByGenre.module.scss'
import Arrow from 'shared/assets/icons/arrow_genre.svg'
import Loader from 'shared/assets/icons/loader.svg'
import { Layout } from 'shared/ui/Layout/Layout'
import { Container } from 'shared/ui/Container/ui/Container'
import { MovieList } from 'entities/Movie/ui/MovieList/MovieList'
import { useLocation } from 'react-router-dom'
import { useGetMoviesByGenre } from 'entities/Movie/model/api/useGetMovieByGenre'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { useSelector } from 'react-redux'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { moviesActions } from 'entities/Movie/model/slice/movieSlice'

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

  const dispatch = useAppDispatch();
  const movies = useSelector((state: StateSchema) => state.movies.data);
  const { isSuccess, refetch, isFetching, data } = useGetMoviesByGenre(genre!);

  const genreH2 = genre!.charAt(0).toUpperCase() + genre!.slice(1)

  const handleShowMore = () => {
    dispatch(moviesActions.incrementPage());
    refetch()
  };

  useEffect(() => {
    return () => {
      dispatch(moviesActions.resetMovies())
    }
  }, [])

  return (
    <Layout>
      <Container className={cls.Container}>
        <AppLink className={cls.redirectFromGenres} to={`/genres`}>
        <div className={cls.breadCrumbs}><span className={cls.arrowIcon}><Arrow /></span><span>{genreH2}</span></div>
        </AppLink>
        <div className={cls.movieList}>
        <div className={cls.movieList}>
          {isSuccess && <MovieList deleteFavoritesFn={false} showTopRating={false} data={movies} />}
        </div>
        </div>
        <Button disabled={isFetching} onClick={handleShowMore} className={cls.buttonMore}>{isFetching ? <span className={cls.loaderIcon}><Loader /></span> : `Показать ещё`}</Button>
      </Container>
    </Layout>
  )
}

export default MoviesPageByGenre