// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s - Unicão',
    default: 'Unicão - Lar para Animais Domésticos',
  },
  description: 'Adote um cão ou gato e ganhe um amigo para a vida toda.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-custom-creme text-gray-800 grid min-h-screen grid-rows-[auto_1fr_auto]`}>
        <Header />
        
        {/* Se quiser um espaço acima do footer, adicione padding-bottom aqui ou na última seção da sua página */}
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}