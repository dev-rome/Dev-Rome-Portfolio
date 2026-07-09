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
    name: "Tend",
    year: "2026",
    meta: "Next.js · TypeScript · Tailwind CSS · Supabase · Vercel AI SDK · Anthropic",
    description:
      "Full-stack productivity application built with Next.js and Supabase, featuring user workflows, data persistence, and AI-assisted features.",
    gradient: "linear-gradient(150deg,#c98a5a,#3a2418)",
    image: "/images/criblet.png",
    url: "https://tend-delta-eight.vercel.app/",
  },
  {
    idx: "02",
    name: "Kanban Board Application",
    year: "2026",
    meta: "Next.js · TypeScript · PostgreSQL (Neon) · Tailwind CSS",
    description:
      "Full-stack task management application with authentication, database persistence, validation, and server-side functionality.",
    gradient: "linear-gradient(150deg,#7c3aed,#2563eb)",
    image: "/images/task-manager.png",
    url: "https://task-manager-five-khaki-48.vercel.app/",
  },
  {
    idx: "03",
    name: "Archive Dex",
    year: "2026",
    meta: "Next.js · TypeScript · REST API",
    description:
      "Pokémon archive application built with Next.js and external APIs to organize, search, and display structured data.",
    gradient: "linear-gradient(150deg,#3a4a5a,#15202b)",
    image: "/images/archive-dex.png",
    url: "https://archive-dex.vercel.app/",
  },
  {
    idx: "04",
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
    idx: "05",
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
