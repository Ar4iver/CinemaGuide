import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { fetchProfile } from "features/profile/model/services/fetchProfile/fetchProfile";
import { profileActions } from "features/profile/model/slice/profileSlice";

interface loginByEmail {
  email: string
  password: string
}

export const loginByEmail = createAsyncThunk<User, loginByEmail>(
  'login/loginByEmail',
  async ({email, password}, thunkApi) => {
    try {
      const response = await axios.post<User>('https://cinemaguide.skillbox.cc/auth/login', {
        email, password
    },
      // {
      //   withCredentials: true
      // }
    )

    if(!response.data) {
      throw new Error()
    }

    thunkApi.dispatch(fetchProfile())

    return response.data
    } catch (error) {
      console.log(error)
      return thunkApi.rejectWithValue('error')
    }
  },
)