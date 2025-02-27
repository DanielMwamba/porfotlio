"use client";

import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { reseaux } from "@/utils/reseaux";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-black to-gray-900"
      ref={ref}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-6xl font-bold mb-8 text-center font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Let&apos;s <span className="text-stroke">Connect</span>
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I&apos;m always open to new opportunities, collaborations, or just a
          friendly chat about technology and development. Whether you have a
          project in mind or just want to say hello, I&apos;d love to hear from
          you!
        </motion.p>
        <motion.div
          className="flex flex-col items-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="mailto:your.email@example.com"
            className="bg-white text-black hover:bg-gray-200 font-bold py-4 px-8 rounded-full inline-flex items-center justify-center text-lg transition-colors duration-300 font-poppins"
          >
            <FaEnvelope className="mr-2" size={20} />
            Get in Touch
          </a>
          <p className="text-gray-400 ">or follow me on:</p>
          <div className="flex space-x-6">
            {reseaux.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors  duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={32} />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4 font-poppins">
            Looking for a developer?
          </h3>
          <p className="text-gray-300 mb-6 font-inter">
            I&apos;m currently available for freelance work and full-time
            positions. If you think I&apos;d be a good fit for your team or
            project, don&apos;t hesitate to reach out!
          </p>
          <a
            href="/daniel-mwamba-cv.pdf"
            download
            className="text-blue-400 hover:text-blue-300 underline font-inter"
          >
            Download my CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
