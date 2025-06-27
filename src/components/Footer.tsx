import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-10 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-xl font-bold mb-4 text-yellow-400">Navegação</h3>
                    <ul>
                        <li className="mb-2"><Link href="/" className="text-white/80 hover:text-white transition-colors duration-300">Início</Link></li>
                        <li className="mb-2"><Link href="/doacoes" className="text-white/80 hover:text-white transition-colors duration-300">Adoção</Link></li>
                        <li className="mb-2"><Link href="/sobre" className="text-white/80 hover:text-white transition-colors duration-300">Sobre a ONG</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 text-yellow-400">Contato</h3>
                    <p className="mb-2 text-white/80">Email: contato@unicao.org.br</p>
                    <p className="mb-2 text-white/80">Telefone: (XX) XXXX-XXXX</p>
                    <p className="mb-2 text-white/80">Endereço: Rua dos Animais, 123 - Cidade, Estado</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 text-yellow-400">Redes Sociais</h3>
                    <div className="flex justify-center md:justify-start gap-4">
                        {/* Ícones... */}
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-white/60 text-sm border-t border-blue-800 pt-6">
                &copy; {new Date().getFullYear()} Unicão. Todos os direitos reservados.
            </div>
        </footer>
    );
}
