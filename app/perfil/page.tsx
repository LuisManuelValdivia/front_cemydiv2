"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";

const phoneRegex = /^\d{10}$/;

type ProfileData = {
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
};

type ProfileErrors = {
  nombre?: string;
  telefono?: string;
};

type InfoBoxProps = {
  label: string;
  value: string;
  isPlaceholder?: boolean;
};

export default function PerfilPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [loadingData, setLoadingData] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState<ProfileData>({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  const [errors, setErrors] = useState<ProfileErrors>({});

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/profile?email=${session.user.email}`)
        .then((res) => {
          if (!res.ok) throw new Error("Error al cargar perfil");
          return res.json();
        })
        .then((data: Partial<ProfileData>) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSave = async () => {
    const newErrors: ProfileErrors = {};

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
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-[#1e6260]" />
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
    <section className="px-4 py-10 md:py-14">
      <div className="surface-card mx-auto grid w-full max-w-5xl overflow-hidden md:grid-cols-[1fr_2fr]">
        <aside className="flex flex-col items-center bg-[#1e6260] p-8 text-white md:p-10">
          <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-white/10 text-3xl font-bold md:h-32 md:w-32 md:text-4xl">
            {userInitials}
          </div>

          <h2 className="text-center text-2xl font-bold">{formData.nombre || "Usuario"}</h2>
          <p className="mb-8 text-center text-sm text-green-100">{formData.email}</p>

          <div className="mt-auto w-full rounded-2xl bg-black/20 p-4">
            <p className="mb-2 text-xs uppercase tracking-wider">Estado</p>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="text-sm font-semibold">Cuenta Activa</span>
            </div>
          </div>
        </aside>

        <div className="bg-white p-7 md:p-12">
          <header className="mb-8 flex items-center justify-between border-b border-[#e4eded] pb-4">
            <div>
              <h1 className="text-2xl font-bold text-[#0f3d3b]">Información personal</h1>
              <p className="text-sm text-[#6b7280]">Mantén tus datos actualizados para agilizar tus compras.</p>
            </div>

            {!isEditing && (
              <Button onClick={() => setIsEditing(true)} variant="ghost" className="px-5">
                Editar
              </Button>
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

              <div className="flex justify-end gap-3 border-t border-[#e4eded] pt-4">
                <Button onClick={() => setIsEditing(false)} variant="ghost" className="text-[#6b7280]">
                  Cancelar
                </Button>
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? "Guardando..." : "Guardar cambios"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <InfoBox label="Nombre" value={formData.nombre} />
              <InfoBox label="Correo electrónico" value={formData.email} />
              <InfoBox label="Teléfono" value={formData.telefono || "No registrado"} isPlaceholder={!formData.telefono} />
              <InfoBox label="Dirección" value={formData.direccion || "No registrada"} isPlaceholder={!formData.direccion} />
            </div>
          )}

          {!isEditing && (
            <div className="mt-8 flex justify-between border-t border-[#e4eded] pt-6">
              <span className="text-xs text-[#9ca3af]">ID Usuario: {session?.user?.email?.split("@")[0]}</span>

              <button onClick={() => signOut({ callbackUrl: "/" })} className="text-sm font-bold text-red-500 hover:text-red-600">
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function InfoBox({ label, value, isPlaceholder = false }: InfoBoxProps) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold uppercase tracking-wide text-[#9ca3af]">{label}</label>
      <div
        className={`rounded-2xl border p-4 ${
          isPlaceholder
            ? "border-dashed border-[#e5e7eb] bg-[#f9fafb] italic text-[#9ca3af]"
            : "border-[#e5ecec] bg-white text-[#334155]"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
