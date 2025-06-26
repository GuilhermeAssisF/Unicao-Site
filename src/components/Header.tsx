// src/components/Header.tsx
'use client'; 

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/doacoes', label: 'Adoção' },
    { href: '/sobre', label: 'Sobre a ONG' },
  ];

  return (
    // A margem negativa faz o fundo ocupar toda a largura
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
                <Image src="/logo-unicao.jpg" alt="Logo da ONG Unicão" width={64} height={64} className="h-16 w-auto" />
                <span className="text-3xl font-bold text-custom-azul-escuro">Unicão</span>
            </Link>
            
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                {navLinks.map((link) => {
                    // Verifica se o link corresponde à página atual
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-lg font-medium px-3 py-2 rounded-md transition-colors duration-300
                                ${isActive 
                                    ? 'bg-custom-amarelo text-custom-azul-medio' 
                                    : 'text-gray-700 hover:text-custom-azul-medio'
                                }
                            `}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>
        </nav>
    </header>
  );
}