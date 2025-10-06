"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FiMail, FiPhone, FiSmartphone } from "react-icons/fi";

const Footer = () => {
  const explore = [
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Equipe", href: "#equipe" },
    { name: "Distinções", href: "#distincoes" },
  ];

  const contact = [
    {
      icon: <MapPinIcon className="mr-2 text-[var(--primary)]/50" />,
      text: "Av. Vladimir Lenine, 2815 - Maputo, Moçambique",
      href: "https://maps.app.goo.gl/K9ZgTB1qbCjpz13Y6",
    },
    {
      icon: <FiPhone className="mr-2 text-[var(--primary)]/50" />,
      text: "(+258) 214 184 39",
      href: "tel:+25821418439",
    },
    {
      icon: <FiSmartphone className="mr-2 text-[var(--primary)]/50" />,
      text: "(+258) 82 305 21 72",
      href: "tel:+258823052172",
    },
    {
      icon: <FiMail className="mr-2 text-[var(--primary)]/50" />,
      text: "maleseguros@info.co.mz",
      href: "mailto:maleseguros@info.co.mz",
    },
  ];

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <footer className="relative bg-background overflow-hidden border-t border-[var(--border)] z-20">
      {/* 🔹 Fundo Tech Animado */}
      <div className="absolute inset-0">
        <img
          src="/circuit-board-technology-blue-abstract-pattern.jpg"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background" />
      <div className="starfield" />
      {/* 🔹 Partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full blur-[2px]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3 + Math.random() * 0.5,
            }}
            animate={{
              y: [Math.random() * 100, -100],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 8,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* 🔹 Conteúdo */}
      <div className="container mx-auto px-4 lg:px-8 pt-16 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Coluna 1 */}
          <motion.div variants={itemVariants} custom={0}>
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
            <p className="text-[var(--foreground)]/80 my-4 leading-relaxed">
              Somos líderes em soluções tecnológicas inovadoras, dedicados a
              transformar negócios através da digitalização e automação.
            </p>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 group"
            >
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite] group-hover:underline">
                Saber Mais
              </h1>
              <ArrowRight className="w-5 h-5 text-accent transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Coluna 2 */}
          <motion.div variants={itemVariants} custom={1}>
            <h3 className="text-lg uppercase font-semibold mb-6">Contactos</h3>
            <ul className="space-y-3">
              {contact.map((c, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  custom={index + 1}
                  className="relative flex items-start"
                >
                  <Link
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group"
                  >
                    {c.icon}
                    <span className="text-foreground/80">{c.text}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna 3 */}
          <motion.div variants={itemVariants} custom={2}>
            <h3 className="text-lg uppercase font-semibold mb-6">
              Links Úteis
            </h3>
            <ul className="space-y-2.5">
              {explore.map((item, index) => (
                <motion.li
                  key={item.name}
                  variants={itemVariants}
                  custom={index + 1}
                  whileHover={{ x: 8, color: "var(--primary)" }}
                >
                  <Link
                    href={item.href}
                    className="hover:text-primary text-foreground/80 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna 4 */}
          <motion.div variants={itemVariants} custom={3}>
            <h3 className="text-lg uppercase font-semibold mb-8">Siga-nos</h3>
            <div className="flex space-x-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/30 cursor-pointer transition"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Linha divisória */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent my-8 w-full"
        />

        {/* Rodapé inferior */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-8 items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-[var(--muted-foreground)]/80 text-center md:text-left"
          >
            © {new Date().getFullYear()} MALEholding. Todos os direitos
            reservados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center space-x-6"
          >
            {["Termos de Serviço", "Política de Privacidade", "Cookies"].map(
              (link, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              )
            )}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
