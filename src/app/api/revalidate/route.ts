// src/app/api/revalidate/route.ts

import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Ler o corpo da requisição para obter o segredo
  const body = await request.json();
  const receivedSecret = body.secret;

  // Comparar com a variável de ambiente (sem o "Bearer")
  const expectedSecret = process.env.PRISMIC_REVALIDATE_SECRET;

  // Log para depuração
  console.log("Segredo Recebido do Body:", receivedSecret);

  // Compara os segredos
  if (receivedSecret !== expectedSecret) {
    return NextResponse.json(
      { message: "Token de autorização inválido." },
      { status: 401 }
    );
  }

  // Se o token for válido, revalida o cache
  revalidateTag("prismic");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}