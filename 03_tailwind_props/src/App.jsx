import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl text-gray-900  font-bold mb-10">
        Tailwind Test
      </h1>
      <Card title="My Title 1" btnText="Click Me 1" />
      <Card title="My Title 2" btnText="Click Me 2" />
      <Card title="My Title 3" btnText="Click Me 3" />
    </>
  );
}
export default App;
