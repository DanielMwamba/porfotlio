"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        À propos de moi
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/profile.jpg"
            alt="Daniel Mwamba"
            width={300}
            height={300}
            className="rounded-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-md"
        >
          <Card>
            <CardContent className="p-6">
              <p className="mb-4">
                Salut ! Je suis Daniel Mwamba (DM), un développeur Full Stack
                passionné avec un diplôme en Gestion informatique et une expérience
                solide en développement web et mobile.
              </p>
              <p>
                Je suis constamment en train d&apos;améliorer mes compétences et
                d&apos;apprendre de nouvelles technologies. Ma soif de
                connaissances et mon désir de comprendre comment les choses
                fonctionnent font de moi un développeur curieux et innovant.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
