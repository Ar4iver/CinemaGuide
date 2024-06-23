import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchGenres = async () => {
  const response = await axios.get('https://cinemaguide.skillbox.cc/movie/genres', {
    withCredentials: true
  });
  return response.data;
}

export function useGetGenres() {
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ['genres'],
    queryFn: () => fetchGenres(),
    refetchOnWindowFocus: false,
  });

  const genres = data
  const isSuccessDataGenres = isSuccess
  const isLoadingDataGenres = isLoading
  const isErrorDataGenres = isError

  return { genres, isSuccessDataGenres, isErrorDataGenres, isLoadingDataGenres };
}