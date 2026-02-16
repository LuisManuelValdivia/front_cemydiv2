import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();

  const product = await prisma.product.create({
    data: {
      nombre: body.nombre,
      descripcion: body.descripcion,
      precio: body.precio,
      tipo: body.tipo,
      stock: body.stock,
      imageUrl: body.imageUrl,
    },
  });

  return NextResponse.json(product);
}
