import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Footer.module.scss'
import { Container } from 'shared/ui/Container/ui/Container'

interface FooterProps {
  className?: string
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={classNames(cls.Footer, {}, [className])}>
        Footer
    </footer>
  )
}