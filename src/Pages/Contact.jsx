const Contact = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Contacto</h2>
        <form className="mt-8 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Nombre" className="p-3 border rounded-lg"/>
            <input type="email" placeholder="Email" className="p-3 border rounded-lg"/>
          </div>
          <textarea placeholder="Mensaje" className="mt-4 p-3 border rounded-lg w-full" rows="5"></textarea>
          <button type="submit" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;