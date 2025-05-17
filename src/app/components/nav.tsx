"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { reseaux } from "@/utils/reseaux";
import { useI18n, useChangeLocale, useCurrentLocale } from "@/locales/client";

const Header = () => {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const scrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Détecter la section active
      const sections = ["about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      // Stocker la position actuelle du scroll
      scrollPosition.current = window.scrollY;
      // Appliquer un style fixé au body avec la position actuelle
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    } else {
      // Restaurer la position du scroll quand on ferme le menu
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      if (scrollPosition.current !== 0) {
        window.scrollTo(0, scrollPosition.current);
      }
    }

    return () => {
      // Nettoyage au démontage du composant
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
    };
  }, [isOpen]);

  const navItems = [
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold font-montserrat relative group"
        >
          <motion.span
            className="text-gradient"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            D<span className="text-white">M</span>
          </motion.span>
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isScrolled ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
        <nav className="hidden md:flex space-x-8 lg:space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-white hover:text-gray-300 transition-colors duration-300 text-lg tracking-wide font-medium font-montserrat ${
                activeSection === item.href.substring(1) ? "font-bold" : ""
              }`}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Sélecteur de langue */}
        <div className="hidden md:flex mr-8">
          <button
            onClick={() => changeLocale("en")}
            className={`mr-2 ${
              locale === "en" ? "text-gradient font-bold" : "text-white"
            }`}
          >
            EN
          </button>
          <span className="text-white">|</span>
          <button
            onClick={() => changeLocale("fr")}
            className={`ml-2 ${
              locale === "fr" ? "text-gradient font-bold" : "text-white"
            }`}
          >
            FR
          </button>
        </div>

        <motion.button
          className="md:hidden glass p-2 rounded-full text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)",
          }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden fixed inset-0 z-50 bg-black/90 backdrop-blur-md"
            style={{ touchAction: "none" }}
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="h-full flex flex-col items-center justify-center relative"
            >
              <motion.button
                className="absolute top-4 right-4 glass p-3 rounded-full text-white focus:outline-none"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <X size={24} />
              </motion.button>

              {/* Logo dans le menu mobile */}
              <motion.div className="mb-16" variants={itemVariants}>
                <span className="text-4xl font-bold font-montserrat">
                  <span className="text-gradient">Daniel</span>
                  <span className="text-white"> MWAMBA</span>
                </span>
              </motion.div>

              <motion.div className="flex flex-col items-center space-y-5">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link
                      href={item.href}
                      className="text-white relative group rounded-full px-6 py-2 transition-all duration-300 text-2xl font-montserrat font-semibold tracking-tight flex items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full -z-10 opacity-0 group-hover:opacity-100"
                        layoutId={`nav-bg-${index}`}
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Sélecteur de langue mobile */}
              <motion.div
                className="mt-8 flex space-x-4"
                variants={itemVariants}
              >
                <button
                  onClick={() => changeLocale("en")}
                  className={`px-4 py-2 glass rounded-full ${
                    locale === "en"
                      ? "bg-gradient-to-r from-blue-600/50 to-purple-600/50"
                      : ""
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => changeLocale("fr")}
                  className={`px-4 py-2 glass rounded-full ${
                    locale === "fr"
                      ? "bg-gradient-to-r from-blue-600/50 to-purple-600/50"
                      : ""
                  }`}
                >
                  FR
                </button>
              </motion.div>

              {/* Réseaux sociaux dans le menu mobile */}
              <motion.div
                className="mt-12 flex space-x-6"
                variants={itemVariants}
              >
                {reseaux.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-full text-white hover:text-gradient transition-all"
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
