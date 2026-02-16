//app/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  //throw new Error("Error 500 de prueba");
  return (
    <>
      {}
      <section
        className="
          relative isolate text-white 
          min-h-[600px] lg:min-h-[720px] 
          flex items-center overflow-hidden
          w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
        "
      >
        <Image src="/rehabilitacion.webp" alt="Fondo" fill priority className="object-cover object-center z-0" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#134e4a] via-[#1e6260]/90 to-transparent md:via-[#1e6260]/50" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-green-50">Calidad Médica Certificada</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight drop-shadow-xl mb-6">
              Tu bienestar es <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200">nuestra prioridad</span>
            </h1>
            <p className="text-lg md:text-xl text-green-50/90 mb-10 leading-relaxed max-w-lg font-light">
              Encuentra equipos, ortesis y suministros médicos de alta gama. Garantía clara, envíos seguros y asesoría de expertos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/catalogo" className="group inline-flex items-center justify-center gap-2 bg-white text-[#134e4a] px-8 py-4 rounded-full font-bold text-lg shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2)] hover:transform hover:-translate-y-1 hover:shadow-[0_20px_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300">
                Explorar catálogo
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/registro" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg text-white border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/80 transition-all duration-300">
                Crear cuenta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 2: EXPLORA CATEGORÍAS --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e6260] mb-4">Explora nuestras soluciones</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Selecciona la modalidad que mejor se adapte a tus necesidades médicas y de recuperación.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1: VENTA */}
            <Link href="/catalogo?tipo=venta" className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-32 h-32 text-[#1e6260]" fill="currentColor" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
              </div>
              <div className="p-8 h-full flex flex-col items-start relative z-10">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-[#1e6260] mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Productos en Venta</h3>
                <p className="text-gray-500 mb-6 flex-grow">Adquiere equipo médico nuevo con garantía de fábrica y soporte total.</p>
                <span className="text-[#1e6260] font-bold group-hover:translate-x-2 transition-transform inline-flex items-center">
                  Ver catálogo <span className="ml-2">→</span>
                </span>
              </div>
            </Link>

            {/* CARD 2: RENTA */}
            <Link href="/catalogo?tipo=renta" className="group relative overflow-hidden rounded-3xl bg-[#1e6260] text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform md:-translate-y-4">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              </div>
              <div className="p-8 h-full flex flex-col items-start relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Productos en Renta</h3>
                <p className="text-green-100 mb-6 flex-grow">Ideal para recuperaciones temporales. Paga solo por el tiempo que lo necesites.</p>
                <span className="text-white font-bold group-hover:translate-x-2 transition-transform inline-flex items-center">
                  Ver opciones de renta <span className="ml-2">→</span>
                </span>
              </div>
            </Link>

            {/* CARD 3: OFERTAS */}
            <Link href="/catalogo?tipo=ofertas" className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-32 h-32 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.85 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"/></svg>
              </div>
              <div className="p-8 h-full flex flex-col items-start relative z-10">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ofertas Especiales</h3>
                <p className="text-gray-500 mb-6 flex-grow">Descuentos de temporada en productos seleccionados. ¡No te los pierdas!</p>
                <span className="text-red-600 font-bold group-hover:translate-x-2 transition-transform inline-flex items-center">
                  Ver ofertas <span className="ml-2">→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: BANNER SCROLEABLE (ANUNCIOS) --- */}
      <section className="py-12 border-t border-b border-gray-100 overflow-hidden bg-white">
        <h3 className="text-center text-sm font-bold text-gray-400 tracking-widest uppercase mb-8">Nuestros Aliados y Promociones</h3>
        
        {/* Contenedor del Scroll - Ocultamos scrollbar pero permitimos deslizar */}
        <div className="flex overflow-x-auto gap-6 px-6 pb-4 snap-x w-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
           {/* Banner 1 */}
           <div className="flex-shrink-0 w-80 md:w-96 h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 flex items-center justify-between snap-center border border-blue-200">
              <div>
                <p className="text-blue-600 font-bold text-sm mb-1">NUEVO INGRESO</p>
                <h4 className="text-xl font-bold text-gray-800">Sillas de Ruedas<br/>Ergonómicas</h4>
              </div>
              <div className="w-20 h-20 bg-blue-200 rounded-full opacity-50"></div> {/* Placeholder imagen */}
           </div>

           {/* Banner 2 */}
           <div className="flex-shrink-0 w-80 md:w-96 h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 flex items-center justify-between snap-center border border-green-200">
              <div>
                <p className="text-green-600 font-bold text-sm mb-1">RENTAS</p>
                <h4 className="text-xl font-bold text-gray-800">Camas de Hospital<br/>Desde $500/día</h4>
              </div>
              <div className="w-20 h-20 bg-green-200 rounded-full opacity-50"></div>
           </div>

           {/* Banner 3 */}
           <div className="flex-shrink-0 w-80 md:w-96 h-48 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 flex items-center justify-between snap-center border border-purple-200">
              <div>
                <p className="text-purple-600 font-bold text-sm mb-1">ENVIOS</p>
                <h4 className="text-xl font-bold text-gray-800">Envío Gratis<br/>en CDMX</h4>
              </div>
              <div className="w-20 h-20 bg-purple-200 rounded-full opacity-50"></div>
           </div>

           {/* Banner 4 */}
            <div className="flex-shrink-0 w-80 md:w-96 h-48 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 flex items-center justify-between snap-center border border-orange-200">
              <div>
                <p className="text-orange-600 font-bold text-sm mb-1">ASESORÍA</p>
                <h4 className="text-xl font-bold text-gray-800">Agenda tu cita<br/>con expertos</h4>
              </div>
              <div className="w-20 h-20 bg-orange-200 rounded-full opacity-50"></div>
           </div>
        </div>
      </section>
    </>
  );
}