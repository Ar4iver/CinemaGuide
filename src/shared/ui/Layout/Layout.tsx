import React, { ReactNode } from 'react'
import cls from './Layout.module.scss'
import { Header } from 'widgets/Header'
import { Footer } from 'widgets/Footer'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <div className={cls.layout}>
      <Header />
      <main className={cls.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}