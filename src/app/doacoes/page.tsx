// src/app/doacoes/page.tsx
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Metadata } from "next";
import Link from "next/link";


// Define metadados para SEO, se desejar
export const metadata: Metadata = {
  title: "Adoção - Unicão | Encontre Seu Novo Amigo",
};

// A página agora é um componente async, permitindo o uso de 'await' para buscar dados
export default async function AdocaoPage() {
  // 1. Cria um cliente Prismic para se conectar à API
  const client = createClient();

  // 2. Busca todos os documentos do tipo 'animal'
  // O Prismic retorna os documentos dentro de um array 'results'
  const animais = await client.getAllByType("animal");

  return (
    <>
      {/* Seção de Adoção */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-custom-azul-escuro mb-6">
            Encontre Seu Novo Melhor Amigo!
          </h1>
          <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Todos os nossos animais estão castrados, vacinados e vermifugados,
            prontos para receber e dar muito amor. Conheça cada um deles!
          </p>

          {/* Grid de Animais - Agora dinâmico! */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* 3. Mapeia o array 'animais' e renderiza um card para cada um */}
            {animais.map((animal) => {
              // Verificação de segurança: Se o documento estiver incompleto no Prismic, ele não será renderizado, evitando que o site quebre.
              if (!animal || !animal.data || !animal.data.nome) {
                return null;
              }

              return (
                <div
                  key={animal.id} // Usa o ID único do documento Prismic como chave
                  className="bg-custom-creme rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col"
                >
                  {/* Imagem do animal vinda do Prismic */}
                  <div className="w-full h-56 relative">
                    {/* Verificação de segurança para a imagem */}
                    {animal.data.foto.url && (
                        <PrismicNextImage
                            field={animal.data.foto}
                            alt={String(animal.data.nome) || "Foto de animal para adoção"}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            fill // Usa fill para preencher o container responsivamente
                        />
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Nome do animal */}
                    <h3 className="text-2xl font-bold text-custom-azul-escuro mb-2">
                      {animal.data.nome}
                    </h3>
                    {/* Idade e Porte */}
                    <p className="text-gray-600 text-sm mb-2">
                      Idade: {animal.data.idade} | Porte: {animal.data.porte}
                    </p>
                    {/* Descrição - Usa PrismicRichText para renderizar texto formatado */}
                    <div className="text-gray-700 mb-4 line-clamp-3 flex-grow">
                      <PrismicRichText field={animal.data.descricao} />
                    </div>
                    {/* Botão de Ação */}
                    <Link
                      href={`/animal/${animal.uid}`} // Link para uma futura página de detalhes
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
      <section className="bg-custom-creme py-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-custom-azul-escuro mb-6">
            Interessado(a) em Adotar?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Nosso processo de adoção é simples e seguro, visando garantir que
            cada animal encontre o lar perfeito. Clique abaixo para iniciar sua
            jornada.
          </p>
          <a
            href="#adoption-process"
            className="bg-custom-azul-medio hover:bg-custom-azul-escuro text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Entenda o Processo de Adoção
          </a>
        </div>
      </section>
    </>
  );
}