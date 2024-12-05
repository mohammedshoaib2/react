import React, { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useTodoContext } from "./contexts/TodoContextProvider";

function App() {
  let { todoList } = useTodoContext();

  return (
    <div className="p-20 flex flex-col justify-center items-center gap-10 ">
      <h1 className="text-white font-bold text-2xl w-full text-center">
        Manage Your Todo's
      </h1>

      <TodoForm />

      <div className="w-2/4 flex flex-col gap-4 justify-center items-center">
        {todoList?.length > 0 ? (
          todoList.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })
        ) : (
          <>
            <p className="text-xl text-white text-center">"No Todo's Found"</p>
            <p className="text-xl text-white text-center">
              Create a Todo ✍️ now
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
