import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodoWithInput } from "../../features/todoSlice";
import TodoInput from "./TodoInput";
function Todos({ todo }) {
  let dispatch = useDispatch();
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center bg-white pl-6 pr-4 py-4 rounded-lg">
        <p className="break-words">{todo.todoText}</p>
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              dispatch(updateTodoWithInput({ id: todo.id, check: true }));
            }}
            className="bg-green-400 p-3 rounded-lg "
          >
            ✏
          </button>
          <button
            onClick={(e) => {
              dispatch(updateTodoWithInput({ id: null, check: false }));
              dispatch(removeTodo(todo.id));
            }}
            className="bg-green-400 p-3 rounded-lg "
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todos;
