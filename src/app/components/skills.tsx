"use client";

import { motion } from "framer-motion";
import { skills } from "@/utils/skills";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";
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
    { name: "Figma", icon: FaFigma },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "NextJs", icon: SiNextdotjs },
    { name: "WordPress", icon: FaWordpress },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Git", icon: SiGit },
    { name: "Asana", icon: SiAsana },
    { name: "ExpressJs", icon: SiExpress },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-black to-gray-900"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-6xl font-bold mb-16 text-center font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Core <span className="text-stroke">Skills</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="bg-white p-3 rounded-full mr-4"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <skill.icon className="w-6 h-6 text-black" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white font-poppins">
                  {skill.name}
                </h3>
              </div>
              <p className="text-gray-300 font-inter">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-center text-gray-300 mb-8 text-lg">
            Here are a few technologies and tools I&apos;ve been working with
            recently:
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {recentTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <tech.icon className="w-12 h-12 text-gray-300 transition-colors duration-300" />
                <span className="mt-2 text-sm text-gray-400 font-inter">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;