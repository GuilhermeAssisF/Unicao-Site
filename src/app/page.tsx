// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Início - Unicão | Lar para Animais Domésticos',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-custom-azul-medio to-custom-azul-escuro text-white py-20 px-4 md:py-32 overflow-hidden">
        {/* Background Image/Overlay */}
        <div className="absolute inset-0">
          <Image 
            src="/img/candinha.jpg" // Coloque sua imagem em public/img/
            alt="Foto da Candinha" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="relative container mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Transforme Vidas: Adote um Amigo Peludo!
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            Conheça a Unicão: Dedicados a Resgatar, Cuidar e Encontrar Lares Cheios de Carinho.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/doacoes" className="bg-custom-amarelo hover:bg-yellow-300 text-custom-azul-medio font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg">
              Quero Adotar um Animal
            </Link>
            <Link href="/sobre" className="bg-transparent hover:bg-white hover:text-custom-azul-escuro text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg border-2 border-custom-amarelo">
              Saiba Mais Sobre Nós
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-4xl font-bold text-custom-azul-escuro mb-8">Nossa Missão: Um Lar para Cada Patinha.</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Na <span className="font-semibold text-custom-azul-medio">Unicão</span>, acreditamos que todo animal merece uma segunda chance. Desde <span className="font-semibold">2019</span>, resgatamos, reabilitamos e encontramos lares amorosos para cães e gatos em situação de vulnerabilidade, combatendo o abandono e o sofrimento. Nosso compromisso é com o bem-estar e a dignidade de cada vida.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                <div className="bg-custom-azul-medio p-6 rounded-lg shadow-md flex flex-col items-center">
                    <h3 className="text-2xl font-semibold text-white mb-2">Mais de 50</h3>
                    <p className="text-white/90">Animais Resgatados</p>
                </div>
                <div className="bg-custom-azul-medio p-6 rounded-lg shadow-md flex flex-col items-center">
                    <h3 className="text-2xl font-semibold text-white mb-2">42</h3>
                    <p className="text-white/90">Adoções Realizadas</p>
                </div>
                <div className="bg-custom-azul-medio p-6 rounded-lg shadow-md flex flex-col items-center">
                    <h3 className="text-2xl font-semibold text-white mb-2">7+</h3>
                    <p className="text-white/90">Voluntários Engajados</p>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials/Success Stories Section */}
      <section className="py-16 px-4 bg-custom-azul-escuro">
        <div className="container mx-auto text-center max-w-5xl">
            <h2 className="text-4xl font-bold text-white mb-12">Histórias que Aquecem o Coração.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-custom-amarelo">
                    <Image src="/img/pessoa1.jpg" alt="Foto da pessoa 1" width={100} height={100} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                    <p className="italic font-bold text-gray-700 mb-4">
                        &quot;Adotar o Tobias foi a melhor decisão da minha vida! A equipe da Unicão foi incrível em todo o processo.&quot;
                    </p>
                    <p className="font-semibold text-custom-azul-medio">- Maria S., Tutora do Tobias</p>
                </div>
                {/* Testimonial 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-custom-amarelo">
                    <Image src="/img/pessoa2.jpg" alt="Foto da pessoa 2" width={100} height={100} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                    <p className="italic font-bold text-gray-700 mb-4">
                        &quot;O trabalho da ONG é essencial. Sou voluntário há um ano e vejo a transformação na vida de tantos animais.&quot;
                    </p>
                    <p className="font-semibold text-custom-azul-medio">- João P., Voluntário</p>
                </div>
                {/* Testimonial 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-custom-amarelo">
                    <Image src="/img/pessoa3.jpg" alt="Foto da pessoa 3" width={100} height={100} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                    <p className="italic font-bold text-gray-700 mb-4">
                        &quot;Minha gatinha Luna me trouxe tanta alegria. A Unicão fez um trabalho maravilhoso em resgatá-la e encontrar um lar para ela.&quot;
                    </p>
                    <p className="font-semibold text-custom-azul-medio">- Ana L., Tutora da Luna</p>
                </div>
            </div>
        </div>
      </section>

    </>
  );
}