import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todos/todoSlice.js'
import themeReducer from '../features/theme/themeSlice.js'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme : themeReducer
  },
});
