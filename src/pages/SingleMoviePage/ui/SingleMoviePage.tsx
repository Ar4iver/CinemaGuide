import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGetMovieById } from "entities/Movie"
import { Layout } from "shared/ui/Layout/Layout"
import { Container } from "shared/ui/Container/ui/Container"
import { Hero } from "widgets/Hero"
import { MovieDetails } from "../../../entities/Movie/ui/MovieDetails/MovieDetails"

interface SingleMovieProps {
  className?: string
}

const SingleMoviePage = ({className}: SingleMovieProps) => {
  
  const { id } = useParams<{id: string}>()

  if (!id) {
    return (
      <Layout>
        <Container>Неверный ID фильма.</Container>
      </Layout>
    );
  }

  const { data, isSuccess, isError, isLoading } = useGetMovieById(id)

  if (isLoading) {
    return (
      <Layout>
        <Container>Загрузка...</Container>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout>
        <Container>Ошибка при загрузке фильма.</Container>
      </Layout>
    );
  }

  if (isSuccess) {
    return (
      <Layout>
        <Hero movie={data} />
        <MovieDetails movie={data} />
      </Layout>
    );
  }
}

export default SingleMoviePage