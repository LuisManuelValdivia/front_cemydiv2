// app/login/page.tsx
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!form.email) newErrors.email = "El correo es obligatorio.";
    else if (!emailRegex.test(form.email))
      newErrors.email = "El correo no tiene un formato válido.";

    if (!form.password) newErrors.password = "La contraseña es obligatoria.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGlobalError("");

    if (!validate()) return;

    setLoading(true);
    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (res?.error) {
      setGlobalError("Credenciales incorrectas.");
      setLoading(false);
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="bg-gray-50 min-h-[80vh] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-5xl rounded-[2rem] shadow-2xl overflow-hidden grid md:grid-cols-2 min-h-[600px]">

        {/* IMAGEN */}
        <div className="relative hidden md:block bg-[#1e6260]">
          <Image
            src="/fondowan.png"
            alt="Bienvenido"
            fill
            className="object-cover opacity-80 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d3b] to-transparent opacity-90" />
        </div>

        {/* FORM */}
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6">Iniciar Sesión</h1>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {globalError && (
              <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl">
                {globalError}
              </div>
            )}

            <InputField
              id="email"
              name="email"
              label="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            <div className="space-y-1">
              <InputField
                id="password"
                name="password"
                label="Contraseña"
                type="password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
              />

              {/* 👉 LINK AGREGADO AQUÍ */}
              <div className="flex justify-end">
                <Link
                  href="/recuperar"
                  className="text-sm font-medium text-[#1e6260] hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </div>

            <Button type="submit" disabled={loading} className="w-full py-4">
              {loading ? "Iniciando..." : "Entrar a mi cuenta"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm">
            ¿No tienes cuenta?{" "}
            <Link href="/registro" className="font-bold text-[#1e6260]">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
