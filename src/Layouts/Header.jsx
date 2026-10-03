import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { profile } from '../data/portfolio';

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Proyectos', path: '/projects' },
  { label: 'Experiencia', path: '/experience' },
  { label: 'Stack', path: '/skills' },
  { label: 'Sobre mí', path: '/about' },
  { label: 'Contacto', path: '/contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      isActive ? 'bg-cyan-300 text-slate-950' : 'text-slate-300 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 font-black text-cyan-200">FA</span>
          <span>
            <span className="block text-sm font-black leading-none text-white md:text-base">{profile.shortName}</span>
            <span className="text-xs text-slate-500">{profile.role}</span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-2 lg:flex">
          <nav className="flex items-center gap-1" aria-label="Navegación principal">
            {navItems.map((item) => <NavLink key={item.path} to={item.path} className={linkClass}>{item.label}</NavLink>)}
          </nav>
          <a href={profile.cv} download className="ml-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950">CV</a>
        </div>

        <button
          type="button"
          className="rounded-xl border border-white/10 p-2 text-slate-200 lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        >
          <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`} />
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className="border-t border-white/10 bg-slate-950 px-5 py-4 lg:hidden" aria-label="Navegación móvil">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>
            ))}
            <a href={profile.cv} download className="mt-2 rounded-2xl bg-cyan-300 px-4 py-3 text-center font-black text-slate-950">Descargar CV</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
