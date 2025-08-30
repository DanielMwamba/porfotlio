"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaFileDownload } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { reseaux } from "@/utils/reseaux";
import { useI18n } from "@/locales/client";
import { trackDownload, trackOutboundLink } from "./GoogleAnalytics";

const Contact = () => {
  const t = useI18n();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Item variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Arrière-plan décoratif */}
      <div className="absolute -right-64 top-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div
        className="absolute -left-64 bottom-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold font-montserrat tracking-tight">
            {" "}
            {t("contact.title")}{" "}
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto my-6"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 text-center mb-12 max-w-2xl font-inter leading-relaxed"
          >
            {t("contact.description")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-10 shadow-xl border border-white/10 backdrop-blur mb-12 w-full max-w-2xl"
            whileHover={{ boxShadow: "0 0 30px rgba(139, 92, 246, 0.15)" }}
          >
            <div className="flex flex-col items-center space-y-8">
              <motion.a
                href="mailto:danielmwambacinyamu@gmail.com"
                className="glass bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-4 px-8 rounded-full inline-flex items-center justify-center text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group font-montserrat"
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="mr-3" size={20} />
                {t("contact.emailButton")}
              </motion.a>

              <p className="text-gray-300 mt-4 font-inter">
                {t("contact.followMe")}
              </p>

              <div className="flex space-x-8 mt-4">
                {reseaux.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackOutboundLink(link.href, `Social - ${link.label}`)
                    }
                    className="text-white hover:text-gradient transition-all p-3"
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon size={32} />
                    <span className="sr-only">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center max-w-2xl">
            <h3 className="text-2xl font-semibold mb-6 font-montserrat tracking-tight">
              {" "}
              {t("contact.lookingFor")}{" "}
            </h3>
            <p className="text-gray-300 mb-8 font-inter">
              {" "}
              {t("contact.available")}{" "}
            </p>
            <motion.a
              href="/CV-DANIEL-MWAMBA.pdf"
              download
              onClick={() => trackDownload("CV-DANIEL-MWAMBA.pdf")}
              className="glass text-white font-medium py-3 px-6 rounded-full inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 border border-white/20 font-montserrat"
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload className="mr-2" size={18} />
              {t("contact.downloadCV")}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
