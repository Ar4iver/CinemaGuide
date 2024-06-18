import { MovieList } from 'entities/Movie/ui/MovieList/MovieList'
import React from 'react'
import { useGetRandomMovie } from 'shared/hooks/useGetRandomMovie'
import { Layout } from 'shared/ui/Layout/Layout'
import { Hero } from 'widgets/Hero'

const MainPage = () => {

  const { data, isError, isSuccess, isLoading, refetch } = useGetRandomMovie()

  if(isLoading) {
    return (
      <Layout>
          Is loading....
      </Layout>
    )
  }

  if(isSuccess) {
    return (
      <Layout>
          <Hero movie={data} refetch={refetch} />
          <h2 style={{ marginBottom: '64px' }}>Топ 10 фильмов</h2>
          <MovieList />
      </Layout>
    )
  }

  if(isError) {
    return (
      <Layout>
          Ошибка
      </Layout>
    )
  }
}

export default MainPage