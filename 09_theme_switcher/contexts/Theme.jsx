import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  let [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    // console.log("Dark");
    setThemeMode("dark");
  };
  const lightTheme = () => {
    // console.log("light");
    setThemeMode("light");
  };
  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
