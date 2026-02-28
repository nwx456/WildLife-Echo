"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { GlassCard } from "./ui/GlassCard";

export function TeamSection() {
  const { t } = useLanguage();
  const members = t("team.members") as string[];

  return (
    <section id="team" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading mb-16 text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {t("team.title") as string}
        </motion.h2>

        <GlassCard>
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            {/* Team photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="shrink-0 overflow-hidden rounded-xl border border-white/10"
            >
              <img
                src="/team-members.png"
                alt={t("team.title") as string}
                className="max-h-80 w-auto object-cover sm:max-h-96 md:max-h-[420px]"
              />
            </motion.div>

            {/* Member names */}
            <div className="flex flex-1 flex-col justify-center gap-4">
              {members.map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF4D00]/20">
                    <Users className="h-5 w-5 text-[#FF4D00]" />
                  </div>
                  <span className="text-lg font-medium text-white">{name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
