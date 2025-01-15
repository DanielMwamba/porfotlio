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
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "DevSphere",
    description:
      "Plateforme communautaire pour les développeurs, facilitant le partage de connaissances et la collaboration sur des projets innovants.",
    image: "/devsphere.png",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/DanielMwamba/Devsphere",
    live: "https://kongodev.netlify.app",
  },
  {
    title: "Streameex Studio",
    description:
      "Plateforme de streaming dédiée à la diffusion d'événements en direct sur plusieurs plateformes comme Facebook, Instagram, Youtube... Permettre aux utilisateurs de diffuser des événements et de les partager sur les plateformes de réseaux sociaux",
    image: "/streameex.png",
    technologies: ["NextJS", "Tailwind"],
    github: "https://github.com/DanielMwamba/Twitter-clone",
    live: "https://cloning-twitter.netlify.app/",
  },
  {
    title: "Catfish Land",
    description:
      "Site web moderne pour le restaurant Catfish Land, intégrant un système de réservation en ligne et une interface utilisateur intuitive.",
    image: "/catfish.png",
    technologies: ["WordPress", "Elementor", "PHP"],
    live: "https://dev-catfish-land.pantheonsite.io/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Projets
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="rounded-md mb-4 w-full h-48 object-cover"
                  />
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
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
      </div>
    </section>
  );
}
