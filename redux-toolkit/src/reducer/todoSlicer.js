import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      note: "hello",
      completed: true,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log("add todo");
      state.todos.push({
        id: nanoid(),
        note: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      console.log("add todo");
    },
    updateTodo: (state, action) => {
      console.log("add todo");
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
