// Footer Component
// Rodapé do site com informações de contato e links

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Github } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Github, href: "#" },
];

const footerLinks = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "#" },
      { label: "Equipe", href: "#" },
      { label: "Carreiras", href: "/carreiras" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Sites Institucionais", href: "#" },
      { label: "E-commerce", href: "#" },
      { label: "Landing Pages", href: "#" },
      { label: "Manutenção", href: "#" },
      { label: "Automação", href: "#" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Contato", href: "/contato" },
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="py-16 bg-neutral-950 border-t border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#hero" className="text-2xl font-bold inline-block mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Hag
              </span>
              <span className="text-white">Tech</span>
            </a>
            <p className="text-neutral-400 max-w-sm mb-6">
              Transformando ideias em experiências digitais extraordinárias.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-pink-500 hover:bg-neutral-700 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-pink-500 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © 2026 HagTech. Todos os direitos reservados.
          </p>
          <p className="text-neutral-500 text-sm">
            Construímos a versão <span className="text-pink-500"></span> digital
            que seu negócio merece.
          </p>
        </div>
      </div>
    </footer>
  );
};
