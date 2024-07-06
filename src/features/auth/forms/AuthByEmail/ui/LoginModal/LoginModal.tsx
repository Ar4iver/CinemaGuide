import React, { ReactNode, Suspense, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { useSelector } from 'react-redux'
import { getAuthState } from 'features/auth/model/selectors/getAuthState/getAuthState'
import { TypeAuth, typeModalConfig } from '../../model/config/config'
import Loader from 'shared/assets/icons/loader_2.svg'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  const { form } = useSelector(getAuthState);

  const currentForm = typeModalConfig[form as TypeAuth]?.element || null;

  return (
    <Modal
      className={classNames(cls.LoginModal, {}, [className])}
      isBackground={true}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        {currentForm}
      </Suspense>
    </Modal>
  );
}