import React, { ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'

interface AppLinkProps extends LinkProps {
  className?: string
}

export const AppLink = (props: AppLinkProps) => {
  const { className, children, to, ...otherProps } = props;
  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className])} {...otherProps}>{children}</Link>
  );
};