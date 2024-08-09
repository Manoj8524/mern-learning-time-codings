import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    updateCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { addCart, removeCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
