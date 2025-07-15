import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

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
                    <p className="mb-2 text-white/80">Faça uma doação PIX: 29.698.652/0001.23</p>
                    <a href="https://wa.me/5535999883004" target="_blank"><p className="mb-2 text-white/80">Telefone: (35) 99988-3004</p></a>
                    <p className="mb-2 text-white/80">Endereço: 37568-000 - São João da Mata, Minas Gerais</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 text-yellow-400">Redes Sociais</h3>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="https://www.instagram.com/ong.unicao/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/80 hover:text-white transition-colors duration-300">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100013300443979" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/80 hover:text-white transition-colors duration-300">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-white/60 text-sm border-t border-blue-800 pt-6">
                &copy; {new Date().getFullYear()} Unicão. Todos os direitos reservados.
            </div>
        </footer>
    );
}
