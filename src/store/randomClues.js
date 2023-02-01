import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_GAME } from "../api/API";

const initialState = {
  random: [],
};

export const getOneClues = createAsyncThunk(
  "random/getOneClues",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      let res = await axios(`http://jservice.io/api/random`);
      dispatch(getRan(res.data));
    } catch (e) {
      console.log(e);
    }
  }
);

export const cluesSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    getRan: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { getRan } = cluesSlice.actions;
export default cluesSlice.reducer;
