import { configureStore } from "@reduxjs/toolkit";
import balloonsReducer from "./balloons/slice";

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    balloons: balloonsReducer,
  },
});
