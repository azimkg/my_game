import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_GAME } from "../api/API";

const initialState = {
  category: [],
};

export const getAllCategories = createAsyncThunk(
  "category/getAllCategory",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      let res = await axios(`http://jservice.io/api/categories?count=100`);
      dispatch(getCategory(res.data));
    } catch (e) {
      console.log(e);
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { getCategory } = categorySlice.actions;
export default categorySlice.reducer;
