import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchMovies = async (title: string) => {
  const response = await axios.get('https://cinemaguide.skillbox.cc/movie', {
    params: { count: 5, title: title },
    withCredentials: true
  });
  return response.data;
}

export function useSearchMovies(title: string) {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['movies', title],
    queryFn: () => fetchMovies(title),
    enabled: !!title,
  });

  return { data, isSuccess, isError };
}