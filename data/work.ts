export type Project = {
  idx: string;
  name: string;
  year: string;
  meta: string;
  description: string;
  gradient: string;
  image?: string;
  url: string;
};

export const projects: Project[] = [
  {
    idx: "01",
    name: "Cadence",
    year: "2026",
    meta: "Next.js · TypeScript · Tailwind CSS · Sanity · GraphQL · Vitest · Storybook",
    description:
      "CMS-driven marketing site for a fictional incident-response product, with a hand-built design system, typed GraphQL content layer, per-section fallbacks, and full keyboard and screen-reader accessibility.",
    gradient: "linear-gradient(150deg,#3b82f6,#0a0a0b)",
    image: "/images/cadence.png",
    url: "https://cadence-chi-seven.vercel.app/",
  },
  {
    idx: "02",
    name: "Tend",
    year: "2026",
    meta: "Next.js · TypeScript · Tailwind CSS · Supabase · Vercel AI SDK · Anthropic",
    description:
      "Full-stack household coordination app for couples featuring shared tasks, goals, notes, realtime collaboration, authentication, and AI-assisted workflows.",
    gradient: "linear-gradient(150deg,#c98a5a,#3a2418)",
    image: "/images/criblet.png",
    url: "https://tend-delta-eight.vercel.app/",
  },
  {
    idx: "03",
    name: "Kanban Board Application",
    year: "2026",
    meta: "Next.js · TypeScript · PostgreSQL (Neon) · Tailwind CSS",
    description:
      "Full-stack Kanban platform with authentication, multi-board workflows, PostgreSQL data management, validation, and a layered backend architecture.",
    gradient: "linear-gradient(150deg,#7c3aed,#2563eb)",
    image: "/images/task-manager.png",
    url: "https://task-manager-five-khaki-48.vercel.app/",
  },
  {
    idx: "04",
    name: "Archive Dex",
    year: "2026",
    meta: "Next.js · TypeScript · REST API",
    description:
      "AI-powered Pokédex archive built with Next.js and TypeScript that lets users explore 1,025 specimens through natural-language search, AI-generated curator notes, and team analysis tools.",
    gradient: "linear-gradient(150deg,#3a4a5a,#15202b)",
    image: "/images/archive-dex.png",
    url: "https://archive-dex.vercel.app/",
  },
  {
    idx: "05",
    name: "Recipe Finder",
    year: "2026",
    meta: "React · API Integration · Responsive UI",
    description:
      "Recipe discovery application focused on searching recipes, displaying results, and creating a responsive browsing experience.",
    gradient: "linear-gradient(150deg,#2e5d4a,#15301f)",
    image: "/images/Recipe-Finder.png",
    url: "https://fm-recipe-finder.vercel.app/",
  },
  {
    idx: "06",
    name: "Job Listings",
    year: "2026",
    meta: "React · Filtering UI · Responsive Design",
    description:
      "Interactive job listings application with filtering functionality and a responsive user interface.",
    gradient: "linear-gradient(150deg,#5ec4bd,#10403c)",
    image: "/images/Job-Listing.png",
    url: "https://euphonious-smakager-6b27d9.netlify.app/",
  },
];
