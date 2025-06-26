// src/app/doacoes/page.tsx
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adoção - Unicão | Encontre Seu Novo Amigo",
};

export default async function AdocaoPage() {
  const client = createClient();
  const animais = await client.getAllByType("animal");

  return (
    <>
      {/* Seção de Adoção */}
      {/* A section não tem mais padding (px-4) */}
      <section className="py-16 bg-white">
        {/* O container agora tem o padding (px-4) e controla o espaçamento */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-custom-azul-escuro mb-6">
            Encontre Seu Novo Melhor Amigo!
          </h1>
          <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Todos os nossos animais estão castrados, vacinados e vermifugados,
            prontos para receber e dar muito amor. Conheça cada um deles!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {animais.map((animal) => {
              if (!animal || !animal.data || !animal.data.nome) {
                return null;
              }

              return (
                <div
                  key={animal.id}
                  className="bg-custom-azul-escuro rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col"
                >
                  <div className="w-full h-56 relative">
                    {animal.data.foto.url && (
                        <PrismicNextImage
                            field={animal.data.foto}
                            alt={String(animal.data.nome) || "Foto de animal para adoção"}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            fill
                        />
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {animal.data.nome}
                    </h3>
                    <p className="text-white/70 text-sm mb-2">
                      Idade: {animal.data.idade} | Porte: {animal.data.porte}
                    </p>
                    <div className="text-white/90 mb-4 line-clamp-3 flex-grow">
                      <PrismicRichText field={animal.data.descricao} />
                    </div>
                    <Link
                      href={`/animal/${animal.uid}`}
                      className="block mt-auto bg-custom-amarelo hover:bg-yellow-300 text-custom-azul-escuro font-semibold py-3 px-4 rounded-full text-center transform hover:scale-105 transition-all duration-300"
                    >
                      Saiba Mais
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção de Chamada para Ação */}
      <section className="bg-custom-creme py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-custom-azul-escuro mb-6">
            Interessado(a) em Adotar?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Nosso processo de adoção é simples e seguro, visando garantir que
            cada animal encontre o lar perfeito. Clique abaixo para iniciar sua
            jornada.
          </p>
          <a
            href="#adoption-process" // Este link pode levar a uma seção na página "Sobre"
            className="bg-custom-azul-medio hover:bg-custom-azul-escuro text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Entenda o Processo de Adoção
          </a>
        </div>
      </section>
    </>
  );
}