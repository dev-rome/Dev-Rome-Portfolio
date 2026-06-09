import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-line py-6 font-mono text-xs tracking-wide text-muted">
        <span>
          <b className="font-medium text-ink">Dev Rome </b> — Front-end Engineer
        </span>
        <span className="flex items-center gap-2">
          <span className="size-1.75 rounded-full bg-accent" />
          Available for freelance
        </span>
        <span>New York</span>
      </header>
      <Hero />
      <Experience />
      <Work />
      <Footer />
    </div>
  );
}
