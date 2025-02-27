"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaUsers, FaGlobe } from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: FaCode,
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
      icon: FaGlobe,
      title: "Adaptability",
      description: "Quickly adapting to new technologies and methodologies",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="about"
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
          About <span className="text-stroke">Me</span>
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-black rounded-2xl p-8 shadow-2xl border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl mb-6 text-gray-300 leading-relaxed">
              As a passionate Full Stack Developer, my journey began in the
              world of chemistry and biology. This background instilled in me a
              sense of rigor and logic that I now apply to the realm of coding.
              My fascination with programming was sparked when I discovered the
              power of digital tools during my studies. The ability to create
              solutions from scratch using lines of code captivated me, leading
              me to dive headfirst into web development.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              My transition to IT management studies allowed me to stay immersed
              in the world of programming. Later, at Kadea Academy, I honed my
              skills in web and mobile development, deepening my expertise and
              fueling my passion for creating innovative digital solutions.
              Today, I bring a unique blend of scientific thinking and creative
              problem-solving to every project I undertake.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 flex flex-col items-center text-center hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
                variants={itemVariants}
              >
                <div className="bg-white rounded-full p-4 mb-4">
                  <skill.icon size={32} className="text-black" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white font-poppins">
                  {skill.title}
                </h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;