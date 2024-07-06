import { LoginFormAsync } from "../../ui/LoginForm/LoginForm.async";
import { RegisterFormAsync } from "../../ui/RegisterForm/RegisterForm.async";
import { SuccessFormAsync } from "../../ui/SuccessForm/SuccessForm.async";

export enum TypeAuth {
  LOGIN = 'login',
  REGISTER = 'register',
  SUCCESS = 'success'
}

export interface RouteProps {
  element: JSX.Element;
}

export const typeModalConfig: Record<TypeAuth, RouteProps> = {
  [TypeAuth.LOGIN]: {
    element: <LoginFormAsync />
  },
  [TypeAuth.REGISTER]: {
    element: <RegisterFormAsync />
  },
  [TypeAuth.SUCCESS]: {
    element: <SuccessFormAsync />
  }
}