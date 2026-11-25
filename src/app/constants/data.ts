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
   "Привет! 👋 Я [Твое Имя] — фронтенд-разработчик, который создает продукты, которыми люди действительно пользуются. Пишу чистый код, слежу за производительностью и стараюсь делать интерфейсы не только красивыми, но и удобными.",
"Здесь можешь рассказать о своем опыте: какие задачи тебе нравится решать и какие технологии используешь чаще всего. Например, я предпочитаю React, TypeScript и Next.js для создания быстрых и масштабируемых веб-приложений.",
"В завершение расскажи, чем горишь прямо сейчас — пет-проектами, open source или тем, что изучаешь. Мне, например, интересно углубляться в архитектуру приложений и исследовать новые инструменты, которые делают жизнь разработчика проще."
  ],
  profileImage: "/avatar.png",
  profileGif: "/avatar.gif",
};

export const USER_NAMES = {
  githubUsername: "github.com/shhrr1",
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
  "vue",
  "nuxtjs",
  "tailwind",
  // Backend
  "nodejs",
  "express",
  "graphql",
  "prisma",
  // Databases
  "mongodb",
  "mysql",
  "postgresql",
  "firebase",
  "supabase",
  // Languages
  "c",
  "cpp",
  "java",
  "py",
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
    role: "Software Developer",
    period: "Jan 2024 - Present",
    location: "City, Country",
    description:
      "Describe what you did here — the products you shipped, the impact you had, and the technologies you worked with. Keep it to two or three sentences focused on outcomes.",
    skills: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    company: "Company Two",
    companyLink: "https://humo.tj/en",
    logo: "/humo_logo.png",
    role: "Frontend Developer",
    period: "Фев 2024 - Dec 2026",
    location: "City, Country",
    description:
      "Another role summary. Highlight a concrete achievement or two and the stack you used to deliver it.",
    skills: ["React", "TypeScript", "Antd", "REST APIs"],
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Your University",
    institutionLink: "https://example.com/",
    period: "2021 - 2025",
    score: "8.5 CGPA",
  },
];

export const TESTIMONIALS = [
  {
    name: "Jane Doe",
    role: "CTO @ Company",
    content:
      "Add a short testimonial here. A couple of sentences from someone you've worked with about what it's like to collaborate with you works best.",
  },
  {
    name: "John Smith",
    role: "Founder @ Startup",
    content:
      "Another testimonial. Keep these genuine and specific — mention the work you did together and the value you brought.",
  },
  {
    name: "Alex Johnson",
    role: "Engineering Manager @ Agency",
    content:
      "A third testimonial. You can add or remove entries here; the section adapts to however many you provide.",
  },
];
