import React, { ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

interface ButtonProps {
  className?: string
  children: ReactNode
}

export const Button = ({ className, children }: ButtonProps) => {
  return (
    <div className={classNames(cls.Button, {}, [className])}>{children}</div>
  )
}