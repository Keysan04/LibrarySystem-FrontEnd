import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  users: {},
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    getPeople: (state, action) => {
      state.users = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { setUser, getPeople } = actions;
export default reducer;
