import { profile } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-10 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center lg:px-8">
        <div>
          <h2 className="text-xl font-bold text-white">{profile.name}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Profesional de TI enfocado en soporte técnico, automatización de procesos, desarrollo web, dashboards y soluciones cloud que generan valor al negocio.
          </p>
          <p className="mt-4 text-sm text-slate-500">© {currentYear} {profile.shortName}. Todos los derechos reservados.</p>
        </div>

        <div className="flex flex-wrap gap-3 md:justify-end">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10">
            GitHub
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
