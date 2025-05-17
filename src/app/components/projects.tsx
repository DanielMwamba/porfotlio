"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { projects } from "@/utils/projects";
import { useI18n } from "@/locales/client";

const Projects = () => {
  const t = useI18n();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const showcaseVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  // Fonction pour obtenir la description du projet
  const getProjectDescription = (projectId: string) => {
    switch (projectId) {
      case "devsphere":
        return t("projects.devsphere.description");
      case "streameex":
        return t("projects.streameex.description");
      case "duplex":
        return t("projects.duplex.description");
      case "catfish":
        return t("projects.catfish.description");
      default:
        return "";
    }
  };

  return (
    <section
      id="projects"
      className="section-container relative overflow-hidden"
      ref={ref}
    >
      {/* Arrière-plan décoratif */}
      <div className="absolute -left-[15%] top-1/4 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-blue-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div
        className="absolute -right-[15%] bottom-1/4 w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] bg-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="content-container relative z-10">
        <motion.div
          className="section-title-container"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="font-bold font-montserrat text-4xl tracking-tight"
            variants={titleVariants}
          >
            {t("projects.title")}
          </motion.h2>

          <motion.div
            className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 mb-6"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg mb-12 font-inter leading-relaxed"
            variants={titleVariants}
          >
            {t("projects.subtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="card overflow-hidden"
              variants={showcaseVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-50 z-10"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="card-content p-5">
                <h4 className="text-xl font-semibold font-montserrat tracking-tight mb-2 group-hover:text-gradient">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm font-inter line-clamp-2 mb-3">
                  {getProjectDescription(project.id)}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="glass px-2 py-0.5 rounded-full text-xs text-white/80 font-inter"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-400 font-inter">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 mt-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass px-3 py-1 rounded-full text-xs inline-flex items-center justify-center hover:bg-blue-600/20 font-inter font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={14} className="mr-1" />
                      {t("projects.codeButton")}
                    </motion.a>
                  )}

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass px-3 py-1 rounded-full text-xs inline-flex items-center justify-center hover:bg-purple-600/20 font-inter font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt size={12} className="mr-1" />
                      {t("projects.demoButton")}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
