import React, { memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import LogoForm from 'shared/assets/icons/CinemaGuide_modal.svg'
import EmailIcon from 'shared/assets/icons/email_icon_login.svg'
import EmailError from 'shared/assets/icons/error_email.svg'
import KeyIcon from 'shared/assets/icons/key_icon.svg'
import ErrorKey from 'shared/assets/icons/error_key.svg'
import { Button } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginActions } from '../../model/slice/loginSlice'
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail'
import { Input } from 'shared/ui/Input/Input'
import { useNavigate } from 'react-router-dom'
import { getAuthData } from 'features/profile'
import { authActions } from 'features/auth/model/slice/authSlice'

interface LoginFormProps {
  className?: string
}

const LoginForm = memo(({ className }: LoginFormProps) => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const {email, password, error, isLoading} = useSelector(getLoginState)
  const isAuth = useSelector(getAuthData)

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (value: string) => {
   if( value === '' ) {
    return 'Поле Email пустое'
   } else {
    return ''
   }
  };

  const validatePassword = (value: string) => {
    if( value === '') {
      return 'Поле пароль пустое'
    } else {
      return ''
    }
  };

  const onChangeEmail = useCallback((value: string) => {
    dispatch(loginActions.setUserEmail(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async() => {

    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);

    if(!emailValidationError && !passwordValidationError) {

      const result = await dispatch(loginByEmail({ email, password }));
      if (loginByEmail.fulfilled.match(result)) {
        navigate('/');
      }
    }

  }, [dispatch, email, password, isAuth])

  const switchAuthRegister = useCallback(() => {
    dispatch(authActions.setFormType('register'))
  },[dispatch])

  return (
    <div className={classNames(cls.LoginForm)}>
      <div className={cls.logo}><LogoForm /></div>
    {error && <div>Произошла ошибка: {error}</div>}
     <div className={classNames(cls.inputWrapper, { [cls.errorBorder]: emailError })}>
        <Input type='text' placeholder='Электронная почта' className={cls.input} icon={emailError ? <EmailError /> : <EmailIcon />} onChange={onChangeEmail} />
      </div>
      <div className={classNames(cls.inputWrapper, { [cls.errorBorder]: passwordError })}>
        <Input type='password' placeholder='Пароль' className={cls.input} icon={passwordError ? <ErrorKey /> : <KeyIcon />} onChange={onChangePassword} />
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