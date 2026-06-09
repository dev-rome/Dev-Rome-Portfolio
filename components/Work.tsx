import { projects } from "@/data/work";

export default function Work() {
  return (
    <section className="py-12 sm:py-16">
      <h2 className="mb-2.5 font-serif tracking-tight text-[clamp(28px,6vw,56px)]">
        Selected Work<span className="text-faint">&nbsp;(2024 — Today)</span>
      </h2>
      <div className="border-b border-line">
        {projects.map((project) => (
          <a
            key={project.idx}
            href="#"
            className="flex items-baseline gap-5 border-t border-line py-6"
          >
            <span className="w-8 shrink-0 font-mono text-xs text-muted">
              {project.idx}
            </span>
            <span className="font-serif leading-none tracking-tight text-[clamp(28px,5.5vw,60px)]">
              {project.name}
            </span>
            <span className="ml-auto font-mono text-[11px] uppercase tracking-wider text-muted">
              {project.year}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
