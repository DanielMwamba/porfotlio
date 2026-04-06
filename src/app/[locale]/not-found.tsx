"use client";

import { useScopedI18n } from "@/locales/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const t = useScopedI18n("notFound");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glowing orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      {/* 404 number */}
      <div className="relative mb-6">
        <span
          className={`text-[12rem] font-bold leading-none select-none transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            background: "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 80px rgba(168, 85, 247, 0.3)",
          }}
        >
          404
        </span>
      </div>

      {/* Error title */}
      <h1
        className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 delay-200 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {t("title")}
      </h1>

      {/* Description */}
      <p
        className={`text-muted-foreground text-lg max-w-md mb-10 transition-all duration-700 delay-300 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {t("description")}
      </p>

      {/* Back home button */}
      <Link
        href="/"
        className={`group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold transition-all duration-700 delay-500 hover:bg-primary/20 hover:border-primary/50 hover:scale-105 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:-translate-x-1"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        {t("backHome")}
      </Link>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-32 h-32 border border-primary/10 rounded-full animate-pulse" />
      <div className="absolute top-20 right-10 w-20 h-20 border border-primary/10 rounded-full animate-pulse delay-300" />
    </div>
  );
}
