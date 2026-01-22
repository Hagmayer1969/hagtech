'use client'

import { motion } from 'framer-motion'
import Navigation from './Navigation'
import BotaoRedes from '../ui/Button'

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed top-0 right-0 h-screen w-[85%] bg-black/95 backdrop-blur-2xl z-[80] md:hidden flex flex-col p-10 pt-32 shadow-2xl border-l border-white/5"
    >
      {/* Navegação em coluna */}
      <Navigation mobile onClick={() => setIsOpen(false)} /> 
      
      {/* Botão no final do menu */}
      <div className="mt-12 pt-8 border-t border-white/10">
         <BotaoRedes text="Começar Projeto" link="/contato" />
      </div>
    </motion.div>
  )
}