import React, { useCallback, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Header.module.scss'
import Logo from 'shared/assets/icons/CinemaGuide.svg'
import { Navbar } from 'widgets/Navbar'
import { Searchbar } from 'features/search'
import { Button } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/auth/forms/AuthByEmail'
import { useSelector } from 'react-redux'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useLocation } from 'react-router-dom'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { getAuthData, getProfileData } from 'features/profile'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {

  const location = useLocation();
  const path = location.pathname;

  const { data } = useSelector((state: StateSchema) => getProfileData(state))
  const isAuth = useSelector((state: StateSchema) => getAuthData(state))

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCLoseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  useEffect(() => {
    onCLoseModal()
  }, [isAuth])

  return (
    <header className={classNames(cls.Header, {}, [className])}>
        <div className={cls.wrapper}>
          <AppLink to={`/`} className={cls.Logo}>
            <Logo />
          </AppLink>
          <div className={cls.middle}>
            <Navbar className={cls.navbar} />
            <Searchbar />
          </div>
          { isAuth && data ?
                    <AppLink className={path === '/profile' ? cls.active : ''} to={'/profile'}>
                        {data.name}
                    </AppLink> 
                  :
                    <Button onClick={onShowModal}>
                        Войти
                    </Button>  
          }
          <LoginModal isOpen={isAuthModal} onClose={onCLoseModal} />
        </div>
    </header>
  )
}