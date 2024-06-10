import React, { ButtonHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
}

export const Button = ({
	children,
	className,
	disabled,
	...otherProps
}: ButtonProps) => {

	const mods: Record<string, boolean| undefined> = {
		[cls.disabled]: disabled
	}

	return (
		<button
			className={classNames(cls.Button, mods, [className])}
			{...otherProps}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
