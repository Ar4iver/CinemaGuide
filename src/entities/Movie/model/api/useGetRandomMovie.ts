import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchRandomMovie = async () => {
  const response = await axios.get('https://cinemaguide.skillbox.cc/movie/random', {
    withCredentials: true
  });
  return response.data;
}

export function useGetRandomMovie() {
  const { data, isSuccess, isError, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['movieRandom'],
    queryFn: () => fetchRandomMovie(),
    refetchOnWindowFocus: false,
  });


  const randomMovieData = data
  const randomMovieIsSuccess = isSuccess
  const randomMovieIsError = isError
  const randomMovieIsLoading = isLoading
  const randomMovieFetching = isFetching
  const randomMovieRefetch = refetch

  return { randomMovieData, randomMovieIsSuccess, randomMovieIsError, randomMovieIsLoading, randomMovieFetching, randomMovieRefetch };
}