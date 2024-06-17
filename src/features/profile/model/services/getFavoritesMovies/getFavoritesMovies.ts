import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { MovieSchema } from "entities/Movie"

export const getFavoritesMovie = createAsyncThunk<MovieSchema[], void>(
  'profile/getFavoritesMovie',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<MovieSchema[]>('https://cinemaguide.skillbox.cc/favorites', { withCredentials: true })

    if(!response.data) {
      throw new Error()
    }

    return response.data
    } catch (error) {
      console.log(error)
      return thunkApi.rejectWithValue('error')
    }
  },
)