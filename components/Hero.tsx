"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

function ScrollToSection({ targetId, children, className }: { targetId: string; children: React.ReactNode; className?: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className={className}
    >
      {children}
    </button>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8"
    >
      {/* Background gradient & grid */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, #FF4D00 0%, transparent 50%),
                           linear-gradient(to bottom, transparent 0%, #0a0a0a 100%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          {t("hero.title") as string}
        </motion.h1>

        {/* Device photo with sound waves */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-10 -top-8 flex h-40 w-40 items-center justify-center overflow-visible sm:h-56 sm:w-56 md:h-64 md:w-64"
        >
          {/* Sound wave rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute h-full w-full rounded-full border-2 border-[#FF4D00]/25 animate-sound-wave"
                style={{ animationDelay: `${i * 0.35}s` }}
              />
            ))}
          </div>
          <div className="relative z-10 flex h-32 w-32 items-center justify-center overflow-visible sm:h-44 sm:w-44 md:h-52 md:w-52">
            {!imgError ? (
              <img
                src="/device-pod.png"
                alt="WildLife Echo Acoustic Pod"
                className="h-full w-full object-contain drop-shadow-2xl origin-center"
                style={{ transform: "scale(2.5)" }}
                onError={() => setImgError(true)}
              />
            ) : (
              <svg viewBox="0 0 200 240" className="h-full w-full object-contain opacity-90">
                <defs>
                  <linearGradient id="heroPodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e5e5e5" />
                    <stop offset="100%" stopColor="#a3a3a3" />
                  </linearGradient>
                </defs>
                <ellipse cx="100" cy="80" rx="70" ry="60" fill="url(#heroPodGrad)" />
                <path
                  d="M 45 80 Q 45 160 100 200 Q 155 160 155 80"
                  fill="url(#heroPodGrad)"
                  stroke="#737373"
                  strokeWidth="1"
                />
                <ellipse cx="100" cy="200" rx="55" ry="20" fill="#525252" />
              </svg>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-20 mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <ScrollToSection
            targetId="solution"
            className="inline-flex items-center justify-center rounded-full bg-[#FF4D00] px-8 py-4 font-semibold text-white transition-all hover:bg-[#e64500] hover:shadow-lg hover:shadow-[#FF4D00]/25 cursor-pointer"
          >
            {t("hero.ctaPrimary") as string}
          </ScrollToSection>
          <ScrollToSection
            targetId="tech"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#00E676] px-8 py-4 font-semibold text-[#00E676] transition-all hover:bg-[#00E676]/10 cursor-pointer"
          >
            {t("hero.ctaSecondary") as string}
          </ScrollToSection>
        </motion.div>
      </div>
    </section>
  );
}
