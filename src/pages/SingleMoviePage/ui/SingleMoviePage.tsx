import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGetMovieById } from "shared/hooks/useGetMovieById"
import { Layout } from "shared/ui/AppLink/Layout/Layout"
import { Container } from "shared/ui/Container/ui/Container"
import { Hero } from "widgets/Hero"

interface SingleMovieProps {
  className?: string
}

const SingleMoviePage = ({className}: SingleMovieProps) => {
  
  const { id } = useParams<{id: string}>()

  console.log(id)

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
      </Layout>
    );
  }
}

export default SingleMoviePage