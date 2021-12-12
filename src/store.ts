import { configureStore } from "@reduxjs/toolkit";
import combineReducer from "./testSlice";

// const rootReducer = combineReducer({});
// export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: {
    counter: combineReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
