const Skills = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Habilidades</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Habilidades Técnicas</h3>
          <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
            <li>Desarrollo Backend - Django Rest Framework (Python)</li>
            <li>Modelado y diseño de bases de datos (Oracle)</li>
            <li>Microsoft Azure - Arquitectura Cloud</li>
            <li>Power BI - Análisis y Visualización de Datos</li>
            <li>Metodologías Ágiles - Scrum</li>
            <li>Git y control de versiones</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700">Habilidades Blandas</h3>
          <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
            <li>Resolución de problemas y creatividad</li>
            <li>Trabajo en equipo y comunicación</li>
            <li>Proactividad y responsabilidad</li>
            <li>Explicación de conceptos técnicos</li>
            <li>Capacidad de aprendizaje rápido</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
