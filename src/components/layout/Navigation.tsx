// Navigation Component
// Componente de navegação reutilizável

// components/Navigation.tsx
import React from 'react';

interface NavigationProps {
  direction?: 'row' | 'col';
}

export default function Navigation({ direction = 'row' }: NavigationProps) {
  const links = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <ul className={`flex ${direction === 'col' ? 'flex-col gap-8' : 'flex-row gap-6'} items-center`}>
      {links.map((link) => (
        <li key={link.name}>
          <a 
            href={link.href}
            className="text-white/80 hover:text-white transition-colors text-lg md:text-sm font-medium whitespace-nowrap"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}