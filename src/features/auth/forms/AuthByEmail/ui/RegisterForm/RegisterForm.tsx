import { memo, useCallback, useState } from "react";
import cls from './RegisterForm.module.scss'
import LogoForm from 'shared/assets/icons/CinemaGuide_modal.svg'
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { classNames } from "shared/lib/classNames/classNames";
import EmailIcon from 'shared/assets/icons/email_icon_login.svg'
import EmailError from 'shared/assets/icons/error_email.svg'
import HumanIcon from 'shared/assets/icons/human_icon_login.svg'
import HumanError from 'shared/assets/icons/error_human.svg'
import KeyIcon from 'shared/assets/icons/key_icon.svg'
import ErrorKey from 'shared/assets/icons/error_key.svg'
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { registerActions } from "../../model/slice/registerSlice";
import { registerUser } from "../../model/services/registerUser/registerUser";
import { useSelector } from "react-redux";
import { getRegisterState } from "../../model/selectors/getRegisterState/getRegisterState";
import { authActions } from "features/auth/model/slice/authSlice";

interface RegisterFormProps {
  className?: string
}

const RegisterForm = memo(({ className }: RegisterFormProps) => {

  const dispatch = useAppDispatch()

  const {email, password, name, surname, isLoading} = useSelector(getRegisterState)

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [surnameError, setSurnameError] = useState('');

  const validateEmail = (value: string) => {
    if (!value) {
      return 'Электронная почта обязательна';
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      return 'Неправильный формат электронной почты';
    }
    return '';
  };

  const validatePassword = (value: string) => {
    if (!value) {
      return 'Пароль обязателен';
    } else if (value.length < 6) {
      return 'Пароль должен быть не менее 6 символов';
    }
    return '';
  };

  const validateName = (value: string) => {
    if (!value) {
      return 'Имя обязательно';
    }
    return '';
  };

  const validateSurname = (value: string) => {
    if (!value) {
      return 'Фамилия обязательна';
    }
    return '';
  };

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
    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);
    const nameValidationError = validateName(name);
    const surnameValidationError = validateSurname(surname);

    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);
    setNameError(nameValidationError);
    setSurnameError(surnameValidationError);

    if (!emailValidationError && !passwordValidationError && !nameValidationError && !surnameValidationError) {
      const result = dispatch(registerUser({ email, password, name, surname }));
      if (registerUser.fulfilled.match(result)) {
        dispatch(authActions.setFormType('success'));
      }
    }
  }, [dispatch, email, password, name, surname]);

  const switchAuthLogin = useCallback(() => {
    dispatch(authActions.setFormType('login'))
  },[dispatch])

  return (
    <div className={classNames(cls.RegisterForm, {}, [className])}>
      <div className={cls.logo}><LogoForm /></div>
      <h4>Регистрация</h4>
      <div className={classNames(cls.inputWrapper, { [cls.errorBorder]: emailError })}>
        <Input type='text' placeholder='Электронная почта' className={cls.input} icon={emailError ? <EmailError /> : <EmailIcon />} onChange={onChangeEmail} />
      </div>
      <div className={classNames(cls.inputWrapper, { [cls.errorBorder]: nameError })}>
        <Input type='text' placeholder='Имя' className={cls.input} icon={nameError ? <HumanError /> : <HumanIcon />} onChange={onChangeName} />
      </div>
      <div className={classNames(cls.inputWrapper, { [cls.errorBorder]: surnameError })}>
        <Input type='text' placeholder='Фамилия' className={cls.input} icon={surnameError ? <HumanError /> : <HumanIcon />} onChange={onChangeSurname} />
      </div>
      <div className={classNames(cls.inputWrapper, { [cls.errorBorder]: passwordError })}>
        <Input type='password' placeholder='Пароль' className={cls.input} icon={passwordError ? <ErrorKey /> : <KeyIcon />} onChange={onChangePassword} />
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