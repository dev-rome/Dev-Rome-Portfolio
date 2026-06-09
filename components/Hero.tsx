export default function Hero() {
  return (
    <section className="py-24 sm:py-28">
      <p className="mb-7 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        Hello — I&rsquo;m Rome
      </p>
      <h1 className="font-serif font-normal leading-[0.94] tracking-tight text-[clamp(46px,11.5vw,142px)]">
        I b<span className="italic text-accent">u</span>ild fr
        <span className="italic text-accent">o</span>nt
        <span className="italic text-accent">e</span>nd th
        <span className="italic text-accent">a</span>t f
        <span className="italic text-accent">ee</span>ls.
      </h1>
      <p className="mt-11 max-w-[52ch] font-mono text-sm leading-relaxed text-muted">
        I build websites with{" "}
        <span className="font-serif text-ink">care for the small things</span> —
        the easing on a hover, the weight of a scroll, the way type settles into
        place. Frontend engineer working in Next.js, TypeScript, Tailwind and
        Motion.
      </p>
    </section>
  );
}
