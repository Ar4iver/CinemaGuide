import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoginSchema } from "../types/loginSchema"
import { loginByEmail } from "../services/loginByEmail/loginByEmail"

const initialState: LoginSchema  = {
  isLoading: false,
  email: '',
  password: ''
}

export const loginSlice = createSlice({
name: 'login',
initialState,
reducers: {
  setUserEmail: (state, action: PayloadAction<string>) => {
    state.email = action.payload
  },

  setPassword: (state, action: PayloadAction<string>) => {
    state.password = action.payload
  },
},
extraReducers: (builder) => {
  builder.addCase(loginByEmail.pending, (state, action) => {
      state.error = undefined
      state.isLoading = true
  }),
  builder.addCase(loginByEmail.fulfilled, (state, action) => {
    state.isLoading = false
  })
  builder.addCase(loginByEmail.rejected, (state, action) => {
    state.isLoading = false
    /**!!!!!!!!!!!!!! */
    state.error = action.payload as string
  })
}
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice