const timeline = [
  {
    period: "2024 — Now",
    role: "Freelance Illustrator & Art Director",
    place: "Independent · Remote",
    note: "Key visuals, identity systems, and motion direction for studios, NGOs, and local brands.",
  },
  {
    period: "2022 — 2024",
    role: "2D Animator & Illustrator",
    place: "Animation Studio · Yogyakarta",
    note: "Storyboards, character layouts, and shot-level animation across broadcast and campaign work.",
  },
  {
    period: "2019 — 2022",
    role: "Visual Communication Design",
    place: "STSRD VISI Yogyakarta",
    note: "Illustration, typography, and art direction fundamentals; campaign design for the campus.",
  },
];

const capabilities = [
  "Art Direction",
  "Illustration",
  "Motion Design",
  "Visual Identity",
  "Storyboarding",
  "3D Look Dev",
  "Character Design",
  "Layout & Typography",
];

export function About() {
  return (
    <section id="about" className="px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="slide-card px-6 py-9 sm:px-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">
            About
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold sm:text-4xl">
            I build visuals that carry a story from the first frame to the last asset.
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              I&apos;m a graphic designer and illustrator based in Yogyakarta, working between flat
              vector illustration, 2D animation, and stylized 3D. My work usually starts with a
              narrative — a metaphor, a moment, a place — and then gets translated into a complete
              system of visuals a client can actually use.
            </p>
            <p>
              Studio years taught me pipeline discipline: concept boards, revisions, deadlines, and
              handoff files that behave. Personal projects keep the experimenting alive — cinematic
              lighting, dioramas, and characters with too much personality.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {capabilities.map((cap) => (
              <li
                key={cap}
                className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-semibold tracking-wide uppercase"
              >
                {cap}
              </li>
            ))}
          </ul>
        </div>

        <div className="slide-card px-6 py-9 sm:px-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">
            Experience
          </p>
          <ol className="mt-6 space-y-6">
            {timeline.map((item, i) => (
              <li key={item.role} className="relative pl-8">
                <span className="absolute top-1.5 left-0 grid size-5 place-items-center rounded-full border-2 border-primary bg-card">
                  <span className="size-1.5 rounded-full bg-brand-orange" />
                </span>
                {i < timeline.length - 1 && (
                  <span className="absolute top-8 left-[9px] h-[calc(100%+0.75rem)] w-0.5 bg-border" />
                )}
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  {item.period}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold">{item.role}</h3>
                <p className="text-sm font-medium text-brand-teal">{item.place}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
