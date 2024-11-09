import { configureStore } from "@reduxjs/toolkit";
import listMovieSlice from "./slices/listMovieSlice";
import detailMovieSlice from "./slices/detailMovieSlice";
import userSlice from "./slices/user.slice";
import themeSlice from "./slices/themeSlice";

// tạo store
export const store = configureStore({
  reducer: {
    listMovie: listMovieSlice,
    detailMovie: detailMovieSlice,
    user: userSlice,
    theme: themeSlice,
  },
});

export default store;
