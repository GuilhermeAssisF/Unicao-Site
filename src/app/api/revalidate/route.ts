// src/app/api/revalidate/route.ts

import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("authorization");

  // Verifica se o token secreto foi enviado e se corresponde ao do ambiente
  if (secret !== `Bearer ${process.env.PRISMIC_REVALIDATE_SECRET}`) {
    return NextResponse.json(
      { message: "Token de autorização inválido." },
      { status: 401 }
    );
  }

  // Se o token for válido, revalida o cache
  revalidateTag("prismic");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}