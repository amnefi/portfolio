const Projects = () => {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción del proyecto 1.",
      image: "url-de-la-imagen",
      link: "#"
    },
    {
      title: "Proyecto 2",
      description: "Descripción del proyecto 2.",
      image: "url-de-la-imagen",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Proyectos</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg"/>
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="mt-2 text-gray-700">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-blue-600">Ver más</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;