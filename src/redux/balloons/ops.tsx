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

export const createBalloon = createAsyncThunk(
  "balloons/create",
  async (newBalloon: FormData, thunkAPI) => {
    try {
      const res = await axios.post("/balloons", newBalloon, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updateBalloon = createAsyncThunk(
  "balloons/update",
  async (updatedBalloon: { id: string; data: FormData }, thunkAPI) => {
    try {
      const res = await axios.patch(
        `/balloons/${updatedBalloon.id}`,
        updatedBalloon.data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return res.data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
