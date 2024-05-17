import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../reducer/todoSlicer";

export const TodoStore = configureStore({
  reducer: todoSlice.reducer,
});
