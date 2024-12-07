import React from "react";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";
import { useSelector } from "react-redux";
function App() {
  let selector = useSelector((state) => {
    return state.todoList;
  });

  return (
    <div className="main bg-gray-900">
      <div className="lg:w-3/5 md:w-4/5 w-4/5 flex flex-col gap-10">
        <TodoInput />
        {selector.map((todo) => {
          return <Todos key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
}

export default App;
