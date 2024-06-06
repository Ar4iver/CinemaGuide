import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Header.module.scss'
import Logo from 'shared/assets/icons/CinemaGuide.svg'
import { Navbar } from 'widgets/Navbar'
import { Searchbar } from 'features/search'
import { Container } from 'shared/ui/Container/ui/Container'
import { Button } from 'shared/ui/Button/Button'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
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
          <Button>Войти</Button>
        </div>
    </header>
  )
}