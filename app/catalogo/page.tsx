// app/catalogo/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS, Product } from "@/app/data/products";

const CATEGORIES = [
  "Sillas de ruedas",
  "Ortesis",
  "Equipo médico",
  "Rehabilitación",
];

export default function CatalogoPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q")?.toLowerCase() || "";

  // ===============================
  // ESTADOS DE FILTROS (FORMULARIO)
  // ===============================

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filterSinReceta, setFilterSinReceta] = useState(false);
  const [filterConReceta, setFilterConReceta] = useState(false);

  // Resultados finales
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(PRODUCTS);

  // ===============================
  // FILTRO INICIAL POR BÚSQUEDA (HEADER)
  // ===============================
  useEffect(() => {
    if (!searchQuery) {
      setFilteredProducts(PRODUCTS);
      return;
    }

    const results = PRODUCTS.filter((p) =>
      p.title.toLowerCase().includes(searchQuery)
    );

    setFilteredProducts(results);
  }, [searchQuery]);

  // ===============================
  // MANEJO DE CHECKBOX DE CATEGORÍA
  // ===============================
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // ===============================
  // APLICAR FILTROS (BOTÓN)
  // ===============================
  const handleApplyFilters = (e: React.FormEvent) => {
    e.preventDefault();

    let results = [...PRODUCTS];

    // 🔍 RESPETAR BÚSQUEDA DEL HEADER
    if (searchQuery) {
      results = results.filter((p) =>
        p.title.toLowerCase().includes(searchQuery)
      );
    }

    // ---- FILTRO POR CATEGORÍA ----
    if (selectedCategories.length > 0) {
      results = results.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    // ---- FILTRO POR RECETA ----
    if (filterSinReceta && !filterConReceta) {
      results = results.filter((p) => p.requiresRx === false);
    }

    if (filterConReceta && !filterSinReceta) {
      results = results.filter((p) => p.requiresRx === true);
    }

    setFilteredProducts(results);
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 lg:grid-cols-[280px_1fr]">

        {/* ================= SIDEBAR FILTROS ================= */}
        <aside className="lg:sticky lg:top-24 self-start space-y-8">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="font-display text-xl font-bold text-gray-800 mb-6">
              Filtros
            </h2>

            <form className="space-y-8" onSubmit={handleApplyFilters}>

              {/* -------- CATEGORÍAS -------- */}
              <fieldset>
                <legend className="font-bold text-sm text-gray-900 uppercase tracking-wider mb-4">
                  Categoría
                </legend>

                <div className="space-y-3">
                  {CATEGORIES.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="w-5 h-5 border-gray-300 rounded text-[#1e6260]"
                      />
                      <span className="text-gray-600">{cat}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <hr className="border-gray-100" />

              {/* -------- CONDICIONES -------- */}
              <fieldset>
                <legend className="font-bold text-sm text-gray-900 uppercase tracking-wider mb-4">
                  Condiciones
                </legend>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filterSinReceta}
                      onChange={() => setFilterSinReceta(!filterSinReceta)}
                      className="w-5 h-5 border-gray-300 rounded text-[#1e6260]"
                    />
                    <span className="text-gray-600">Solo sin receta</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filterConReceta}
                      onChange={() => setFilterConReceta(!filterConReceta)}
                      className="w-5 h-5 border-gray-300 rounded text-[#1e6260]"
                    />
                    <span className="text-gray-600">Solo con receta</span>
                  </label>
                </div>
              </fieldset>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#1e6260] text-white py-3 font-bold shadow-lg hover:bg-[#154644]"
              >
                Aplicar filtros
              </button>
            </form>
          </div>
        </aside>

        {/* ================= RESULTADOS ================= */}
        <section className="space-y-6">
          <header className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
            <h1 className="font-display text-2xl font-bold text-gray-900">
              Catálogo Completo
            </h1>
            <p className="text-sm text-gray-500">
              Mostrando {filteredProducts.length} productos disponibles
            </p>
          </header>

          {filteredProducts.length === 0 ? (
            <div className="bg-white p-10 rounded-2xl text-center text-gray-500">
              No se encontraron productos con los filtros seleccionados.
            </div>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => (
                <li key={p.id}>
                  <ProductCard
                    id={p.id}
                    title={p.title}
                    priceMXN={p.priceMXN}
                    warranty={p.warranty}
                    requiresRx={p.requiresRx}
                    image={p.image}
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
