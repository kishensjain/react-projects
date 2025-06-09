import { createSlice } from "@reduxjs/toolkit";

let nextId = 1;

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: nextId++,
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed != todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer