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
        className="relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-lg group"
      >
        {/* Camada do degradê que gira ao fundo */}
        <span className="absolute w-[300%] h-[300%] bg-conic-gradient animate-spin-slow blur-md"></span>         
        
        {/* Corpo do botão */}
        <button className="relative bg-black text-white px-10 py-0.5 rounded-[inherit] w-full h-full transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-opacity-90">
          
          {/* Renderização condicional do ícone */}
          {icone && (
            <img 
              src={icone} 
              alt={`Ícone ${titulo}`} 
              className="w-10 h-auto object-contain" 
            />
          )}

          <span className="font-medium">{titulo}</span>
        </button>
      </a>
    </div>
  );
}