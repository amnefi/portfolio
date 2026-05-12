import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { highlights, profile, projects, services, skillGroups } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const mainSkills = skillGroups.flatMap((group) => group.skills).slice(0, 14);

  return (
    <div className="overflow-hidden bg-slate-950 text-white">
      <section className="relative px-5 pt-32 pb-20 lg:px-8 lg:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.24),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_34%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              TI · Automatización · Backend · Cloud & DevOps
            </span>
            <h1 className="mt-7 text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-5 text-xl font-semibold text-cyan-200">{profile.role}</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Profesional de TI con experiencia en soporte técnico, automatización de tareas, desarrollo de sistemas web, dashboards y administración de herramientas cloud. Mi enfoque es optimizar procesos empresariales y crear soluciones tecnológicas útiles para la operación.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/projects" className="rounded-2xl bg-cyan-300 px-6 py-3 font-bold text-slate-950 shadow-xl shadow-cyan-300/20 transition hover:-translate-y-0.5 hover:bg-cyan-200">
                Ver proyectos
              </Link>
              <a href={profile.cv} download className="rounded-2xl border border-white/15 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                Descargar CV
              </a>
              <Link to="/contact" className="rounded-2xl border border-emerald-300/30 bg-emerald-300/10 px-6 py-3 font-bold text-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-300/20">
                Contactar
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span><i className="bi bi-geo-alt mr-2 text-cyan-300" />{profile.location}</span>
              <span><i className="bi bi-envelope mr-2 text-cyan-300" />{profile.email}</span>
              <span><i className="bi bi-phone mr-2 text-cyan-300" />{profile.phone}</span>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-900 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm text-slate-400">Especialidad</p>
                    <h2 className="mt-1 text-2xl font-bold text-white">Soluciones TI para negocio</h2>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300 text-2xl text-slate-950">
                    <i className="bi bi-cpu" />
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {services.slice(0, 4).map((service) => (
                    <div key={service.title} className="rounded-2xl bg-white/[0.04] p-4">
                      <i className={`bi ${service.icon} text-xl text-cyan-300`} />
                      <h3 className="mt-3 font-semibold text-white">{service.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.metric} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10">
              <p className="text-4xl font-black text-cyan-300">{item.metric}</p>
              <h3 className="mt-3 text-lg font-bold text-white">{item.label}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Proyectos destacados</p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">Resultados aplicados en empresas reales</h2>
            </div>
            <Link to="/projects" className="font-bold text-cyan-300 hover:text-cyan-200">Ver todos →</Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <article key={project.title} className="rounded-3xl border border-white/10 bg-slate-900 p-5 transition hover:-translate-y-1 hover:border-cyan-300/30">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">{project.category}</p>
                <h3 className="mt-3 text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm font-semibold text-emerald-300">{project.impact}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Stack principal</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {mainSkills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
