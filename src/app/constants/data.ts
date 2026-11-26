// =============================================
// EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS
// =============================================
// Almost everything on the site is driven from the constants below.
// Replace the placeholder values with your own details.

const DOMAIN = "yourdomain.com";
export const BASE_URL = `https://${DOMAIN}`;

export const ABOUT_ME = {
  name: "Shahriyor Asadov",
  title: "Frontend Developer",
  location: "Tajikistan, Dushanbe",
  email: "you@example.com",
  description: [
    "Hi! 👋 I’m [Your Name] — a frontend developer who builds products people actually use. I write clean code, care about performance, and aim to make interfaces not only beautiful but also easy to use.",
    "Share your experience here: the kinds of problems you enjoy solving and the technologies you use most. For example, I prefer React, TypeScript, and Next.js for building fast, scalable web applications.",
    "Finally, talk about what you’re passionate about right now — side projects, open source, or what you’re learning. I’m interested in exploring application architecture and new tools that make developers’ lives easier.",
  ],
  translations: {
    ru: {
      title: "Фронтенд-разработчик",
      location: "Таджикистан, Душанбе",
      description: [
        "Привет! 👋 Я [Ваше имя] — фронтенд-разработчик, который создаёт продукты, которыми люди действительно пользуются. Пишу чистый код, слежу за производительностью и стараюсь делать интерфейсы не только красивыми, но и удобными.",
        "Расскажите о своём опыте: какие задачи вам нравится решать и какие технологии вы используете чаще всего. Например, я предпочитаю React, TypeScript и Next.js для создания быстрых и масштабируемых веб-приложений.",
        "В завершение расскажите, чем вы увлечены сейчас — пет-проектами, open source или тем, что изучаете. Мне интересно углубляться в архитектуру приложений и исследовать новые инструменты, которые упрощают жизнь разработчикам.",
      ],
    },
  },
  profileImage: "/avatar.png",
  profileGif: "/avatar.gif",
};

export const USER_NAMES = {
  githubUsername: "shhrr1",
  peerlistUsername: "your-peerlist",
  instagramUsername: "your-instagram",
  // cal.com username + event slug used by the "schedule a meeting" button
  calUsername: "your-cal-username",
};

export const SOCIAL_LINKS = {
  github: `https://github.com/${USER_NAMES.githubUsername}`,
  instagram: `https://instagram.com/${USER_NAMES.instagramUsername}`,
  resume: "/resume.pdf",
  email: `mailto:${ABOUT_ME.email}?subject=Message%20from%20Website&body=Hi!%20I%27m...`,
};

// Contact form submission endpoint (used by the "send a message" form).
// Create a free form at https://formspree.io/forms and paste your URL here.
export const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export { PROJECTS } from "./projects";

// Skill icons shown in the "technical skills" section.
// Make this YOUR tech stack: add the ones you use, remove the ones you don't.
// Each entry is a https://skillicons.dev slug — browse that site for all
// available icons (e.g. "docker", "aws", "go", "rust", "kubernetes", ...).
export const SKILLS = [
  // Frontend
  "html",
  "css",
  "js",
  "ts",
  "react",
  "nextjs",
  // "vue",
  // "nuxtjs",
  "tailwind",
  // Backend
  "nodejs",
  // "express",
  // "graphql",
  // "prisma",
  // // Databases
  // "mongodb",
  // "mysql",
  // "postgresql",
  // "firebase",
  // "supabase",
  // // Languages
  // "c",
  // "cpp",
  // "java",
  // "py",
  // Tools & DevOps
  "git",
  "github",
  "vscode",
  "postman",
  "vite",
  "npm",
  "figma",
  "md",
  // Cloud & Deployment
  "vercel",
  "githubactions",
];

export const EXPERIENCE = [
  {
    company: "Company One",
    companyLink: "https://example.com/",
    logo: "/livo.svg",
    role: "Frontend Developer",
    period: "Jan 2023 ",
    location: "City, Country",
    skills: ["React", "TypeScript", "MockApi", "REST APIs"],
    translations: {
      ru: {
        company: "Компания One",
        role: "Фронтенд-разработчик",
        period: "Январь 2023",
        location: "Город, страна",
      },
    },
  },
  {
    company: "Company Two",
    companyLink: "https://humo.tj/en",
    logo: "/humo_logo.png",
    role: "Frontend Developer",
    period: "Feb 2024 - Dec 2026",
    location: "City, Country",
    description:
      "Another role summary. Highlight a concrete achievement or two and the stack you used to deliver it.",
    skills: ["React", "TypeScript", "Antd", "REST APIs", "Next.js", "Node.js", 'Tailwind CSS', 'Redux'],
    translations: {
      ru: {
        company: "Компания Two",
        role: "Фронтенд-разработчик",
        period: "Февраль 2024 — декабрь 2026",
        location: "Город, страна",
        description:
          "Опишите свои достижения на этой должности. Выделите конкретные результаты и технологии, которые помогли их достичь.",
      },
    },
  },
];

export const EDUCATION = [
  {
    degree: "Applied Informatics in Economics",
    institution: "Russian‑Tajik Slavic University",
    institutionLink: "https://www.rtsu.tj/",
    period: "2021 - 2025",
    translations: {
      ru: {
        degree: "Прикладная информатика в экономике",
        institution: "Российско-Таджикский (славянский) университет",
      },
    },
  },
];

export const TESTIMONIALS = [
  {
    name: "Zarifi Zarmehr",
    role: "Recommendation",
    content: "What can I say? This guy is an absolute machine.",
    originalContent: "Ма чи бугум, ин бачая дигар — машина просто.",
    translations: {
      ru: {
        name: "Зарифи Зармехр",
        role: "Рекомендация",
        content: "Что тут сказать — этот парень просто машина.",
      },
    },
  },
  {
    name: "Rizoev Murod",
    role: "Recommendation",
    content: "No words—well done!",
    originalContent: "Канд зан, канд зан!",
    translations: {
      ru: {
        name: "Ризоев Мурод",
        role: "Рекомендация",
        content: "Нет слов, молодец!",
      },
    },
  },
];
