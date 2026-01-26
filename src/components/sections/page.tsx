"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Code, Palette, TrendingUp } from "lucide-react";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const founders = [
  {
    name: "Ben Calebe Dhein Hagmayer",
    role: "Co-Founder & Tech Lead",
    photo: "/founders/ben.jpeg",
    photoPosition: "object-[center_15%]",
    icon: Code,
    description:
      "Especialista em TI com vasta experiência em desenvolvimento de software. Domina Python, JavaScript, React, Next.js e é especialista em automação com N8n. Responsável pela arquitetura técnica e inovação da HagTech.",
    skills: ["Python", "JavaScript", "React", "Next.js", "N8n", "Automação"],
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    name: "Gabriel Gustavo Dhein Hagmayer",
    role: "Co-Founder & Creative Director",
    photo: "/founders/gabriel.jpeg",
    photoPosition: "object-[center_15%]",
    icon: Palette,
    description:
      "Especialista em design, criação de conteúdos e gestão de redes sociais. Responsável pela identidade visual e estratégia criativa da HagTech, transformando ideias em experiências visuais impactantes.",
    skills: ["UI/UX Design", "Branding", "Social Media", "Criação de Conteúdo", "Motion Design"],
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    name: "Edson Hagmayer",
    role: "Co-Founder & Business Strategist",
    photo: "/founders/edson.jpeg",
    photoPosition: "object-top",
    icon: TrendingUp,
    description:
      "Especialista na área comercial, estratégias de mercado e copywriting. Lidera as operações de negócios e parcerias estratégicas, garantindo o crescimento sustentável da HagTech.",
    skills: ["Estratégia Comercial", "Copywriting", "Marketing", "Vendas", "Negociação"],
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
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

export default function CarreirasPage() {
  return (
    <div className="bg-black min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-purple-600/20 blur-[150px] rounded-full -z-10" />

        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Conheça os{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Fundadores
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            A HagTech nasceu da união de três mentes apaixonadas por tecnologia,
            design e negócios. Juntos, transformamos ideias em soluções digitais
            extraordinárias.
          </motion.p>
        </div>
      </section>

      {/* Founders Cards */}
      <section className="py-16 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              variants={cardVariants}
              className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-pink-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Photo */}
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-neutral-800 group-hover:border-purple-500/50 transition-colors duration-500">
                <img src={founder.photo} alt={founder.name} className={`w-full h-full object-cover ${founder.photoPosition}`} />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {founder.name}
                </h3>
                <p className="text-pink-500 font-medium text-sm mb-4">
                  {founder.role}
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {founder.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {founder.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  {founder.social.linkedin && (
                    <a
                      href={founder.social.linkedin}
                      className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-pink-500 hover:bg-neutral-700 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {founder.social.github && (
                    <a
                      href={founder.social.github}
                      className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-pink-500 hover:bg-neutral-700 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {founder.social.instagram && (
                    <a
                      href={founder.social.instagram}
                      className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-pink-500 hover:bg-neutral-700 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quer fazer parte do time?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
              Estamos sempre em busca de talentos apaixonados por tecnologia e
              inovação. Entre em contato e venha construir o futuro conosco.
            </p>
            <a
              href="/contato"
              className="inline-block bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Entre em Contato
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
