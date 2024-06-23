import { memo, ReactNode, useCallback } from "react";
import cls from './Tabs.module.scss'
import { classNames } from "shared/lib/classNames/classNames";

export interface TabItem {
    value: string |  ReactNode;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, onTabClick, value } = props;

    const clickHandle = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
          <div className={cls.tabLabels}>
            {tabs.map((tab) => (
              <div
                className={classNames(cls.tabLabel, { [cls.tabActive]: tab.value === value })}
                key={tab.value as string}
                onClick={clickHandle(tab)}
              >
                {tab.value}
              </div>
            ))}
          </div>
          <div className={cls.tabContent}>
            {tabs.find((tab) => tab.value === value)?.content}
          </div>
        </div>
      );
});