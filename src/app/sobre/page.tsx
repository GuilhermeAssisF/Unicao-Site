// src/app/sobre/page.tsx
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sobre Nós - Unicão | Nossa História e Projetos',
};

export default function SobrePage() {
  return (
    <>
      {/* Seção Hero */}
      <section className="bg-custom-azul-medio text-white py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Nossa História: Amor e Dedicação em Cada Passo.</h1>
          <p className="text-lg md:text-xl opacity-90">
            Conheça a jornada da Unicão e como estamos transformando a vida de animais necessitados.
          </p>
        </div>
      </section>

      {/* Seção Quem Somos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl font-bold text-custom-azul-escuro text-center mb-12">Quem Somos</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <Image 
                src="/img/equipe-unicao.jpg"
                alt="Equipe da ONG com animais" 
                width={800} 
                height={600}
                className="rounded-lg shadow-xl w-full h-auto object-cover" 
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Fundada em <span className="font-semibold">[Ano de Fundação]</span> por um grupo de amantes de animais, a <span className="font-semibold text-custom-azul-medio">Unicão</span> nasceu do desejo de combater o abandono e o sofrimento animal em nossa comunidade. Acreditamos que cada vida importa e merece ser tratada com dignidade e carinho.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nossa missão vai além do resgate. Nos dedicamos à reabilitação física e emocional, à busca por lares definitivos e à conscientização sobre a guarda responsável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Nossos Projetos */}
      <section className="py-16 bg-custom-azul-medio">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Nossos Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project Card 1 */}
            <div className="bg-custom-amarelo rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <Image src="/img/evento-adocao.jpg" alt="Evento de adoção de animais" width={600} height={400} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-custom-azul-medio mb-2">Eventos de Adoção</h3>
                    <p className="text-custom-azul-medio leading-relaxed">
                        Realizamos eventos regulares para conectar nossos animais resgatados com famílias amorosas, garantindo adoções responsáveis.
                    </p>
                </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-custom-amarelo rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <Image src="/img/resgate-animais.jpg" alt="Voluntários resgatando animais" width={600} height={400} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-custom-azul-medio mb-2">Resgate e Reabilitação</h3>
                    <p className="text-custom-azul-medio leading-relaxed">
                        Nossa equipe atua no resgate de animais em situação de risco, providenciando cuidados veterinários e reabilitação.
                    </p>
                </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-custom-amarelo rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <Image src="/img/conscientizacao.jpg" alt="Voluntário conscientizando a comunidade" width={600} height={400} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-custom-azul-medio mb-2">Campanhas de Conscientização</h3>
                    <p className="text-custom-azul-medio leading-relaxed">
                        Promovemos a educação sobre a posse responsável, castração e os direitos dos animais em escolas e comunidades.
                    </p>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção Nossa Equipe */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <h2 className="text-4xl font-bold text-custom-azul-escuro mb-12">Nossa Equipe e Voluntários</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                
                {/* Team Member/Volunteer Card 1 */}
                <div className="flex flex-col items-center p-6 bg-custom-azul-escuro rounded-lg shadow-md">
                    <Image src="/img/joao.jpg" alt="Foto de João Silva" width={150} height={150} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-custom-amarelo"/>
                    <h3 className="text-xl font-semibold text-custom-azul-escuro">João Silva</h3>
                    <p className="text-custom-amarelo text-sm mb-2">Presidente da ONG</p>
                    <p className="text-white text-center text-sm">Apaixonado por animais, lidera nossa equipe com dedicação e visão.</p>
                </div>

                {/* Team Member/Volunteer Card 2 */}
                <div className="flex flex-col items-center p-6 bg-custom-azul-escuro rounded-lg shadow-md">
                    <Image src="/img/maria.jpg" alt="Foto de Maria Souza" width={150} height={150} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-custom-amarelo"/>
                    <h3 className="text-xl font-semibold text-custom-azul-escuro">Maria Souza</h3>
                    <p className="text-custom-amarelo text-sm mb-2">Coordenadora de Adoções</p>
                    <p className="text-white text-center text-sm">Garante que cada animal encontre um lar seguro e amoroso.</p>
                </div>

                {/* Team Member/Volunteer Card 3 */}
                <div className="flex flex-col items-center p-6 bg-custom-azul-escuro rounded-lg shadow-md">
                    <Image src="/img/ana.jpg" alt="Foto de Ana Lima" width={150} height={150} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-custom-amarelo"/>
                    <h3 className="text-xl font-semibold text-custom-azul-escuro">Ana Lima</h3>
                    <p className="text-custom-amarelo text-sm mb-2">Voluntária Destaque</p>
                    <p className="text-white text-center text-sm">Dedica horas cuidando e brincando com nossos animais diariamente.</p>
                </div>

                {/* Team Member/Volunteer Card 4 */}
                <div className="flex flex-col items-center p-6 bg-custom-azul-escuro rounded-lg shadow-md">
                    <Image src="/img/carlos.jpg" alt="Foto de Carlos Santos" width={150} height={150} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-custom-amarelo"/>
                    <h3 className="text-xl font-semibold text-custom-azul-escuro">Carlos Santos</h3>
                    <p className="text-custom-amarelo text-sm mb-2">Veterinário Voluntário</p>
                    <p className="text-white text-center text-sm">Responsável pela saúde e bem-estar de todos os nossos resgatados.</p>
                </div>
            </div>

            <div className="mt-12">
                <h3 className="text-3xl font-bold text-custom-azul-escuro mb-6">Junte-se à Nossa Causa!</h3>
                <a href="#contato-voluntario" className="bg-custom-azul-medio hover:bg-custom-azul-escuro text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg">
                    Seja um Voluntário!
                </a>
            </div>
        </div>
      </section>
    </>
  );
}