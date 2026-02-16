// components/checkout/Steps.tsx
'use client';
import React from 'react';

type Props = { current: number; items: string[] };

export default function Steps({ current, items }: Props) {
  return (
    <div className="flex items-center gap-4">
      {items.map((label, i) => {
        const isActive = i <= current;
        const isCurrent = i === current;
        
        return (
          <div key={label} className="flex items-center gap-3">
            {/* Indicador visual del paso */}
            <div 
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300
                ${isCurrent 
                  ? 'bg-[#1e6260] text-white shadow-lg shadow-green-900/20 ring-2 ring-offset-2 ring-[#1e6260]' 
                  : isActive 
                    ? 'bg-green-50 text-[#1e6260] border border-green-200' 
                    : 'bg-gray-100 text-gray-400'
                }
              `}
            >
              <span className={`flex items-center justify-center w-5 h-5 rounded-full text-xs ${isCurrent ? 'bg-white text-[#1e6260]' : isActive ? 'bg-[#1e6260] text-white' : 'bg-gray-300 text-white'}`}>
                {isActive && !isCurrent ? '✓' : i + 1}
              </span>
              {label}
            </div>

            {/* Línea conectora (excepto en el último) */}
            {i < items.length - 1 && (
              <div className={`w-8 h-0.5 rounded ${isActive ? 'bg-green-200' : 'bg-gray-200'}`}></div>
            )}
          </div>
        );
      })}
    </div>
  );
}