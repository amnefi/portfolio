import { profile } from '../data/portfolio';

const Contact = () => (
  <section className="bg-slate-950 px-5 pb-24 pt-32 text-white lg:px-8">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Contacto</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">¿Trabajamos juntos?</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Actualmente estoy abierto a oportunidades en desarrollo de software, sistemas empresariales, TI y digitalización de procesos.
        </p>
        <p className="mt-4 text-slate-500">{profile.location}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950 hover:bg-cyan-200">Enviar correo</a>
          <a href={profile.cv} download className="rounded-2xl border border-white/15 px-5 py-3 font-bold hover:bg-white/10">Descargar CV</a>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30">
          <i className="bi bi-linkedin text-3xl text-cyan-300" />
          <h2 className="mt-5 text-xl font-black">LinkedIn</h2>
          <p className="mt-2 text-sm text-slate-400">Experiencia, formación y trayectoria profesional.</p>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30">
          <i className="bi bi-github text-3xl text-cyan-300" />
          <h2 className="mt-5 text-xl font-black">GitHub</h2>
          <p className="mt-2 text-sm text-slate-400">Repositorios y proyectos de desarrollo.</p>
        </a>
        <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30">
          <i className="bi bi-whatsapp text-3xl text-cyan-300" />
          <h2 className="mt-5 text-xl font-black">WhatsApp</h2>
          <p className="mt-2 text-sm text-slate-400">Contacto directo para oportunidades y proyectos.</p>
        </a>
        <a href={`mailto:${profile.email}`} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30">
          <i className="bi bi-envelope text-3xl text-cyan-300" />
          <h2 className="mt-5 text-xl font-black">Email</h2>
          <p className="mt-2 break-all text-sm text-slate-400">{profile.email}</p>
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
