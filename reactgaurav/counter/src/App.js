import { createContext, useState } from "react";
import "./App.css";
import Component from "./Component";
// export const data = createContext();
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("red");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Component initialCount={0} />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red";
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
