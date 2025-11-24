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

  return (
    <section id="contact" className="section-container bg-gray-50" ref={ref}>
      <div className="content-container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t("contact.title")}
            </h2>
            <div className="h-1 w-20 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed">
              {t("contact.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 mb-16"
          >
            <div className="flex flex-col items-center gap-8">
              <a
                href="mailto:danielmwambacinyamu@gmail.com"
                className="btn-primary text-lg flex gap-3 px-8 py-4 w-full sm:w-auto justify-center"
              >
                <FaEnvelope size={20} />
                {t("contact.emailButton")}
              </a>

              <div className="w-full h-px bg-gray-100"></div>

              <div>
                <p className="text-gray-500 mb-6 font-medium">
                  {t("contact.followMe")}
                </p>
                <div className="flex justify-center gap-6">
                  {reseaux.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackOutboundLink(link.href, `Social - ${link.label}`)
                      }
                      className="text-gray-400 hover:text-black transition-colors transform hover:scale-110 duration-200"
                      aria-label={link.label}
                    >
                      <link.icon size={28} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("contact.lookingFor")}
            </h3>
            <p className="text-gray-500 mb-8">{t("contact.available")}</p>

            <a
              href="/CV-DANIEL-MWAMBA.pdf"
              download
              onClick={() => trackDownload("CV-DANIEL-MWAMBA.pdf")}
              className="btn-outline inline-flex items-center gap-2"
            >
              <FaFileDownload size={18} />
              {t("contact.downloadCV")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
