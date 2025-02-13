import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-lg z-50 p-4">
      {/* Contenedor general */}
      <div className="container mx-auto flex items-center justify-between md:justify-center relative">
        {/* Nombre centrado en móviles y oculto en desktop */}
        <div className="text-lg font-bold text-gray-800 absolute left-1/2 -translate-x-1/2 md:hidden">
          Nefi Avila
        </div>

        {/* Botón Hamburguesa solo en móviles */}
        <button
          className="md:hidden text-gray-800 ml-auto"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <i className="bi bi-x-lg text-2xl"></i>
          ) : (
            <i className="bi bi-list text-2xl"></i>
          )}
        </button>
      </div>

      {/* Navegación centrada siempre */}
      <nav
        className={`flex flex-col md:flex-row gap-4 items-center justify-center transition-all duration-300 ${
          menuOpen ? "flex" : "hidden md:flex"
        } mt-4 md:mt-0`}
      >
        <a
          href="/"
          className="text-gray-700 hover:text-green-500 transition-colors duration-300"
        >
          Inicio
        </a>
        <a
          href="about"
          className="text-gray-700 hover:text-green-500 transition-colors duration-300"
        >
          Acerca de mí
        </a>
        <a
          href="skills"
          className="text-gray-700 hover:text-green-500 transition-colors duration-300"
        >
          Habilidades
        </a>
        <a
          href="projects"
          className="text-gray-700 hover:text-green-500 transition-colors duration-300"
        >
          Proyectos
        </a>
        <a
          href="services"
          className="text-gray-700 hover:text-green-500 transition-colors duration-300"
        >
          Servicios
        </a>
        <a
          href="contact"
          className="text-gray-700 hover:text-green-500 transition-colors duration-300"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;
