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

  return (
    <section id="about" className="section-container bg-white" ref={ref}>
      <div className="content-container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Title & Intro */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t("about.title")}
              </h2>
              <div className="h-1 w-20 bg-black mb-8"></div>
              <p className="text-xl text-gray-500 leading-relaxed font-light">
                {t("about.paragraph1")}
              </p>
            </motion.div>
          </div>

          {/* Attributes Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300">
                    <skill.icon className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
