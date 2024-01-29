import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  selectedBook: {},
};
const bookSlic = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks: (state, { payload }) => {
      state.books = payload;
    },
    setABook: (state, { payload }) => {
      state.selectedBook = payload;
    },
  },
});

const { reducer, actions } = bookSlic;

export const { setBooks, setABook } = actions;
export default reducer;
