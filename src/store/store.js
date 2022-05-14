import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Auth";
import { categorySlice } from "./Category";

const store = configureStore({
  reducer: { categories: categorySlice.reducer, auth: authSlice.reducer },
});

export default store;
