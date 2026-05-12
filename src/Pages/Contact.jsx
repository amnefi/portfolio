import { profile } from '../data/portfolio';

const Contact = () => {
  return (
    <section className="bg-slate-950 px-5 pt-32 pb-20 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Contacto</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Conversemos sobre oportunidades</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Disponible para roles de Soporte TI, Auxiliar de Sistemas, Backend Junior, Analista Power BI Junior, Automatización de Procesos o Cloud/DevOps Junior.
          </p>

          <div className="mt-8 space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300"><i className="bi bi-envelope" /></span>
              <span>
                <span className="block text-sm text-slate-400">Email</span>
                <span className="font-bold text-white">{profile.email}</span>
              </span>
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-emerald-300/40 hover:bg-emerald-300/10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-300/10 text-emerald-300"><i className="bi bi-whatsapp" /></span>
              <span>
                <span className="block text-sm text-slate-400">WhatsApp</span>
                <span className="font-bold text-white">{profile.phone}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300"><i className="bi bi-geo-alt" /></span>
              <span>
                <span className="block text-sm text-slate-400">Ubicación</span>
                <span className="font-bold text-white">{profile.location}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <h2 className="text-2xl font-black text-white">Enlaces profesionales</h2>
          <p className="mt-3 leading-7 text-slate-300">
            Actualiza los enlaces si tu GitHub o LinkedIn tienen una URL diferente. Dejé los botones listos para reemplazarlos rápidamente desde el archivo <span className="text-cyan-300">src/data/portfolio.js</span>.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
              <i className="bi bi-linkedin text-3xl text-cyan-300" />
              <h3 className="mt-4 text-xl font-bold text-white">LinkedIn</h3>
              <p className="mt-2 text-sm text-slate-400">Perfil profesional, experiencia y certificaciones.</p>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
              <i className="bi bi-github text-3xl text-cyan-300" />
              <h3 className="mt-4 text-xl font-bold text-white">GitHub</h3>
              <p className="mt-2 text-sm text-slate-400">Repositorios, proyectos y código fuente.</p>
            </a>
          </div>

          <a href={profile.cv} download className="mt-8 inline-flex rounded-2xl bg-cyan-300 px-6 py-3 font-black text-slate-950 shadow-xl shadow-cyan-300/20 transition hover:bg-cyan-200">
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
