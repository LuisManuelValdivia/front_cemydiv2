// app/carrito/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";

type CartItem = {
  id: string;
  nombre: string;
  tipo: "compra" | "renta";
  precio: number;
  detalle?: string;
  image: string; // Agregamos imagen para que se vea mejor
};

// Mock con imagen placeholder
const MOCK_ITEMS: CartItem[] = [
  { 
    id: "p1", 
    nombre: "Rodillera ortopédica", 
    tipo: "compra", 
    precio: 690, 
    image: "/rodillera.jpg" // Asegúrate de que esta imagen exista o usa un placeholder
  },
];

export default function CarritoPage() {
  const [items, setItems] = useState<CartItem[]>(MOCK_ITEMS);
  const total = useMemo(() => items.reduce((acc, it) => acc + it.precio, 0), [items]);
  
  const quitar = (id: string) => setItems(prev => prev.filter(i => i.id !== id));

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-gray-50">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-300">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Tu carrito está vacío</h1>
        <p className="text-gray-500 mb-8">Parece que aún no has agregado productos.</p>
        <Link className="px-8 py-3 bg-[#1e6260] text-white rounded-full font-bold shadow-lg hover:bg-[#154644] transition-all hover:-translate-y-1" href="/catalogo">
          Explorar catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <main className="mx-auto max-w-7xl px-4 lg:px-8">
        
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">Tu Carrito ({items.length})</h1>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
          
          {/* LADO IZQUIERDO: Lista de Artículos */}
          <div className="space-y-4">
            {items.map((it) => (
              <div key={it.id} className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-center">
                
                {/* Imagen del producto */}
                <div className="relative w-24 h-24 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
                  <Image 
                    src={it.image} 
                    alt={it.nombre} 
                    fill 
                    className="object-contain p-2"
                  />
                </div>

                {/* Info */}
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-lg text-gray-900">{it.nombre}</h3>
                    <span className="font-bold text-lg text-[#1e6260]">${it.precio.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide ${it.tipo === 'compra' ? 'bg-blue-50 text-blue-700' : 'bg-orange-50 text-orange-700'}`}>
                      {it.tipo === "compra" ? "Venta" : "Renta"}
                    </span>
                    {it.detalle && <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">{it.detalle}</span>}
                  </div>

                  <button 
                    onClick={() => quitar(it.id)}
                    className="text-sm text-red-500 font-medium hover:text-red-700 flex items-center gap-1 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
            
            <div className="mt-6">
              <Link href="/catalogo" className="text-[#1e6260] font-semibold hover:underline flex items-center gap-2">
                ← Seguir comprando
              </Link>
            </div>
          </div>

          {/* LADO DERECHO: Resumen (Sticky) */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 lg:sticky lg:top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Resumen del pedido</h2>
            
            <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Envío estimado</span>
                <span className="text-green-600 font-medium">Gratis</span>
              </div>
            </div>

            <div className="flex justify-between items-end mb-8">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <div className="text-right">
                <span className="block text-3xl font-extrabold text-[#1e6260]">${total.toLocaleString()}</span>
                <span className="text-xs text-gray-400">MXN</span>
              </div>
            </div>

            <Link 
              href="/checkout/compra" 
              className="block w-full py-4 bg-[#1e6260] text-white text-center font-bold rounded-xl shadow-lg hover:bg-[#154644] hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Continuar al pago
            </Link>
            
            <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-2">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Pago 100% seguro y encriptado
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}