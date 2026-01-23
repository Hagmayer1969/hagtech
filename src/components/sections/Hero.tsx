// Hero Section Component
// Seção principal do site com chamada para ação

import React from "react";

interface HeroProps {
  // Props do componente
}

export default function Hero() {
  return (
    // min-h-screen garante que a seção ocupe a tela toda
    // bg-black garante que o fundo seja escuro para a luz aparecer
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center">
      
      {/* A LUZ: Posicionada lá no topo para bater no header */}
      <div 
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 
                   h-[600px] w-[800px] rounded-full 
                   bg-purple-600/40 blur-[120px] -z-0" 
      />

      {/* CONTEÚDO: Centralizado e por cima de tudo */}
      <div className="relative z-10 text-center px-4">
         <h1 className="text-white text-7xl font-bold tracking-tighter">
           HAG<span className="text-purple-500">tec</span>
         </h1>
         <p className="text-slate-400 mt-4 text-xl">oi</p>
      </div>

    </section>
  );
}
