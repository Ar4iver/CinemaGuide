import React, { ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
}

export const Modal = ({ className, children }: ModalProps) => {
  return (
    <div className={classNames(cls.Modal, {}, [className])}>
      <div className={cls.overlay}>
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </div>
  )
}