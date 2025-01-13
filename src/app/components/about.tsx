"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "Tailwind CSS",
];

export function About() {
  return (
    <section id="about" className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          À propos de moi
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <p className="mb-4">
                  Passionné par le développement web et les nouvelles
                  technologies, je suis un développeur Full Stack avec une
                  solide expérience dans la création d&apos;applications web modernes
                  et performantes.
                </p>
                <p className="mb-4">
                  Mon parcours m&apos;a permis de développer une expertise dans
                  la gestion de projets agiles, en utilisant la méthodologie
                  Scrum, ainsi que dans la conception d&apos;interfaces utilisateur
                  intuitives et esthétiques.
                </p>
                <p>
                  Je suis constamment à la recherche de nouveaux défis et
                  d&apos;opportunités pour élargir mes compétences et contribuer à
                  des projets innovants.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Technologies récentes
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <a href="/cv.pdf" download>
                    Télécharger mon CV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
