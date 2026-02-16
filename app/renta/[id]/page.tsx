// app/renta/[id]/page.tsx
import Link from "next/link";

export default function RentaDetallePage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <main className="mx-auto max-w-6xl px-4">
        
        <div className="mb-8">
          <Link href="/mis-rentas" className="text-gray-500 hover:text-[#1e6260] font-bold text-sm flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Volver a mis rentas
          </Link>
        </div>

        {/* Header con Status */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-display font-bold text-gray-900">Renta #{id}</h1>
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-amber-100 text-amber-800 border border-amber-200">
                    Reservado
                </span>
            </div>
            <p className="text-gray-500">Periodo: <strong>04 Nov - 18 Nov 2025</strong> (2 Semanas)</p>
          </div>
          <div className="flex gap-3">
             <button className="px-4 py-2 bg-white border border-red-100 text-red-500 font-bold rounded-lg text-sm hover:bg-red-50 transition-colors">
               Cancelar reserva
             </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* COLUMNA IZQUIERDA */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Timeline de Estado */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-8 text-lg">Estado del servicio</h2>
                <div className="relative flex items-center justify-between px-4">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full"></div>
                    
                    {/* Paso 1 */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#1e6260] ring-4 ring-green-100"></div>
                        <span className="text-xs font-bold text-[#1e6260] uppercase">Reservado</span>
                    </div>
                    {/* Paso 2 */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                        <span className="text-xs font-bold text-gray-400 uppercase">Entregado</span>
                    </div>
                    {/* Paso 3 */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                        <span className="text-xs font-bold text-gray-400 uppercase">Devuelto</span>
                    </div>
                    {/* Paso 4 */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                        <span className="text-xs font-bold text-gray-400 uppercase">Depósito Liberado</span>
                    </div>
                </div>
            </div>

            {/* Equipo */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex gap-6 items-center">
                <div className="w-24 h-24 bg-gray-50 rounded-xl border border-gray-100 flex-shrink-0 flex items-center justify-center text-gray-300">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 text-lg">Silla de ruedas plegable</h3>
                    <p className="text-gray-500 text-sm mb-2">Modelo estándar • Incluye cojín básico</p>
                    <div className="text-sm font-medium text-[#1e6260] bg-green-50 px-3 py-1 rounded-lg inline-block">
                        $150.00 / semana
                    </div>
                </div>
            </div>

            {/* Acciones Rápidas */}
            <div className="grid sm:grid-cols-2 gap-4">
                <button className="p-4 bg-white border border-gray-200 rounded-2xl hover:border-[#1e6260] hover:shadow-md transition-all text-left group">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="font-bold text-gray-900 block">Extender tiempo</span>
                    <span className="text-xs text-gray-500">Añadir más semanas a tu renta</span>
                </button>

                <button className="p-4 bg-white border border-gray-200 rounded-2xl hover:border-[#1e6260] hover:shadow-md transition-all text-left group">
                    <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-3 group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                    </div>
                    <span className="font-bold text-gray-900 block">Solicitar recolección</span>
                    <span className="text-xs text-gray-500">Ya no necesito el equipo</span>
                </button>
            </div>
          </div>

          {/* COLUMNA DERECHA: Financiero */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider text-gray-400">Detalles de pago</h2>
                <div className="space-y-3 text-sm pb-4 border-b border-gray-100 mb-4">
                    <div className="flex justify-between text-gray-600">
                        <span>Renta (2 semanas)</span>
                        <span>$300.00</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Envío</span>
                        <span className="text-green-600 font-medium">Gratis</span>
                    </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-blue-800 font-bold text-sm">Depósito en garantía</span>
                        <span className="text-blue-800 font-bold">$1,500.00</span>
                    </div>
                    <p className="text-xs text-blue-600 leading-tight">Monto retenido. Se liberará al finalizar la renta.</p>
                </div>

                <div className="flex justify-between items-center pt-2">
                    <span className="font-bold text-gray-900">Total cobrado</span>
                    <span className="font-extrabold text-xl text-[#1e6260]">$300.00</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider text-gray-400">Dirección de entrega</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Calle Principal 123, Int 4<br/>
                    Colonia Centro, CDMX<br/>
                    06000
                </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}