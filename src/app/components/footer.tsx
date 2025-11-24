"use client";

import Link from "next/link";
import { reseaux } from "@/utils/reseaux";
import { useI18n } from "@/locales/client";

const Footer = () => {
  const t = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="content-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-xl font-bold text-black tracking-tight"
          >
            Daniel Mwamba.
          </Link>

          {/* Copyright */}
          <div className="text-sm text-gray-500 font-medium">
            © {currentYear} {t("footer.rights")}
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {reseaux.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
