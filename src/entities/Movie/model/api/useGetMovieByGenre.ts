import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovies = async (genre: string) => {
  const response = await axios.get('https://cinemaguide.skillbox.cc/movie', {
    params: { count: 15, genre: genre },
    withCredentials: true
  });
  return response.data;
}

export function useGetMoviesByGenre(genre: string) {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['getMoviesByGenre', genre],
    queryFn: () => fetchMovies(genre),
  });

  const moviesByGenre = data
  const movieByGenreIsSuccess = isSuccess
  const  movieByGenreIsError = isError

  return { moviesByGenre, movieByGenreIsSuccess, movieByGenreIsError };
}