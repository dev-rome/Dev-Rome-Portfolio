export default function Footer() {
  const links = ["GitHub", "LinkedIn", "Email"];

  return (
    <footer className="border-t border-line py-20 sm:py-24">
      <p className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-muted">
        Get in touch
      </p>
      <p className="mb-10 max-w-[30ch] font-serif leading-snug text-[clamp(18px,3vw,26px)]">
        Have a project, or just want a little chat? I free up time for side
        work.
      </p>
      <div className="flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="rounded-full border border-line px-6 py-3 font-serif text-2xl transition-colors hover:border-ink"
          >
            {link}
          </a>
        ))}
      </div>
      <p className="mt-12 font-mono text-[11px] tracking-wide text-faint">
        Built with Next.js, Tailwind, Motion &amp; Lenis
      </p>
    </footer>
  );
}
