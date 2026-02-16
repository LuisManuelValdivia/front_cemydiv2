//app/perfil/page.tsx
"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import InputField from "../../components/ui/InputField";

const phoneRegex = /^\d{10}$/;

export default function PerfilPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [loadingData, setLoadingData] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  const [errors, setErrors] = useState<{
    nombre?: string;
    telefono?: string;
  }>({});

  // 🔐 Protección de ruta
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // 📥 Cargar datos del usuario
  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/profile?email=${session.user.email}`)
        .then((res) => {
          if (!res.ok) throw new Error("Error al cargar perfil");
          return res.json();
        })
        .then((data) => {
          setFormData({
            nombre: data.nombre || "",
            email: data.email || "",
            telefono: data.telefono || "",
            direccion: data.direccion || "",
          });
        })
        .catch(console.error)
        .finally(() => setLoadingData(false));
    }
  }, [session]);

  // ✍️ Manejar inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  // 💾 Guardar cambios con validación
  const handleSave = async () => {
    const newErrors: typeof errors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre no puede estar vacío.";
    }

    if (formData.telefono && !phoneRegex.test(formData.telefono)) {
      newErrors.telefono = "El teléfono debe contener exactamente 10 dígitos.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSaving(true);

    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setIsEditing(false);
      router.refresh();
    } catch {
      alert("Hubo un problema al guardar tus datos.");
    } finally {
      setIsSaving(false);
    }
  };

  if (status === "loading" || loadingData) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1e6260]"></div>
      </div>
    );
  }

  const userInitials = formData.nombre
    ? formData.nombre
        .split(" ")
        .map((n) => n[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "U";

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden grid md:grid-cols-[1fr_2fr]">

        {/* PANEL IZQUIERDO */}
        <div className="bg-[#1e6260] p-10 flex flex-col items-center text-white">
          <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center text-4xl font-bold mb-6">
            {userInitials}
          </div>

          <h2 className="text-2xl font-bold">{formData.nombre}</h2>
          <p className="text-green-100 text-sm mb-8">{formData.email}</p>

          <div className="mt-auto bg-black/20 rounded-2xl p-4 w-full">
            <p className="text-xs uppercase tracking-wider mb-2">Estado</p>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              <span className="font-semibold text-sm">Cuenta Activa</span>
            </div>
          </div>
        </div>

        {/* PANEL DERECHO */}
        <div className="p-8 md:p-12">
          <header className="flex justify-between items-center mb-8 border-b pb-4">
            <div>
              <h1 className="text-2xl font-bold">Información Personal</h1>
              <p className="text-sm text-gray-500">
                Mantén tus datos actualizados para agilizar tus compras.
              </p>
            </div>

            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="text-sm font-bold text-[#1e6260] bg-green-50 px-5 py-2.5 rounded-xl"
              >
                Editar
              </button>
            )}
          </header>

          {isEditing ? (
            <div className="space-y-5">
              <InputField
                id="nombre"
                name="nombre"
                label="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                error={errors.nombre}
              />

              <div className="opacity-60">
                <InputField
                  id="email"
                  name="email"
                  label="Correo electrónico (No editable)"
                  value={formData.email}
                  disabled
                />
              </div>

              <InputField
                id="telefono"
                name="telefono"
                label="Teléfono"
                placeholder="Ej. 5512345678"
                value={formData.telefono}
                onChange={handleChange}
                error={errors.telefono}
              />

              <InputField
                id="direccion"
                name="direccion"
                label="Dirección de envío"
                value={formData.direccion}
                onChange={handleChange}
              />

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 text-gray-500 font-bold rounded-xl"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="px-8 py-3 bg-[#1e6260] text-white font-bold rounded-xl disabled:opacity-50"
                >
                  {isSaving ? "Guardando..." : "Guardar Cambios"}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <InfoBox label="Nombre" value={formData.nombre} />
              <InfoBox label="Correo electrónico" value={formData.email} />
              <InfoBox
                label="Teléfono"
                value={formData.telefono || "No registrado"}
                isPlaceholder={!formData.telefono}
              />
              <InfoBox
                label="Dirección"
                value={formData.direccion || "No registrada"}
                isPlaceholder={!formData.direccion}
              />
            </div>
          )}

          {!isEditing && (
            <div className="mt-8 pt-6 border-t flex justify-between">
              <span className="text-xs text-gray-400">
                ID Usuario: {session?.user?.email?.split("@")[0]}
              </span>

              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-red-500 font-bold text-sm"
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// 🔹 Subcomponente visual
function InfoBox({ label, value, isPlaceholder = false }: any) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold text-gray-400 uppercase">{label}</label>
      <div
        className={`p-4 rounded-2xl border ${
          isPlaceholder
            ? "bg-gray-50 border-dashed text-gray-400 italic"
            : "bg-white border-gray-200 text-gray-700"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
