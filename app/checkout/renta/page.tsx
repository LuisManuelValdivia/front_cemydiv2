// app/checkout/renta/page.tsx
import Steps from '@/components/checkout/Steps';
import DateRangePicker from '@/components/schedule/DateRangePicker';
import OrderSummary from '@/components/checkout/OrderSummary';
import InputField from "@/components/ui/InputField";
import Link from 'next/link';

export default function CheckoutRentaPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <main className="mx-auto max-w-6xl px-4">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-display font-bold text-gray-900">Renta de Equipo</h1>
          <div className="mt-8 flex justify-center">
            <Steps current={1} items={['Selección', 'Datos y Pago', 'Confirmación']} />
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          
          {/* COLUMNA IZQUIERDA: FORMULARIO */}
          <div className="space-y-6">
            
            {/* Paso 1: Fechas */}
            <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1e6260] text-white flex items-center justify-center text-sm font-bold shadow-md shadow-green-900/20">1</span>
                Periodo de renta
              </h2>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                <DateRangePicker />
              </div>
            </section>

            {/* Paso 2: Datos Personales */}
            <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1e6260] text-white flex items-center justify-center text-sm font-bold shadow-md shadow-green-900/20">2</span>
                Responsable del equipo
              </h2>
              
              <div className="grid md:grid-cols-2 gap-5">
                <InputField id="nombre" label="Nombre completo" placeholder="Ej. Juan Pérez" />
                <InputField id="telefono" label="Teléfono de contacto" placeholder="55 0000 0000" type="tel" />
                
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Método de entrega</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e6260] focus:border-transparent outline-none appearance-none">
                      <option>Recoger en Tienda (Gratis)</option>
                      <option>Envío a Domicilio (+$150)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 md:col-span-2 flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <p className="text-sm font-bold text-blue-800">Depósito en garantía: $1,500</p>
                    <p className="text-xs text-blue-600 mt-1">Este monto solo se bloqueará en tu tarjeta y se liberará al devolver el equipo en buen estado.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Paso 3: Pago */}
            <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1e6260] text-white flex items-center justify-center text-sm font-bold shadow-md shadow-green-900/20">3</span>
                Pago y Garantía
              </h2>
              <div className="space-y-4">
                <InputField 
                  id="tarjeta" 
                  label="Número de tarjeta (Crédito/Débito)" 
                  placeholder="0000 0000 0000 0000" 
                />
              </div>
            </section>

            {/* Navegación */}
            <div className="flex items-center justify-between pt-4 pb-12">
              <Link href="/producto/1" className="text-gray-500 hover:text-[#1e6260] font-bold transition-colors flex items-center gap-2">
                ← Cancelar
              </Link>
              <Link
                href="/renta/456"
                className="px-8 py-4 bg-[#1e6260] text-white font-bold rounded-xl shadow-lg hover:bg-[#154644] hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Confirmar Renta
              </Link>
            </div>
          </div>

          {/* COLUMNA DERECHA: RESUMEN STICKY */}
          <div className="lg:sticky lg:top-8 h-fit">
            <OrderSummary
              title="Resumen de Renta"
              items={[
                { name: 'Silla de ruedas plegable', note: '2 Semanas', price: 300 },
              ]}
              extra={[
                { label: 'Depósito (Reembolsable)', value: 1500 },
                { label: 'Entrega', value: 0 },
              ]}
              totalLabel="Total a pagar hoy"
              cta={
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span className="text-xs font-medium text-green-800">Fechas flexibles: puedes extender después.</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-xs font-medium text-blue-800">Equipo sanitizado y con garantía.</span>
                  </div>
                </div>
              }
            />
          </div>

        </div>
      </main>
    </div>
  );
}