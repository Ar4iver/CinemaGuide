import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './HeroBlock.module.scss'

interface HeroBlockProps {
  className?: string
}

export const HeroBlock = ({ className }: HeroBlockProps) => {
  return (
    <div className={classNames(cls.HeroBlock, {}, [className])}>
      
    </div>
  )
}