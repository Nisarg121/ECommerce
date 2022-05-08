import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    quantity: 0,
    amount: 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const found = state.items.find((item) => item.id === payload.id);
      if (found) {
        state.items = state.items.map((item) => {
          if (item.id === payload.id) {
            item.quantity++;
            state.quantity++;
            state.amount += item.price;
            return item;
          }
          return item;
        });
      } else {
        state.items.push(payload);
        state.quantity++;
        state.amount += payload.price;
      }
    },
    removeFromCart: (state, { payload }) => {
      const remainItems = [];
      state.items.forEach((item) => {
        if (item.id === payload) {
          item.quantity--;
          state.quantity--;
          state.amount -= item.price;
          if (item.quantity === 0) {
            return;
          }
          remainItems.push(item);
          return;
        }
        remainItems.push(item);
      }); 
      state.items = remainItems;
    },
  },
});

export const cartActions = cartSlice.actions;
