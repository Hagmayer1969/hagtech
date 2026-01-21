"use client";

import React from "react";
import { motion } from "framer-motion";
import BotãoRede from "../ui/Button";
import Navigation from "./Navigation";

interface HeaderProps {
  // Props do componente
}

export default function Header({}: HeaderProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Tempo entre a entrada de cada item (0.2 segundos)
      },
    },
  };
  // 2. Configuração da animação de cada "Filho" (Botões/Nav)
  const itemVariants = {
    hidden: { opacity: 0, y: -20 }, // Começa invisível e 20px acima
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring", // Efeito de mola (suave)
        stiffness: 100,
      },
    },
  };

  return (
    <header className="fixed top-0 left-0 w-full p-6 z-50">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex justify-between items-center"
      >
        <motion.div variants={itemVariants}>
          <Navigation />
        </motion.div>
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <BotãoRede titulo="whatsapp" link="/" icone="/iconss/whatsicon.png" />
          <BotãoRede titulo="Instagram" link="/" icone="/iconss/instaicon.png" />
        </motion.div>
      </motion.nav>
    </header>
  );
}
