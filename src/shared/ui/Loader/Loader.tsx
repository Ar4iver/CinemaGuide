import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Loader.module.scss'
import LoaderIcon from 'shared/assets/icons/loader_2.svg'

interface LoaderProps {
  className?: string
}


export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(cls.Loader, {}, [className])}>
      <span className={cls.LoaderIcon}><LoaderIcon  /></span>
    </div>
  );
};