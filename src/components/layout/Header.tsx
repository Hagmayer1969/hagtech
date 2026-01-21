// Header Component
// Navegação principal do site

import React from "react";
import BotãoRede from "../ui/Button";
import Navigation from "./Navigation";

interface HeaderProps {
  // Props do componente
}

export default function Header({}: HeaderProps) {
  return (
    // Adicionei w-full para o header ocupar a largura da tela e permitir o afastamento
    <header className="fixed top-0 left-0 w-full p-6 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <Navigation />
        </div>
        <div className="flex items-center gap-3">
          <BotãoRede titulo="whatsapp" link="/" icone="/iconss/whatsicon.png"/>
          <BotãoRede titulo="Instagram" link="/" icone="/iconss/instaicon.png" />
        </div>

      </nav>
    </header>
  );
}
