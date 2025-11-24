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
import { trackProjectView, trackOutboundLink } from "./GoogleAnalytics";

const Projects = () => {
  const t = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

      tl.to([imageRef.current, contentRef.current], {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: "power2.inOut",
      })
        .call(() => {
          setCurrentIndex(newIndex);
          trackProjectView(projects[newIndex].title);
        })
        .to([imageRef.current, contentRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
    },
    [currentIndex, isAnimating]
  );

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
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating, goToNext]);

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) goToNext();
    if (distance < -50) goToPrevious();
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="section-container bg-white" ref={ref}>
      <div className="content-container" ref={containerRef}>
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        <div
          className="relative max-w-6xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div ref={imageRef} className="relative order-2 lg:order-1">
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-xl bg-gray-100">
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 -z-10 w-full h-full border-2 border-gray-100 rounded-lg hidden lg:block"></div>
            </div>

            {/* Content */}
            <div ref={contentRef} className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-mono text-gray-400">
                  0{currentIndex + 1} / 0{projects.length}
                </span>
                <div className="h-px bg-gray-200 flex-1"></div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {currentProject.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {getProjectDescription(currentProject.id)}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {currentProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-50 text-gray-600 rounded-md border border-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {currentProject.github && (
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackOutboundLink(
                        currentProject.github!,
                        `GitHub - ${currentProject.title}`
                      )
                    }
                    className="btn-outline flex items-center gap-2 text-sm px-6 py-3"
                  >
                    <FaGithub size={18} />
                    {t("projects.codeButton")}
                  </a>
                )}
                {currentProject.live && (
                  <a
                    href={currentProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackOutboundLink(
                        currentProject.live!,
                        `Demo - ${currentProject.title}`
                      )
                    }
                    className="btn-primary flex items-center gap-2 text-sm px-6 py-3"
                  >
                    <FaExternalLinkAlt size={14} />
                    {t("projects.demoButton")}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-12 lg:absolute lg:bottom-0 lg:right-0 lg:translate-y-24 w-full lg:w-auto lg:gap-4">
            <div className="flex gap-2 lg:hidden">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeProject(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-black" : "w-2 bg-gray-200"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors text-gray-600"
                aria-label="Previous project"
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={goToNext}
                className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors text-gray-600"
                aria-label="Next project"
              >
                <FaChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
