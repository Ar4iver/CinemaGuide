import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchMovieById = async (id: string) => {
  const response = await axios.get(`https://cinemaguide.skillbox.cc/movie/${id}`, {
    withCredentials: true,
  });
  return response.data;
}

export function useGetMovieById(id: string) {
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ['movieById', id],
    queryFn: () => fetchMovieById(id),
    enabled: !!id,
  });

  return { data, isSuccess, isError, isLoading };
}