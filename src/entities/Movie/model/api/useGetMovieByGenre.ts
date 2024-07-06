import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { moviesActions } from "../slice/movieSlice";

const fetchMovies = async (genre: string, page: number, count: number) => {
  const response = await axios.get('https://cinemaguide.skillbox.cc/movie', {
    params: { genre, page, count },
    withCredentials: true,
  });
  return response.data;
};

export function useGetMoviesByGenre(genre: string) {
  const dispatch = useAppDispatch();
  const page = useSelector((state: StateSchema) => state.movies.page);
  const [lastPageMoviesCount, setLastPageMoviesCount] = useState<number>(0);

  const { data, isSuccess, isError, refetch, isFetching } = useQuery({
    queryKey: ['getMoviesByGenre', genre, page],
    queryFn: () => fetchMovies(genre, page, 15),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data) {
      setLastPageMoviesCount(data.length);
    }
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(moviesActions.addMovies(data));
    }
  }, [dispatch, data, isSuccess]);

  return { data, isSuccess, isError, refetch, page, isFetching, lastPageMoviesCount };
}