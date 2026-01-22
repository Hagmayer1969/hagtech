import React from "react";

interface BotaoRedeProps {
  titulo: string;
  link: string;
  icone?: string;
}

export default function BotaoRede({ titulo, link, icone }: BotaoRedeProps): JSX.Element {
  return (
    <div className="flex justify-center items-center">
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative inline-flex items-center justify-center p-[1.5px] overflow-hidden rounded-xl group transition-transform hover:scale-105 active:scale-95"
      >
        {/* 1. Gradiente que gira ao fundo (Cores solicitadas: Rosa e Roxo) */}
        <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#ec4899_0%,#8b5cf6_50%,#ec4899_100%)]" />         
        
        {/* 2. Corpo do botão (Mesmo estilo da Navigation) */}
        <div className="relative flex items-center justify-center gap-2 px-3 py-1.5 md:px-2 md:py-1
                        bg-neutral-900/90 backdrop-blur-2xl rounded-[inherit] transition-all duration-300">
          
          {/* Renderização do ícone */}
          {icone && (
            <img 
              src={icone} 
              alt={titulo} 
              className="w-7 h-7 md:w-10 md:h-10 object-contain" 
            />
          )}

          
         
        </div>
      </a>
    </div>
  );
}