const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <p>© {currentYear} Nefi Avila. Todos los derechos reservados.</p>
        <div className="mt-4">
          <a href="https://linkedin.com/in/nefi-avila" className="mx-2">LinkedIn</a>
          <a href="https://github.com/amnefi" className="mx-2">GitHub</a>
          <a href="https://wa.me/qr/JY5G23LOWJG7J1" className="mx-2">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
