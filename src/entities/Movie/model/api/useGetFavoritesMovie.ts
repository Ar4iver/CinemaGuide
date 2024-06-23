import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchFavoritesMovie = async () => {
  const response = await axios.get(`https://cinemaguide.skillbox.cc/favorites`, {
    withCredentials: true,
  });
  return response.data;
}

export function useGetfavoritesMovie() {
  const { data, isSuccess, isError, isLoading, refetch } = useQuery({
    queryKey: ['favoritesMovie'],
    queryFn: () => fetchFavoritesMovie(),
    refetchOnWindowFocus: false,
  });

  const favoritesMovieData = data
  const favoritesMovieIsSuccess = isSuccess
  const favoritesMovieisError = isError
  const favoritesMovieIsLoading = isLoading

  return { favoritesMovieData, favoritesMovieIsSuccess, favoritesMovieisError, favoritesMovieIsLoading, refetch };
}