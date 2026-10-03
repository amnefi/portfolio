import { skillGroups } from '../data/portfolio';

const Skills = () => (
  <section className="bg-slate-950 px-5 pb-24 pt-32 text-white lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Stack</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Tecnologías y plataformas</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Stack construido alrededor de desarrollo web, bases de datos, sistemas empresariales, soporte e infraestructura cloud.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-lg font-black">{group.title}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-slate-900 px-3 py-2 text-sm text-slate-300">{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
