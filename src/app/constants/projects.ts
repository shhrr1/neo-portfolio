// =============================================
// YOUR PROJECTS
// =============================================
// Each entry renders as a collapsible item on the home page and gets its own
// detail page at /projects/<slug>. Every field except name/tagline/description/
// tech/github is optional — delete what you don't need.
//
// Replace the placeholder images (/placeholder-image.png) with your own
// screenshots under public/projects/<your-project>/.

export const PROJECTS = [
  // =============================================
  // Project One
  // =============================================
 {
  name: "My Finances",
  tagline: "A personal finance dashboard for managing money, goals, and tasks.",
  overview:
    "My Finances helps you track income and expenses, monitor account balances, analyze spending, and stay on top of personal goals and tasks. It supports multiple users and works as a PWA, so it can be installed on a phone and used offline.",
  description:
    "My Finances is a web app for personal finance tracking and planning. Users can manage accounts, record income and expenses, transfer money between their own accounts, explore analytics by category and time period, track habits and long-term goals, and manage a task list. The app also includes sign-up and sign-in, profile and theme settings, data export, and PWA support.",
  tech: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "Prisma",
    "PostgreSQL",
    "Neon",
    "Better Auth",
    "Recharts",
    "PWA",
  ],
  link: "https://first-nextt-pr.vercel.app",
  github: "https://github.com/shhrr1/firstNexttPr",
  images: {
    // hero: "/docs/screenshots/dashboard.png",
    hero: "/first-project-preview.png",
    gallery: [
      {
        src: "/first-pr/first-project-preview.png",
        alt: "My Finances main dashboard",
        caption: "An overview of finances and personal tasks.",
      },
      {
        src: "/first-pr/first-pr-finance.png",
        alt: "Finance section",
        caption: "Accounts, balances, and a list of transactions.",
      },
      {
        src: "/first-pr/first-pr-analytics.png",
        alt: "Financial analytics",
        caption: "Spending charts and financial trends.",
      },
      {
        src: "/first-pr/first-pr-goals.png",
        alt: "Goals section",
        caption: "Habits and long-term goals.",
      },
      {
        src: "/first-pr/first-pr-tasks.png",
        alt: "Task list",
        caption: "Tasks with priorities and deadlines.",
      },
      {
        src: "/first-pr/first-pr-settings.png",
        alt: "Application settings",
        caption: "Profile and application settings.",
      },
    ],
  },
  features: [
    "Track income and expenses by category",
    "Manage multiple accounts with automatically updated balances",
    "Transfer funds between accounts",
    "Analyze spending by category and time period",
    "Track daily habits and long-term goals",
    "Manage tasks with priorities and deadlines",
    "Export data to CSV and JSON",
    "Sign up and maintain a separate profile for each user",
    "Install on a phone and use offline with PWA support",
    "Light, dark, and system themes",
  ],
  technicalDetails: [
    {
      title: "Application Architecture",
      description:
        "The app is built with Next.js App Router, with the interface, server logic, and API in one project. Protected areas are separated from public pages.",
    },
    {
      title: "Data and Financial Operations",
      description:
        "Prisma works with PostgreSQL. Account, transaction, and other feature data are associated with each user. A transfer creates a transaction and updates both account balances in a single database operation.",
    },
    {
      title: "Authentication and PWA",
      description:
        "Better Auth handles sign-up and sign-in. PWA features let users install the app on their devices and use it offline.",
    },
  ],
  challenges: [
    {
      problem:
        "Financial data must be kept separate for each user.",
      solution:
        "User data queries are scoped to the user ID from the authenticated session.",
    },
    {
      problem:
        "A money transfer must update both accounts consistently.",
      solution:
        "The transfer record and both balance updates are handled within a Prisma transaction.",
    },
  ],
  metrics: {
    users: "Not specified",
    uptime: "Not specified",
    loadTime: "Not specified",
    stars: "Not specified",
  },
},

  // =============================================
  // Project Two
  // =============================================
  {
    name: "Project Two",
    tagline: "Another project with a short, punchy tagline.",
    overview:
      "A brief overview of your second project. Mention the inspiration and the core experience you wanted to create.",
    description:
      "A detailed description of Project Two covering its purpose, standout features, and the impact it had on the people who used it.",
    tech: ["React", "Vite", "Firebase", "Tailwind CSS", "Zustand"],
    link: "https://example.com",
    github: "https://github.com/your-github/project-two",
    images: {
      hero: "/placeholder-image.png",
      gallery: [
        {
          src: "/placeholder-image.png",
          alt: "Project Two screenshot one",
          caption: "Main dashboard view.",
        },
        {
          src: "/placeholder-image.png",
          alt: "Project Two screenshot two",
          caption: "A secondary view or feature.",
        },
      ],
    },
    features: [
      "A standout feature of this project",
      "Real-time updates and sync",
      "Clean, intuitive interface",
      "Works great on mobile",
    ],
    technicalDetails: [
      {
        title: "Real-Time Sync",
        description:
          "Describe how you implemented live updates and kept the UI in sync across clients.",
      },
      {
        title: "State Management",
        description:
          "Explain your approach to managing application state and why you chose it.",
      },
    ],
    challenges: [
      {
        problem: "A meaningful obstacle you overcame.",
        solution: "The technique or trade-off you used to get past it.",
      },
    ],
    // Optional: embed a YouTube demo video on the project page.
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },

  // =============================================
  // Project Three
  // =============================================
  // {
  //   name: "Project Three",
  //   tagline: "A smaller side project or experiment.",
  //   overview:
  //     "Even small projects belong here. Briefly explain what you made and what you learned from it.",
  //   description:
  //     "A concise description of Project Three. Not every project needs metrics or a video — include only the sections that make sense.",
  //   tech: ["Node.js", "Express", "MongoDB"],
  //   link: "https://example.com",
  //   github: "https://github.com/your-github/project-three",
  //   images: {
  //     hero: "/placeholder-image.png",
  //     gallery: [
  //       {
  //         src: "/placeholder-image.png",
  //         alt: "Project Three screenshot",
  //         caption: "A look at the project in action.",
  //       },
  //     ],
  //   },
  //   features: [
  //     "Keep the feature list focused",
  //     "Highlight what makes it unique",
  //     "Quality over quantity",
  //   ],
  //   challenges: [
  //     {
  //       problem: "What was tricky about this one?",
  //       solution: "How you figured it out.",
  //     },
  //   ],
  // },
];
