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
    else if (!emailRegex.test(form.email)) {
      newErrors.email = "El correo no tiene un formato válido.";
    }

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
    <section className="auth-shell min-h-[82vh] px-4 py-10 md:py-14">
      <div className="surface-card mx-auto grid w-full max-w-5xl overflow-hidden md:grid-cols-2">
        <div className="relative hidden bg-[#1e6260] md:block">
          <Image
            src="/fondowan.png"
            alt="Bienvenido"
            fill
            className="object-cover opacity-85 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d3b] via-[#1e6260]/70 to-transparent" />
          <div className="absolute bottom-10 left-8 right-8 text-white">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-100">
              CEMYDI
            </p>
            <h2 className="text-3xl font-bold">Bienvenido de vuelta</h2>
            <p className="mt-2 text-sm text-green-100">Gestiona tus compras, rentas y datos personales en un solo lugar.</p>
          </div>
        </div>

        <div className="bg-white p-7 md:p-12">
          <h1 className="mb-2 text-3xl font-bold text-[#0f3d3b]">Iniciar sesión</h1>
          <p className="mb-7 text-sm text-[#6b7280]">Accede con tu correo y contraseña.</p>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {globalError && (
              <div className="rounded-[14px] border border-red-200 bg-red-50 p-3 text-sm text-red-600">{globalError}</div>
            )}

            <InputField
              id="email"
              name="email"
              label="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            <div className="space-y-1.5">
              <InputField
                id="password"
                name="password"
                label="Contraseña"
                type="password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
              />

              <div className="flex justify-end">
                <Link href="/recuperar" className="text-sm font-medium text-[#1e6260] hover:text-[#154f4d] hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </div>

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Iniciando..." : "Entrar a mi cuenta"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-[#6b7280]">
            ¿No tienes cuenta?{" "}
            <Link href="/registro" className="font-bold text-[#1e6260] hover:text-[#154f4d]">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
