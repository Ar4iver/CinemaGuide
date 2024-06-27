import React, { Suspense, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { useSelector } from 'react-redux'
import { getAuthState } from 'features/auth/model/selectors/getAuthState/getAuthState'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { RegisterFormAsync } from '../RegisterForm/RegisterForm.async'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {

  const { form } = useSelector(getAuthState)

  return (
    <Modal className={classNames(cls.LoginModal, {}, [className])} isBackground={true} isOpen={isOpen} onClose={onClose} lazy>
       <Suspense fallback={"Loading ..."}>
        {form === 'login' ? <LoginFormAsync  />  : <RegisterFormAsync /> }
       </Suspense>
    </Modal>
  )
}