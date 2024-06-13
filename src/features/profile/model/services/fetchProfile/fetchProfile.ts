import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { ProfileSchemas } from "../../types/profileSchemas"
import { profileActions } from "../../slice/profileSlice"

export const fetchProfile = createAsyncThunk<ProfileSchemas, void>(
  'profile/fetchProfle',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<ProfileSchemas>('https://cinemaguide.skillbox.cc/profile', {withCredentials: true})

    if(!response.data) {
      throw new Error()
    }

    thunkApi.dispatch(profileActions.setProfile(response.data))

    return response.data
    } catch (error) {
      console.log(error)
      return thunkApi.rejectWithValue('error')
    }
  },
)