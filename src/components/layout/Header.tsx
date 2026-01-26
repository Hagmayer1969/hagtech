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
    <header className="fixed top-0 left-0 w-full z-50 py-[0.8vw] bg-black/40 backdrop-blur-xl transition-all duration-500">
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[95%] md:max-w-[90%] mx-auto flex items-center justify-between px-2"
      >
        {/* Mobile: Hamburguer à esquerda | Desktop: Logo à esquerda */}
        <motion.div
          variants={itemVariants}
          className="flex-shrink-0 flex justify-start min-w-[100px] md:min-w-[200px]"
        >
          {/* Hamburguer - só mobile, à esquerda */}
          <button
            onClick={() => setisOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-[100]"
          >
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>

          {/* Logo - só desktop à esquerda */}
          <a href="/" className="hidden md:block">
            <img
              src="./iconss/hagtech.png"
              alt="Logo"
              className="w-[13vw] max-w-[180px] transition-all object-left"
            />
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="hidden md:flex flex-grow justify-center"
        >
          <Navigation />
        </motion.div>

        {/* Mobile: Logo à direita | Desktop: Botão à direita */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-end gap-2 min-w-[100px] md:min-w-[200px]"
        >
          {/* Logo - só mobile à direita */}
          <a href="/" className="md:hidden">
            <img
              src="./iconss/hagtech.png"
              alt="Logo"
              className="w-[40vw] min-w-[130px] max-w-[200px] transition-all object-right"
            />
          </a>

          {/* Botão - só desktop */}
          <div className="hidden md:block">
            <Botao text="Começar Projeto" link="/contato" />
          </div>
        </motion.div>
      </motion.nav>
      <AnimatePresence>
        {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setisOpen} />}
      </AnimatePresence>
    </header>
  );
}
