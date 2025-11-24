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
  SiJavascript,
  SiFirebase,
  SiStrapi
} from "react-icons/si";
import { useI18n } from "@/locales/client";

const Skills = () => {
  const t = useI18n();
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
    { name: "Firebase", icon: SiFirebase },
    { name: "Strapi", icon: SiStrapi },
    { name: "WordPress", icon: FaWordpress },
  ];

  const getSkillContent = (skillId: string) => {
    switch (skillId) {
      case "fullstack":
        return {
          title: t("skills.fullstack.title"),
          description: t("skills.fullstack.description"),
        };
      case "uiux":
        return {
          title: t("skills.uiux.title"),
          description: t("skills.uiux.description"),
        };
      case "management":
        return {
          title: t("skills.management.title"),
          description: t("skills.management.description"),
        };
      default:
        return {
          title: "",
          description: "",
        };
    }
  };

  return (
    <section id="skills" className="section-container bg-gray-50" ref={ref}>
      <div className="content-container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("skills.title")}
          </h2>
          <div className="h-1 w-20 bg-black mx-auto"></div>
        </div>

        {/* Main Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => {
            const content = getSkillContent(skill.id);
            return (
              <motion.div
                key={skill.id}
                className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-6">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {content.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {content.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-12">
            {t("skills.subtitle")}
          </h3>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {recentTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center gap-3 group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                <div className="w-16 h-16 bg-white rounded-2xl border border-gray-100 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-gray-700 group-hover:text-black transition-colors" />
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
