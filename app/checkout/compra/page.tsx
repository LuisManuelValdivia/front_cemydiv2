// app/checkout/compra/page.tsx
import Steps from '@/components/checkout/Steps';
import UploadField from '@/components/forms/UploadField';
import OrderSummary from '@/components/checkout/OrderSummary';
import InputField from "@/components/ui/InputField"; // Reutilizamos tu input bonito
import Link from 'next/link';

export default function CheckoutCompraPage() {
  // Mock: un artículo que requiere receta
  const requiresRx = true;

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <main className="mx-auto max-w-6xl px-4">
        
        {/* Header simple */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-display font-bold text-gray-900">Finalizar Compra</h1>
          <div className="mt-6 flex justify-center">
            <Steps current={1} items={['Envío', 'Pago', 'Confirmación']} />
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 mt-10">
          
          {/* LADO IZQUIERDO: FORMULARIOS */}
          <div className="space-y-6">
            
            {/* Sección 1: Datos de Envío */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#1e6260] text-white flex items-center justify-center text-sm">1</span>
                Datos de envío
              </h2>
              
              <div className="grid md:grid-cols-2 gap-5">
                <InputField id="nombre" label="Nombre completo" placeholder="Ej. Ana Pérez" />
                <InputField id="telefono" label="Teléfono" placeholder="55 0000 0000" type="tel" />
                <div className="md:col-span-2">
                  <InputField id="direccion" label="Dirección de entrega" placeholder="Calle, número, colonia, CP" />
                </div>
                <div className="md:col-span-2">
                  <InputField id="referencias" label="Referencias (Opcional)" placeholder="Color de fachada, entre calles..." />
                </div>
              </div>
            </section>

            {/* Sección 2: Pago */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#1e6260] text-white flex items-center justify-center text-sm">2</span>
                Método de pago
              </h2>
              
              <div className="space-y-6">
                <InputField 
                  id="tarjeta" 
                  label="Número de tarjeta" 
                  placeholder="0000 0000 0000 0000" 
                  right={<span className="text-xs font-bold text-gray-400">VISA/MC</span>}
                />
                
                <div className="grid grid-cols-2 gap-5">
                   <InputField id="exp" label="Vencimiento" placeholder="MM/AA" />
                   <InputField id="cvv" label="CVV" placeholder="123" />
                </div>

                {/* Receta médica */}
                {requiresRx && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-bold text-gray-900">Receta médica</span>
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Obligatoria</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-dashed border-gray-300">
                      <UploadField
                        label="Subir foto o PDF"
                        helper="Este producto requiere receta válida para su venta."
                      />
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Botones de navegación */}
            <div className="flex items-center justify-between pt-4">
              <Link href="/carrito" className="text-gray-500 hover:text-gray-900 font-medium">
                ← Volver al carrito
              </Link>
              <Link
                href="/pedido/123"
                className="px-8 py-3 bg-[#1e6260] text-white font-bold rounded-xl shadow-lg hover:bg-[#154644] hover:-translate-y-0.5 transition-all"
              >
                Pagar y confirmar
              </Link>
            </div>

          </div>

          {/* LADO DERECHO: RESUMEN */}
          <div className="lg:sticky lg:top-8 h-fit">
            <OrderSummary
              title="Tu pedido"
              items={[
                { name: 'Rodillera ortopédica', note: '1 pza', price: 690 },
              ]}
              extra={[
                { label: 'Envío', value: 0 },
                { label: 'Impuestos', value: 110.40 }, // Ejemplo
              ]}
              totalLabel="Total a pagar"
              cta={
                <p className="text-xs text-gray-400 text-center mt-4">
                  Al confirmar aceptas nuestros <a href="#" className="underline hover:text-[#1e6260]">Términos y Condiciones</a>.
                </p>
              }
            />
          </div>

        </div>
      </main>
    </div>
  );
}