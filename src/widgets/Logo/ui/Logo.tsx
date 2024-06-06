import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Logo.module.scss'

interface LogoProps {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={classNames(cls.Logo, {}, [className])}>
        Логотип
    </div>
  )
}