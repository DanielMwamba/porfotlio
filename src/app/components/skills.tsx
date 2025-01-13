"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "Docker",
];

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Compétences
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="flex items-center justify-center h-24">
                <span className="text-lg font-semibold">{skill}</span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
