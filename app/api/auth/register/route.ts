// app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Asegúrate que la ruta sea correcta
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Recibimos los datos tal cual los tienes en tu formulario
    const { nombre, email, password } = data;

    // 1. Validaciones básicas
    if (!email || !password || !nombre) {
      return NextResponse.json(
        { message: "Faltan datos obligatorios" },
        { status: 400 }
      );
    }

    // 2. Verificar si el correo ya existe
    const userFound = await prisma.user.findUnique({
      where: { email: email },
    });

    if (userFound) {
      return NextResponse.json(
        { message: "Este correo ya está registrado" },
        { status: 409 }
      );
    }

    // 3. Encriptar la contraseña (Nunca guardar texto plano)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Crear el usuario en MySQL
    const newUser = await prisma.user.create({
      data: {
        nombre: nombre,
        email: email,
        password: hashedPassword,
      },
    });

    // Retornamos éxito (sin enviar la contraseña de vuelta)
    return NextResponse.json({
      id: newUser.id,
      nombre: newUser.nombre,
      email: newUser.email,
    });

  } catch (error) {
    return NextResponse.json(
      { message: "Error interno del servidor", error },
      { status: 500 }
    );
  }
}