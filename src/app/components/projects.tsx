"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { projects } from "@/utils/projects";
import { useI18n } from "@/locales/client";
import { gsap } from "gsap";

const Projects = () => {
  const t = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const indicatorsRef = useRef<HTMLDivElement>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Fonction pour obtenir la description du projet
  const getProjectDescription = (projectId: string) => {
    switch (projectId) {
      case "devsphere":
        return t("projects.devsphere.description");
      case "streameex":
        return t("projects.streameex.description");
      case "duplex":
        return t("projects.duplex.description");
      case "catfish":
        return t("projects.catfish.description");
      default:
        return "";
    }
  };

  // Animation d'entrée initiale
  useEffect(() => {
    if (inView && containerRef.current) {
      const tl = gsap.timeline();

      tl.from(".project-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".project-line",
          {
            scaleX: 0,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.5"
        )
        .from(
          ".project-subtitle",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }
  }, [inView]);

  // Fonction pour changer de projet
  const changeProject = useCallback(
    (newIndex: number) => {
      if (isAnimating || newIndex === currentIndex) return;

      setIsAnimating(true);

      const direction = newIndex > currentIndex ? 1 : -1;
      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentIndex(newIndex);
          setIsAnimating(false);
        },
      });

      // Animation de sortie
      tl.to(imageRef.current, {
        opacity: 0,
        x: direction * -100,
        duration: 0.6,
        ease: "power3.inOut",
      })
        .to(
          contentRef.current,
          {
            opacity: 0,
            x: direction * -50,
            duration: 0.6,
            ease: "power3.inOut",
          },
          "-=0.5"
        )
        .set(imageRef.current, { x: direction * 100 })
        .set(contentRef.current, { x: direction * 50 })
        .call(() => {
          setCurrentIndex(newIndex);
        })
        // Animation d'entrée
        .to(imageRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        .to(
          contentRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );

      // Animation des indicateurs
      gsap.to(`.indicator-${currentIndex}`, {
        width: "8px",
        backgroundColor: "rgba(156, 163, 175, 0.5)",
        duration: 0.3,
      });

      gsap.to(`.indicator-${newIndex}`, {
        width: "40px",
        backgroundColor: "rgba(147, 51, 234, 1)",
        duration: 0.3,
      });
    },
    [currentIndex, isAnimating]
  );

  // Navigation avec useCallback pour éviter les re-renders
  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    changeProject(newIndex);
  }, [currentIndex, isAnimating, changeProject]);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    changeProject(newIndex);
  }, [currentIndex, isAnimating, changeProject]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating, goToNext]);

  // Animation initiale du projet actuel
  useEffect(() => {
    if (inView) {
      gsap.set(imageRef.current, { opacity: 0, x: 100 });
      gsap.set(contentRef.current, { opacity: 0, x: 50 });

      const tl = gsap.timeline({ delay: 1 });

      tl.to(imageRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      }).to(
        contentRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // Animation de l'indicateur actif
      gsap.to(`.indicator-${currentIndex}`, {
        width: "40px",
        backgroundColor: "rgba(147, 51, 234, 1)",
        duration: 0.5,
        delay: 1.5,
      });
    }
  }, [inView, currentIndex]);

  // Gestion du swipe sur mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  const currentProject = projects[currentIndex];

  return (
    <section
      id="projects"
      className="section-container relative overflow-hidden"
      ref={ref}
    >
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
      <div className="absolute -left-[20%] top-1/4 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-purple-600/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div
        className="absolute -right-[20%] bottom-1/4 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-blue-600/10 rounded-full filter blur-3xl animate-pulse"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="content-container relative z-10" ref={containerRef}>
        {/* Titre de la section */}
        <div className="section-title-container mb-12 md:mb-20">
          <h2 className="project-title font-bold font-montserrat text-3xl sm:text-4xl md:text-5xl tracking-tight">
            {t("projects.title")}
          </h2>
          <div className="project-line h-1 w-20 sm:w-24 md:w-32 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4 mb-6 origin-center" />
          <p className="project-subtitle text-gray-400 max-w-2xl mx-auto text-base sm:text-lg font-inter leading-relaxed px-4 sm:px-0">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            {/* Image du projet */}
            <div ref={imageRef} className="relative group order-2 lg:order-1">
              <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Numéro du projet */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 text-6xl sm:text-7xl lg:text-8xl font-bold text-purple-600/20 font-montserrat">
                0{currentIndex + 1}
              </div>
            </div>

            {/* Contenu du projet */}
            <div ref={contentRef} className="space-y-6 order-1 lg:order-2">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {currentProject.title}
                </h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-inter">
                  {getProjectDescription(currentProject.id)}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm bg-white/5 backdrop-blur-sm rounded-full border border-white/10 font-inter"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Liens */}
              <div className="flex gap-4 pt-4">
                {currentProject.github && (
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 backdrop-blur-sm rounded-full border border-purple-600/50 transition-all duration-300 font-inter"
                  >
                    <FaGithub className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span>{t("projects.codeButton")}</span>
                  </a>
                )}
                {currentProject.live && (
                  <a
                    href={currentProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 backdrop-blur-sm rounded-full border border-blue-600/50 transition-all duration-300 font-inter"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>{t("projects.demoButton")}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Contrôles de navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-12 sm:mt-16">
            {/* Indicateurs */}
            <div ref={indicatorsRef} className="flex gap-2 order-2 sm:order-1">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeProject(index)}
                  className={`indicator-${index} h-2 bg-gray-400/50 rounded-full transition-all duration-300 cursor-pointer hover:bg-purple-600/70`}
                  style={{ width: index === 0 ? "40px" : "8px" }}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            {/* Boutons de navigation */}
            <div className="flex gap-3 sm:gap-4 order-1 sm:order-2">
              <button
                onClick={goToPrevious}
                className="p-2.5 sm:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                aria-label="Previous project"
              >
                <FaChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={goToNext}
                className="p-2.5 sm:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                aria-label="Next project"
              >
                <FaChevronRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
