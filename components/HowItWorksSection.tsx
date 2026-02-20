"use client";

import { motion } from "framer-motion";
import { Satellite, Flame, Radio, Smartphone } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { GlassCard } from "./ui/GlassCard";

export function HowItWorksSection() {
  const { t } = useLanguage();

  const normalSteps = t("howItWorks.normalSteps") as string[];
  const centralSteps = t("howItWorks.fireCentral.steps") as string[];
  const sensorSteps = t("howItWorks.fireSensor.steps") as string[];

  return (
    <section id="how-it-works" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading mb-16 text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {t("howItWorks.title") as string}
        </motion.h2>

        {/* Infographic - main project visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 overflow-hidden rounded-2xl border border-white/10 bg-white/5"
        >
          <img
            src="/how-it-works-infographic.png"
            alt={t("projectSample.infographic") as string}
            className="w-full object-contain"
          />
        </motion.div>

        <div className="space-y-12">
          {/* Normal operation */}
          <GlassCard>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-[#00E676]/20 p-3">
                <Satellite className="h-8 w-8 text-[#00E676]" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {t("howItWorks.normalTitle") as string}
              </h3>
            </div>
            <ol className="space-y-3">
              {normalSteps.map((step, i) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-[#00E676]">
                    {i + 1}
                  </span>
                  <span className="text-white/90">{step}</span>
                </motion.li>
              ))}
            </ol>
          </GlassCard>

          {/* Fire scenarios */}
          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-[#FF4D00]/20 p-3">
                  <Radio className="h-8 w-8 text-[#FF4D00]" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {t("howItWorks.fireCentral.title") as string}
                </h3>
              </div>
              <ol className="space-y-2">
                {centralSteps.map((step, i) => (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex gap-2 text-sm text-white/80"
                  >
                    <span className="text-[#FF4D00]">{i + 1}.</span> {step}
                  </motion.li>
                ))}
              </ol>
            </GlassCard>

            <GlassCard>
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-[#FF4D00]/20 p-3">
                  <Smartphone className="h-8 w-8 text-[#FF4D00]" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {t("howItWorks.fireSensor.title") as string}
                </h3>
              </div>
              <ol className="space-y-2">
                {sensorSteps.map((step, i) => (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex gap-2 text-sm text-white/80"
                  >
                    <span className="text-[#FF4D00]">{i + 1}.</span> {step}
                  </motion.li>
                ))}
              </ol>
            </GlassCard>
          </div>

          <div className="flex justify-center">
            <div className="rounded-xl border border-[#00E676]/30 bg-[#00E676]/5 px-6 py-4">
              <p className="flex items-center gap-2 text-[#00E676]">
                <Flame className="h-5 w-5" />
                <span className="font-medium">
                  {t("howItWorks.fireTitle") as string}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
