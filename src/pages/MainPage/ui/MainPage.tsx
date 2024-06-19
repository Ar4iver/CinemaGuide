import { MovieList } from 'entities/Movie/ui/MovieList/MovieList'
import React from 'react'
import { useGetMovieTop10, useGetRandomMovie } from 'entities/Movie'
import { Container } from 'shared/ui/Container/ui/Container'
import { Layout } from 'shared/ui/Layout/Layout'
import { Hero } from 'widgets/Hero'

const MainPage = () => {

  const { data, isError, isSuccess, isLoading, refetch } = useGetRandomMovie()
  
  const { movieTopIsSuccess, movieTopData, movieTopIsLoading, movieTopisError } = useGetMovieTop10()

    return (
      <Layout>
          <Hero movie={data} refetch={refetch} />
          <Container>
            <h2 style={{ marginBottom: '64px' }}>Топ 10 фильмов</h2>
            {movieTopIsSuccess && <MovieList data={ movieTopData } /> }
          </Container>
      </Layout>
    )

}

export default MainPage