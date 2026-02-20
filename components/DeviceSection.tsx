"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export function DeviceSection() {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="device" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading mb-16 text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {t("device.title") as string}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative -top-8 flex justify-center"
        >
          {/* Sound wave rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute h-48 w-48 rounded-full border-2 border-[#FF4D00]/30 sm:h-64 sm:w-64 animate-sound-wave"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            ))}
          </div>

          {/* Device image or SVG fallback */}
          <div className="relative z-10 flex h-48 w-48 items-center justify-center overflow-visible sm:h-64 sm:w-64">
            {!imgError ? (
              <img
                src="/device-pod.png"
                alt="WildLife Echo Acoustic Pod"
                className="h-full w-full object-contain drop-shadow-2xl origin-center"
                style={{ transform: "scale(2.5)" }}
                onError={() => setImgError(true)}
              />
            ) : (
              <svg
                viewBox="0 0 200 240"
                className="h-full w-full object-contain opacity-90"
              >
                <defs>
                  <linearGradient id="podGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e5e5e5" />
                    <stop offset="100%" stopColor="#a3a3a3" />
                  </linearGradient>
                </defs>
                <ellipse cx="100" cy="80" rx="70" ry="60" fill="url(#podGrad)" />
                <path
                  d="M 45 80 Q 45 160 100 200 Q 155 160 155 80"
                  fill="url(#podGrad)"
                  stroke="#737373"
                  strokeWidth="1"
                />
                <ellipse cx="100" cy="200" rx="55" ry="20" fill="#525252" />
              </svg>
            )}
          </div>
        </motion.div>

        {/* Project sample - device on desk */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/project-device-desk.png"
              alt="Cihaz prototipi çalışma alanında"
              className="max-h-80 w-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
