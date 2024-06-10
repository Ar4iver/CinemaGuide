import React, { ChangeEvent, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Searchbar.module.scss'
import SearchIcon from 'shared/assets/icons/search_icon.svg'
import { Input } from 'shared/ui/Input/Input'

interface SearchbarProps {
  className?: string
}

export const Searchbar = ({ className }: SearchbarProps) => {

  return (
    <Input placeholder='Поиск' icon={<SearchIcon />} className={cls.searchInput} />
  )
}