import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    //create this todo object having same properties as the elements of todo list
  todos: [{ id: 1, text: "hello world" }],
};
