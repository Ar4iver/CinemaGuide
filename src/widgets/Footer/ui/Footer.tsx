import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Footer.module.scss'
import Copyright from 'shared/assets/icons/copyright.svg'
import VK from 'shared/assets/icons/vk.svg'
import OK from 'shared/assets/icons/ok.svg'
import Telegram from 'shared/assets/icons/telegram.svg'
import Youtube from 'shared/assets/icons/youtube.svg'

interface FooterProps {
  className?: string
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={classNames(cls.Footer, {}, [className])}>
        <div className={cls.wrapper}>
          <div className={cls.leftContent}>
            <span>LLC «Мультимедиа Визион»</span>
            <span>
              <Copyright />
            </span>
            <span>Все права защищены</span>
          </div>
          <div className={cls.rightContent}>
            <span><VK /></span>
            <span><Youtube /></span>
            <span><OK /></span>
            <span><Telegram /></span>
          </div>
        </div>
    </footer>
  )
}