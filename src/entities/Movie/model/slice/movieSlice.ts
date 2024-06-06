import { createSlice } from "@reduxjs/toolkit"
import { MovieSchema } from "../types/MovieSchema"
import { MovieDetailsSchema } from "../types/MovieDetailsSchema"

const initialState: MovieDetailsSchema  = {
    isLoading: false,
    error: undefined,
    data: undefined,
}

export const movie = createSlice({
	name: 'movie',
	initialState,
	reducers: {

	},
})

export const { actions: movieActions } = movie
export const { reducer: movieReducer } = movie