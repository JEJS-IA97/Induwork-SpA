import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TermsConditionsPage from "./pages/TycPage";
import PrivacyPolicesPage from "./pages/PrivacyPage";
import ContactPage from "./pages/ContactPage";
import NosotrosPage from "./pages/AboutUs";

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
      <Routes>
        <Route 
          path="/" 
          element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />} 
        />
        <Route 
          path="/terminos-y-condiciones" 
          element={<TermsConditionsPage darkMode={darkMode} setDarkMode={setDarkMode} />} 
        />
        <Route 
          path="/politica-de-privacidad" 
          element={<PrivacyPolicesPage darkMode={darkMode} setDarkMode={setDarkMode} />} 
        />
        <Route 
          path="/tienda/:categoria" 
          element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />} 
        />
        <Route 
          path="/contactanos" 
          element={<ContactPage darkMode={darkMode} setDarkMode={setDarkMode} />} 
        />
        <Route 
          path="/nosotros" 
          element={<NosotrosPage darkMode={darkMode} setDarkMode={setDarkMode} />} 
        />
      </Routes>
    </div>
  );
}

export default App;