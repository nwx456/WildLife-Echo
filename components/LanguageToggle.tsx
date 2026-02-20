"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
      <button
        onClick={() => setLocale("tr")}
        className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
          locale === "tr"
            ? "bg-[#FF4D00] text-white"
            : "text-white/70 hover:text-white"
        }`}
      >
        TR
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
          locale === "en"
            ? "bg-[#FF4D00] text-white"
            : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
