"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { ModeToggle } from "@/components/mode-toggle";
import { Menu, Download } from "lucide-react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-serif font-bold tracking-tight hover:text-primary transition-colors"
        >
          DM
        </Link>
        <div className="hidden md:flex space-x-1 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-primary/10 rounded-md transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="outline" size="sm" className="ml-4">
            <a href="/cv.pdf" download className="flex items-center space-x-2">
              <Download size={16} />
              <span>CV</span>
            </a>
          </Button>
          {/* <ModeToggle /> */}
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors px-4 py-2 rounded-md hover:bg-primary/10"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center space-x-2"
                >
                  <Download size={16} />
                  <span>Télécharger CV</span>
                </a>
              </Button>
              <div className="px-4">
                {/* <ModeToggle /> */}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}
