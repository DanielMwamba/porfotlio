"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Contact
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Envoyez-moi un message</CardTitle>
                <CardDescription>
                  Je vous répondrai dans les plus brefs délais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Nom</Label>
                      <Input id="name" placeholder="Votre nom" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="Votre email"
                        type="email"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Votre message" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Envoyer</Button>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Mes coordonnées</CardTitle>
                <CardDescription>
                  N&apos;hésitez pas à me contacter via ces plateformes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaLinkedin className="text-2xl text-blue-600" />
                  <a
                    href="https://www.linkedin.com/in/daniel-mwamba-802862286"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <FaGithub className="text-2xl" />
                  <a
                    href="https://github.com/DanielMwamba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-2xl text-red-500" />
                  <a
                    href="mailto:danielmwambacinyamu@gmail.com"
                    className="hover:underline"
                  >
                    danielmwambacinyamu@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
