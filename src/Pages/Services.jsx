import { services } from '../data/portfolio';

const Services = () => (
  <section className="bg-slate-950 px-5 pb-24 pt-32 text-white lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Áreas de experiencia</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Dónde puedo aportar</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Mi perfil combina desarrollo de software, conocimiento de procesos empresariales y soporte TI para resolver necesidades operativas con tecnología.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300/10 text-2xl text-cyan-300"><i className={`bi ${service.icon}`} /></span>
            <h2 className="mt-6 text-2xl font-black">{service.title}</h2>
            <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
