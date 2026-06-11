import MagneticLink from "@/components/MagneticLink";
import Reveal from "@/components/Reveal";

const links = [
  {
    label: "GitHub",
    alt: "@dev-rome",
    href: "https://github.com/dev-rome",
    external: true,
  },
  {
    label: "LinkedIn",
    alt: "connect",
    href: "https://www.linkedin.com/in/jerome-haynes/",
    external: true,
  },
  {
    label: "Email",
    alt: "say hi",
    href: "mailto:info.devrome@gmail.com",
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-20 sm:py-24">
      <Reveal>
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Get in touch
        </p>
        <p className="mb-10 max-w-[30ch] font-serif leading-snug text-[clamp(1.125rem,3vw,1.625rem)]">
          Have a project, or just want a little chat? I free up time for side
          work.
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <MagneticLink
              key={link.label}
              href={link.href}
              label={link.label}
              alt={link.alt}
              external={link.external}
            />
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-12 font-mono text-2xs tracking-wide text-faint">
          © 2026 Jerome Haynes
        </p>
      </Reveal>
    </footer>
  );
}
