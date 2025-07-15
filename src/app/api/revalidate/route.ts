// src/app/api/revalidate/route.ts

import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const receivedSecret = request.headers.get("authorization");
  const expectedSecret = `Bearer ${process.env.PRISMIC_REVALIDATE_SECRET}`;

  // Log para depuração - ISSO É O MAIS IMPORTANTE
  console.log("Token Recebido:", receivedSecret);
  console.log("Token Esperado:", expectedSecret);

  // Compara os tokens
  if (receivedSecret !== expectedSecret) {
    // Retorna uma mensagem de erro mais detalhada
    return NextResponse.json(
      { 
        message: "Token de autorização inválido.",
        received: receivedSecret, // Devolve o que foi recebido
        expected_length: expectedSecret.length, // Devolve o tamanho esperado
        received_length: receivedSecret?.length || 0 // Devolve o tamanho recebido
      },
      { status: 401 }
    );
  }

  // Se o token for válido, revalida o cache
  revalidateTag("prismic");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}