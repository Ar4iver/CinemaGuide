import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchProfile } from "../fetchProfile/fetchProfile"
import { getFavoritesMovie } from "../getFavoritesMovies/getFavoritesMovies";

interface ResponseResult {
  result: boolean
  id: string;
}

export const addFavoritesMovie= createAsyncThunk<{ id: string }, string>(
  'profile/addMovieFavorites',
  async (id, thunkApi) => {
    try {
      const response = await axios.post<ResponseResult>('https://cinemaguide.skillbox.cc/favorites', { id }, { withCredentials: true })

    if(!response.data) {
      throw new Error()
    }

    thunkApi.dispatch(fetchProfile())

    return { id };
    } catch (error) {
      console.log(error)
      return thunkApi.rejectWithValue('error')
    }
  },
)