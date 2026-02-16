// app/recuperar/page.tsx
"use client";

import { useState } from "react";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function RecuperarPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message);
    setLoading(false);
  };

  return (
    <div className="bg-gray-50 min-h-[70vh] flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full p-8 rounded-[2rem] shadow-xl text-center">
        <h1 className="text-2xl font-bold mb-4">Recuperar contraseña</h1>
        <p className="text-sm text-gray-500 mb-6">
          Ingresa tu correo y te enviaremos un enlace.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <InputField
            id="email"
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button type="submit" className="w-full py-3" disabled={loading}>
            {loading ? "Enviando..." : "Enviar enlace"}
          </Button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-green-600 text-center">{message}</p>
        )}

        <div className="mt-6">
          <Link href="/login" className="text-sm text-gray-500 hover:underline">
            Volver al login
          </Link>
        </div>
      </div>
    </div>
  );
}
