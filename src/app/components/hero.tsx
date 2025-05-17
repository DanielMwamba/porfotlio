"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { reseaux } from "@/utils/reseaux";
import { FaArrowRight, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="section-container min-h-[95vh] flex items-center justify-center relative overflow-hidden">
      {/* Effets d'arrière-plan améliorés */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
      </div>

      {/* Cercles lumineux positionnés stratégiquement */}
      <div className="absolute top-[15%] -left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-purple-500/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-[20%] -right-[15%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-blue-500/20 rounded-full filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="content-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
        >
          <div className="lg:w-3/5 text-center lg:text-left">
            {/* En-tête principal avec animations améliorées */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="mb-2 font-bold font-montserrat tracking-tight">
                <span className="text-white">Daniel</span>{" "}
                <span className="text-gradient">MWAMBA</span>
              </h1>
              <motion.div
                className="h-1 w-40 md:w-60 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto lg:mx-0 mt-3"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>

            {/* Sous-titre avec taille adaptative */}
            <motion.h2
              className="text-3xl sm:text-4xl font-bold lg:text-5xl text-gray-300 mb-6 font-montserrat tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Software <span className="text-gradient">Engineer</span>
            </motion.h2>

            {/* Description optimisée pour la lisibilité */}
            <motion.p
              className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 font-inter leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Je suis un développeur passionné par la technologie et la création
              de solutions digitales innovantes qui répondent aux besoins
              actuels. J&apos;aime relever des défis et résoudre des problèmes
              avec ingéniosité.
            </motion.p>

            {/* Icônes sociales repositionnées */}
            <motion.div
              className="flex justify-center lg:justify-start gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {reseaux.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white hover:text-gradient transition-all"
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </motion.div>

            {/* Boutons d'action avec meilleur espacement */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link
                href="#contact"
                className="glass bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-padding backdrop-filter text-white font-medium py-4 px-8 rounded-full inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group font-montserrat"
              >
                Me contacter
                <motion.div
                  className="ml-2 inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <FaArrowRight size={18} />
                </motion.div>
              </Link>

              <a
                href="/CV-DANIEL-MWAMBA.pdf"
                download
                className="glass text-white font-medium py-4 px-8 rounded-full inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 border border-white/20 group font-montserrat"
              >
                Mon CV
                <motion.div
                  className="ml-2 inline-block"
                  initial={{ y: 0 }}
                  whileHover={{ y: 2 }}
                >
                  <FaDownload size={18} />
                </motion.div>
              </a>
            </motion.div>
          </div>

          {/* Image de profil avec effets améliorés */}
          <motion.div
            className="lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl opacity-70 animate-pulse"></div>
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-2xl animate-float"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full z-10"></div>
                <Image
                  src="/profile.png"
                  alt="Daniel MWAMBA"
                  layout="fill"
                  objectFit="cover"
                  quality={90}
                  priority
                  className="z-0"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
