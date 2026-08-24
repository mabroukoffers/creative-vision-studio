import graduation from "@/assets/work-graduation.jpg";
import { concepts } from "@/data/projects";

export function Breakdown() {
  return (
    <section id="breakdown" className="px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="slide-card dot-grid px-6 py-9 sm:px-10 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">
                Process
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold sm:text-4xl">
                Visual Breakdown
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                Symbolizing the journey to the finish line, this illustration celebrates creativity,
                growth, and change through three graduates. Chosen from three concepts for its
                strong narrative and STSRD VISI identity.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {concepts.map((concept) => (
                  <figure
                    key={concept.letter}
                    className="rounded-2xl border border-border bg-secondary p-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid size-6 place-items-center rounded-md bg-primary font-display text-[0.7rem] font-extrabold text-primary-foreground">
                        {concept.letter}
                      </span>
                      {concept.letter === "B" && (
                        <span className="rounded-full bg-brand-orange px-2 py-0.5 text-[0.6rem] font-bold tracking-wide text-accent-foreground uppercase">
                          Chosen
                        </span>
                      )}
                    </div>
                    <img
                      src={graduation}
                      alt={`Concept sketch ${concept.letter}: ${concept.label}`}
                      width={1400}
                      height={900}
                      loading="lazy"
                      className="mt-3 h-24 w-full rounded-lg object-cover grayscale"
                    />
                    <figcaption className="mt-3">
                      <p className="font-display text-sm font-bold">{concept.label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {concept.note}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-[1.5rem] bg-secondary p-4">
                <img
                  src={graduation}
                  alt="Printed invitation spread using the graduation key visual"
                  width={1400}
                  height={900}
                  loading="lazy"
                  className="w-full -rotate-1 rounded-xl shadow-[var(--shadow-lift)]"
                />
                <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Invitation spread · offset print
                </p>
              </div>
              <div className="overflow-hidden rounded-[1.5rem] bg-secondary p-4">
                <img
                  src={graduation}
                  alt="Outdoor banner application of the graduation key visual"
                  width={1400}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/1] w-full rounded-xl object-cover shadow-[var(--shadow-lift)]"
                />
                <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Street banner · 5 × 1.2 m
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
