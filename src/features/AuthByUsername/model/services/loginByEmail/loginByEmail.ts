import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";

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
    })

    if(!response.data) {
      throw new Error()
    } 

    thunkApi.dispatch(userActions.setAuthData(response.data))

    console.log(response.data)

    return response.data
    } catch (error) {
      console.log(error)
      return thunkApi.rejectWithValue('error')
    }
  },
)