import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovieTop10 = async () => {
  const response = await axios.get(`https://cinemaguide.skillbox.cc/movie/top10`, {
    withCredentials: true,
  });
  return response.data;
}

export function useGetMovieTop10() {
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ['movieTop10'],
    queryFn: () => fetchMovieTop10(),
  });

  return { data, isSuccess, isError, isLoading };
}