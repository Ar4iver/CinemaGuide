import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { User } from "entities/User"
import { authActions } from "features/auth/model/slice/authSlice"

interface registerUser {
  email: string
  password: string
  surname: string
  name: string
}

export const registerUser = createAsyncThunk<User, registerUser>(
  'register/registerUser',
  async ({email, password, name, surname}, thunkApi) => {
    try {
      const response = await axios.post<User>('https://cinemaguide.skillbox.cc/user', {
        email, password, name, surname
    }, {withCredentials: true})

    if(!response.data) {
      throw new Error()
    } 

    thunkApi.dispatch(authActions.setFormType('success'))

    return response.data
    } catch (error) {
      console.log(error)
      return thunkApi.rejectWithValue('error')
    }
  },
)