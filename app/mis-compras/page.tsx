// app/mis-compras/page.tsx
import Link from "next/link";

const compras = [
  { id: "123", fecha: "28 oct 2025", estado: "Pagado", total: 690, titulo: "Rodillera ortopédica", items: 1 },
  { id: "124", fecha: "29 oct 2025", estado: "En preparación", total: 450, titulo: "Muletas ajustables", items: 1 },
];

export default function MisComprasPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <main className="mx-auto max-w-5xl px-4">
        
        {/* Header de la sección */}
        <header className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
                <h1 className="text-3xl font-display font-bold text-gray-900">Mis compras</h1>
                <p className="text-gray-500 mt-2">Revisa el historial y estado actual de tus pedidos.</p>
            </div>
            <Link href="/catalogo" className="px-6 py-2.5 bg-white text-[#1e6260] font-bold rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
                <span>+</span> Seguir comprando
            </Link>
        </header>

        {/* Lista de Pedidos */}
        <div className="space-y-6">
            {compras.map((c) => (
                <div key={c.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 md:items-center justify-between hover:shadow-md transition-shadow group">
                    
                    {/* Info Principal */}
                    <div className="flex gap-5 items-center">
                        {/* Icono de caja/producto */}
                        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-[#1e6260]/40 group-hover:bg-[#1e6260]/10 group-hover:text-[#1e6260] transition-colors">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                        </div>
                        
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <span className="font-bold text-lg text-gray-900">Pedido #{c.id}</span>
                                {/* Badge de Estado Dinámico */}
                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide border 
                                    ${c.estado === 'Pagado' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-blue-50 text-blue-700 border-blue-100'}`}>
                                    {c.estado}
                                </span>
                            </div>
                            <p className="text-gray-700 font-medium">{c.titulo}</p>
                            <p className="text-sm text-gray-400 mt-1">{c.fecha} • {c.items} artículo(s)</p>
                        </div>
                    </div>

                    {/* Precio y Acciones */}
                    <div className="flex items-center justify-between md:flex-col md:items-end gap-4 border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
                        <span className="text-xl font-extrabold text-[#1e6260]">${c.total.toLocaleString()}</span>
                        <div className="flex gap-3">
                            <Link 
                                href={`/pedido/${c.id}`} 
                                className="px-5 py-2 bg-[#1e6260] text-white font-bold rounded-xl text-sm shadow-md shadow-green-900/10 hover:bg-[#154644] transition-all hover:-translate-y-0.5"
                            >
                                Ver detalles
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </main>
    </div>
  );
}