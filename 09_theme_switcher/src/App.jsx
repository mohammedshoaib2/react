import { useContext } from "react";
import { ThemeContext, ThemeContextProvider } from "../contexts/Theme.jsx";
import Card from "./components/Card.jsx";
import ThemeBtn from "./components/ThemeBtn.jsx";
function App() {
  return (
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
        <div className="w-full max-w-sm mx-auto">
          <ThemeContextProvider>
            <ThemeBtn />
            <Card />
          </ThemeContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
