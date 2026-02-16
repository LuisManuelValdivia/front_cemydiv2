// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-[2rem] shadow-2xl p-10 text-center animate-fadeIn">

        {/* Ícono */}
        <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-[#1e6260]/10 text-[#1e6260]">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.172 16.172a4 4 0 005.656 0M9 10h.01M15 10h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
            />
          </svg>
        </div>

        {/* Texto */}
        <h1 className="text-6xl font-display font-extrabold text-[#1e6260] mb-4">
          404
        </h1>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Página no encontrada
        </h2>

        <p className="text-gray-500 mb-8 leading-relaxed">
          Lo sentimos, la página que estás buscando no existe o fue movida.
          Verifica la URL o vuelve al inicio.
        </p>

        {/* Botón */}
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#1e6260] text-white font-bold shadow-lg hover:bg-[#154644] hover:shadow-xl transition-all"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5m4 0h5a1 1 0 001-1V10" />
          </svg>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
