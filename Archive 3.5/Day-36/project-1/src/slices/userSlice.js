import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      let newUsers = [...state.users, action.payload];
      localStorage.setItem("userData", JSON.stringify(newUsers));
      state.users = newUsers;
    },
    removeUser: (state, action) => {
      const newUsers = state.users.filter((user) => user.id !== action.payload);
      localStorage.setItem("userData", JSON.stringify(newUsers));
      state.users = newUsers;
    },
    setUsers: (state, action) => {
      state.users = [...action.payload];
    },
  },
});

export const { addUser, removeUser, setUsers } = userSlice.actions;

export default userSlice.reducer;
