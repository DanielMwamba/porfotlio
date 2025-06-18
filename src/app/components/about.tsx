"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaBrain, FaRocket } from "react-icons/fa";
import { useI18n } from "@/locales/client";

const About = () => {
  const t = useI18n();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: FaBrain,
      title: t("about.skill1.title"),
      description: t("about.skill1.description"),
    },
    {
      icon: FaUsers,
      title: t("about.skill2.title"),
      description: t("about.skill2.description"),
    },
    {
      icon: FaRocket,
      title: t("about.skill3.title"),
      description: t("about.skill3.description"),
    },
  ];

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
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="about"
      className="section-container relative overflow-hidden"
      ref={ref}
    >
      {/* Arrière-plan décoratif */}
      <div className="absolute -right-64 top-1/3 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-blue-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div
        className="absolute -left-64 bottom-1/3 w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="content-container relative z-10">
        <div className="section-title-container">
          <motion.h2
            className="font-bold font-montserrat text-3xl sm:text-4xl tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {t("about.title")}
          </motion.h2>
          <motion.div
            className="h-1 w-20 sm:w-24 md:w-32 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-3 sm:mt-4 mb-4 sm:mb-6"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl border border-white/10 backdrop-blur mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ boxShadow: "0 0 30px rgba(139, 92, 246, 0.15)" }}
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.p
                className="text-base sm:text-lg text-gray-300 leading-relaxed font-inter"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t("about.paragraph1")}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="card p-4 sm:p-6 text-center group"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                  boxShadow: "0 10px 25px rgba(var(--primary), 0.2)",
                }}
              >
                <motion.div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                  }}
                >
                  <skill.icon size={24} className="sm:text-[28px]" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white font-montserrat tracking-tight group-hover:text-gradient transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-inter group-hover:text-gray-300 transition-colors duration-300">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
