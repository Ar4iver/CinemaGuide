import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileDetails, ProfileSchemas } from "../types/profileSchemas";
import { fetchProfile } from "../services/fetchProfile/fetchProfile";
import { MovieSchema } from "entities/Movie";
import { getFavoritesMovie } from "../services/getFavoritesMovies/getFavoritesMovies";
import { addFavoritesMovie } from "../services/addFavoritesMovie/addFavoritesMovie";

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
  },
},

extraReducers: (builder) => {
  builder.addCase(fetchProfile.pending, (state, action) => {
      state.error = undefined
      state.isLoading = true
  }),
  builder.addCase(fetchProfile.fulfilled, (state, action) => {
    state.isLoading = false
  }),
  builder.addCase(fetchProfile.rejected, (state, action) => {
    state.isLoading = false
    /**!!!!!!!!!!!!!! */
    state.error = action.payload as string
  }),
  builder.addCase(getFavoritesMovie.pending, (state) => {
    state.isLoading = true;
    state.error = undefined;
  }),
  builder.addCase(getFavoritesMovie.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload as string;
  });
  builder.addCase(addFavoritesMovie.pending, (state) => {
    state.error = undefined
    state.isLoading = true
  });
  builder.addCase(addFavoritesMovie.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload as string;
  });
  builder.addCase(addFavoritesMovie.fulfilled, (state, action: PayloadAction<{ id: string }>) => {
    if (state.data?.favorites) {
      state.data.favorites.push(action.payload.id);
    }
  });
}
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice