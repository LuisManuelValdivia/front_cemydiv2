// app/pedido/[id]/page.tsx
import Link from "next/link";

export default function PedidoDetallePage({ params }: { params: Promise<{ id: string }> }) {
  // Nota: en Next.js 15 params es una promesa, pero para simplificar aquí asumimos uso directo o async component.
  // Si te da error de promesa, usa "const { id } = await params;"
  // Aquí usaremos un mock simple para renderizar.
  
  // Mock ID (en caso de que params sea async, ajusta según tu versión de Next)
  const id = "123"; 

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <main className="mx-auto max-w-6xl px-4">
        
        {/* Breadcrumb / Volver */}
        <div className="mb-8">
          <Link href="/mis-compras" className="text-gray-500 hover:text-[#1e6260] font-bold text-sm flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Volver a mis compras
          </Link>
        </div>

        {/* Encabezado Principal */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-gray-900">Pedido #{id}</h1>
            <p className="text-gray-500 mt-1 flex items-center gap-2">
              Realizado el 28 de octubre de 2025 
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              12:34 PM
            </p>
          </div>
          <div className="flex gap-3">
             <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 font-bold rounded-lg text-sm hover:bg-gray-50 transition-colors">
               Descargar factura
             </button>
             <button className="px-4 py-2 bg-white border border-red-100 text-red-500 font-bold rounded-lg text-sm hover:bg-red-50 transition-colors">
               Cancelar pedido
             </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* COLUMNA IZQUIERDA: Detalles y Seguimiento */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tarjeta de Estado (Stepper) */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <h2 className="font-bold text-gray-900 mb-8 text-lg">Seguimiento</h2>
                
                {/* Stepper Visual */}
                <div className="relative flex items-center justify-between">
                    {/* Línea de fondo */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 -z-0 rounded-full"></div>
                    {/* Línea de progreso (parcial) */}
                    <div className="absolute top-1/2 left-0 w-1/3 h-1 bg-[#1e6260] -translate-y-1/2 -z-0 rounded-full"></div>

                    {/* Paso 1: Activo */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#1e6260] text-white flex items-center justify-center shadow-lg shadow-green-900/20">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-xs font-bold text-[#1e6260] uppercase tracking-wide">Pagado</span>
                    </div>

                    {/* Paso 2: Pendiente pero siguiente */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white border-4 border-[#1e6260] flex items-center justify-center"></div>
                        <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">Preparando</span>
                    </div>

                    {/* Paso 3: Inactivo */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"></div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Enviado</span>
                    </div>

                    {/* Paso 4: Inactivo */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"></div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Entregado</span>
                    </div>
                </div>
            </div>

            {/* Lista de Artículos */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-6 text-lg">Contenido del pedido</h2>
                
                {/* Item 1 */}
                <div className="flex gap-4 sm:gap-6 items-center">
                    <div className="w-20 h-20 bg-gray-50 rounded-xl border border-gray-100 flex-shrink-0">
                        {/* Placeholder imagen */}
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                           <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-bold text-gray-900 text-lg">Silla de ruedas plegable</h3>
                        <p className="text-gray-500 text-sm">Modelo estándar • Color Negro</p>
                        <div className="mt-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
                            Venta
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="font-bold text-gray-900 text-lg">$2,500</div>
                        <div className="text-gray-400 text-sm">x1 pza</div>
                    </div>
                </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Resumen y Datos */}
          <div className="space-y-6">
            
            {/* Dirección */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider text-gray-400">Entrega</h2>
                <div className="flex items-start gap-3">
                    <div className="mt-1 text-[#1e6260]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <address className="not-italic text-gray-600 text-sm leading-relaxed">
                        <span className="font-bold text-gray-900 block mb-1">Ana Pérez</span>
                        Calle Principal 123, Interior 4<br />
                        Colonia Centro<br />
                        Ciudad de México, 06000
                    </address>
                </div>
            </div>

            {/* Resumen Financiero */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider text-gray-400">Resumen de pago</h2>
                <div className="space-y-3 text-sm border-b border-gray-100 pb-4 mb-4">
                    <div className="flex justify-between text-gray-600">
                        <span>Subtotal (1 artículo)</span>
                        <span>$2,500.00</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Envío</span>
                        <span className="text-green-600 font-medium">Gratis</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Impuestos</span>
                        <span>$400.00</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">Total pagado</span>
                    <span className="font-extrabold text-xl text-[#1e6260]">$2,900.00</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                    Pagado con Tarjeta terminada en 4242
                </div>
            </div>

            {/* Ayuda */}
            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 text-center">
                <p className="text-blue-800 font-bold mb-1">¿Necesitas ayuda?</p>
                <p className="text-blue-600 text-xs mb-4">Si tienes problemas con tu pedido contáctanos.</p>
                <button className="text-xs font-bold text-blue-700 hover:underline">Ir a Soporte</button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}