export type Project = {
  idx: string;
  name: string;
  year: string;
  meta: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    idx: "01",
    name: "Cedar & Sage",
    year: "2025",
    meta: "Squarespace · template",
    gradient: "linear-gradient(150deg,#db4c44,#5e1a16)",
  },
  {
    idx: "02",
    name: "Name Five Players",
    year: "2025",
    meta: "Podcast · women in sports",
    gradient: "linear-gradient(150deg,#d98a5a,#3a1f12)",
  },
  {
    idx: "03",
    name: "Quill",
    year: "2024",
    meta: "Concept · AI landing",
    gradient: "linear-gradient(150deg,#8a6cff,#241b52)",
  },
  {
    idx: "04",
    name: "Folio Studio",
    year: "2024",
    meta: "Build · React + motion",
    gradient: "linear-gradient(150deg,#3a3a34,#15150f)",
  },
];
