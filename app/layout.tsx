//app/layout.tsx

import "./globals.css";
import Link from "next/link";
import { Providers } from "./providers";
import HeaderNav from "@/components/ui/HeaderNav";


import Script from 'next/script'


export const metadata = {
  title: "Ortopedia CEMYDI",
  description: "Tu bienestar es nuestra prioridad",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* PEGA AQUÍ TU CÓDIGO DE CONTENTSQUARE */}
        <Script id="contentsquare-tag" strategy="afterInteractive">
          {`
            (function () {
              var t = document.createElement("script");
              t.type = "text/javascript";
              t.async = true;
              // REEMPLAZA ESTA URL CON LA QUE COPIASTE EN EL PASO 1
              t.src = "https://t.contentsquare.net/uxa/1a9fca53974e0.js"; 
              document.getElementsByTagName("head")[0].appendChild(t);
            })();
          `}
        </Script>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: "#fff" }}>
        <Providers>
          {/* HEADER (Vidrio y degradado) */}
          <header
            style={{
              background: "linear-gradient(90deg, #1e6260 0%, #2aa09d 100%)",
              color: "#fff",
              width: "100%",
              position: "relative",
              zIndex: 10,
            }}
          >
            <div
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "20px 40px",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: "40px",
                alignItems: "center",
              }}
            >
              {/* LOGO */}
              <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/logo01.png"
                  alt="CEMYDI"
                  width={90}
                  height={50}
                  style={{ display: "block", objectFit: "contain" }}
                />
              </Link>
              
              {/* BUSCADOR */}
              <form action="/catalogo" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                {/* SOLUCIÓN WAVE:
                   Agregamos 'aria-label' para describir el campo a las herramientas de accesibilidad
                   sin afectar el diseño visual.
                */}
                <input
                  type="search"
                  name="q"
                  aria-label="Buscar productos" 
                  placeholder="Buscar productos..."
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    height: 48,
                    borderRadius: "999px",
                    background: "rgba(255, 255, 255, 0.15)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#fff",
                    padding: "0 24px",
                    outline: "none",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
                  }}
                />
              </form>
              
              {/* NAVEGACIÓN */}
              <HeaderNav />
            </div>
          </header>

          <main style={{ width: "100%", maxWidth: "100vw", margin: "0 auto", padding: "0" }}>
            {children}
          </main>

          {/* FOOTER INCRUSTADO */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

// --- COMPONENTE FOOTER ESTILO TANDYM ---
function Footer() {
  return (
    <footer className="bg-[#0b2e2b] text-white pt-20 pb-10 border-t border-[#1a4a45]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* COLUMNA 1: Marca y Redes */}
        <div className="space-y-6">
          <Link href="/" className="block">
            {/* Filtro para volver blanco el logo si es negro */}
            <img
              src="/logo01.png"
              alt="CEMYDI"
              width={140}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            La plataforma líder en suministros ortopédicos y recuperación médica.
            Diseñada para poner tu salud en primer lugar.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition duration-300"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.451 2.535c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
          </div>
        </div>

        {/* COLUMNA 2: Sobre nosotros */}
        <div>
          <h3 className="text-lg font-display font-semibold mb-6 text-green-200">
            Sobre nosotros
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Nuestra historia</a></li>
            <li><a href="#" className="hover:text-white transition">Sala de prensa</a></li>
            <li><a href="#" className="hover:text-white transition">Carreras</a></li>
            <li><a href="#" className="hover:text-white transition">Contáctenos</a></li>
          </ul>
        </div>

        {/* COLUMNA 3: Categorías */}
        <div>
          <h3 className="text-lg font-display font-semibold mb-6 text-green-200">
            Categorías
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li><a href="/catalogo?tipo=venta" className="hover:text-white transition">Venta de equipo</a></li>
            <li><a href="/catalogo?tipo=renta" className="hover:text-white transition">Renta mensual</a></li>
            <li><a href="/catalogo?tipo=ofertas" className="hover:text-white transition">Ofertas flash</a></li>
            <li><a href="#" className="hover:text-white transition">Lo más nuevo</a></li>
          </ul>
        </div>

        {/* COLUMNA 4: Ayuda */}
        <div>
          <h3 className="text-lg font-display font-semibold mb-6 text-green-200">
            Ayuda
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Centro de ayuda</a></li>
            <li><a href="#" className="hover:text-white transition">Devoluciones</a></li>
            <li><a href="#" className="hover:text-white transition">Garantías</a></li>
            <li><a href="#" className="hover:text-white transition">Estatus de pedido</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} CEMYDI. Todos los derechos reservados.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacidad</a>
          <a href="#" className="hover:text-white transition">Términos</a>
          <a href="#" className="hover:text-white transition">Cookies</a>
        </div>
      </div>
    </footer>
  );
}