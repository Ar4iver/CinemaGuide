import React, { memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from '../Hero.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import FavoritesIconTrue from 'shared/assets/icons/FavoriteTrueIcon.svg'
import Favorites from 'shared/assets/icons/hearth.svg'
import Update from 'shared/assets/icons/update.svg'
import { isMovieInFavorites } from 'features/profile/model/selectors/getFavoriteMovies/getFavoriteMovies'
import { useLocation } from 'react-router-dom'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { MovieSchema } from 'entities/Movie'
import { addFavoritesMovie } from 'features/profile/model/services/addFavoritesMovie/addFavoritesMovie'
import { deleteFavoriteMovieById } from 'features/profile/model/services/deleteFavoriteMovieById/deleteFavoriteMovieById'
import { getAuthData } from 'features/profile/model/selectors/getIsAuthUser/getIsAuthUser'
import { LoginModal } from 'features/auth/forms/AuthByEmail'
import { useGetfavoritesMovie } from 'entities/Movie/model/api/useGetFavoritesMovie'
import { fetchProfile } from 'features/profile/model/services/fetchProfile/fetchProfile'

interface HeroActionsProps {
  className?: string
  movie: MovieSchema
  onShowModal: () => void
  refetch?: () => void | Promise<void>;
}

export const HeroActions = memo(({ className, movie, onShowModal, refetch }: HeroActionsProps) => {

  const dispatch = useAppDispatch()

  const { favoritesMovieRefetch } = useGetfavoritesMovie()

  const location = useLocation();
  const path = location.pathname;
  
  const isFavorite = useSelector((state: StateSchema) => isMovieInFavorites(state, String(movie.id)));

  const isAuth = useSelector((state: StateSchema) => getAuthData(state))

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCLoseModalLogin = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModalLogin = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const addFavorites = useCallback(async(id: string) => {
    isAuth ? await dispatch(addFavoritesMovie(id)) : onShowModalLogin()
    await favoritesMovieRefetch()
  }, [dispatch, movie.id, isAuth])

  const deleteFavoriteMovie = useCallback(async(id: string) => {
    await dispatch(deleteFavoriteMovieById(id))
    await favoritesMovieRefetch()
  }, [dispatch, movie.id])

  const openTrailerFilmModal = useCallback(() => {
    onShowModal()
  }, [])

  return (
    <div className={cls.actions}>
                <Button onClick={() => openTrailerFilmModal()} className={cls.trailerBtnAction}>Трейлер</Button>
                { path === '/' && <AppLink className={cls.movieLink} to={`/movie/${movie.id}`}>О фильме</AppLink>}
                <Button onClick={() => isFavorite ? deleteFavoriteMovie(String(movie.id)) : addFavorites(String(movie.id))} className={cls.favoritesBtn}>
                  {isFavorite ? <FavoritesIconTrue /> : <Favorites />}
                </Button>
                { path === '/' && <Button onClick={refetch} className={cls.updateBtn}><Update /></Button>}
                <LoginModal isOpen={isAuthModal} onClose={onCLoseModalLogin} />
    </div>
  )
})