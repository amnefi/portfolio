import { experience } from '../data/portfolio';

const Experience = () => (
  <section className="bg-slate-950 px-5 pb-24 pt-32 text-white lg:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Experiencia</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Tecnología con contexto de negocio</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Mi experiencia combina desarrollo, soporte TI y operación. Esto me permite entender requerimientos desde el usuario y transformarlos en flujos y soluciones digitales.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        {experience.map((job, index) => (
          <article key={`${job.role}-${job.period}`} className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                <p className="text-sm font-bold text-cyan-300">{job.company}</p>
                <h2 className="mt-1 text-2xl font-black">{job.role}</h2>
                <p className="mt-2 text-sm text-slate-500">{job.location}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-300">{job.period}</span>
            </div>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {job.points.map((point) => (
                <li key={point} className="rounded-2xl bg-slate-900/70 px-4 py-4 text-sm leading-6 text-slate-300">
                  <i className="bi bi-arrow-right-short mr-1 text-cyan-300" />{point}
                </li>
              ))}
            </ul>
            {index < 2 && <span className="absolute right-7 top-0 h-1 w-24 rounded-b-full bg-cyan-300/60" />}
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
