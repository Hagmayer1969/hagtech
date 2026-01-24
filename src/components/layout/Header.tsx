"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import Botao from "../ui/Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setisOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
  <header className="fixed top-0 left-0 w-full z-50 py-4 md:py-[0.4vw] bg-black/60 backdrop-blur-xl transition-all duration-500 border-b border-white/5">
      
      {/* ============================================================
          1. LAYOUT MOBILE: SÓ O MENU (Sem Logo)
          Aparece apenas em telas menores que MD
          ============================================================ */}
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex md:hidden items-center justify-end px-6"
      >
        {/* Aqui você tem liberdade total. 
            Como não tem logo, alinhei o botão do menu à direita. */}
        <button
          onClick={() => setisOpen(!isOpen)}
          className="flex flex-col gap-1.5 p-2 z-[100] active:scale-90 transition-transform"
        >
          <div className={`w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </motion.nav>


      {/* ============================================================
          2. LAYOUT DESKTOP: LOGO + MENU + BOTÃO
          Aparece de MD para cima (O seu layout perfeito)
          ============================================================ */}
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hidden md:flex max-w-[90%] mx-auto items-center justify-between px-2"
      >
        {/* LOGO (Só aparece no PC) */}
        <motion.div variants={itemVariants} className="min-w-[200px]">
          <a href="/">
            <img
              src="./iconss/hagtech.png"
              alt="Logo"
              className="w-[13vw] max-w-[180px] object-left"
            />
          </a>
        </motion.div>

        {/* MENU CENTRAL (Só aparece no PC) */}
        <motion.div variants={itemVariants} className="flex-grow flex justify-center">
          <Navigation />
        </motion.div>

        {/* BOTÃO CTA (Só aparece no PC) */}
        <motion.div variants={itemVariants} className="min-w-[200px] flex justify-end">
          <Botao text="Começar Projeto" link="/contato" />
        </motion.div>
      </motion.nav>

      {/* --- MENU MOBILE EXPANDIDO --- */}
      <AnimatePresence>
        {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setisOpen} />}
      </AnimatePresence>
    </header>
  );
}
