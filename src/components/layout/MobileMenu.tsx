"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, Tag, BookOpen, Shield, User } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

const navItems = [
  { icon: Briefcase, label: "My Offers", active: false },
  { icon: User, label: "User's Task", active: false },
  { icon: Tag, label: "Product Discounts", badge: 2, active: false },
  { icon: BookOpen, label: "Case Study", active: true },
  { icon: Shield, label: "Security", active: false },
  { icon: Home, label: "Your Ability", active: false },
];

export default function MobileMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [activeIndex, setActiveIndex] = React.useState(3); // Case Study como padrão
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Permite scroll no menu, mas trava o fundo
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.div
      ref={menuRef}
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed top-0 left-0 h-screen w-[85vw] max-w-[350px] bg-black/70 backdrop-blur-2xl z-[70] flex flex-col p-0 rounded-r-3xl border-r border-white/5 overflow-y-auto overflow-x-hidden"
    >
      {/* Top bar sem logo */}
      <div className="px-8 pt-24 pb-2"></div>
      {/* Menu principal */}
      <div className="px-8 mt-1">
        <span className="text-neutral-400 text-xs font-semibold tracking-widest mb-2 block">
          MENU
        </span>
        <nav className="flex flex-col gap-2 mb-6">
          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setActiveIndex(i)}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all text-sm font-medium relative
                ${activeIndex === i ? "bg-gradient-to-r from-purple-700 to-pink-500 text-white shadow-lg" : "text-neutral-300 hover:bg-neutral-800/60"}
              `}
            >
              <item.icon className="w-5 h-5" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="ml-2 bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
        {/* Logo HagTech abaixo do menu */}
        <div className="flex justify-center mb-4">
          <img
            src="/iconss/hagtech.png"
            alt="HagTech Logo"
            className="w-32 h-auto object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}
