import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { fetchProfile } from "features/profile/model/services/fetchProfile/fetchProfile"
import { profileActions } from "features/profile/model/slice/profileSlice"


export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('https://cinemaguide.skillbox.cc/auth/logout',
      {
        withCredentials: true
      }
    )

    if(!response.data) {
      throw new Error()
    }

    thunkApi.dispatch(profileActions.setIsAuth(false))
    thunkApi.dispatch(fetchProfile())


    return response.data
    } catch (error) {
      console.log(error)
      return thunkApi.rejectWithValue('error')
    }
  },
)