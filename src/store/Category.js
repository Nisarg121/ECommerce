import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryList: [],
  },
  reducers: {
    addCategories: (state, { payload }) => {
      state.categoryList = payload;
    },
  },
});

export const categoryActions = categorySlice.actions;
