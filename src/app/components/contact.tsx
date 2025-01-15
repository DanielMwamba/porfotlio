"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Contact
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Envoyez-moi un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Votre nom" />
                <Input type="email" placeholder="Votre email" />
                <Textarea placeholder="Votre message" rows={4} />
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Envoyer</Button>
            </CardFooter>
          </Card>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/daniel-mwamba-802862286" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/DanielMwamba" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="mailto:danielmwambacinyamu@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}