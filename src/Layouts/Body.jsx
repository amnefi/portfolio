import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";

import NotFound from "../Pages/NotFound"; // Asegúrate de importar NotFound

const Body = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />

        {/* RUTA 404 - PÁGINA COMPLETA */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Body;
