"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaBrain, FaRocket } from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: FaBrain,
      title: "Problem Solving",
      description:
        "Transforming complex challenges into elegant, efficient solutions",
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description: "Thriving in team environments to achieve shared goals",
    },
    {
      icon: FaRocket,
      title: "Adaptability",
      description: "Quickly adapting to new technologies and methodologies",
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
            className="font-bold font-montserrat text-4xl tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            À propos <span className="text-gradient">de moi</span>
          </motion.h2>
          <motion.div
            className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 mb-6"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass rounded-2xl p-6 md:p-8 shadow-xl border border-white/10 backdrop-blur mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ boxShadow: "0 0 30px rgba(139, 92, 246, 0.15)" }}
          >
            <div className="space-y-6">
              <motion.p
                className="text-lg text-gray-300 leading-relaxed font-inter"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Je suis un développeur passionné. J&apos;ai commencé ma carrière
                académique dans le monde de la chimie et de la biologie. Cette
                formation m&apos;a inculqué un sens de la rigueur et de la
                logique que j&apos;applique maintenant au codage.
              </motion.p>
              <motion.p
                className="text-lg text-gray-300 leading-relaxed font-inter"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Ma fascination pour la programmation est née de la découverte de
                la puissance des outils numériques pendant mes études. La
                capacité à créer des solutions à partir de rien en utilisant des
                lignes de code m&apos;a captivé, m&apos;amenant à plonger tête
                première dans le développement web.
              </motion.p>
              <motion.p
                className="text-lg text-gray-300 leading-relaxed font-inter"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Aujourd&apos;hui, j&apos;apporte un mélange unique de pensée
                scientifique et de résolution créative de problèmes à chacun de
                mes projets.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center group"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                  boxShadow: "0 10px 25px rgba(var(--primary), 0.2)",
                }}
              >
                <motion.div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-5 w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                  }}
                >
                  <skill.icon size={28} />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-3 text-white font-montserrat tracking-tight group-hover:text-gradient transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-gray-400 font-inter group-hover:text-gray-300 transition-colors duration-300">
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
