import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

axios.defaults.baseURL = "https://valballoons-backend.onrender.com";

export const signin = createAsyncThunk(
  "auth/signin",
  async (userData: { username: string; password: string }, thunkAPI) => {
    try {
      const res = await axios.post("/auth/signin", userData);

      return res.data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const signout = createAsyncThunk("auth/signout", async (_, thunkAPI) => {
  try {
    const res = await axios.delete("/auth/signout");

    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.message);
  }
});
