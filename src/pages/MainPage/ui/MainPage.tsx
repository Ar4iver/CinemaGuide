import { MovieList } from 'entities/Movie/ui/MovieList/MovieList'
import React from 'react'
import { useGetMovieTop10, useGetRandomMovie } from 'entities/Movie'
import { Container } from 'shared/ui/Container/ui/Container'
import { Layout } from 'shared/ui/Layout/Layout'
import { Hero, HeroSkeleton } from 'widgets/Hero'
import MovieListSkeleton from 'entities/Movie/ui/MovieList/MovieListSkeleton'

const MainPage = () => {

  const { randomMovieData, randomMovieFetching, randomMovieIsLoading, randomMovieIsSuccess, randomMovieRefetch, randomMovieIsError } = useGetRandomMovie()
  
  const { movieTopIsSuccess, movieTopData, movieTopIsLoading, movieTopisError, movieIsFetchingData} = useGetMovieTop10()

    return (
      <Layout>
          <Container>
            {randomMovieIsLoading || randomMovieFetching ? <HeroSkeleton /> : ( randomMovieIsSuccess && <Hero movie={randomMovieData} refetch={randomMovieRefetch} />)}
              {randomMovieIsError && <div>Произошла ошибка при получении фильма, перезагрузите страницу</div>}
              <h2 style={{ marginBottom: '64px' }}>Топ 10 фильмов</h2>
              {movieTopIsLoading || movieIsFetchingData ? (
                  <MovieListSkeleton howManySkeletonItem={10} />
                  ) : (
                    movieTopIsSuccess &&  <MovieList showTopRating={true} deleteFavoritesFn={false} data={movieTopData} />
              )}
              {movieTopisError && <div>Произошла ошибка при получении фильмов, перезагрузите страницу</div>}
          </Container>
      </Layout>
    )

}

export default MainPage