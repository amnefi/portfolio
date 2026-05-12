import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-slate-950 px-5 text-center text-white">
      <div>
        <p className="text-8xl font-black text-cyan-300">404</p>
        <h1 className="mt-4 text-3xl font-black">Página no encontrada</h1>
        <p className="mt-3 max-w-md text-slate-400">La ruta que intentas abrir no existe o fue movida.</p>
        <Link to="/" className="mt-8 inline-flex rounded-2xl bg-cyan-300 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-200">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
