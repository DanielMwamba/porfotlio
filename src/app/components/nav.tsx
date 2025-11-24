"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n, useChangeLocale, useCurrentLocale } from "@/locales/client";

const Header = () => {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navItems = [
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-black z-50"
        >
          DM.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <div className="h-4 w-px bg-gray-300 mx-2"></div>

          <div className="flex gap-3 text-sm font-medium">
            <button
              onClick={() => changeLocale("en")}
              className={`${
                locale === "en"
                  ? "text-black"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLocale("fr")}
              className={`${
                locale === "fr"
                  ? "text-black"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              FR
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 p-2 -mr-2 text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center md:hidden"
            >
              <nav className="flex flex-col items-center gap-8 mb-12">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-3xl font-bold text-black tracking-tight"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex gap-6 text-lg font-medium">
                <button
                  onClick={() => {
                    changeLocale("en");
                    setIsOpen(false);
                  }}
                  className={`${
                    locale === "en" ? "text-black" : "text-gray-400"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    changeLocale("fr");
                    setIsOpen(false);
                  }}
                  className={`${
                    locale === "fr" ? "text-black" : "text-gray-400"
                  }`}
                >
                  FR
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
