import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovieTop10 = async () => {
  const response = await axios.get(`https://cinemaguide.skillbox.cc/movie/top10`, {
    withCredentials: true,
  });
  return response.data;
}

export function useGetMovieTop10() {
  const { data, isSuccess, isError, isLoading, isFetching, isRefetching } = useQuery({
    queryKey: ['movieTop10'],
    queryFn: () => fetchMovieTop10(),
    refetchOnWindowFocus: false,
  });

  const movieTopData = data
  const movieTopIsSuccess = isSuccess
  const movieTopisError = isError
  const movieTopIsLoading = isLoading
  const movieIsFetchingData = isFetching
  const isRefetchingMovie = isRefetching

  return { movieTopData, movieTopIsSuccess, movieTopisError, movieTopIsLoading, movieIsFetchingData, isRefetchingMovie };
}