//components/ui/HeaderNav.tsx

"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function HeaderNav() {
  const { data: session, status } = useSession();

  // --- ESTILOS VISUALES ---

  // 1. Enlaces de texto (Ahora con transición de fondo y bordes redondos)
  const textLinkStyle = {
    textDecoration: "none",
    color: "#fff",
    fontWeight: 700,
    fontSize: "0.95rem",
    padding: "8px 16px",
    borderRadius: "999px",
    transition: "background-color 0.2s ease, opacity 0.2s ease",
    cursor: "pointer",
  };

  const outlineBtnStyle = {
    textDecoration: "none",
    color: "#fff",
    fontWeight: 700,
    fontSize: "0.95rem",
    padding: "10px 24px",
    border: "2px solid rgba(255, 255, 255, 0.9)",
    borderRadius: "999px",
    backgroundColor: "transparent",
    transition: "all 0.2s ease",
    display: "inline-block",
  };

  const solidBtnStyle = {
    textDecoration: "none",
    color: "#1e6260",
    fontWeight: 800,
    fontSize: "0.95rem",
    padding: "10px 24px",
    backgroundColor: "#ffffff",
    borderRadius: "999px",
    border: "2px solid #ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    display: "inline-block",
  };

  const iconStyle = {
    color: "#fff",
    padding: "10px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.2s ease",
    cursor: "pointer",
  };

  // Función helper para el efecto hover
  const handleHover = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, isHovering: boolean) => {
    e.currentTarget.style.backgroundColor = isHovering ? "rgba(255,255,255,0.15)" : "transparent";
  };

  if (status === "loading") return <div style={{ color: "white" }}>...</div>;

  return (
    <nav style={{ display: "flex", alignItems: "center", gap: 8, justifySelf: "end" }}>
      
      {/* 1. Catálogo siempre visible */}
      <Link 
        href="/catalogo" 
        style={textLinkStyle}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
      >
        Catálogo
      </Link>

      {/* --- USUARIO VISITANTE --- */}
      {!session && (
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginLeft: 8 }}>
          <Link 
            href="/login" 
            style={outlineBtnStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
          >
            Iniciar sesión
          </Link>
          <Link 
            href="/registro" 
            style={solidBtnStyle}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
            }}
          >
            Crear cuenta
          </Link>
        </div>
      )}

      {/* --- USUARIO LOGUEADO --- */}
      {session && (
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          
          {/* NUEVO: Mis rentas */}
          <Link 
            href="/mis-rentas" 
            style={textLinkStyle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            Mis rentas
          </Link>

          {/* Mis compras */}
          <Link 
            href="/mis-compras" 
            style={textLinkStyle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            Mis compras
          </Link>

          {/* Carrito (ÍCONO) */}
          <Link 
            href="/carrito" 
            style={iconStyle}
            title="Ver carrito"
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </Link>

          {/* Separador vertical */}
          <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.2)", margin: "0 8px" }}></div>

          {/* Perfil (ÍCONO) */}
          <Link 
            href="/perfil" 
            style={iconStyle}
            title="Mi Perfil"
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>

        </div>
      )}
    </nav>
  );
}