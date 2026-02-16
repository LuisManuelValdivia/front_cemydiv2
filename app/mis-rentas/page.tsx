// app/mis-rentas/page.tsx
import Link from "next/link";

const rentas = [
  { id: "456", fechaIni: "04 nov 2025", fechaFin: "18 nov 2025", estado: "Reservado", titulo: "Silla de ruedas plegable", deposito: 1500, restante: "14 días" },
  { id: "457", fechaIni: "01 dic 2025", fechaFin: "15 dic 2025", estado: "En uso", titulo: "Andadera con ruedas", deposito: 800, restante: "5 días" },
];

export default function MisRentasPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <main className="mx-auto max-w-5xl px-4">
        
        <header className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
                <h1 className="text-3xl font-display font-bold text-gray-900">Mis Rentas</h1>
                <p className="text-gray-500 mt-2">Gestiona tus equipos activos, extensiones y devoluciones.</p>
            </div>
            <Link href="/catalogo?tipo=renta" className="px-6 py-2.5 bg-white text-[#1e6260] font-bold rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
                <span>+</span> Rentar nuevo equipo
            </Link>
        </header>

        <div className="space-y-6">
            {rentas.map((r) => (
                <div key={r.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 md:items-center justify-between hover:shadow-md transition-shadow group">
                    
                    <div className="flex gap-5 items-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600/40 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <span className="font-bold text-lg text-gray-900">Renta #{r.id}</span>
                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide border 
                                    ${r.estado === 'En uso' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-amber-50 text-amber-700 border-amber-100'}`}>
                                    {r.estado}
                                </span>
                            </div>
                            <p className="text-gray-700 font-medium">{r.titulo}</p>
                            <p className="text-sm text-gray-400 mt-1 flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                {r.fechaIni} - {r.fechaFin}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:items-end gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                        <div className="text-right">
                            <p className="text-xs text-gray-400 uppercase tracking-wide font-bold">Depósito en garantía</p>
                            <p className="font-bold text-gray-900">${r.deposito.toLocaleString()}</p>
                        </div>
                        
                        <div className="flex gap-2">
                            <Link href={`/renta/${r.id}`} className="px-4 py-2 bg-white border border-gray-200 text-gray-600 font-bold rounded-lg text-sm hover:bg-gray-50 transition-colors">
                                Gestionar
                            </Link>
                            <button className="px-4 py-2 bg-[#1e6260] text-white font-bold rounded-lg text-sm hover:bg-[#154644] transition-colors">
                                Extender
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </main>
    </div>
  );
}