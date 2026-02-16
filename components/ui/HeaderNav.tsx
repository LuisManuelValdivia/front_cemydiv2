"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

const baseLink =
  "rounded-full px-4 py-2 text-sm font-semibold text-white/95 transition hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40";

const iconLink =
  "flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40";

export default function HeaderNav() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div className="text-sm text-white/80">...</div>;

  return (
    <nav className="flex items-center justify-center gap-2 md:justify-end">
      <Link href="/catalogo" className={baseLink}>
        Catálogo
      </Link>

      {!session && (
        <div className="ml-1 flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-full border-2 border-white/80 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/registro"
            className="rounded-full border-2 border-white bg-white px-5 py-2 text-sm font-bold text-[#1e6260] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Crear cuenta
          </Link>
        </div>
      )}

      {session && (
        <div className="ml-1 flex items-center gap-1">
          <Link href="/mis-rentas" className={baseLink}>
            Mis rentas
          </Link>
          <Link href="/mis-compras" className={baseLink}>
            Mis compras
          </Link>

          <Link href="/carrito" className={iconLink} title="Ver carrito" aria-label="Ver carrito">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </Link>

          <div className="mx-1 h-6 w-px bg-white/25" />

          <Link href="/perfil" className={iconLink} title="Mi Perfil" aria-label="Mi perfil">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>
        </div>
      )}
    </nav>
  );
}
