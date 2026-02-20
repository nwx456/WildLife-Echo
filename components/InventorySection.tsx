"use client";

import { motion } from "framer-motion";
import { Package } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { GlassCard } from "./ui/GlassCard";

export function InventorySection() {
  const { t } = useLanguage();
  const items = t("inventory.items") as string[];

  return (
    <section id="inventory" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading mb-16 text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {t("inventory.title") as string}
        </motion.h2>

        <GlassCard>
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-[#00E676]/20 p-2">
              <Package className="h-6 w-6 text-[#00E676]" />
            </div>
            <h3 className="font-semibold text-white">
              {t("inventory.title") as string}
            </h3>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {items.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-white/90"
              >
                <span className="text-[#00E676]">•</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </section>
  );
}
