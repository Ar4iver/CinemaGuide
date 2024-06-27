import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Layout } from 'shared/ui/Layout/Layout'
import { Container } from 'shared/ui/Container/ui/Container'
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs'
import { MovieList } from 'entities/Movie/ui/MovieList/MovieList'
import { useNavigate } from "react-router-dom";
import cls from './ProfilePage.module.scss'
import HumanIcon from 'shared/assets/icons/human_icon.svg'
import EmailIcon from 'shared/assets/icons/email_icon.svg'
import { useGetfavoritesMovie } from 'entities/Movie/model/api/useGetFavoritesMovie'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { useSelector } from 'react-redux'
import { getProfileData } from 'features/profile/model/selectors/getProfileData/getProfileData'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { Button } from 'shared/ui/Button/Button'
import { logout } from 'features/auth/forms/AuthByEmail/model/services/logout/logout'
import { fetchProfile } from 'features/profile/model/services/fetchProfile/fetchProfile'

const ProfilePage = () => {

  const dispatch = useAppDispatch()

  const navigate = useNavigate();

  const { data } = useSelector((state: StateSchema) => getProfileData(state))

  const { favoritesMovieData, favoritesMovieIsLoading, favoritesMovieIsSuccess, favoritesMovieisError } = useGetfavoritesMovie()

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><HumanIcon />Настройки акканта</span>,
      content: 
      <div className={cls.settingInfoUser}>
        <div className={cls.user}>
          <div><span className={cls.usernameAbr}>{`${data?.name[0]}${data?.surname[0]}`}</span></div>
          <div className={cls.userInfo}>
            <span className={cls.nameSpaceTitle}>Имя Фамилия</span>
            <span className={cls.nameSpaceValue}>{`${data?.name} ${data?.surname}`}</span>
          </div>
        </div>
        <div className={cls.email}>
          <div><span className={cls.userEmail}><EmailIcon /></span></div>
          <div className={cls.userInfo}>
            <span className={cls.nameSpaceTitle}>Электронная почта</span>
            <span className={cls.nameSpaceValue}>{data?.email}</span>
          </div>
        </div>
        <div className={cls.actions}>
          <Button onClick={() => handleLogout()} className={cls.actionBtn}>Выйти из аккаунта</Button>
        </div>
      </div>,
    },
    {
      value: 'Избранные фильмы',
      content: [favoritesMovieData && favoritesMovieData.length > 0 ? <MovieList key={1234} showTopRating={false} data={favoritesMovieData} deleteFavoritesFn={true} /> : <div>Нет избранных фильмов</div>],
    },
  ], [favoritesMovieData, favoritesMovieIsLoading, favoritesMovieIsSuccess]);

  const [currentTab, setCurrentTab] = useState<string>(typeTabs[0].value as string);


  const handleLogout = useCallback(async() => {
    await dispatch(logout())
    await dispatch(fetchProfile())
    navigate('/')
  }, [dispatch])

  const handleTabClick = useCallback((tab: TabItem) => {
    setCurrentTab(tab.value as string);
  }, [currentTab]);

  return (
    <Layout>
      <Container>
        <h2 style={{ marginTop: '64px' }}>Мой аккаунт</h2>
        <Tabs
            tabs={typeTabs}
            value={currentTab}
            onTabClick={handleTabClick}
          />
      </Container>
    </Layout>
  )
}

export default ProfilePage