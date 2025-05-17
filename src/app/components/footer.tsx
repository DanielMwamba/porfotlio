"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { reseaux } from "@/utils/reseaux";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-12">
      {/* Effet de glassmorphism avec dégradé subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 backdrop-blur-sm"></div>

      {/* Cercle décoratif */}
      <div className="absolute -bottom-32 right-10 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 left-10 w-40 h-40 bg-purple-500/5 rounded-full filter blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-8 border-b border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-0"
            >
              <Link
                href="/"
                className="text-2xl font-bold font-montserrat relative group"
              >
                <span className="text-gradient">D</span>
                <span className="text-white">M</span>
                <motion.div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              {reseaux.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gradient transition-all"
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm font-inter">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-4 md:mb-0"
            >
              <p>
                Conçu et développé par{" "}
                <span className="font-semibold text-white">Daniel Mwamba</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>© {currentYear} Tous droits réservés</p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
