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
      <section className="py-16 bg-custom-azul-escuro">
        {/* O container agora tem o padding (px-4) e controla o espaçamento */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-6">
            Encontre Seu Novo Melhor Amigo!
          </h1>
          <p className="text-lg text-center text-white mb-12 max-w-3xl mx-auto">
            Todos os nossos animais estão castrados, vacinados e vermifugados,
            prontos para receber e dar muito amor. Conheça cada um deles!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {animais.map((animal) => {
              if (!animal?.data?.nome) return null;

              return (
                <div
                  key={animal.id}
                  // ALTERAÇÃO 1: Adicionada borda amarela e um efeito de sombra mais sutil
                  className="bg-custom-azul-card rounded-lg shadow-lg overflow-hidden border-4 border-yellow-300 flex flex-col group"
                >
                  <div className="w-full h-72 relative overflow-hidden">
                    {animal.data.foto.url && (
                      <PrismicNextImage
                        field={animal.data.foto}
                        alt={String(animal.data.nome) as any}
                        // Efeito de zoom na imagem ao passar o mouse
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        fill
                      />
                    )}
                    {/* ALTERAÇÃO 2: Div para criar o efeito de degradê sobre a imagem */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-custom-azul-card to-transparent pointer-events-none" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-custom-azul-text-card mb-2">
                      {animal.data.nome}
                    </h3>
                    <p className="text-custom-azul-text-card/80 text-sm mb-2">
                      Idade: {animal.data.idade} | Porte: {animal.data.porte}
                    </p>
                    <div className="text-custom-azul-text-card font-medium mb-4 line-clamp-3 flex-grow">
                      <PrismicRichText field={animal.data.descricao} />
                    </div>
                    <Link
                      href={`/animal/${animal.uid}`}
                      // ALTERAÇÃO 3: Cores do botão atualizadas para a nova paleta
                      className="block mt-auto bg-yellow-300 hover:bg-custom-azul-text-card text-custom-azul-medio hover:text-white font-semibold py-3 px-4 rounded-full text-center transform hover:scale-105 transition-all duration-300"
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
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-custom-azul-medio mb-6">
            Interessado(a) em Adotar?
          </h2>
          <p className="text-lg text-custom-azul-medio mb-8">
            Nosso processo de adoção é simples e seguro, visando garantir que
            cada animal encontre o lar perfeito. Clique abaixo para iniciar sua
            jornada.
          </p>
          <a
            href="#adoption-process" // Este link pode levar a uma seção na página "Sobre"
            className="bg-yellow-300 hover:bg-custom-azul-medio hover:text-white text-custom-azul-medio font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Entenda o Processo de Adoção
          </a>
        </div>
      </section>
    </>
  );
}