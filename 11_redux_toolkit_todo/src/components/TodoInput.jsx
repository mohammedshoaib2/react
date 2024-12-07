import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  updateTodo,
  updateTodoWithInput,
} from "../../features/todoSlice";

function TodoInput() {
  let [input, setInput] = useState("");
  const dispatch = useDispatch();
  let [forUpdate, setForUpdate] = useState(false);

  const selector = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    if (selector.updateTodoId.update) {
      let updateId = selector.todoList.filter((todo) => {
        return todo.id === selector.updateTodoId.id;
      });
      let text = updateId[0].todoText;
      setInput(text);
      setForUpdate(true);
    }
  }, [selector]);

  return (
    <div className="flex justify-center items-stretch w-full">
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="p-4 rounded-l-md outline-none w-full"
        type="text"
        placeholder="Add Todo"
        value={input}
      />
      <button
        onClick={(e) => {
          e.preventDefault();

          if (!forUpdate) {
            dispatch(addTodo(input.trim()));
            console.log("called");
          } else {
            dispatch(
              updateTodo({
                id: selector.updateTodoId.id,
                todoText: input,
              })
            );
            dispatch(updateTodoWithInput({ id: null, check: false }));
            setForUpdate(false);
          }
          setInput("");
        }}
        className="bg-slate-700 text-white px-4 py-2 rounded-r-md"
      >
        {forUpdate ? "Update" : "Submit"}
      </button>
    </div>
  );
}

export default TodoInput;
