import { configureStore } from "@reduxjs/toolkit";
import combineReducer from "./testSlice";
import asyncReducer from "./asyncSlice";

export const store = configureStore({
  reducer: {
    counter: combineReducer,
    asyncTest: asyncReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
