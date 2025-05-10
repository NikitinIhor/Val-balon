import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "../store";
import { createBalloon, getAllBalloons } from "./ops";

export type RootState = ReturnType<typeof store.getState>;

interface Balloons {
  balloon: string;
  description: string;
}

interface BalloonsState {
  balloons: Balloons[];
  loading: boolean;
  error: boolean;
}

const initialState: BalloonsState = {
  balloons: [],
  loading: false,
  error: false,
};

const balloonsSlice = createSlice({
  name: "balloons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBalloons.pending, (state) => {
        (state.loading = true), (state.error = false);
      })
      .addCase(
        getAllBalloons.fulfilled,
        (state, action: PayloadAction<{ data: Balloons[] }>) => {
          state.loading = false;
          state.error = false;
          state.balloons = action.payload.data;
        }
      )
      .addCase(getAllBalloons.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(createBalloon.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        createBalloon.fulfilled,
        (state, action: PayloadAction<Balloons>) => {
          state.loading = false;
          state.error = false;
          state.balloons.push(action.payload);
        }
      )
      .addCase(createBalloon.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const SelectAllBalloons = (state: RootState) => state.balloons.balloons;
export const SelectCreateBalloon = (state: RootState) =>
  state.balloons.balloons;

export const SelectLoading = (state: RootState) => state.balloons.loading;
export const SelectError = (state: RootState) => state.balloons.error;

export default balloonsSlice.reducer;
