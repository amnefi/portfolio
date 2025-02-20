import { useState } from 'react';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  const projects = [
    {
      title: 'Sistema de Gestión - Dakar G',
      description:
        'Sistema interno desarrollado para Dakar G, empresa dedicada a estructuras metálicas y trabajos industriales. Incluye gestión de trabajadores, proveedores, ventas y trabajos pendientes, con panel de métricas y reportes en tiempo real.',
      image: 'src/assets/images/DakarG/DakarG-3.png',
      images: [
        'src/assets/images/DakarG/DakarG-1.png',
        'src/assets/images/DakarG/DakarG-2.png',
        'src/assets/images/DakarG/DakarG-3.png',
        'src/assets/images/DakarG/DakarG-4.png',
        'src/assets/images/DakarG/DakarG-5.png',
        'src/assets/images/DakarG/DakarG-6.png',
        'src/assets/images/DakarG/DakarG-7.png',
      ],
      features: [
        'Dashboard interactivo con métricas clave.',
        'Gestión de trabajadores, proveedores y ventas.',
        'Control de trabajos industriales por fecha.',
        'Reportes y cumplimiento de metas.',
      ],
      technologies: ['React', 'Tailwind CSS', 'Laravel', 'AdminLTE', 'MySQL'],
    },
    {
      title: 'E-commerce - Tienda de Ropa',
      description:
        'Tienda virtual de ropa con carrito de compras y pasarela de pagos. Incluye gestión de productos, categorías y pedidos, con panel de control para administradores y reportes de ventas.',
      image: 'src/assets/images/TiendaRopa/TiendaRopa-3.png',
      images: [
        'src/assets/images/TiendaRopa/TiendaRopa-1.png',
        'src/assets/images/TiendaRopa/TiendaRopa-2.png',
        'src/assets/images/TiendaRopa/TiendaRopa-3.png',
        'src/assets/images/TiendaRopa/TiendaRopa-4.png',
        'src/assets/images/TiendaRopa/TiendaRopa-5.png',
        'src/assets/images/TiendaRopa/TiendaRopa-6.png',
        'src/assets/images/TiendaRopa/TiendaRopa-7.png',
      ],
      features: [
        'Catálogo de productos con filtros y búsqueda.',
        'Carrito de compras con pasarela de pagos.',
        'Gestión de productos y categorías.',
        'Panel de control para administradores.',
      ],
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Blog - Blog de Tecnología',
      description:
        'Blog de tecnología con publicación de artículos y comentarios. Incluye gestión de usuarios, roles y permisos, con panel de control para administradores y reportes de interacciones.',
      image: 'src/assets/images/BlogTecnologia/BlogTecnologia-3.png',
      images: [
        'src/assets/images/BlogTecnologia/BlogTecnologia-1.png',
        'src/assets/images/BlogTecnologia/BlogTecnologia-2.png',
        'src/assets/images/BlogTecnologia/BlogTecnologia-3.png',
        'src/assets/images/BlogTecnologia/BlogTecnologia-4.png',
        'src/assets/images/BlogTecnologia/BlogTecnologia-5.png',
        'src/assets/images/BlogTecnologia/BlogTecnologia-6.png',
        'src/assets/images/BlogTecnologia/BlogTecnologia-7.png',
      ],
      features: [
        'Publicación de artículos y comentarios.',
        'Gestión de usuarios, roles y permisos.',
        'Panel de control para administradores.',
        'Reportes de interacciones y comentarios.',
      ],
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Red Social - Red de Amigos',
      description:
        'Red social de amigos con publicación de estados y fotos. Incluye gestión de perfiles, solicitudes de amistad y mensajes privados, con panel de control para administradores y reportes de interacciones.',
      image: 'src/assets/images/RedAmigos/RedAmigos-3.png',
      images: [
        'src/assets/images/RedAmigos/RedAmigos-1.png',
        'src/assets/images/RedAmigos/RedAmigos-2.png',
        'src/assets/images/RedAmigos/RedAmigos-3.png',
        'src/assets/images/RedAmigos/RedAmigos-4.png',
        'src/assets/images/RedAmigos/RedAmigos-5.png',
        'src/assets/images/RedAmigos/RedAmigos-6.png',
        'src/assets/images/RedAmigos/RedAmigos-7.png',
      ],
      features: [
        'Publicación de estados y fotos.',
        'Gestión de perfiles y solicitudes de amistad.',
        'Mensajes privados y notificaciones en tiempo real.',
        'Panel de control para administradores.',
      ],
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    },
    
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover cursor-pointer rounded-t-2xl transition-transform transform hover:scale-105"
                onClick={() => setSelectedImage(project.image)}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="mt-3 text-gray-600">{project.description}</p>
                <ul className="mt-3 space-y-1 text-gray-700">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-green-500 mr-2">✔️</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedImages(project.images)}
                  className="block mt-6 text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                  Ver detalles →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-auto max-w-6xl max-h-[95vh] flex justify-center items-center">
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-h-[95vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl cursor-pointer bg-black bg-opacity-50 rounded-full px-3"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {selectedImages && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImages(null)}
        >
          <div
            className="relative bg-gray-800 p-4 rounded-lg max-w-6xl max-h-[90vh] overflow-y-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl cursor-pointer bg-black bg-opacity-50 rounded-full px-3"
              onClick={() => setSelectedImages(null)}
            >
              ×
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {selectedImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Imagen ${i + 1}`}
                  className="w-full h-auto rounded-lg object-cover cursor-pointer shadow-lg"
                  onClick={() => setExpandedImage(img)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {expandedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative w-auto max-w-6xl max-h-[95vh] flex justify-center items-center">
            <img
              src={expandedImage}
              alt="Imagen ampliada"
              className="max-h-[95vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl cursor-pointer bg-black bg-opacity-50 rounded-full px-3"
              onClick={() => setExpandedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
