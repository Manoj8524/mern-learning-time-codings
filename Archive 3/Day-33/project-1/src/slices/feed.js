import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feed: [],
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    addFeed: (state, action) => {
      state.feed = [...state.feed, action.payload];
    },
  },
});

export const { addFeed } = feedSlice.actions;

export default feedSlice.reducer;
