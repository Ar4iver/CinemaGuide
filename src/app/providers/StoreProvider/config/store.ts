import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { movieReducer } from "entities/Movie/model/slice/movieSlice";
import { userReducer } from "entities/User";
import { loginReducer } from "features/AuthByUsername";
import { useDispatch } from "react-redux";

export function createReduxStore(initialState?: StateSchema) {

  const rootReducers: ReducersMapObject<StateSchema> = {
    movie: movieReducer,
    user: userReducer,
    loginForm: loginReducer
  }

   return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__
  })
}

export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

