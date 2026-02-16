/*import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { transporter } from "@/lib/mailer";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ message: "Correo requerido" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return NextResponse.json(
      { message: "Si el correo existe, se enviará un enlace" },
      { status: 200 }
    );
  }

  const token = crypto.randomBytes(32).toString("hex");
  const expiry = new Date(Date.now() + 1000 * 60 * 30); // 30 minutos

  await prisma.user.update({
    where: { email },
    data: {
      resetToken: token,
      resetTokenExpiry: expiry,
    },
  });

  const resetLink = `${process.env.NEXTAUTH_URL}/restablecer?token=${token}`;

  await transporter.sendMail({
    from: `"CEMYDI" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Recupera tu contraseña",
    html: `
      <h2>Recuperación de contraseña</h2>
      <p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>Este enlace expira en 30 minutos.</p>
    `,
  });

  return NextResponse.json({ message: "Correo enviado" });
} */
