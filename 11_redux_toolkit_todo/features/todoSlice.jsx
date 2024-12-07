import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      id: 1,
      todoText: "hello world 1",
    },
    {
      id: 2,
      todoText: "hello world 2",
    },
    {
      id: 3,
      todoText: "hello world 3",
    },
  ],

  updateTodoId: {
    id: null,
    update: false,
  },
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        todoText: action.payload,
      };
      state.todoList = [newTodo, ...state.todoList];
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter((todo) => {
        return todo.id !== action.payload;
      });
    },

    updateTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.todoText = action.payload.todoText;
        }
        return todo;
      });
    },

    updateTodoWithInput: (state, action) => {
      state.updateTodoId.id = action.payload.id;
      state.updateTodoId.update = action.payload.check;
    },
  },
});

export const { addTodo, removeTodo, updateTodoWithInput, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
