import { skillGroups, softSkills } from '../data/portfolio';

const Skills = () => {
  return (
    <section className="bg-slate-950 px-5 pt-32 pb-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Skills</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Tecnologías y habilidades</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Stack orientado a desarrollo web, soporte TI, automatización, datos, cloud y prácticas DevOps junior.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xl font-black text-white">{group.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-slate-900 px-3 py-2 text-sm text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-7">
          <h2 className="text-2xl font-black text-white">Habilidades blandas</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {softSkills.map((skill) => (
              <div key={skill} className="rounded-2xl bg-slate-950/50 px-4 py-3 text-slate-200">
                <i className="bi bi-check2-circle mr-2 text-emerald-300" />{skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
