import React, { ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Container.module.scss'

interface ContainerProps {
  className?: string
  children: ReactNode
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={classNames(cls.Container, {}, [className])}>
      {children}
    </div>
  )
}