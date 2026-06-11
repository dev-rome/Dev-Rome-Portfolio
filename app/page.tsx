import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
      <Reveal>
        <header className="flex flex-col gap-2 border-b border-line py-6 font-mono text-xs tracking-wide text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            <b className="font-medium text-ink">Dev Rome </b> — Front-end
            Engineer
          </span>
          <span className="flex items-center gap-2">
            <span className="size-1.75 rounded-full bg-accent" />
            Available for freelance
          </span>
          <span>New York</span>
        </header>
      </Reveal>
      <Hero />
      <Experience />
      <Work />
      <Footer />
    </div>
  );
}
