import { services } from '../data/portfolio';

const Services = () => {
  return (
    <section className="bg-slate-950 px-5 pt-32 pb-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Servicios</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Áreas en las que puedo aportar</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Mi perfil combina soporte TI, automatización, desarrollo web, análisis de datos y conceptos cloud para resolver problemas operativos y mejorar flujos de trabajo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300/10 text-2xl text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                <i className={`bi ${service.icon}`} />
              </span>
              <h2 className="mt-6 text-xl font-black text-white">{service.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
