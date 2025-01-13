"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Daniel Mwamba</h1>
          <h2 className="text-2xl md:text-3xl text-foreground/80 mb-6">
            Développeur Full Stack
          </h2>
          <Button asChild size="lg" className="text-lg">
            <a href="#contact">Contactez-moi</a>
          </Button>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/profile.jpg"
            alt="Daniel Mwamba"
            width={400}
            height={400}
            className="rounded-full border-4 border-primary shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
