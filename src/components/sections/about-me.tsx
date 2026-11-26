"use client";

import Link from "next/link";
import { SOCIAL_LINKS, ABOUT_ME } from "@/app/constants/data";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";
import {
  useLanguage,
  useTranslations,
} from "@/components/providers/language-provider";

// =============================================
// SOCIAL BUTTONS DATA
// =============================================
const SOCIAL_BUTTONS = [
  {
    href: SOCIAL_LINKS.github,
    label: "GitHub",
    icon: <Github className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.instagram,
    label: "Instagram",
    icon: <FaInstagram className="w-5 h-5" />,
  },

  {
    href: SOCIAL_LINKS.resume,
    label: "Resume",
    icon: <FileText className="w-5 h-5" />,
    className: "flex items-center gap-2 font-medium",
  },
  {
    href: SOCIAL_LINKS.email,
    label: "Email",
    icon: <Mail className="w-5 h-5" />,
    className: "flex items-center gap-2 font-medium",
  },
];

// =============================================
// MAIN COMPONENT
// =============================================
export default function AboutMe() {
  const { language } = useLanguage();
  const copy = useTranslations();
  const description =
    language === "ru" ? ABOUT_ME.translations.ru.description : ABOUT_ME.description;
  const emailHref = `mailto:${ABOUT_ME.email}?subject=${encodeURIComponent(
    copy.about.emailSubject
  )}&body=${encodeURIComponent(copy.about.emailBody)}`;

  return (
    <section id="about" className="divide-y divide-dashed divide-border">
      <div className="p-4">
        <div className="space-y-4 text-[15px] sm:text-base text-muted-foreground text-justify leading-relaxed">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="flex gap-3 flex-wrap">
          {SOCIAL_BUTTONS.map((btn) => {
            const label =
              btn.label === "Resume"
                ? copy.about.resume
                : btn.label === "Email"
                  ? copy.about.email
                  : btn.label;

            return (
              <Link
                key={btn.label}
                href={btn.label === "Email" ? emailHref : btn.href}
                target={btn.label === "Email" ? undefined : "_blank"}
                rel={
                  btn.label === "Email" ? undefined : "noopener noreferrer"
                }
                className={`px-3 py-2 btn text-sm ${btn.className || ""}`}
                aria-label={label}
              >
                {btn.icon}
                {(btn.label === "Resume" || btn.label === "Email") && label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
