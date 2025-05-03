import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

axios.defaults.baseURL = "https://valballoons-backend.onrender.com";

export const getAllBalloons = createAsyncThunk(
  "balloons/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/balloons");

      return res.data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
