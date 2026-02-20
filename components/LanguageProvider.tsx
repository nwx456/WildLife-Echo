"use client";

import { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";
import trContent from "@/content/tr.json";
import enContent from "@/content/en.json";

type Locale = "tr" | "en";

type Content = typeof trContent;

const contentMap: Record<Locale, Content> = {
  tr: trContent,
  en: enContent,
};

type LanguageContextType = {
  locale: Locale;
  t: (key: string) => unknown;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

function getNested(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  return current;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  const content = contentMap[locale];

  const t = useCallback(
    (key: string): unknown => {
      return getNested(content as unknown as Record<string, unknown>, key);
    },
    [locale]
  );

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const value = useMemo(
    () => ({ locale, t, setLocale }),
    [locale, t, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
