'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from './Navigation'
import BotaoRedes from '../ui/Button';

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 1. Definição das variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Tempo entre a entrada de cada bloco
        delayChildren: 0.2,    // Pequena espera inicial ao carregar a página
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 }, // Começa 20px acima e invisível
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 20 
      } 
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/60 backdrop-blur-xl py-[0.8vw]' : 'bg-transparent py-[1.5vw]'
      }`}
    >
      {/* 2. O motion.nav gerencia o container das animações */}
      <motion.nav 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[95%] md:max-w-[90%] mx-auto flex items-center justify-between"
      >
        
        {/* ESQUERDA: Logo */}
        <motion.div 
          variants={itemVariants}
          className="flex-shrink-0 flex justify-start min-w-[120px] md:min-w-[150px] lg:min-w-[200px]"
        >
          <a href="/">
            <img 
              src="./iconss/hagtech.png" 
              alt="Logo"
              className="w-[18vw] min-w-[70px] max-w-[100px] md:w-[8vw]"
            />
          </a>
        </motion.div>

        {/* CENTRO: Navegação */}
        <motion.div 
          variants={itemVariants}
          className="hidden md:flex flex-grow justify-center"
        >
          <Navigation />
        </motion.div>

        {/* DIREITA: Botão Único */}
        <motion.div 
          variants={itemVariants}
          className="flex-shrink-0 flex justify-end min-w-[120px] md:min-w-[150px] lg:min-w-[200px]"
        >
          <BotaoRedes 
            text="Começar Projeto" 
            link="/contato" 
            className="text-[0.95rem] md:text-[1.1vw] font-bold px-[4vw] py-[1.5vw] md:px-[1.5vw] md:py-[0.6vw]"
          />
        </motion.div>

      </motion.nav>
    </header>
  )
}