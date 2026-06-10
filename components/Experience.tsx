export default function Experience() {
  const items = [
    { role: "Front-End Software Engineer Intern, Glassdoor", years: "2025" },
    {
      role: "Jr. Developer (Frontend Developer), The Hero Company",
      years: "2024 — 2025",
    },
    { role: "Independent / Freelance", years: "2018 — Today" },
  ];

  return (
    <section className="py-12 sm:py-16">
      <h2 className="mb-7 font-serif tracking-tight text-section">
        Where <span className="text-faint">I&rsquo;ve&nbsp;been</span>
      </h2>
      <ul>
        {items.map((item) => (
          <li
            key={item.role}
            className="flex justify-between border-t border-line py-3.5 text-sm tracking-wide"
          >
            <span>{item.role}</span>
            <span className="text-muted">{item.years}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
