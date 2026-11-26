"use client";

import { TESTIMONIALS } from "@/app/constants/data";
import {
  useLanguage,
  useTranslations,
} from "@/components/providers/language-provider";

const Testimonials = () => {
  const { language } = useLanguage();
  const copy = useTranslations();

  return (
    <section id="testimonials">
      <div className="flex items-center py-2 px-4 border-b border-dashed border-border">
        <h2 className="text-2xl font-semibold flex items-center">
          {copy.sections.testimonials}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-dashed divide-border relative">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.name}
            className="flex flex-col h-full relative p-4"
          >
            <div className="flex-1">
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10 text-justify">
                {language === "ru"
                  ? testimonial.translations.ru.content
                  : testimonial.content}
              </p>
              <p className="mt-2 text-xs text-muted-foreground/70">
                {testimonial.originalContent}
              </p>
            </div>

            <footer className="mt-2 flex flex-col space-y-0.5">
              <p className="font-medium text-foreground text-sm tracking-tight leading-tight">
                {language === "ru"
                  ? testimonial.translations.ru.name
                  : testimonial.name}
              </p>
              <span className="text-xs text-muted-foreground opacity-90">
                {language === "ru"
                  ? testimonial.translations.ru.role
                  : testimonial.role}
              </span>
            </footer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
