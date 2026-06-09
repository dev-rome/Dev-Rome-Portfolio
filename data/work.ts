export type Project = {
  idx: string;
  name: string;
  year: string;
  meta: string;
  gradient: string;
  image?: string;
  url: string;
};

export const projects: Project[] = [
  {
    idx: "01",
    name: "Tech Book Club",
    year: "2026",
    meta: "Landing page · responsive",
    gradient: "linear-gradient(150deg,#c98a5a,#3a2418)",
    image: "/images/Tech-Book-Landing-Page.png",
    url: "https://startling-moonbeam-dca236.netlify.app/",
  },
  {
    idx: "02",
    name: "Job Listings",
    year: "2026",
    meta: "React · filtering UI",
    gradient: "linear-gradient(150deg,#5ec4bd,#10403c)",
    image: "/images/Job-Listing.png",
    url: "https://euphonious-smakager-6b27d9.netlify.app/",
  },
  {
    idx: "03",
    name: "REST Countries",
    year: "2026",
    meta: "React · REST API · dark mode",
    gradient: "linear-gradient(150deg,#3a4a5a,#15202b)",
    image: "/images/Rest-Countries-API.png",
    url: "https://fm-rest-countries-api-challenge.vercel.app/",
  },
  {
    idx: "04",
    name: "Recipe Finder",
    year: "2026",
    meta: "Landing page · whole-food recipes",
    gradient: "linear-gradient(150deg,#2e5d4a,#15301f)",
    image: "/images/Recipe-Finder.png",
    url: "https://fm-recipe-finder.vercel.app/ ",
  },
];
