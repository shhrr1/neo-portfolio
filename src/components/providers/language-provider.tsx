"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Language } from "@/app/constants/translations";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage === "en" || savedLanguage === "ru") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }
  return context;
}

export function useTranslations() {
  const { language } = useLanguage();
  return translations[language];
}

export function LocalizedText({
  en,
  ru,
}: {
  en: string;
  ru: string;
}) {
  const { language } = useLanguage();
  return language === "ru" ? ru : en;
}
