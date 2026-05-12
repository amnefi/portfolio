import { education, experience, profile } from '../data/portfolio';

const About = () => {
  return (
    <section className="bg-slate-950 px-5 pt-32 pb-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Sobre mí</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Perfil profesional</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Soy {profile.name}, profesional de TI con experiencia en soporte técnico, automatización de tareas, mejora de procesos empresariales, desarrollo de sistemas web y creación de dashboards. Me interesa conectar la tecnología con necesidades reales del negocio para hacer que los procesos sean más ordenados, medibles y eficientes.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              He trabajado en áreas de sistemas, recursos humanos, administración, ventas y desarrollo de software. Esa combinación me permite entender problemas operativos desde varios puntos de vista y proponer soluciones prácticas con herramientas digitales.
            </p>

            <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
              <h2 className="text-xl font-bold text-white">Lo que puedo aportar</h2>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li><i className="bi bi-check-circle mr-2 text-cyan-300" />Automatización y ordenamiento de procesos internos.</li>
                <li><i className="bi bi-check-circle mr-2 text-cyan-300" />Soporte técnico con enfoque en continuidad operativa.</li>
                <li><i className="bi bi-check-circle mr-2 text-cyan-300" />Desarrollo de soluciones web y dashboards para la toma de decisiones.</li>
                <li><i className="bi bi-check-circle mr-2 text-cyan-300" />Documentación, seguimiento y mejora continua.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-black text-white">Experiencia reciente</h2>
              <div className="mt-6 space-y-5">
                {experience.slice(0, 3).map((job) => (
                  <article key={`${job.role}-${job.company}`} className="border-l border-cyan-300/30 pl-5">
                    <p className="text-sm text-cyan-300">{job.period}</p>
                    <h3 className="mt-1 text-lg font-bold text-white">{job.role}</h3>
                    <p className="text-slate-400">{job.company} · {job.location}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{job.points[0]}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-black text-white">Formación</h2>
              <div className="mt-6 grid gap-4">
                {education.map((item) => (
                  <article key={`${item.title}-${item.institution}`} className="rounded-2xl bg-slate-900 p-4">
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-cyan-300">{item.institution}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.period}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
