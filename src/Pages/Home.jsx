const Home = () => {
  return (
    <section className="text-center py-20 bg-gray-100">
      <h1 className="text-4xl font-extrabold text-gray-800">¡Hola, soy Nefi Avila!</h1>
      <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
        Desarrollador de Software apasionado por la optimización de procesos, automatización e Inteligencia de Negocios.
        Mi enfoque está en crear soluciones tecnológicas que generen impacto real.
      </p>
      <a
        href="contact"
        className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
      >
        ¡Trabajemos juntos!
      </a>
    </section>
  );
};

export default Home;
