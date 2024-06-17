import React, { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Hero.module.scss'
import Favorites from 'shared/assets/icons/hearth.svg'
import FavoritesIconTrue from 'shared/assets/icons/FavoriteTrueIcon.svg'
import { MovieSchema } from 'entities/Movie'
import { formatMinutes } from 'shared/lib/helper/formatTime'
import Star from 'shared/assets/icons/star_rating.svg'
import Update from 'shared/assets/icons/update.svg'
import { Button } from 'shared/ui/Button/Button'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { truncateText } from 'shared/lib/helper/truncateText'
import { useLocation } from 'react-router-dom'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { addFavoritesMovie } from 'features/profile/model/services/addFavoritesMovie/addFavoritesMovie'
import { useSelector } from 'react-redux'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { isMovieInFavorites } from 'features/profile/model/selectors/getFavoriteMovies/getFavoriteMovies'
import { deleteFavoriteMovieById } from 'features/profile/model/services/deleteFavoriteMovieById/deleteFavoriteMovieById'

interface HeroProps {
  className?: string
  movie: MovieSchema
  refetch?: () => void
}

export const Hero = memo(({ className, movie, refetch }: HeroProps) => {

  if(!movie) {
    return null
  }

  const dispatch = useAppDispatch()

  const isFavorite = useSelector((state: StateSchema) => isMovieInFavorites(state, String(movie.id)));

  const location = useLocation();
  const path = location.pathname;

  const mods: Record<string, boolean> = {
    [cls.gold]: movie.tmdbRating >= 7.6 && movie.tmdbRating <= 10,
    [cls.green]: movie.tmdbRating >= 6.4 && movie.tmdbRating <= 7.5,
    [cls.grey]: movie.tmdbRating >= 4.3 && movie.tmdbRating <= 6.3,
    [cls.red]: movie.tmdbRating >= 0 && movie.tmdbRating <= 4.2,
  }

  const addFavorites = useCallback((id: string) => {
    dispatch(addFavoritesMovie(id))
  }, [dispatch, movie.id])

  const deleteFavoriteMovie = useCallback((id: string) => {
    dispatch(deleteFavoriteMovieById(id))
  }, [dispatch, movie.id])

  return (
    <div className={classNames(cls.Hero, {}, [className])}>
        <div className={cls.infoMovieBanner}>
            <div className={cls.headerInfo}>
              <span className={classNames(cls.rating, mods, [className])}><span className={cls.starIcon}><Star /></span> {Number(movie.tmdbRating.toFixed(1))}</span>
              <span className={cls.year}>{movie.releaseYear}</span>
              <span className={cls.genre}>{movie.genres.join(', ')}</span>
              <span className={cls.duration}>{formatMinutes(movie.runtime)}</span>
            </div>
            <div className={cls.middleInfo}>
              <span className={cls.title}>{movie.title}</span>
              <span className={cls.plot}>{truncateText(movie.plot, 240)}</span>
            </div>
            <div className={cls.actions}>
              <Button className={cls.trailerBtnAction}>Трейлер</Button>
              { path === '/' && <AppLink className={cls.movieLink} to={`/movie/${movie.id}`}>О фильме</AppLink>}
              <Button onClick={() => isFavorite ? deleteFavoriteMovie(String(movie.id)) : addFavorites(String(movie.id))} className={cls.favoritesBtn}>
                {isFavorite ? <FavoritesIconTrue /> : <Favorites />}
              </Button>
              { path === '/' && <Button onClick={refetch} className={cls.updateBtn}><Update /></Button>}
            </div>
        </div>
        {movie.backdropUrl && movie.posterUrl && <div style={{
            backgroundImage: `
            linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.5)),
            linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.5)),
            linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.5)),
            url(${movie.backdropUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: '0',
            right: '0',
            width: '900px',
            height: '600px',
        }}></div> }
    </div>
  )
})