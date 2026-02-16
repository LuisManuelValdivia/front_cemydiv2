// app/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-[2rem] shadow-2xl px-10 py-8 text-center animate-fadeIn">

        {/* Ícono */}
        <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-red-100 text-red-500">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.7 3.86a2 2 0 00-3.41 0z" />
          </svg>
        </div>

        <h1 className="text-5xl font-extrabold text-red-500 mb-4">500</h1>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Error interno del servidor
        </h2>

        <p className="text-gray-500 mb-8">
          Ocurrió un problema inesperado. Nuestro equipo ya fue notificado.
          Intenta recargar o vuelve más tarde.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-xl bg-gray-200 text-gray-700 font-bold hover:bg-gray-300 transition"
          >
            Reintentar
          </button>

          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-[#1e6260] text-white font-bold hover:bg-[#154644] transition"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
