// app/registro/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

export default function RegistroPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const e: any = {};

    if (!form.nombre) e.nombre = "El nombre es obligatorio.";
    if (!form.email) e.email = "El correo es obligatorio.";
    else if (!emailRegex.test(form.email))
      e.email = "Correo electrónico inválido.";

    if (!form.password)
      e.password = "La contraseña es obligatoria.";
    else if (!strongPasswordRegex.test(form.password))
      e.password =
        "Debe tener 8 caracteres, mayúscula, minúscula, número y símbolo.";

    if (form.password !== form.confirmPassword)
      e.confirmPassword = "Las contraseñas no coinciden.";

    setErrors(e);
    return Object.keys(e).length === 0;
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
    } catch (err: any) {
      setGlobalError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-[80vh] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-5xl rounded-[2rem] shadow-2xl overflow-hidden grid md:grid-cols-2 min-h-[600px]">

        {/* IMAGEN (IGUAL QUE LOGIN) */}
        <div className="relative hidden md:block bg-[#1e6260]">
          <Image
            src="/fondowan.png"
            alt="Registro"
            fill
            className="object-cover opacity-80 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d3b] to-transparent opacity-90" />
        </div>

        {/* FORM */}
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6">Crear cuenta</h1>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {globalError && (
              <div className="p-3 bg-red-50 text-red-600 rounded-xl text-sm">
                {globalError}
              </div>
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

            <Button type="submit" disabled={loading} className="w-full py-4">
              {loading ? "Creando..." : "Registrarme"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login" className="font-bold text-[#1e6260]">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
