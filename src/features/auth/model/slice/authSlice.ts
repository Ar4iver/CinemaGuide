import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AuthSchema } from "../types/authSchemas"

const initialState: AuthSchema  = {
  form: 'login'
}

export const authSlice = createSlice({
name: 'auth',
initialState,
reducers: {
  setFormType: (state, action: PayloadAction<'login' | 'register'>) => {
      state.form = action.payload;
  },
},
})

export const { actions: authActions } = authSlice
export const { reducer: authReducer } = authSlice