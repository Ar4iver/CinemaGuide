import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RegisterSchema } from "../types/registerSchema"
import { registerUser } from "../services/registerUser/registerUser"

const initialState: RegisterSchema  = {
  isLoading: false,
  email: '',
  password: '',
  surname: '',
  name: ''
}

export const registerSlice = createSlice({
name: 'registerForm',
initialState,
reducers: {
  setUserEmail: (state, action: PayloadAction<string>) => {
    state.email = action.payload
  },

  setPassword: (state, action: PayloadAction<string>) => {
    state.password = action.payload
  },

  setName: (state, action: PayloadAction<string>) => {
    state.name = action.payload
  },

  setSurname: (state, action: PayloadAction<string>) => {
    state.surname = action.payload
  }
},

extraReducers: (builder) => {
  builder.addCase(registerUser.pending, (state, action) => {
      state.error = undefined
      state.isLoading = true
  }),
  builder.addCase(registerUser.fulfilled, (state, action) => {
    state.isLoading = false
  })
  builder.addCase(registerUser.rejected, (state, action) => {
    state.isLoading = false
    /**!!!!!!!!!!!!!! */
    state.error = action.payload as string
  })
}
})

export const { actions: registerActions } = registerSlice
export const { reducer: registerReducer } = registerSlice