import { InputHTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Input.module.scss'
import IconClean from 'shared/assets/icons/search_iconClean.svg'

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  icon?: ReactNode
}

export const Input = (props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    icon,
    ...otherProps
} = props;

const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  onChange?.(e.target.value);
};

  return (
    <div className={cls.wrapper}>
      {icon && <div className={cls.icon}>{icon}</div>}
      <input placeholder={placeholder} value={value} type={type} onChange={onChangeHandler} className={`${className}`} {...otherProps} />
      { !value && <div className={cls.iconClean}>{<IconClean />}</div> }
    </div>
  )
}