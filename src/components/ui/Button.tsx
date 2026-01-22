import React from "react";

interface BotaoProps {
  link: string;
  text: string;
  className?: string;
}

export default function Botao({ link, text, className }: BotaoProps): JSX.Element {
  return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative inline-flex items-center justify-center p-[1.5px] overflow-hidden rounded-xl group transition-transform hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#ec4899_0%,#8b5cf6_50%,#ec4899_100%)]" />         
        <div className="relative flex items-center justify-center gap-2 px-3 py-1.5 md:px-4 md:py-3
                        bg-neutral-900/90 backdrop-blur-2xl rounded-[inherit] transition-all duration-300">
          {text}
        </div>
      </a>
  );
}