import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { experience, profile, projects, services, skillGroups, valueProps } from '../data/portfolio';

const Home = () => {
  const reduceMotion = useReducedMotion();
  const featuredProjects = projects.filter((project) => project.featured);
  const mainSkills = skillGroups.flatMap((group) => group.skills).slice(0, 16);
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.45 },
      };

  return (
    <div className="overflow-hidden bg-slate-950 text-white">
      <section className="relative px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(34,211,238,0.05),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div {...reveal}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-300" /> Disponible para nuevas oportunidades
            </span>
            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Sistemas empresariales · Desarrollo de software · Digitalización
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-white md:text-7xl">{profile.shortName}</h1>
            <p className="mt-5 text-2xl font-bold text-slate-200 md:text-3xl">{profile.role}</p>
            <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-cyan-100">{profile.tagline}</p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{profile.summary}</p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
              Experiencia combinando desarrollo, TI, ERP, producción, inventarios y logística.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/projects" className="rounded-2xl bg-cyan-300 px-6 py-3 font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">
                Ver proyectos
              </Link>
              <a href={profile.cv} download className="rounded-2xl border border-white/15 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                Descargar CV
              </a>
              <Link to="/contact" className="rounded-2xl border border-white/15 bg-white/[0.03] px-6 py-3 font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-300/[0.06] hover:text-cyan-200">
                Contactarme
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <span><i className="bi bi-geo-alt mr-2 text-cyan-300" />{profile.location}</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-200"><i className="bi bi-linkedin mr-2" />LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-cyan-200"><i className="bi bi-github mr-2" />GitHub</a>
            </div>
          </motion.div>

          <motion.div {...reveal} className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/30 backdrop-blur md:p-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/90 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Mi enfoque</p>
                <h2 className="mt-3 text-2xl font-black">Tecnología conectada con la operación</h2>
                <div className="mt-6 space-y-4">
                  {valueProps.map((item) => (
                    <div key={item.title} className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-lg text-cyan-300">
                        <i className={`bi ${item.icon}`} />
                      </span>
                      <div>
                        <h3 className="font-bold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal} className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Proyectos destacados</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">Sistemas construidos alrededor de problemas reales</h2>
            </div>
            <Link to="/projects" className="font-bold text-cyan-300 hover:text-cyan-200">Ver todos →</Link>
          </motion.div>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <motion.article key={project.slug} {...reveal} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/10">
                {project.image ? <img src={project.image} alt={`Vista de ${project.title}`} loading="lazy" className="aspect-[16/9] w-full object-cover object-top" /> : <div className="grid aspect-[16/9] place-items-center bg-slate-900"><i className="bi bi-window-stack text-5xl text-cyan-300" /></div>}
                <div className="p-6 md:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{project.category}</p>
                  <h3 className="mt-3 text-2xl font-black">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.highlights.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-xs text-slate-300">{item}</span>
                    ))}
                  </div>
                  <Link to={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-300 hover:text-cyan-200">
                    Ver caso de estudio <i className="bi bi-arrow-up-right" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...reveal}>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Experiencia reciente</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">De TI a la operación, y de la operación al software</h2>
            <p className="mt-5 leading-7 text-slate-400">
              Haber trabajado directamente en Sistemas y luego en Almacén y Logística me permitió entender los procesos desde ambos lados: usuario y desarrollador.
            </p>
            <Link to="/experience" className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-300 hover:text-cyan-200">Ver experiencia completa <i className="bi bi-arrow-right" /></Link>
          </motion.div>
          <div className="space-y-4">
            {experience.slice(0, 2).map((job) => (
              <motion.article key={`${job.role}-${job.period}`} {...reveal} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-black">{job.role}</h3>
                    <p className="mt-1 text-cyan-300">{job.company}</p>
                  </div>
                  <span className="text-sm text-slate-400">{job.period}</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">{job.points[job.points.length - 1]}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal} className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Áreas de experiencia</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Tres formas en las que puedo aportar</h2>
          </motion.div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <motion.article key={service.title} {...reveal} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-xl text-cyan-300"><i className={`bi ${service.icon}`} /></span>
                <h3 className="mt-5 text-xl font-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <motion.div {...reveal} className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Stack</p>
              <h2 className="mt-3 text-3xl font-black">Tecnologías con experiencia práctica</h2>
            </div>
            <Link to="/skills" className="font-bold text-cyan-300 hover:text-cyan-200">Ver stack completo →</Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {mainSkills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200">{skill}</span>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="px-5 pb-24 pt-10 lg:px-8">
        <motion.div {...reveal} className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.06] p-8 text-center md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Contacto</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Conversemos</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">Actualmente estoy abierto a oportunidades en desarrollo de software, sistemas empresariales, TI y digitalización de procesos.</p>
          <Link to="/contact" className="mt-7 inline-flex rounded-2xl bg-cyan-300 px-6 py-3 font-black text-slate-950 hover:bg-cyan-200">Contactarme</Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
