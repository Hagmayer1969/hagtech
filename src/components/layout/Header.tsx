'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './Navigation'
import BotaoRede from '../ui/Button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.3, 
        delayChildren: 0.5    
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 60,   
        damping: 20      
      } 
    }
  }

  const lineVariants = {
    closed: { rotate: 0, y: 0 },
    opened: (y: number) => ({
      rotate: y > 0 ? 45 : -45,
      y: y,
      transition: { duration: 0.5 } 
    }),
  }

  return (
    <header className="fixed top-0 left-0 w-full p-6 z-50 bg-black/10 backdrop-blur-md">
      <motion.nav 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto flex items-center justify-between"
      >
        
        {/* LOGO */}
        <motion.div variants={itemVariants} className="text-white font-bold text-2xl z-[60] min-w-[100px]">
          HAG
        </motion.div>

        {/* NAVEGAÇÃO DESKTOP CENTRALIZADA */}
        <motion.div 
          variants={itemVariants} 
          className="hidden md:flex flex-1 justify-center px-4"
        >
          <div className="relative p-[1.5px] overflow-hidden rounded-xl">
            <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#ec4899_0%,#8b5cf6_50%,#ec4899_100%)]" />
            <div className="relative px-8 py-2 bg-neutral-900/90 rounded-[inherit]">
              <Navigation direction="row" />
            </div>
          </div>
        </motion.div>

        {/* DIREITA - AJUSTADO PARA FICAR LADO A LADO */}
        <motion.div variants={itemVariants} className="flex items-center justify-end gap-4 z-[60] min-w-[100px]">
          
          {/* Container dos botões: mudei de 'block' para 'flex' */}
          <div className="hidden sm:flex items-center gap-3">
            <BotaoRede titulo="WhatsApp" link="/" icone="/iconss/whatsicon.png" />
            <BotaoRede titulo="Instagram" link="/" icone="/iconss/instaicon.png" />
          </div>

          {/* Botão Hambúrguer (Mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-2 md:hidden focus:outline-none"
          >
            <motion.div 
              variants={lineVariants}
              animate={isOpen ? "opened" : "closed"}
              custom={8}
              className="w-6 h-0.5 bg-white rounded-full"
            />
            <motion.div 
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.4 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
            <motion.div 
              variants={lineVariants}
              animate={isOpen ? "opened" : "closed"}
              custom={-8}
              className="w-6 h-0.5 bg-white rounded-full"
            />
          </button>
        </motion.div>

        {/* MENU MOBILE */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 100 }}
              className="fixed top-0 right-0 h-screen w-full sm:w-[350px] bg-neutral-950 p-10 pt-32 flex flex-col md:hidden shadow-2xl"
            >
              <Navigation direction="col" />
              <div className="mt-auto flex flex-col gap-4">
                <p className="text-white/40 text-xs uppercase tracking-widest">Redes Sociais</p>
                <BotaoRede titulo="Instagram" link="/" icone="/iconss/instaicon.png" />
                <BotaoRede titulo="WhatsApp" link="/" icone="/iconss/whatsicon.png" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}