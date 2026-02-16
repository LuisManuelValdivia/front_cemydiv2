import Image from 'next/image';
import Link from 'next/link';

type Props = {
  id: string;
  title: string;
  priceMXN: number;
  warranty?: string;
  requiresRx?: boolean;
  image: string;
};

export default function ProductCard({
  id, title, priceMXN, warranty, requiresRx, image,
}: Props) {
  return (
    <Link href={`/producto/${id}`} className="group block h-full">
      <article className="h-full flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        
        {/* ZONA DE IMAGEN */}
        <div className="relative aspect-[4/3] bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 300px, 45vw"
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Badge de Receta */}
          {requiresRx && (
            <span className="absolute top-4 left-4 bg-gray-900/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
              Requiere Receta
            </span>
          )}

          {/* Badge de Garantía (Opcional si quieres mostrarlo en la foto) */}
          {warranty && (
            <span className="absolute bottom-4 left-4 bg-white/80 text-gray-700 text-[10px] font-semibold px-2 py-1 rounded-md border border-gray-200 backdrop-blur-sm">
              🛡️ {warranty}
            </span>
          )}
        </div>

        {/* CONTENIDO */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-bold text-gray-800 text-lg leading-tight mb-2 group-hover:text-[#1e6260] transition-colors">
            {title}
          </h3>
          
          <div className="mt-auto pt-4 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Precio</span>
              <span className="text-xl font-extrabold text-[#1e6260]">
                ${priceMXN.toLocaleString('es-MX')}
              </span>
            </div>
            
            {/* Botón "Fake" decorativo */}
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#1e6260] group-hover:bg-[#1e6260] group-hover:text-white transition-colors">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>

      </article>
    </Link>
  );
}