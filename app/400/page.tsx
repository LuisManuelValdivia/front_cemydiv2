import Link from "next/link";

export default function BadRequest() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-[2rem] shadow-2xl px-10 py-8 text-center animate-fadeIn">

        {/* Ícono */}
        <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
          </svg>
        </div>

        <h1 className="text-5xl font-extrabold text-yellow-500 mb-4">400</h1>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Solicitud incorrecta
        </h2>

        <p className="text-gray-500 mb-8">
          La solicitud enviada no es válida o contiene información incorrecta.
          Revisa los datos e inténtalo nuevamente.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-[#1e6260] text-white font-bold hover:bg-[#154644] transition"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
