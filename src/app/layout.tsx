// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import Link from 'next/link'
import Image from 'next/image'

// Importações do Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false; // Impede o Font Awesome de adicionar o CSS automaticamente

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Início - Unicão | Lar para Animais Domésticos',
  description: 'Adote um cão ou gato e ganhe um amigo para a vida toda. Animais castrados e vacinados esperando por um lar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-custom-creme text-gray-800`}>
        {/* Header */}
        <header className="bg-white shadow-md p-4 sticky top-0 z-50">
            <nav className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
                {/* NGO Logo with Text */}
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/logo-unicao.jpg" alt="Logo da ONG Unicão" width={64} height={64} className="h-16 w-auto" />
                    <span className="text-3xl font-bold text-custom-azul-escuro">Unicão</span>
                </Link>
                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                    <Link href="/" className="text-lg font-medium text-custom-azul-medio hover:text-custom-azul-escuro px-3 py-2 rounded-md transition-colors duration-300 bg-custom-amarelo">Início</Link>
                    <Link href="/doacoes" className="text-lg font-medium text-gray-700 hover:text-custom-azul-medio px-3 py-2 rounded-md transition-colors duration-300">
                        <span className="hidden sm:inline">Adoção de Cães e Gatos</span>
                        <span className="inline sm:hidden">Adoção <FontAwesomeIcon icon={faDog} /></span>
                    </Link>
                    <Link href="/sobre" className="text-lg font-medium text-gray-700 hover:text-custom-azul-medio px-3 py-2 rounded-md transition-colors duration-300">Sobre a ONG</Link>
                </div>
            </nav>
        </header>

        <main>
            {children}
        </main>

        {/* Footer */}
        <footer className="bg-custom-azul-escuro text-white py-10 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Navigation Links in Footer */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-custom-amarelo">Navegação</h3>
                    <ul>
                        <li className="mb-2"><Link href="/" className="hover:text-white transition-colors duration-300">Início</Link></li>
                        <li className="mb-2"><Link href="/doacoes" className="hover:text-white transition-colors duration-300">Adoção de Cães e Gatos</Link></li>
                        <li className="mb-2"><Link href="/sobre" className="hover:text-white transition-colors duration-300">Sobre a ONG</Link></li>
                    </ul>
                </div>
                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-custom-amarelo">Contato</h3>
                    <p className="mb-2">Email: contato@unicao.org.br</p>
                    <p className="mb-2">Telefone: (XX) XXXX-XXXX</p>
                    <p className="mb-2">Endereço: Rua dos Animais, 123 - Cidade, Estado</p>
                </div>
                {/* Social Media Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-custom-amarelo">Redes Sociais</h3>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="#" className="text-white hover:text-custom-amarelo transition-colors duration-300">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" /></svg>
                        </a>
                        <a href="#" className="text-white hover:text-custom-amarelo transition-colors duration-300">
                           <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.002 3.714.002.979 0 1.541.057 2.06.21.518.155.953.385 1.385.814.43.43.66.865.814 1.385.153.519.21 1.081.21 2.06 0 .93.002 1.284.002 3.714s-.002 2.784-.002 3.714c0 .979-.057 1.541-.21 2.06-.155.518-.385.953-.814 1.385-.43.43-.865.66-1.385.814-.519.153-1.081.21-2.06.21-.93 0-1.284.002-3.714.002s-2.784-.002-3.714-.002c-.979 0-1.541-.057-2.06-.21-.518-.155-.953-.385-1.385-.814-.43-.43-.66-.865-.814-1.385-.153-.519-.21-1.081-.21-2.06 0-.93-.002-1.284-.002-3.714s.002-2.784.002-3.714c0-.979.057 1.541.21-2.06.155-.518.385-.953.814-1.385.43-.43.865-.66.814-1.385.153-.519.21-1.081.21-2.06zM12 4.621c-3.1 0-5.379 2.279-5.379 5.379s2.279 5.379 5.379 5.379 5.379-2.279 5.379-5.379-2.279-5.379-5.379-5.379zM12 16a4 4 0 100-8 4 4 0 000 8zm6.406-11.845a1.88 1.88 0 11-3.76 0 1.88 1.88 0 013.76 0z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-400 text-sm">
                &copy; 2025 Unicão. Todos os direitos reservados.
            </div>
        </footer>
      </body>
    </html>
  )
}