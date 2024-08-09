import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "../slices/feed";
import cartReducer from "../slices/cart";

const store = configureStore({
  reducer: {
    feedInfo: feedReducer,
    cartInfo: cartReducer,
  },
});

export default store;
