import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileDetails, ProfileSchemas } from "../types/profileSchemas";
import { fetchProfile } from "../services/fetchProfile/fetchProfile";

const initialState: ProfileDetails  = {
  isLoading: false,
  error: '',
  data: undefined
}

export const profileSlice = createSlice({
name: 'profile',
initialState,
reducers: {
  setProfile: (state, action: PayloadAction<ProfileSchemas>) => {
    state.data = action.payload
  }
},

extraReducers: (builder) => {
  builder.addCase(fetchProfile.pending, (state, action) => {
      state.error = undefined
      state.isLoading = true
  }),
  builder.addCase(fetchProfile.fulfilled, (state, action) => {
    state.isLoading = false
  })
  builder.addCase(fetchProfile.rejected, (state, action) => {
    state.isLoading = false
    /**!!!!!!!!!!!!!! */
    state.error = action.payload as string
  })
}
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice