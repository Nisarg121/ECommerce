import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Auth";
import { cartSlice } from "./cart";
import { categorySlice } from "./Category";

const store = configureStore({
  reducer: {
    categories: categorySlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
