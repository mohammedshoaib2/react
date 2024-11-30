import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div className="h-screen w-full" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-row flex-wrap justify-center align-middle bottom-10 inset-x-0 px-2">
          <div className="bg-white px-3 py-2 flex flex-wrap rounded-3xl gap-3 shadow-lg">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-black"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("brown")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "brown" }}
            >
              Brown
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-4 py-1 rounded-full text-black"
              style={{ backgroundColor: "lavender" }}
            >
              Lavander
            </button>
            <button
              onClick={() => setColor("teal")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "teal" }}
            >
              Teal
            </button>
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
