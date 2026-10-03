import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/portfolio';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="grid min-h-[70vh] place-items-center bg-slate-950 px-5 pt-28 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-black">Proyecto no encontrado</h1>
          <Link to="/projects" className="mt-6 inline-flex text-cyan-300">Volver a proyectos</Link>
        </div>
      </section>
    );
  }

  return (
    <article className="bg-slate-950 px-5 pb-24 pt-32 text-white lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link to="/projects" className="text-sm font-bold text-cyan-300 hover:text-cyan-200">← Volver a proyectos</Link>
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">{project.category}</p>
        <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight md:text-6xl">{project.title}</h1>
        <p className="mt-4 text-slate-500">{project.company}</p>
        <p className="mt-7 max-w-4xl text-xl leading-8 text-slate-300">{project.summary}</p>

        {project.image && <img src={project.image} alt={`Vista principal de ${project.title}`} className="mt-10 aspect-[16/8] w-full rounded-[2rem] border border-white/10 object-cover object-top" />}

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Contexto</p>
            <p className="mt-4 leading-7 text-slate-300">{project.context}</p>
          </section>
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Mi participación</p>
            <p className="mt-4 leading-7 text-slate-300">{project.role}</p>
          </section>
          <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">Problema</p>
            <p className="mt-4 leading-7 text-slate-300">{project.problem}</p>
          </section>
          <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Solución</p>
            <p className="mt-4 leading-7 text-slate-300">{project.solution}</p>
          </section>
        </div>

        {project.process?.length > 0 && (
          <section className="mt-10 rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.03] p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Proceso aplicado</p>
            <h2 className="mt-3 text-3xl font-black">Del problema a una solución centralizada</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {project.process.map((step) => (
                <div key={step.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <h3 className="font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:p-9">
          <h2 className="text-3xl font-black">Funcionalidades principales</h2>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className="rounded-2xl bg-slate-900 px-4 py-4 text-sm leading-6 text-slate-300">
                <i className="bi bi-check2-circle mr-2 text-cyan-300" />{feature}
              </div>
            ))}
          </div>
        </section>

        {project.images.length > 1 && (
          <section className="mt-14">
            <h2 className="text-3xl font-black">Vistas del sistema</h2>
            <p className="mt-3 text-slate-400">Capturas seleccionadas para mostrar el flujo y alcance funcional del proyecto.</p>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {project.images.slice(1).map((image) => (
                <img key={image} src={image} alt={`Captura de ${project.title}`} loading="lazy" className="w-full rounded-3xl border border-white/10 object-cover object-top" />
              ))}
            </div>
          </section>
        )}

        {project.outcome && (
          <section className="mt-10 rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.035] p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Resultado</p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">{project.outcome}</p>
          </section>
        )}

        <section className="mt-14 flex flex-wrap gap-2">
          {project.technologies.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-300">{tech}</span>)}
        </section>
      </div>
    </article>
  );
};

export default ProjectDetail;
