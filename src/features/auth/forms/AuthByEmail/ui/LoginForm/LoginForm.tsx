import React, { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import LogoForm from 'shared/assets/icons/CinemaGuide_modal.svg'
import EmailIcon from 'shared/assets/icons/email_icon.svg'
import PasswordIcon from 'shared/assets/icons/password_icon.svg'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginActions } from '../../model/slice/loginSlice'
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail'
import { authActions } from 'features/auth/model/slice/authSlice'

interface LoginFormProps {
  className?: string
}

const LoginForm = memo(({ className }: LoginFormProps) => {

  const dispatch = useAppDispatch()
  const {email, password, error, isLoading} = useSelector(getLoginState)

  const onChangeEmail = useCallback((value: string) => {
    dispatch(loginActions.setUserEmail(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByEmail( { email, password } ))
  }, [dispatch, email, password])

  const switchAuthRegister = useCallback(() => {
    dispatch(authActions.setFormType('register'))
  },[dispatch])

  return (
    <div className={classNames(cls.LoginForm)}>
      <div className={cls.logo}><LogoForm /></div>
    {error && <div>{error}</div>}
     <div className={cls.inputWrapper}>
       <Input type='text' placeholder='Электронная почта' icon={<EmailIcon />} className={cls.input} onChange={onChangeEmail} value={email}/>
     </div>
      <div className={cls.inputWrapper}>
        <Input type='password' placeholder='Пароль' icon={<PasswordIcon />} className={cls.input}  onChange={onChangePassword} value={password}/>
      </div>
      <Button className={cls.loginButton} onClick={onLoginClick} disabled={isLoading}>
        Войти
      </Button>
      <Button onClick={switchAuthRegister} className={cls.registerButton}>
        Регистрация
      </Button>
    </div>
  );
})

export default LoginForm