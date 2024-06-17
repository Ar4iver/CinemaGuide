import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { movieReducer } from "entities/Movie/model/slice/movieSlice";
import { userReducer } from "entities/User";
import { useDispatch } from "react-redux";
import { authReducer } from "features/auth/model/slice/authSlice";
import { loginReducer } from "features/auth/forms/AuthByEmail";
import { registerReducer } from "features/auth/forms/AuthByEmail/model/slice/registerSlice";
import { profileReducer } from "features/profile/model/slice/profileSlice";
import { searchReducer } from "features/search/model/slice/searchSlice";

export function createReduxStore(initialState?: StateSchema) {

  const rootReducers: ReducersMapObject<StateSchema> = {
    movie: movieReducer,
    user: userReducer,
    search: searchReducer,
    auth: authReducer,
    loginForm: loginReducer,
    registerForm: registerReducer,
    profile: profileReducer
  }

   return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__
  })
}

export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

