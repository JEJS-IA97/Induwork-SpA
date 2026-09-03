import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#efefef] text-black transition-colors dark:bg-zinc-950 dark:text-white">
      <HomePage darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;