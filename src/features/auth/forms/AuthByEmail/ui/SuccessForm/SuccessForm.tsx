import { getAuthState } from "features/auth/model/selectors/getAuthState/getAuthState"
import { useSelector } from "react-redux"
import LogoForm from 'shared/assets/icons/CinemaGuide_modal.svg'
import { classNames } from "shared/lib/classNames/classNames"
import cls from './SuccessForm.module.scss'
import { Button } from "shared/ui/Button/Button"
import { useCallback } from "react"
import { authActions } from "features/auth/model/slice/authSlice"
import { useAppDispatch } from "app/providers/StoreProvider/config/store"

interface SuccessFormProps {
  className?: string
}

const SuccessFormModal = ({ className }: SuccessFormProps) => {

  const dispatch = useAppDispatch()

  const switchAuthToLogin = useCallback(() => {
    dispatch(authActions.setFormType('login'))
  },[dispatch])

  return (
    <div className={classNames(cls.SuccessForm)}>
      <div className={cls.logo}><LogoForm /></div>
      <h2>Регистрация завершена</h2>
      <p>Используйте вашу электронную почту для входа</p>
      <Button className={cls.loginButton} onClick={switchAuthToLogin}>
        Войти
      </Button>
    </div>
  );
}

export default SuccessFormModal