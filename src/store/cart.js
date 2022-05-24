import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, { payload: productInfo }) => {
      const product = state.items.find(
        (product) => product.productId === productInfo.productId
      );
      if (product) {
        state.items = state.items.map((product) => {
          if (product.productId === productInfo.productId) {
            product.quantity++;
            state.total += product.price;
            return product;
          }
          return product;
        });
      } else {
        state.items.push({ ...productInfo, quantity: 1 });
        state.total += productInfo.price;
        return state;
      }
    },

    removeFromCart: (state, { payload: productId }) => {
      const product = state.items.find(
        (product) => product.productId === productId
      );
      state.items = state.items.filter(
        (product) => product.productId !== productId
      );
      state.total -= product.quantity * product.price;
      return state;
    },
    
    initializeCart: (state, { payload }) => {
      let items = [];
      let total = 0;

      items = payload.map((item) => {
        total = total + item.productId.price * item.quantity;

        return {
          productId: item.productId._id,
          name: item.productId.name,
          price: item.productId.price,
          productImage: item.productId.productImage,
          quantity: item.quantity,
        };
      });

      return {
        items: items,
        total: total,
      };
    },
  },
});

export const { addToCart, removeFromCart, initializeCart } = cartSlice.actions;
