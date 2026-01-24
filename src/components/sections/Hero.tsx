// Hero Section Component
// Seção principal do site com chamada para ação

import React from "react";
import Botao from "../ui/Button";
import BotaoFundo from "../ui/Button2";

interface HeroProps {
  // Props do componente
}
  
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col">
      <div 
        className="absolute top-[-100px] md:top-[-150px] left-1/2 -translate-x-1/2 
                   h-[500px] w-[800px] md:h-[600px] md:w-[900px] rounded-full 
                   bg-purple-600/40 blur-[100px] md:blur-[130px] z-0 pointer-events-none" 
      />

      <div className="flex md:hidden flex-col items-center text-center px-6 pt-40 z-10">
        {/* Aqui você pode mudar TUDO sem medo de estragar o PC */}
        <h1 className="text-white text-5xl font-bold tracking-tighter leading-[0.95]">
          Sites que <br />
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            transformam
          </span> <br />
          negócios
        </h1>
        
        <p className="text-white/60 mt-4 text-lg">
          Elevando sua marca ao próximo nível.
        </p>

        <div className="flex flex-col w-full gap-3 mt-10">
          <Botao text="Sobre nós" link="/sobre-nos"/>
          <BotaoFundo text="Produtos" link="/produtos" />
        </div>
      </div>


      <div className="hidden md:flex flex-col items-center justify-center flex-grow text-center px-4 pt-56 2xl:pt-4 z-10">
        {/* Este é o seu layout "perfeito" que não será afetado */}
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-7xl 2xl:text-[110px] font-bold tracking-tighter leading-[0.9]">
            Sites que
          </h1>
          <h1 className="text-7xl 2xl:text-[110px] font-bold tracking-tighter leading-[0.9]">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              transformam
            </span>
          </h1>
          <h1 className="text-white text-7xl 2xl:text-[110px] font-bold tracking-tighter leading-[0.9]">
            negócios em marcas
          </h1>
        </div>

        <div className="flex gap-3 mt-8">
          <Botao text="Sobre nós" link="/sobre-nos"/>
          <BotaoFundo text="Produtos" link="/produtos" />
        </div>
      </div>

    </section>
  );
}
