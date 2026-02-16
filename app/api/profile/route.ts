import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

// GET: Para obtener los datos actuales del usuario (incluyendo teléfono y dirección)
export async function GET(request: Request) {
  // Obtenemos el email de la sesión (truco para no complicarnos con IDs)
  // Nota: Necesitamos usar la configuración de auth, pero por simplicidad usaremos un header o buscaremos por email si lo pasamos.
  // MEJOR FORMA: Usar el email que viene en el token de sesión del cliente.
  
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ message: "Email requerido" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: {
        nombre: true,
        email: true,
        telefono: true,
        direccion: true,
      }
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: "Error al obtener perfil" }, { status: 500 });
  }
}

// PUT: Para guardar los cambios
export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { email, telefono, direccion, nombre } = data;

    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: {
        telefono,
        direccion,
        nombre, // Dejamos que también corrija su nombre si quiere
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ message: "Error al actualizar perfil" }, { status: 500 });
  }
}