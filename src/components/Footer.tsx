// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-custom-azul-escuro text-white py-10 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-xl font-bold mb-4 text-custom-amarelo">Navegação</h3>
                    <ul>
                        <li className="mb-2"><Link href="/" className="hover:text-white transition-colors duration-300">Início</Link></li>
                        <li className="mb-2"><Link href="/doacoes" className="hover:text-white transition-colors duration-300">Adoção</Link></li>
                        <li className="mb-2"><Link href="/sobre" className="hover:text-white transition-colors duration-300">Sobre a ONG</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 text-custom-amarelo">Contato</h3>
                    <p className="mb-2">Email: contato@unicao.org.br</p>
                    <p className="mb-2">Telefone: (XX) XXXX-XXXX</p>
                    <p className="mb-2">Endereço: Rua dos Animais, 123 - Cidade, Estado</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 text-custom-amarelo">Redes Sociais</h3>
                    <div className="flex justify-center md:justify-start gap-4">
                        {/* Ícones de redes sociais */}
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-400 text-sm border-t border-gray-700 pt-6">
                &copy; {new Date().getFullYear()} Unicão. Todos os direitos reservados.
            </div>
        </footer>
    );
}