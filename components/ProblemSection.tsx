"use client";

import { motion } from "framer-motion";
import { Flame, PawPrint, AlertTriangle } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { GlassCard } from "./ui/GlassCard";

const stats = [
  {
    key: "stat1",
    icon: Flame,
    accent: "#FF4D00",
  },
  {
    key: "stat2",
    icon: PawPrint,
    accent: "#00E676",
  },
  {
    key: "stat3",
    icon: AlertTriangle,
    accent: "#FF4D00",
  },
] as const;

export function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section id="problem" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading mb-16 text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {t("problem.title") as string}
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(({ key, icon: Icon, accent }, i) => (
            <GlassCard key={key} delay={i * 0.1}>
              <div
                className="mb-4 inline-flex rounded-xl p-3"
                style={{ backgroundColor: `${accent}20` }}
              >
                <Icon className="h-8 w-8" style={{ color: accent }} />
              </div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#a3a3a3]">
                {t(`problem.${key}Label`) as string}
              </h3>
              <p className="text-base leading-relaxed text-white/90">
                {t(`problem.${key}`) as string}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
