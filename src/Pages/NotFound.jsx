import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="grid min-h-[80vh] place-items-center bg-slate-950 px-5 pt-28 text-white">
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">404</p>
      <h1 className="mt-4 text-4xl font-black">Página no encontrada</h1>
      <Link to="/" className="mt-7 inline-flex rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950">Volver al inicio</Link>
    </div>
  </section>
);

export default NotFound;
