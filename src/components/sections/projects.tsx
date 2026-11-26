"use client";

import { ExternalLink, Github, MousePointerClick } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/app/constants/data";
import { useState } from "react";
import { generateSlug } from "@/lib/utils";
import ImageTooltip from "@/components/ui/image-tooltip";
import ImageMarquee from "@/components/ui/image-marquee";
import CollapsibleGrid from "@/components/ui/collapsible-grid";
import {
  useLanguage,
  useTranslations,
} from "@/components/providers/language-provider";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const copy = useTranslations();

  const handleProjectClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Mark that user navigated from main page
    sessionStorage.setItem("navigatedFromMainPage", "true");
  };

  return (
    <section id="projects">
      <div className="flex items-center py-2 px-4 border-b border-dashed border-border">
        <h2 className="text-2xl font-semibold flex items-center">
          {copy.sections.projects}
        </h2>
      </div>

      <div className="border-b border-dashed border-border overflow-hidden">
        <ImageMarquee />
      </div>

      <div className="relative divide-y divide-dashed divide-border">
        {PROJECTS.map((project, index) => {
          const translation =
            language === "ru" ? project.translations.ru : undefined;
          const name = translation?.name ?? project.name;

          return (
            <CollapsibleGrid
              key={project.name}
              isExpanded={activeIndex === index}
              onToggle={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              header={
                <div className="flex items-center gap-3">
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <h3 className="font-medium text-base">
                      <ImageTooltip
                        imageSrc={
                          project.images?.hero || "/placeholder-image.png"
                        }
                        imageAlt={`${name} ${copy.project.preview}`}
                      >
                        <Link
                          href={`/projects/${generateSlug(project.name)}`}
                          className="link"
                          onClick={handleProjectClick}
                        >
                          {name}
                          <MousePointerClick className="inline-block w-5 h-5 ml-1 align-text-bottom text-muted-foreground" />
                        </Link>
                      </ImageTooltip>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {translation?.tagline ?? project.tagline}
                    </p>
                  </div>

                  <div
                    className="flex gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn py-2 px-2.5"
                        aria-label={copy.project.visitWebsite}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn py-2 px-2.5"
                      aria-label={copy.project.viewSource}
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              }
            >
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground text-justify leading-relaxed">
                  {translation?.overview ?? project.overview}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs badge text-foreground"
                    >
                      {tech}
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
