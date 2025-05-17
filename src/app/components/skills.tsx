"use client";

import { motion } from "framer-motion";
import { skills } from "@/utils/skills";
import { useInView } from "react-intersection-observer";
import { FaReact, FaNodeJs, FaFigma, FaWordpress } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiExpress,
  SiAsana,
  SiJavascript,
  SiGit,
} from "react-icons/si";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const recentTechnologies = [
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Git", icon: SiGit },
    { name: "Figma", icon: FaFigma },
    { name: "WordPress", icon: FaWordpress },
    { name: "Asana", icon: SiAsana },
  ];

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Item variants
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

  // Tech icon variants
  const techIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -7,
      scale: 1.1,
      filter: "drop-shadow(0 0 8px rgba(var(--primary), 0.7))",
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <section
      id="skills"
      className="section-container relative overflow-hidden"
      ref={ref}
    >
      {/* Arrière-plan décoratif */}
      <div className="absolute -left-[15%] top-1/3 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-blue-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div
        className="absolute -right-[15%] bottom-1/3 w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] bg-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse"
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
            Compétences <span className="text-gradient">clés</span>
          </motion.h2>
          <motion.div
            className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 mb-6"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        {/* Section compétences principales */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="card"
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
                boxShadow: "0 10px 25px rgba(var(--primary), 0.2)",
              }}
            >
              <div className="card-content flex flex-col h-full">
                <div className="flex items-start mb-4">
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full mr-4 text-white shadow-lg flex-shrink-0"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      },
                    }}
                  >
                    <skill.icon className="w-6 h-6" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold font-montserrat tracking-tight group-hover:text-gradient transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 mt-2 font-inter group-hover:text-gray-300 transition-colors duration-300">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section technologies */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold font-montserrat tracking-tight mb-3">
              Voici quelques technologies avec lesquelles j&apos;ai travaillé
              récemment
            </h3>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500/70 to-blue-500/70 mx-auto mt-2 mb-4"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-x-4 gap-y-10 justify-items-center max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {recentTechnologies.map((tech) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center w-20"
                variants={techIconVariants}
                whileHover="hover"
              >
                <div className="glass p-4 rounded-full mb-3 w-16 h-16 flex items-center justify-center">
                  <tech.icon className="w-7 h-7 text-white transition-colors duration-300" />
                </div>
                <span className="text-center text-sm text-gray-400 font-inter group-hover:text-gray-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
