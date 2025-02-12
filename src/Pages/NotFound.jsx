export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-xl mt-4">Oops! Página no encontrada.</p>
        <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Volver al inicio
        </a>
      </div>
    );
  }
