// Button Component
// Componente de botão reutilizável

import React from "react";

interface BotaoRedeProps {
  titulo: string;
  link: string;
  icone?: string; // O '?' torna o ícone opcional
}

export default function BotaoRede({ titulo, link, icone }: BotaoRedeProps): JSX.Element {
  return (
    <div className="flex justify-center items-center">
      <a 
        href={link} 
        target="_blank" // Abre em nova aba
        rel="noopener noreferrer" // Segurança ao abrir links externos
        className="relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-2xl group"
      >
        {/* Camada do degradê que gira ao fundo */}
        <span className="absolute w-[300%] h-[300%] bg-conic-gradient animate-spin-slow blur-md"></span>         
        
        {/* Corpo do botão */}
        <button className="relative bg-black text-white p-1 md:px-4 md:py-1 rounded-2xl md:rounded-2xl flex items-center justify-center gap-2 transition-all duration-300">
          
          {/* Renderização condicional do ícone */}
          {icone && (
            <img 
              src={icone} 
              alt={`Ícone ${titulo}`} 
              className="w-10 h-10 object-contain" 
            />
          )}

          <span className="hidden md:block font-medium">{titulo}</span>
        </button>
      </a>
    </div>
  );
}