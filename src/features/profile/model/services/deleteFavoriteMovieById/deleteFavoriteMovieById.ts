import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteFavoriteMovieById = createAsyncThunk<{ id: string }, string>(
  'profile/deleteFavoriteMovieById',
  async (id, thunkApi) => {
    try {

      const response = await axios.delete(`https://cinemaguide.skillbox.cc/favorites/${id}`, { withCredentials: true })

    if(!response.data) {
      throw new Error()
    }

    return response.data;
    } catch (error) {
      console.log(error)
      return thunkApi.rejectWithValue('error')
    }
  },
)