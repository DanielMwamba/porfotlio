"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { reseaux } from "@/utils/reseaux";
import { FaArrowRight, FaDownload } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="min-h-screen mb-16 flex items-center justify-center bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto mt-10 px-6 sm:px-20 py-12 flex flex-col lg:flex-row items-center justify-between relative z-10"
      >
        <div className="lg:w-2/3 text-center lg:text-left mb-12 lg:mb-0 max-w-3xl">
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Daniel <span className="text-stroke">MWAMBA</span>
          </motion.h1>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold lg:text-5xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            className="text-gray-400 text-xl mb-10 mx-auto lg:mx-0 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I am a developer passionate about technology and creating innovative
            digital solutions to meet society&apos;s needs. I love tackling
            challenges and solving problems with ingenuity..
          </motion.p>
          <motion.div
            className="flex justify-center lg:justify-start space-x-8 mb-10"
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
                className="text-white hover:text-gray-300 transition-colors"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={32} />
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link
              href="#contact"
              className="bg-white text-black hover:bg-gray-200 font-bold py-4 px-8 rounded-full inline-flex items-center justify-center transition-colors text-lg group"
            >
              Get in touch
              <FaArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
            <a
              href="/daniel-mwamba-cv.pdf"
              download
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-full inline-flex items-center justify-center transition-colors text-lg group"
            >
              Download CV
              <FaDownload
                className="ml-2 group-hover:translate-y-1 transition-transform"
                size={20}
              />
            </a>
          </motion.div>
        </div>
        <motion.div
          className="lg:w-1/3 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl animate-float"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/profile.png"
                alt="Daniel MWAMBA"
                layout="fill"
                objectFit="cover"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
