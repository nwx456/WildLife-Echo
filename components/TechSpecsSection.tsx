"use client";

import { motion } from "framer-motion";
import {
  Radio,
  Sun,
  Gauge,
  Volume2,
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { GlassCard } from "./ui/GlassCard";

const specs = [
  { key: "comm", icon: Radio },
  { key: "energy", icon: Sun },
  { key: "sensors", icon: Gauge },
  { key: "sound", icon: Volume2 },
] as const;

export function TechSpecsSection() {
  const { t } = useLanguage();

  return (
    <section id="tech" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading mb-16 text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {t("tech.title") as string}
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map(({ key, icon: Icon }, i) => (
            <GlassCard key={key} delay={i * 0.08}>
              <div className="mb-4 inline-flex rounded-xl bg-[#FF4D00]/20 p-3">
                <Icon className="h-8 w-8 text-[#FF4D00]" />
              </div>
              <h3 className="mb-2 font-semibold text-white">
                {t(`tech.${key}.title`) as string}
              </h3>
              <p className="text-sm leading-relaxed text-white/80">
                {t(`tech.${key}.desc`) as string}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Project sample - internal electronics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 max-w-lg">
            <img
              src="/project-internal-electronics.png"
              alt={t("projectSample.internal") as string}
              className="w-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
