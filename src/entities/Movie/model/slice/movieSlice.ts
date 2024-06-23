import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MovieDetailsSchema } from "../types/MovieDetailsSchema"
import { MovieSchema } from "../types/MovieSchema";

const initialState: MovieDetailsSchema = {
  isLoading: false,
  error: '',
  data: [],
  page: 1,
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<MovieSchema[]>) => {
      if (Array.isArray(action.payload)) {
        state.data = [...state.data, ...action.payload];
      }
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    resetMovies: (state) => {
      state.data = [];
      state.page = 1;
    },
  },
  })
  
  export const { actions: moviesActions } = moviesSlice
  export const { reducer: moviesReducer } = moviesSlice