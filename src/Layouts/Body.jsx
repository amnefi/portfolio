import { Routes, Route } from "react-router-dom";
import Home from "../Pages/home";
import About from "../Pages/about";
import Services from "../Pages/services";
import Contact from "../Pages/contact";
import NotFound from "../Pages/NotFound"; // Asegúrate de importar NotFound

const Body = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* RUTA 404 - PÁGINA COMPLETA */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Body;
