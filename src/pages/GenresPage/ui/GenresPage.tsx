import React from 'react'
import cls from './GenresPage.module.scss'
import { Layout } from 'shared/ui/Layout/Layout'
import { Container } from 'shared/ui/Container/ui/Container'
import { GenreList, useGetGenres } from 'entities/Genre'
import { GenresListSkeleton } from 'entities/Genre/ui/GenreList/GenresListSkeleton'

const GenresPage = () => {

  const { dataGenres, isErrorDataGenres, isLoadingDataGenres, isSuccessDataGenres } = useGetGenres()

  return (
    <Layout>
     <Container>
        <h2 className={cls.titlePage}>Жанры фильмов</h2>
        { isLoadingDataGenres ? <GenresListSkeleton howManySkeletonItem={7} /> :  isSuccessDataGenres && <GenreList genres={dataGenres} /> }
     </Container>
    </Layout>
  )
}

export default GenresPage