const Skills = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "Python", "Machine Learning", "Tailwind CSS"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Habilidades</h2>
        <div className="mt-8 flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="m-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;