// components/checkout/OrderSummary.tsx
import React from 'react';

type Item = { name: string; note?: string; qty?: number; price: number };

export default function OrderSummary({
  title = "Resumen",
  items,
  extra,
  totalLabel = "Total",
  cta,
}: {
  title?: string;
  items: Item[];
  extra?: { label: string; value: number }[]; 
  totalLabel?: string;
  cta?: React.ReactNode;
}) {
  const currency = (n: number) => `$${n.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`;

  const sub = items.reduce((a, i) => a + i.price, 0);
  const extras = (extra ?? []).reduce((a, e) => a + e.value, 0);
  const total = sub + extras;

  return (
    <aside className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden">
      {/* Decoración superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e6260] to-[#2aa09d]" />

      <h3 className="text-lg font-bold text-gray-900 mb-6">{title}</h3>

      <div className="space-y-4">
        {/* Lista de Items */}
        {items.map((it, idx) => (
          <div key={idx} className="flex justify-between items-start text-sm">
            <div className="pr-4">
              <div className="font-semibold text-gray-800">{it.name}</div>
              {!!it.note && <div className="text-xs text-gray-500 mt-0.5">{it.note}</div>}
            </div>
            <div className="font-bold text-gray-900 whitespace-nowrap">{currency(it.price)}</div>
          </div>
        ))}

        {/* Separador punteado */}
        <div className="border-t-2 border-dashed border-gray-100 my-4"></div>

        {/* Extras (Envío, Impuestos) */}
        {extra?.map((e, i) => (
          <div key={i} className="flex justify-between text-sm text-gray-600">
            <span>{e.label}</span>
            <span className="font-medium">{currency(e.value)}</span>
          </div>
        ))}

        {/* Total Final */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-2">
          <span className="text-lg font-bold text-gray-900">{totalLabel}</span>
          <span className="text-2xl font-extrabold text-[#1e6260]">{currency(total)}</span>
        </div>

        {/* Call to Action (Si existe) */}
        {cta && <div className="mt-4">{cta}</div>}

        {/* Badges de Confianza */}
        <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-gray-50">
          <div className="flex flex-col items-center text-center">
            <svg className="w-5 h-5 text-green-600 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            <span className="text-[10px] font-medium text-gray-500 leading-tight">Pago Seguro</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg className="w-5 h-5 text-blue-600 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="text-[10px] font-medium text-gray-500 leading-tight">Soporte 24/7</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg className="w-5 h-5 text-purple-600 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <span className="text-[10px] font-medium text-gray-500 leading-tight">Datos Privados</span>
          </div>
        </div>
      </div>
    </aside>
  );
}