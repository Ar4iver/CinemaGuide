import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { movieReducer } from "entities/Movie/model/slice/movieSlice";

export function createReduxStore(initialState?: StateSchema) {
   return configureStore<StateSchema>({
    reducer: {
      movie: movieReducer
    },
    devTools: __IS_DEV__
  })
}

