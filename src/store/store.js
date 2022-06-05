import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Auth";
import { cartSlice } from "./cart";
import { categorySlice } from "./Category";
import { userInfoSlice } from "./UserInfo";

const store = configureStore({
  reducer: {
    categories: categorySlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    useInfo: userInfoSlice.reducer,
  },
});

export default store;
