import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS, BASE_URL, ABOUT_ME } from "@/app/constants/data";
import { generateSlug } from "@/lib/utils";
import BackButton from "./back-button";
import ThemeToggle from "@/components/ui/theme-toggle";
import LanguageToggle from "@/components/ui/language-toggle";
import SectionSeparator from "@/components/ui/section-separator";
import { LocalizedText } from "@/components/providers/language-provider";
import LocalizedImage from "@/components/ui/localized-image";

// =============================================
// METADATA GENERATION (Server-side) - THIS WORKS!
// =============================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find(
    (project) => generateSlug(project.name) === slug
  );

  if (!project) {
    return { title: "Project Not Found" };
  }

  // Uses the layout title template: "%s | <Your Name>"
  return {
    title: project.name, // "Project One" becomes "Project One | Your Name"
    description: project.description,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.name} | ${ABOUT_ME.name} Portfolio`,
      description: project.description,
      url: `${BASE_URL}/projects/${slug}`,
      siteName: `${ABOUT_ME.name} Portfolio`,
      type: "website",
      images: project.images?.hero ? [{ url: project.images.hero }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | ${ABOUT_ME.name} Portfolio`,
      description: project.description,
      images: project.images?.hero ? [project.images.hero] : [],
    },
  };
}

// =============================================
// TYPES
// =============================================
interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface TechnicalDetail {
  title: string;
  description: string;
  code?: string;
}

interface Challenge {
  problem: string;
  solution: string;
}

interface ProjectMetrics {
  [key: string]: string | undefined;
}

interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  link?: string;
  github: string;
  images?: {
    hero?: string;
    gallery?: ProjectImage[];
  };
  features?: string[];
  technicalDetails?: TechnicalDetail[];
  challenges?: Challenge[];
  metrics?: ProjectMetrics;
  video?: string;
  translations?: {
    ru?: {
      name?: string;
      description?: string;
      images?: {
        gallery?: ProjectImage[];
      };
      features?: string[];
      technicalDetails?: TechnicalDetail[];
      challenges?: Challenge[];
      metrics?: ProjectMetrics;
    };
  };
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// =============================================
// UTILS
// =============================================
const getProjectBySlug = (slug: string) => {
  return PROJECTS.find((project) => generateSlug(project.name) === slug);
};

// =============================================
// STATIC GENERATION
// =============================================
export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: generateSlug(project.name),
  }));
}

// =============================================
// COMPONENTS
// =============================================
const ProjectHeader = ({ project }: { project: Project }) => {
  const russianProject = project.translations?.ru;

  return (
    <div className="divide-y divide-dashed divide-border">
      {/* Back Button & Title Area */}
      <div className="py-2 px-4 flex items-center justify-between">
        <BackButton />
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>

      {/* Links & Tech Area */}
      <div className="px-4 py-4 space-y-4">
        <h1 className="text-4xl font-bold">
          <LocalizedText
            en={project.name}
            ru={russianProject?.name ?? project.name}
          />
        </h1>

        <div className="flex gap-3">
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" btn px-4 py-2 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <LocalizedText en="Live Demo" ru="Открыть проект" />
            </Link>
          )}

          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className=" btn px-4 py-2 flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <LocalizedText en="Source Code" ru="Исходный код" />
          </Link>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm badge text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectContent = ({ project }: { project: Project }) => {
  const russianProject = project.translations?.ru;

  return (
    <div className="divide-y divide-dashed divide-border">
    {/* Hero Image */}
    {project.images?.hero && (
      <div className="p-2">
        <div className="relative aspect-video overflow-hidden">
          <LocalizedImage
            src={project.images.hero}
            alt={`${project.name} preview`}
            altRu={`${russianProject?.name ?? project.name}: предпросмотр`}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    )}

    {/* Overview */}
    <section className="divide-y divide-dashed divide-border">
      <div className="py-2 px-4">
        <h2 className="text-2xl font-semibold">
          <LocalizedText en="overview." ru="обзор." />
        </h2>
      </div>
      <p className="p-4 text-muted-foreground text-justify leading-relaxed">
        <LocalizedText
          en={project.description}
          ru={russianProject?.description ?? project.description}
        />
      </p>
    </section>

    {/* Technical Implementation */}
    {project.technicalDetails && (
      <section className="divide-y divide-dashed divide-border">
        <div className="py-2 px-4">
          <h2 className="text-2xl font-semibold">
            <LocalizedText
              en="technical implementation."
              ru="техническая реализация."
            />
          </h2>
        </div>
        {project.technicalDetails.map(
          (detail: TechnicalDetail, index: number) => (
            <div key={index} className="p-4">
              <h3 className="font-medium">
                <LocalizedText
                  en={detail.title}
                  ru={
                    russianProject?.technicalDetails?.[index]?.title ??
                    detail.title
                  }
                />
              </h3>
              <p className="text-sm text-muted-foreground text-justify leading-relaxed">
                <LocalizedText
                  en={detail.description}
                  ru={
                    russianProject?.technicalDetails?.[index]?.description ??
                    detail.description
                  }
                />
              </p>
              {detail.code && (
                <pre className="bg-muted p-4 border border-dashed border-border text-sm overflow-x-auto">
                  <code>{detail.code}</code>
                </pre>
              )}
            </div>
          )
        )}
      </section>
    )}

    {/* Project Video */}
    {project.video && (
      <section className="divide-y divide-dashed divide-border">
        <div className="py-2 px-4">
          <h2 className="text-2xl font-semibold">
            <LocalizedText en="project demo." ru="демо проекта." />
          </h2>
        </div>
        <div className="p-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              src={`${project.video.replace("watch?v=", "embed/")}?rel=0&modestbranding=1&iv_load_policy=3&color=white&disablekb=1`}
              title={`${project.name} demo video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    )}

    {/* Features */}
    {project.features && (
      <section className="divide-y divide-dashed divide-border">
        <div className="py-2 px-4">
          <h2 className="text-2xl font-semibold">
            <LocalizedText en="key features." ru="основные возможности." />
          </h2>
        </div>
        <ul className="p-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {project.features?.map((feature: string, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-foreground/20 mt-2 flex-shrink-0"></span>
              <span className="text-sm text-muted-foreground leading-relaxed">
                <LocalizedText
                  en={feature}
                  ru={russianProject?.features?.[index] ?? feature}
                />
              </span>
            </li>
          ))}
        </ul>
      </section>
    )}

    {/* Screenshots Gallery */}
    {project.images?.gallery && (
      <section className="divide-y divide-dashed divide-border">
        <div className="py-2 px-4">
          <h2 className="text-2xl font-semibold">
            <LocalizedText en="screenshots." ru="скриншоты." />
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {project.images.gallery.map((image: ProjectImage, index: number) => (
            <div
              key={index}
              className="relative group p-2 border-dashed border-border border-b md:odd:border-r last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <div className="relative aspect-video overflow-hidden">
                <LocalizedImage
                  src={image.src}
                  alt={image.alt}
                  altRu={
                    russianProject?.images?.gallery?.[index]?.alt ?? image.alt
                  }
                  fill
                  className="object-cover rounded-lg"
                />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs text-white text-center">
                      <LocalizedText
                        en={image.caption}
                        ru={
                          russianProject?.images?.gallery?.[index]?.caption ??
                          image.caption
                        }
                      />
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    )}

    {/* Challenges & Solutions */}
    {project.challenges && (
      <section className="divide-y divide-dashed divide-border">
        <div className="py-2 px-4">
          <h2 className="text-2xl font-semibold">
            <LocalizedText
              en="challenges & solutions."
              ru="сложности и решения."
            />
          </h2>
        </div>
        {project.challenges.map((challenge: Challenge, index: number) => (
          <div key={index} className="p-4">
            <h3 className="font-medium text-sm">
              <LocalizedText en="Challenge:" ru="Задача:" />{" "}
              <LocalizedText
                en={challenge.problem}
                ru={
                  russianProject?.challenges?.[index]?.problem ??
                  challenge.problem
                }
              />
            </h3>
            <p className="text-sm text-muted-foreground text-justify leading-relaxed">
              <LocalizedText en="Solution:" ru="Решение:" />{" "}
              <LocalizedText
                en={challenge.solution}
                ru={
                  russianProject?.challenges?.[index]?.solution ??
                  challenge.solution
                }
              />
            </p>
          </div>
        ))}
      </section>
    )}

    {/* Metrics */}
    {project.metrics && (
      <section className="divide-y divide-dashed divide-border">
        <div className="py-2 px-4">
          <h2 className="text-2xl font-semibold">
            <LocalizedText en="project impact." ru="результаты проекта." />
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {Object.entries(project.metrics)
            .filter(([, value]) => value !== undefined)
            .map(([key, value], index, array) => {
              const russianValue = russianProject?.metrics?.[key] ?? value;
              return (
                <div
                  key={key}
                  className={`text-center p-4 border-dashed border-border border-r border-b 
                  ${(index + 1) % 2 === 0 ? "border-r-0 md:border-r" : ""}
                  ${(index + 1) % 4 === 0 ? "md:border-r-0" : ""}
                  ${index >= array.length - 2 ? "border-b-0 md:border-b" : ""}
                  ${index >= array.length - 4 ? "md:border-b-0" : ""}
                `}
                >
                  <div className="text-2xl font-bold">
                    <LocalizedText en={value ?? ""} ru={russianValue ?? ""} />
                  </div>
                  <div className="text-xs text-muted-foreground capitalize">
                    <LocalizedText
                      en={key.replace(/([A-Z])/g, " $1").trim()}
                      ru={
                        key === "users"
                          ? "пользователи"
                          : key === "uptime"
                            ? "доступность"
                            : key === "loadTime"
                              ? "время загрузки"
                              : key === "stars"
                                ? "звёзды"
                                : key.replace(/([A-Z])/g, " $1").trim()
                      }
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    )}
    </div>
  );
};

// =============================================
// MAIN COMPONENT (Server Component)
// =============================================
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="font-sans min-h-screen flex flex-col items-center relative px-2">
      <main className="relative z-10 max-w-3xl w-full mx-auto border-x border-dashed border-border bg-background">
        <SectionSeparator />
        <ProjectHeader project={project} />
        <SectionSeparator />
        <ProjectContent project={project} />
        <SectionSeparator />
      </main>
    </div>
  );
}
