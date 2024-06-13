import { createSlice } from "@reduxjs/toolkit"
import { SearchDetailsSchema } from "../types/SearchSchema"

const initialState: SearchDetailsSchema  = {
  isLoading: false,
  error: '',
  data: undefined,
}

export const searchSlice = createSlice({
name: 'search',
initialState,
reducers: {},
})

export const { actions: searchActions } = searchSlice
export const { reducer: searchReducer } = searchSlice