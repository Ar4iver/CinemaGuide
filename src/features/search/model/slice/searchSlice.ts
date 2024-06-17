import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SearchSchema } from "../types/SearchSchema"

const initialState:  SearchSchema = {
  text: ''
}

export const searchSlice = createSlice({
name: 'search',
initialState,
reducers: {
  setTextInput: (state, action: PayloadAction<string>) => {
    state.text = action.payload
  }
},
})

export const { actions: searchActions } = searchSlice
export const { reducer: searchReducer } = searchSlice