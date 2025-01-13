"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "KongoDev",
    description: "Plateforme pour les développeurs congolais",
    image: "/kongodev.png",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/DanielMwamba/KongoDev",
    live: "https://kongodev.netlify.app",
  },
  {
    title: "Twitter Clone",
    description: "Clone de Twitter avec les fonctionnalités de base",
    image: "/twitterclone.png",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/DanielMwamba/Twitter-clone",
    live: "https://cloning-twitter.netlify.app/",
  },
  {
    title: "Catfish Land",
    description: "Site web pour le restaurant Catfish Land",
    image: "/catfish.png",
    technologies: ["WordPress", "Elementor"],
    live: "https://dev-catfish-land.pantheonsite.io/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Projets
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="rounded-md mb-4"
                />
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.github && (
                  <Button asChild variant="outline">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                )}
                <Button asChild>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le projet
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
