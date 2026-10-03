import { profile } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-10 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center lg:px-8">
        <div>
          <h2 className="text-xl font-black text-white">{profile.shortName}</h2>
          <p className="mt-1 text-sm font-medium text-cyan-300">{profile.role}</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">Desarrollo sistemas internos y soluciones digitales orientadas a procesos empresariales.</p>
          <p className="mt-4 text-xs text-slate-600">© {currentYear} {profile.shortName}. Todos los derechos reservados.</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10">GitHub</a>
          <a href={`mailto:${profile.email}`} className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
