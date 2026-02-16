"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

type RegisterErrors = {
  nombre?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export default function RegistroPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<RegisterErrors>({});
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const validationErrors: RegisterErrors = {};

    if (!form.nombre) validationErrors.nombre = "El nombre es obligatorio.";
    if (!form.email) validationErrors.email = "El correo es obligatorio.";
    else if (!emailRegex.test(form.email)) validationErrors.email = "Correo electrónico inválido.";

    if (!form.password) validationErrors.password = "La contraseña es obligatoria.";
    else if (!strongPasswordRegex.test(form.password)) {
      validationErrors.password = "Debe tener 8 caracteres, mayúscula, minúscula, número y símbolo.";
    }

    if (form.password !== form.confirmPassword) {
      validationErrors.confirmPassword = "Las contraseñas no coinciden.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGlobalError("");

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Error al registrarse");

      router.push("/login");
    } catch (err) {
      setGlobalError(err instanceof Error ? err.message : "No se pudo crear la cuenta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-shell min-h-[82vh] px-4 py-10 md:py-14">
      <div className="surface-card mx-auto grid w-full max-w-5xl overflow-hidden md:grid-cols-2">
        <div className="relative hidden bg-[#1e6260] md:block">
          <Image
            src="/fondowan.png"
            alt="Registro"
            fill
            className="object-cover opacity-85 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d3b] via-[#1e6260]/70 to-transparent" />
          <div className="absolute bottom-10 left-8 right-8 text-white">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-100">Crea tu cuenta</p>
            <h2 className="text-3xl font-bold">Comienza hoy con CEMYDI</h2>
            <p className="mt-2 text-sm text-green-100">Compra o renta productos ortopédicos con seguimiento personalizado.</p>
          </div>
        </div>

        <div className="bg-white p-7 md:p-12">
          <h1 className="mb-2 text-3xl font-bold text-[#0f3d3b]">Crear cuenta</h1>
          <p className="mb-7 text-sm text-[#6b7280]">Completa tus datos para registrarte.</p>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {globalError && (
              <div className="rounded-[14px] border border-red-200 bg-red-50 p-3 text-sm text-red-600">{globalError}</div>
            )}

            <InputField
              id="nombre"
              name="nombre"
              label="Nombre completo"
              value={form.nombre}
              onChange={handleChange}
              error={errors.nombre}
            />

            <InputField
              id="email"
              name="email"
              label="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            <InputField
              id="password"
              name="password"
              label="Contraseña"
              type="password"
              value={form.password}
              onChange={handleChange}
              error={errors.password}
              hint="Mín. 8 caracteres, mayúscula, número y símbolo"
            />

            <InputField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirmar contraseña"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />

            <Button type="submit" disabled={loading} className="mt-1 w-full">
              {loading ? "Registrando..." : "Crear mi cuenta"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-[#6b7280]">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login" className="font-bold text-[#1e6260] hover:text-[#154f4d]">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
