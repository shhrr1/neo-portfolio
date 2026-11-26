"use client";

import { useLanguage, useTranslations } from "@/components/providers/language-provider";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const copy = useTranslations();
  const nextLanguage = language === "en" ? "ru" : "en";

  return (
    <button
      type="button"
      className="min-w-10 p-2 text-sm font-medium badge cursor-pointer"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={
        language === "en"
          ? copy.buttons.switchToRussian
          : copy.buttons.switchToEnglish
      }
      title={
        language === "en"
          ? copy.buttons.switchToRussian
          : copy.buttons.switchToEnglish
      }
    >
      {language.toUpperCase()}
    </button>
  );
}
