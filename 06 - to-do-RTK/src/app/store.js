import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todos/todoSlics.js'
import themeReducer from '../features/theme/themeSlice.js'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme : themeReducer
  },
});
