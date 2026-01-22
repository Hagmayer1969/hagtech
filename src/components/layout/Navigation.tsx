'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const links = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ]

  return (
    <ul className="flex items-center gap-[2.5vw] lg:gap-[3vw]">
      {links.map((link, index) => (
        <li 
          key={link.name} 
          className="relative py-1"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <a 
            href={link.href}
            className={`
              relative z-10 transition-all duration-200 whitespace-nowrap
              /* Tamanho reduzido para equilíbrio */
              text-[1rem] md:text-[2vw] lg:text-[1vw]
              ${hoveredIndex === index ? 'text-white font-bold' : 'text-gray-300 font-medium'}
            `}
          >
            {link.name}
          </a>

          {/* Linha colorida mais fina */}
          {hoveredIndex === index && (
            <motion.div
              layoutId="nav-underline"
              className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </li>
      ))}
    </ul>
  )
}