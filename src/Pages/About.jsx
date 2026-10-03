import { complementaryEducation, education, profile, valueProps } from '../data/portfolio';

const About = () => (
  <section className="bg-slate-950 px-5 pb-24 pt-32 text-white lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Sobre mí</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Software, procesos y operación</h1>
          <p className="mt-7 text-lg leading-8 text-slate-300">
            Soy {profile.shortName}, profesional de TI y desarrollo de software con experiencia en soporte técnico, sistemas empresariales, ERP y digitalización de procesos.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            He trabajado directamente en Sistemas, Almacén y Logística, combinando conocimientos tecnológicos con experiencia operativa en inventarios, producción y abastecimiento. Esa experiencia me permite analizar necesidades desde la operación y convertirlas en herramientas que mejoren el control, la trazabilidad y la eficiencia.
          </p>

          <div className="mt-9 grid gap-4">
            {valueProps.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-300/10 text-xl text-cyan-300"><i className={`bi ${item.icon}`} /></span>
                <div>
                  <h2 className="font-black">{item.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Educación</p>
            {education.map((item) => (
              <div key={item.title} className="mt-5 rounded-2xl bg-slate-900 p-5">
                <h2 className="text-lg font-black">{item.title}</h2>
                <p className="mt-2 text-cyan-300">{item.institution}</p>
                <p className="mt-1 text-sm text-slate-500">{item.period}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Formación complementaria</p>
            <div className="mt-5 space-y-3">
              {complementaryEducation.map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-900 px-5 py-4">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.institution} · {item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
