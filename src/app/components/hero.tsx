"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { reseaux } from "@/utils/reseaux";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { useI18n } from "@/locales/client";

const Hero = () => {
  const t = useI18n();

  return (
    <section className="section-container min-h-[70vh] flex items-center justify-center relative pt-32 pb-16">
      <div className="content-container mt-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-block"
            >
              <span className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-3 block">
                Full Stack Developer
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight mb-4 tracking-tight">
                Daniel <br />
                <span className="text-gray-400">Mwamba.</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="#contact" className="btn-primary group">
                {t("hero.contactButton")}
                <FaArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={14}
                />
              </Link>

              <a
                href="/CV-DANIEL-MWAMBA.pdf"
                download
                className="btn-outline group flex items-center gap-2"
              >
                {t("hero.cvButton")}
                <FaDownload
                  className="ml-2 group-hover:translate-y-1 transition-transform"
                  size={14}
                />
              </a>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {reseaux.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-black transition-colors transform hover:scale-110 duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
              <div className="absolute inset-0 bg-gray-50 rounded-full scale-90 translate-x-4 translate-y-4 -z-10"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border-2 border-gray-100">
                <Image
                  src="/profile.png"
                  alt="Daniel MWAMBA"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
