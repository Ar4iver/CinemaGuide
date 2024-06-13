import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Header.module.scss'
import Logo from 'shared/assets/icons/CinemaGuide.svg'
import { Navbar } from 'widgets/Navbar'
import { Searchbar } from 'features/search'
import { Button } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/auth/forms/AuthByEmail'
import { useSelector } from 'react-redux'
import { getProfileData } from 'features/profile/model/selectors/getProfileData/getProfileData'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useLocation } from 'react-router-dom'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {

  const location = useLocation();
  const path = location.pathname;

  const { data } = useSelector(getProfileData)

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCLoseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
    <header className={classNames(cls.Header, {}, [className])}>
        <div className={cls.wrapper}>
          <div className={cls.Logo}>
            <Logo />
          </div>
          <div className={cls.middle}>
            <Navbar className={cls.navbar} />
            <Searchbar />
          </div>
          { data ? <AppLink className={path === '/profile' ? cls.active : ''} to={'/profile'}>{data.name}</AppLink> : <Button onClick={onShowModal}>Войти</Button>  }
          <LoginModal isOpen={isAuthModal} onClose={onCLoseModal} />
        </div>
    </header>
  )
}

// AppLink className={path === '/genres' ? cls.active : ''}  >Жанры</AppLink>