import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/app/data/products';
import ProductCard from '@/components/product/ProductCard';

export default async function ProductoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const prod = PRODUCTS.find(p => p.id === id);

  if (!prod) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
        <p className="text-gray-500 mb-8">Lo sentimos, el producto que buscas no existe o ha sido removido.</p>
        <Link className="px-6 py-3 bg-[#1e6260] text-white rounded-full font-bold hover:bg-[#154644] transition" href="/catalogo">
          Volver al catálogo
        </Link>
      </main>
    );
  }

  // Filtrar relacionados (excluyendo el actual)
  const relacionados = PRODUCTS.filter(p => p.id !== prod.id).slice(0, 4);

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl px-4 py-12">
        
        {/* --- BREADCRUMBS (MIGAS DE PAN) MEJORADAS --- */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
            
            {/* 1. Inicio (Icono de Casa) */}
            <li>
              <Link href="/" className="flex items-center gap-1 text-gray-500 hover:text-[#1e6260] transition-colors p-2 rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                <span className="sr-only">Inicio</span>
              </Link>
            </li>

            {/* Separador Chevron */}
            <li className="text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </li>

            {/* 2. Catálogo (Estilo botón suave) */}
            <li>
              <Link href="/catalogo" className="font-semibold text-gray-600 hover:text-[#1e6260] transition-colors bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-md border border-gray-100">
                Catálogo
              </Link>
            </li>

            {/* Separador Chevron */}
            <li className="text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </li>

            {/* 3. Producto Actual (Badge Resaltado) */}
            <li>
              <span className="flex items-center gap-2 bg-[#1e6260]/10 text-[#1e6260] px-3 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide border border-[#1e6260]/20">
                {prod.title}
              </span>
            </li>
          </ol>
        </nav>

        <section className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* COLUMNA 1: IMAGEN */}
          <div className="relative bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm aspect-square md:aspect-[4/3] flex items-center justify-center p-8 group">
            <Image
              src={prod.image}
              alt={prod.title}
              fill
              sizes="(min-width:768px) 560px, 100vw"
              className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
              priority
            />
            {prod.requiresRx && (
              <span className="absolute top-6 left-6 bg-gray-900 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                Requiere Receta Médica
              </span>
            )}
          </div>

          {/* COLUMNA 2: INFO */}
          <div className="flex flex-col h-full pt-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 leading-tight mb-4">
              {prod.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-[#1e6260]">
                ${prod.priceMXN.toLocaleString('es-MX')}
              </span>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">MXN</span>
            </div>

            {/* Características rápidas */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="block text-xs text-gray-500 uppercase tracking-wide mb-1">Garantía</span>
                <span className="font-semibold text-gray-800">{prod.warranty || "Estándar"}</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="block text-xs text-gray-500 uppercase tracking-wide mb-1">Disponibilidad</span>
                <span className="font-semibold text-green-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  En stock
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              Este equipo médico de alta calidad está diseñado para ofrecer el máximo confort y durabilidad. 
              Cuenta con certificación sanitaria y el respaldo de CEMYDI.
            </p>

            {/* BOTONES DE ACCIÓN */}
            <div className="grid gap-3 mt-auto">
              <Link href="/carrito" className="w-full py-4 px-8 bg-[#1e6260] hover:bg-[#154644] text-white text-lg font-bold rounded-2xl shadow-lg shadow-[#1e6260]/20 hover:shadow-xl hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                Añadir al carrito
              </Link>
              
              <Link href="/checkout/renta" className="w-full py-4 px-8 bg-white border-2 border-[#1e6260] text-[#1e6260] hover:bg-green-50 text-lg font-bold rounded-2xl transition-all text-center">
                Reservar para renta
              </Link>
            </div>

            {/* Acordeón simple de detalles */}
            <div className="mt-8 pt-8 border-t border-gray-100">
               <details className="group">
                 <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-900 list-none">
                   <span>¿Qué necesito si requiere receta?</span>
                   <span className="transition group-open:rotate-180">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                     </svg>
                   </span>
                 </summary>
                 <p className="group-open:animate-fadeIn mt-3 text-gray-600 text-sm leading-relaxed">
                    Si el producto está marcado con "Requiere Receta", deberás subir una foto legible de tu receta médica vigente durante el proceso de pago (Checkout). Nuestro equipo validará el documento antes de realizar el envío.
                 </p>
               </details>
            </div>
          </div>
        </section>

        {/* RELACIONADOS */}
        {relacionados.length > 0 && (
          <section className="mt-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">También te podría interesar</h2>
              <Link href="/catalogo" className="text-[#1e6260] font-semibold hover:underline">Ver todo</Link>
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relacionados.map(r => (
                <li key={r.id}>
                  <ProductCard {...r} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}