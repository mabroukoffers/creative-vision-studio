const socials = [
  { label: "Behance", href: "https://www.behance.net/muhammadyasin29" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export function Contact() {
  return (
    <section id="contact" className="px-4 pt-8 pb-6 sm:px-6 lg:pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="slide-card dot-grid px-6 py-12 text-center sm:px-10 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">
            Contact
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-[1.05] font-extrabold sm:text-5xl">
            Let&apos;s make something worth looking at twice.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Open for freelance illustration, motion direction, and identity work in 2026. Tell me
            about the story you need told.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@muhyasin.design"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              hello@muhyasin.design
            </a>
            <a
              href="https://www.behance.net/muhammadyasin29"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Full gallery on Behance
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer className="flex flex-col items-center justify-between gap-2 px-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Muh. Yasin — Creative Portfolio 2026.</p>
          <p>Yogyakarta, Indonesia · Illustration, Motion &amp; 3D</p>
        </footer>
      </div>
    </section>
  );
}
