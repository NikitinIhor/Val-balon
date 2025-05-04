import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "../store";
import { signin, signout } from "./ops";

export type RootState = ReturnType<typeof store.getState>;

interface Auth {
  username: string | null;
  password: string | null;
}

interface AuthState {
  admin: Auth;
  isAdmin: boolean;
  loading: boolean;
  error: boolean;
}

const initialState: AuthState = {
  admin: {
    username: null,
    password: null,
  },
  isAdmin: false,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        (state.loading = true), (state.error = false);
        state.isAdmin = false;
      })
      .addCase(
        signin.fulfilled,
        (
          state,
          action: PayloadAction<{ username: string; password: string }>
        ) => {
          state.loading = false;
          state.error = false;
          state.admin = action.payload;
          state.isAdmin = true;
        }
      )
      .addCase(signin.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.isAdmin = false;
      })
      .addCase(signout.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(signout.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
        state.isAdmin = false;
        state.admin = { username: null, password: null };
      })
      .addCase(signout.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const SelectAdmin = (state: RootState) => state.auth.admin;
export const SelectLoading = (state: RootState) => state.auth.loading;
export const SelectError = (state: RootState) => state.auth.error;
export const SelectIsAdmin = (state: RootState) => state.auth.isAdmin;

export default authSlice.reducer;
