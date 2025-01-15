"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  {
    category: "Développement",
    description:
      "Conception et création de sites internet, d'applications web et mobiles avec les technologies modernes",
    items: ["React", "Next.js", "Node.js", "Express", "TypeScript", "REST API"]
  },
  {
    category: "Gestion de projet",
    description:
      "Expérience en méthodologies agiles et gestion efficace de projets",
    items: ["Scrum", "Kanban", "Jira", "Trello", "GitHub Projects"],
  },
  {
    category: "UI/UX Design",
    description: "Création d'interfaces utilisateur intuitives et esthétiques",
    items: ["Figma", "Adobe XD", "Responsive Design", "Accessibilité web"],
  },
  {
    category: "DevOps",
    description: "Mise en place et gestion d'infrastructures cloud",
    items: ["Docker", "CI/CD", "AWS", "Vercel", "Netlify"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Compétences
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{skill.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
