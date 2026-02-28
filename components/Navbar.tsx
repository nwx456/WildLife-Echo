"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

const navLinks = [
  { key: "project", targetId: "solution" },
  { key: "tech", targetId: "tech" },
  { key: "team", targetId: "team" },
  { key: "contact", targetId: "footer" },
] as const;

function ScrollLink({ targetId, children, className, onClick }: { targetId: string; children: React.ReactNode; className?: string; onClick?: () => void }) {
  const handleClick = () => {
    onClick?.();
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
          className="text-lg font-bold text-white transition-colors hover:text-[#FF4D00] bg-transparent border-none cursor-pointer p-0"
        >
          {(t("nav.brand") as string) ?? "WildLife Echo"}
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ key, targetId }) => (
            <ScrollLink
              key={key}
              targetId={targetId}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white cursor-pointer bg-transparent border-none"
            >
              {t(`nav.${key}`) as string}
            </ScrollLink>
          ))}
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-white hover:bg-white/10"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map(({ key, targetId }) => (
                <ScrollLink
                  key={key}
                  targetId={targetId}
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-left rounded-lg px-4 py-3 text-white/90 hover:bg-white/10 bg-transparent border-none cursor-pointer"
                >
                  {t(`nav.${key}`) as string}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
