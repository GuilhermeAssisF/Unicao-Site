// src/components/DonationSection.tsx
'use client'; // Marca este como um Componente de Cliente

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function DonationSection() {
  const [isCopied, setIsCopied] = useState(false);
  const pixKey = "29.698.652/0001.23";

  const handleCopyPix = () => {
    const textArea = document.createElement("textarea");
    
    // Posiciona a área de texto fora da tela para evitar a rolagem da página
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    textArea.style.left = '-9999px';

    textArea.value = pixKey;
    document.body.appendChild(textArea);
    
    // Seleciona o conteúdo sem causar a rolagem
    textArea.select();

    try {
      document.execCommand('copy');
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2500); 
    } catch (err) {
      console.error('Falha ao copiar o texto: ', err);
    }

    document.body.removeChild(textArea);
  };

  return (
    <>
      <h2 className="text-4xl font-bold p-10 text-custom-azul-escuro mb-4">Faça uma doação pix para nossa causa.</h2>
      <div className="mt-2 flex flex-col items-center">
        <div className="flex items-center gap-4 p-4 border-2 border-dashed border-custom-azul-medio rounded-lg bg-gray-50 max-w-md w-full justify-between">
          <span className="text-lg font-mono text-gray-700 flex-grow text-left">
            {pixKey}
          </span>
          <button
            onClick={handleCopyPix}
            className={`
              flex items-center justify-center font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105
              ${isCopied 
                ? 'bg-green-500 text-white' 
                : 'bg-custom-amarelo text-custom-azul-medio hover:bg-yellow-300'
              }
            `}
            aria-label={isCopied ? "Código PIX copiado" : "Copiar código PIX"}
          >
            <FontAwesomeIcon icon={isCopied ? faCheck : faCopy} className="mr-2" />
            {isCopied ? 'Copiado!' : 'Copiar'}
          </button>
        </div>
      </div>
    </>
  );
}
