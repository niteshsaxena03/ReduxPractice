import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  //create this todo object having same properties as the elements of todo list
  todos: [{ id: 1, text: "hello world" }],
};

//the below slice has a structure that needs to be followed

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existID = state.todos.find((todo) => todo.id === id);
      if (existID) {
        existID.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
