import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./Category";

const store = configureStore({
  reducer: categorySlice.reducer,
});

export default store;