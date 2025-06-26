// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adoção - Unicão | Encontre Seu Novo Amigo',
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
              {/* Substitua pelo caminho da sua imagem em /public */}
              <Image src="/logo-unicao.jpg" alt="Logo da ONG Unicão" width={64} height={64} className="h-16 w-auto" />
              <span className="text-3xl font-bold text-custom-azul-escuro">Unicão</span>
            </Link>
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <Link href="/" className="text-lg font-medium text-gray-700 hover:text-custom-azul-medio px-3 py-2 rounded-md transition-colors duration-300">Início</Link>
              <Link href="/" className="text-lg font-medium text-custom-azul-medio hover:text-custom-azul-escuro px-3 py-2 rounded-md transition-colors duration-300 bg-custom-amarelo">
                <span className="hidden sm:inline">Adoção de Cães e Gatos</span>
                <span className="inline sm:hidden">Adoção</span>
              </Link>
              <a href="/sobre" className="text-lg font-medium text-gray-700 hover:text-custom-azul-medio px-3 py-2 rounded-md transition-colors duration-300">Sobre a ONG</a>
            </div>
          </nav>
        </header>

        <main>
            {children}
        </main>

        {/* Footer */}
        <footer className="bg-custom-azul-escuro text-white py-10 px-4">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4 text-custom-amarelo">Navegação</h3>
              <ul>
                <li className="mb-2"><Link href="/" className="hover:text-white transition-colors duration-300">Início</Link></li>
                <li className="mb-2"><Link href="/" className="hover:text-white transition-colors duration-300">Adoção de Cães e Gatos</Link></li>
                <li className="mb-2"><a href="/sobre" className="hover:text-white transition-colors duration-300">Sobre a ONG</a></li>
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
                {/* Social Icons */}
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
