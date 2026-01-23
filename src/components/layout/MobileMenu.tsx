"use client";

import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Tag,
  BookOpen,
  Shield,
  User,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
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

const messages = [
  { name: "Max Maraston", avatar: "/avatars/1.png", badge: 2 },
  { name: "Celia W McCombs", avatar: "/avatars/2.png" },
  { name: "Edna J Critchlow", avatar: "/avatars/3.png", badge: 1 },
  { name: "Dima Groshev", avatar: "/avatars/4.png" },
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
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed top-0 right-0 h-screen w-[85vw] max-w-[350px] bg-black/70 backdrop-blur-2xl z-[80] flex flex-col p-0 rounded-l-3xl border-l border-white/5 overflow-y-auto overflow-x-hidden"
    >
      {/* Top bar com logo e nome */}
      <div className="flex items-center gap-3 px-8 pt-8 pb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-700 to-pink-500 flex items-center justify-center">
          <Image
            src="/iconss/logo hagtech sem fundo .png"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
        <span className="text-white font-bold text-lg tracking-tight">
          HagTech
        </span>
      </div>
      {/* Menu principal */}
      <div className="px-8 mt-2">
        <span className="text-neutral-400 text-xs font-semibold tracking-widest mb-2 block">
          MENU
        </span>
        <nav className="flex flex-col gap-2">
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
              {/* Removido Case Study highlight fixo */}
            </button>
          ))}
        </nav>
      </div>
      {/* Mensagens */}
      <div className="px-8 mt-8">
        <span className="text-neutral-400 text-xs font-semibold tracking-widest mb-2 block">
          MESSAGES
        </span>
        <div className="bg-neutral-900/80 rounded-2xl p-4 flex flex-col gap-2">
          {messages.map((msg, i) => (
            <div key={msg.name} className="flex items-center gap-3">
              <Image
                src={msg.avatar}
                alt={msg.name}
                width={32}
                height={32}
                className="rounded-full border-2 border-neutral-800"
              />
              <span className="text-neutral-200 text-sm flex-1">
                {msg.name}
              </span>
              {msg.badge && (
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {msg.badge}
                </span>
              )}
            </div>
          ))}
          <button className="mt-3 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition-all">
            <ChevronDown className="w-4 h-4" /> All messages
          </button>
        </div>
      </div>
      {/* Usuário no rodapé */}
      <div className="mt-auto px-8 pb-8 flex items-center gap-3">
        <Image
          src="/avatars/5.png"
          alt="User"
          width={40}
          height={40}
          className="rounded-full border-2 border-purple-700"
        />
        <div>
          <div className="text-white font-semibold leading-tight">
            AmirBaqian
          </div>
          <div className="text-neutral-400 text-xs">Product Designer</div>
        </div>
      </div>
    </motion.div>
  );
}
