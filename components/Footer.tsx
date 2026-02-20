"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const SOURCE_URL = "https://www.google.com/search?q=osanholding.com.tr";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      id="footer"
      className="relative border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-2xl font-bold text-white">
            WildLife Echo
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed text-white/70">
            {t("footer.desc") as string}
          </p>
          <div className="mt-6">
            <Link
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#00E676] hover:underline"
            >
              {t("footer.source") as string}
            </Link>
          </div>
          <p className="mt-8 text-xs text-white/50">
            © {new Date().getFullYear()} WildLife Echo. {t("footer.allRights") as string}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
