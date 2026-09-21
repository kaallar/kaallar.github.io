import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import CafeDemo from "./pages/CafeDemo";
import ClinicaDemo from "./pages/ClinicaDemo";
import SalonDemo from "./pages/SalonDemo";
import TiendaDemo from "./pages/TiendaDemo";
import GymDemo from "./pages/GymDemo";

function Layout({ language, setLanguage }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      {isHome && (
        <Navbar
          language={language}
          setLanguage={setLanguage}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={<Home language={language} />}
        />
        <Route path="/cafe" element={<CafeDemo />} />
        <Route path="/clinica" element={<ClinicaDemo />} />
        <Route path="/salon" element={<SalonDemo />} />
        <Route path="/tienda" element={<TiendaDemo />} />
        <Route path="/gym" element={<GymDemo />} />
      </Routes>
    </main>
  );
}

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("kaallar-language") || "es";
  });

  useEffect(() => {
    localStorage.setItem("kaallar-language", language);
  }, [language]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout
        language={language}
        setLanguage={setLanguage}
      />
    </BrowserRouter>
  );
}

export default App;