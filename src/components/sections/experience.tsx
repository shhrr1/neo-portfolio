"use client";

import { EXPERIENCE } from "@/app/constants/data";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import CollapsibleGrid from "@/components/ui/collapsible-grid";
import {
  useLanguage,
  useTranslations,
} from "@/components/providers/language-provider";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const copy = useTranslations();

  return (
    <section id="experience">
      <div className="flex items-center py-2 px-4 border-b border-dashed border-border">
        <h2 className="text-2xl font-semibold flex items-center">
          {copy.sections.experience}
        </h2>
      </div>

      <div className="relative divide-y divide-dashed divide-border">
        {EXPERIENCE.map((exp, index) => {
          const translation =
            language === "ru" ? exp.translations.ru : undefined;
          const company = translation?.company ?? exp.company;
          const role = translation?.role ?? exp.role;
          const period = translation?.period ?? exp.period;
          const location = translation?.location ?? exp.location;
          const description =
            translation?.description ?? exp.description ?? "";

          return (
            <CollapsibleGrid
              key={`${role}-${company}`}
              isExpanded={activeIndex === index}
              onToggle={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              header={
                <div className="flex items-center gap-3">
                  {exp.logo && (
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl border border-border overflow-hidden bg-background">
                      <Image
                        src={exp.logo}
                        alt={`${company} logo`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex-1 min-w-0 space-y-0.5">
                    <h3 className="font-medium text-base leading-snug">
                      {role}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <Link
                        href={exp.companyLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        @ {company}
                        <ArrowUpRight className="inline-block w-4 h-4 ml-1 align-text-bottom text-muted-foreground" />
                      </Link>
                    </p>
                  </div>

                  <div className="hidden sm:flex flex-col text-right font-mono text-sm text-muted-foreground">
                    <span>{period}</span>
                    <span>{location}</span>
                  </div>
                </div>
              }
            >
              <div className="space-y-3">
                <div className="flex flex-col sm:hidden mb-2 text-left">
                  <span className="text-sm text-muted-foreground font-mono">
                    {period} • {location}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground text-justify leading-relaxed">
                  {description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs badge text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CollapsibleGrid>
          );
        })}
      </div>
    </section>
  );
}
