
const About = () => {
  const certifications = [
    { title: "Certificado en React Avanzado", issuer: "Udemy", year: 2024 },
    { title: "Certificación en Arquitectura y servicios de Azure, Cloud Computing ", issuer: "Azure", year: 2023 },
    { title: "Certificación en Desarrollo Full Stack", issuer: "Platzi", year: 2022 },
    { title: "Certificación en Desarrollo Full Stack", issuer: "Platzi", year: 2022 },
    { title: "Certificación en Desarrollo Full Stack", issuer: "Platzi", year: 2022 },
    { title: "Certificación en Desarrollo Full Stack", issuer: "Platzi", year: 2022 },
    { title: "Certificación en Desarrollo Full Stack", issuer: "Platzi", year: 2022 },
    { title: "Certificación en Desarrollo Full Stack", issuer: "Platzi", year: 2022 },
    { title: "Certificación en Modelado y diseño de bases de datos", issuer: "Oracle", year: 2022 },
  ];

  return (
    <div className="p-20 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Sobre mí</h1>
      <p className="text-lg mb-4 leading-relaxed">
        Soy Nefi Fabrizio Avila, con 21 años, ubicado en Piura, Perú. Desde mis inicios en el mundo de la tecnología, he buscado soluciones innovadoras que no solo mejoren los procesos empresariales, sino que también simplifiquen el trabajo diario de las personas.
      </p>
      <p className="text-lg mb-6 leading-relaxed">
        Mi enfoque se basa en la colaboración, la resolución eficiente de problemas y la búsqueda constante de mejoras. Me apasiona el desarrollo de software, la automatización y el análisis de datos.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Certificaciones</h2>
      <ul className="space-y-3">
        {certifications.map((cert, index) => (
          <li key={index} className="bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-lg font-medium">{cert.title}</p>
            <p className="text-sm text-gray-400">{cert.issuer} - {cert.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
