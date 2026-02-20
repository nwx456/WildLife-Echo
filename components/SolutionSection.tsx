"use client";

import { motion } from "framer-motion";
import { Volume2, MapPin, Shield } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { GlassCard } from "./ui/GlassCard";

export function SolutionSection() {
  const { t } = useLanguage();

  const points = [
    { key: "desc1", icon: Volume2 },
    { key: "desc2", icon: MapPin },
    { key: "desc3", icon: Shield },
  ] as const;

  return (
    <section id="solution" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading mb-16 text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {t("solution.title") as string}
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {points.map(({ key, icon: Icon }, i) => (
            <GlassCard key={key} delay={i * 0.1}>
              <div className="mb-4 inline-flex rounded-xl bg-[#00E676]/20 p-3">
                <Icon className="h-8 w-8 text-[#00E676]" />
              </div>
              <p className="text-base leading-relaxed text-white/90">
                {t(`solution.${key}`) as string}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Project sample - prototype close-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 max-w-lg">
            <img
              src="/project-prototype-closeup.png"
              alt={t("projectSample.prototype") as string}
              className="w-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
