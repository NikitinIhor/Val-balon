import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "../store";
import { getAllBalloons } from "./ops";

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
      });
  },
});

export const selectAllBalloons = (state: RootState) => state.balloons.balloons;
export const selectLoading = (state: RootState) => state.balloons.loading;
export const selectError = (state: RootState) => state.balloons.error;

export default balloonsSlice.reducer;
