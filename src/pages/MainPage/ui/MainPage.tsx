import React from 'react'
import { useGetRandomMovie } from 'shared/hooks/useGetRandomMovie'
import { Layout } from 'shared/ui/AppLink/Layout/Layout'
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