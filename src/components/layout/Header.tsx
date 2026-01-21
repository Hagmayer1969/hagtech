// Header Component
// Navegação principal do site

import React from "react";
import BotãoRede from "../ui/Button";

interface HeaderProps {
  // Props do componente
}

export default function Header({}: HeaderProps) {
  return (
    <header className="fixed top-0 right-0 p-9 z-50">
      <nav>
        <div className="flex items-center gap-3">
          <div>
             <BotãoRede titulo="whatsapp" link="/" icone="/iconss/instaicon.png"/>
          </div>
          <div>
             <BotãoRede titulo="Instagram" link="/" icone="/iconss/instaicon.png" />
          </div>
        </div>
      </nav>
    </header>
  );
}
