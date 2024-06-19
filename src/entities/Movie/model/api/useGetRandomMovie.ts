import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchRandomMovie = async () => {
  const response = await axios.get('https://cinemaguide.skillbox.cc/movie/random', {
    withCredentials: true
  });
  return response.data;
}

export function useGetRandomMovie() {
  const { data, isSuccess, isError, isLoading, refetch } = useQuery({
    queryKey: ['movieRandom'],
    queryFn: () => fetchRandomMovie(),
    refetchOnWindowFocus: false,
  });

  return { data, isSuccess, isError, isLoading, refetch };
}