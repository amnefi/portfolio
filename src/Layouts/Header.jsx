import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { profile } from '../data/portfolio';

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre mí', path: '/about' },
  { label: 'Servicios', path: '/services' },
  { label: 'Skills', path: '/skills' },
  { label: 'Proyectos', path: '/projects' },
  { label: 'Contacto', path: '/contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20'
        : 'text-slate-200 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-emerald-300 font-black text-slate-950">
            NA
          </span>
          <span>
            <span className="block text-sm font-bold leading-none text-white md:text-base">{profile.shortName}</span>
            <span className="text-xs text-slate-400">Portfolio profesional</span>
          </span>
        </NavLink>

        <button
          className="rounded-xl border border-white/10 p-2 text-slate-200 md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Abrir menú de navegación"
        >
          <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`} />
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-slate-950 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setMenuOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
