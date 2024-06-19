import React from 'react'
import { Layout } from 'shared/ui/Layout/Layout'
import { Container } from 'shared/ui/Container/ui/Container'
import { GenreList, useGetGenres } from 'entities/Genre'

const GenresPage = () => {

  const { genres, isErrorDataGenres, isLoadingDataGenres, isSuccessDataGenres } = useGetGenres()

  return (
    <Layout>
     <Container>
        { !isLoadingDataGenres && <GenreList genres={genres} /> }
     </Container>
    </Layout>
  )
}

export default GenresPage