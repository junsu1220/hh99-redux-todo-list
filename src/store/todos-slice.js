import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: "qwzxq2as",
        isDone: false,
        title: "리액트 공부하기",
        body: "리액트 기초를 공부해봅시다.",
      },
      {
        id: "qwred4qw",
        isDone: true,
        title: "리액트 공부하기",
        body: "리액트 기초를 공부해봅시다.",
      },
    ],
    todo: {},
  },
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;
      state.todos.push({
        id: newTodo.id,
        title: newTodo.title,
        body: newTodo.body,
        isDone: newTodo.isDone,
      });
    },
    deleteTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    toggleStatusTodo(state, action) {
      state.todos = state.todos.map((todo) => {
        if (action.payload === todo.id) {
          let done = todo.isDone ? false : true;
          return { ...todo, isDone: done };
        } else {
          return todo;
        }
      });
    },
    getTodoByID(state, action) {
      const todoTmp = state.todos.filter((todo) => todo.id === action.payload);
      state.todo = todoTmp[0];
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice;
