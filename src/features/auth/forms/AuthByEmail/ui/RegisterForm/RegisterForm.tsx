import { memo, useCallback } from "react";
import cls from './RegisterForm.module.scss'
import LogoForm from 'shared/assets/icons/CinemaGuide_modal.svg'
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { classNames } from "shared/lib/classNames/classNames";
import EmailIcon from 'shared/assets/icons/email_icon.svg'
import HumanIcon from 'shared/assets/icons/human_icon.svg'
import KeyIcon from 'shared/assets/icons/key_icon.svg'
import { authActions } from "features/auth/model/slice/authSlice";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { registerActions } from "../../model/slice/registerSlice";
import { registerUser } from "../../model/services/registerUser/registerUser";
import { useSelector } from "react-redux";
import { getRegisterState } from "../../model/selectors/getRegisterState/getRegisterState";

interface RegisterFormProps {
  className?: string
}

const RegisterForm = memo(({ className }: RegisterFormProps) => {

  const dispatch = useAppDispatch()
  const {email, password, name, surname, error, isLoading} = useSelector(getRegisterState)

  const onChangeEmail = useCallback((value: string) => {
    dispatch(registerActions.setUserEmail(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(registerActions.setPassword(value))
  }, [dispatch])

  const onChangeSurname = useCallback((value: string) => {
    dispatch(registerActions.setSurname(value))
  }, [dispatch])

  const onChangeName = useCallback((value: string) => {
    dispatch(registerActions.setName(value))
  }, [dispatch])

  const onRegisterClick = useCallback(() => {
    dispatch(registerUser( { email, password, name, surname } ))
  }, [dispatch, email, password, name, surname])

  const switchAuthLogin = useCallback(() => {
    dispatch(authActions.setFormType('login'))
  },[dispatch])

  return (
    <div className={classNames(cls.RegisterForm)}>
      <div className={cls.logo}><LogoForm /></div>
      <h4>Регистрация</h4>
      <div className={cls.inputWrapper}>
       <Input type='text' placeholder='Электронная почта' className={cls.input} icon={<EmailIcon />} onChange={onChangeEmail}/>
     </div>
     <div className={cls.inputWrapper}>
       <Input type='text' placeholder='Имя' className={cls.input} icon={<HumanIcon />} onChange={onChangeName}/>
     </div>
     <div className={cls.inputWrapper}>
       <Input type='text' placeholder='Фамилия' className={cls.input} icon={<HumanIcon />} onChange={onChangeSurname}/>
     </div>
      <div className={cls.inputWrapper}>
        <Input type='password' placeholder='Пароль' className={cls.input} icon={<KeyIcon />} onChange={onChangePassword}/>
      </div>
      <div className={cls.inputWrapper}>
        <Input type='password' placeholder='Подтвердите пароль' className={cls.input} icon={<KeyIcon />}/>
      </div>
      <Button onClick={onRegisterClick} disabled={isLoading} className={cls.createButton}>
        Создать аккаунт
      </Button>
      <Button onClick={switchAuthLogin} className={cls.loginButton}>
        У меня есть пароль
      </Button>
    </div>
  );
})

export default RegisterForm