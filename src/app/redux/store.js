import { configureStore } from "@reduxjs/toolkit";
import todo from "./slices/todoSlice";
import contact from "./slices/contactSlice";

export default configureStore({
  reducer: {
    todo,
    contact,
  },
});
