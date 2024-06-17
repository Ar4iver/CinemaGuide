import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useLocation } from 'react-router-dom'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <AppLink className={path === '/' ? cls.active : ''} to={'/'}>Главная</AppLink>
      <AppLink className={path === '/genres' ? cls.active : ''} to={'/genres'}>Жанры</AppLink>
    </nav>
  );
};