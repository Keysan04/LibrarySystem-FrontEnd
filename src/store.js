import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/user_sinup_login/userSlic";
import bookReducer from "./pages/book/bookSlice";
const store = configureStore({
  reducer: {
    userInfo: userReducer,
    bookInfo: bookReducer,
  },
});

export default store;
