import React, { ReactNode } from "react";
import cls from './Dropdown.module.scss'

interface DropdownProps {
  results: any[];
  children: ReactNode;
  searchValue?: string
}

export const Dropdown = ({ results, children }: DropdownProps) => {
  return (
    <div className={cls.dropdown}>
      {results.length > 0 ? (
        <ul className={cls.list}>
          {results.map((result, index) => (
            <li key={index} className={cls.listItem}>
              {children}
            </li>
          ))}
        </ul>
      ) : (
        <div className={cls.noResults}>Ничего не найдено...</div>
      )}
    </div>
  );
};
