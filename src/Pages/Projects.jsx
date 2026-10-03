import { Link } from 'react-router-dom';
import { otherImplementations, projects } from '../data/portfolio';

const Projects = () => (
  <section className="bg-slate-950 px-5 pb-24 pt-32 text-white lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Proyectos</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Sistemas construidos para procesos reales</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Proyectos enfocados en producción, inventarios, logística, activos TI y digitalización de procesos empresariales.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {projects.map((project, index) => (
          <article key={project.slug} className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] lg:grid-cols-[1.05fr_0.95fr]">
            <div className={index % 2 ? 'lg:order-2' : ''}>
              {project.image ? (
                <img src={project.image} alt={`Captura de ${project.title}`} loading="lazy" className="h-full min-h-72 w-full object-cover object-top" />
              ) : (
                <div className="grid min-h-72 h-full place-items-center bg-slate-900 p-8">
                  <span className="grid h-20 w-20 place-items-center rounded-3xl bg-cyan-300/10 text-4xl text-cyan-300"><i className="bi bi-window-stack" /></span>
                </div>
              )}
            </div>
            <div className="p-7 md:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{project.category}</p>
              <h2 className="mt-3 text-3xl font-black">{project.title}</h2>
              <p className="mt-2 text-sm text-slate-500">{project.company}</p>
              <p className="mt-5 leading-7 text-slate-300">{project.summary}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-300">
                    <i className="bi bi-check2-circle mr-2 text-cyan-300" />{item}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-xs text-slate-300">{tech}</span>
                ))}
              </div>

              <Link to={`/projects/${project.slug}`} className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950 hover:bg-cyan-200">
                Ver caso de estudio <i className="bi bi-arrow-up-right" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Otras implementaciones</p>
        <h2 className="mt-3 text-3xl font-black">Más trabajo aplicado</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {otherImplementations.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.technologies.map((tech) => <span key={tech} className="rounded-full bg-slate-900 px-3 py-1.5 text-xs text-slate-300">{tech}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
