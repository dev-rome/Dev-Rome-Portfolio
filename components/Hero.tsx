import KineticHeading from "@/components/KineticHeading";

export default function Hero() {
  return (
    <section className="py-24 sm:py-28">
      <p className="mb-7 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        Hello — I&rsquo;m Rome
      </p>
      <KineticHeading
        text="I b*u*ild fr*o*nt*e*nd th*a*t f*ee*ls."
        className="font-serif font-normal leading-[0.94] text-[clamp(46px,11.5vw,142px)]"
      />
      <p className="mt-11 max-w-[52ch] font-mono text-sm leading-relaxed text-muted">
        I build websites with{" "}
        <em className="font-serif italic text-ink">
          care for the small things
        </em>{" "}
        — the easing on a hover, the weight of a scroll, the way type settles
        into place. Frontend engineer working in React, TypeScript and motion.
      </p>
    </section>
  );
}
