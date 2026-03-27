"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import {
  capabilityRows,
  featuredProjects,
  portfolioApps,
  type PortfolioApp
} from "@/data/portfolioShowcase";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const heroLines = [
  { text: "Apps, AI", accent: false },
  { text: "tools,", accent: false },
  { text: "and SaaS", accent: true },
  { text: "products", accent: true },
  { text: "for serious", accent: false },
  { text: "businesses.", accent: false }
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
}

export function PortfolioExperience() {
  const [showAllApps, setShowAllApps] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const wa = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`;
  const appCount = portfolioApps.length;
  const visibleApps = showAllApps ? portfolioApps : portfolioApps.slice(0, 12);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className={`portfolio-shell theme-${theme} min-h-screen`}>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="aurora aurora-three" />
        <div className="grid-overlay" />
        <div className="noise-overlay" />
      </div>

      <header className="theme-header sticky top-0 z-50">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="theme-logo-mark grid h-11 w-11 place-items-center rounded-2xl text-sm font-semibold">
              MK
            </span>
            <span>
              <span className="theme-muted block text-[11px] uppercase tracking-[0.34em]">
                Product Engineer
              </span>
              <span className="theme-ink text-sm font-semibold tracking-tight">{site.name}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#featured" className="theme-nav-link transition">Featured</a>
            <a href="#all-apps" className="theme-nav-link transition">All Apps</a>
            <a href="#capabilities" className="theme-nav-link transition">Capabilities</a>
            <a href="#contact" className="theme-nav-link transition">Contact</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              className="theme-toggle inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-semibold transition sm:px-4"
            >
              <span className="sm:hidden">Theme</span>
              <span className="hidden sm:inline">{theme === "dark" ? "White theme" : "Black theme"}</span>
            </button>

            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="theme-button-accent inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
            >
              Start on WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="theme-section relative overflow-hidden">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-20">
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="hero-copy-stage relative z-10"
            >
              <motion.p
                variants={fadeUp}
                className="theme-chip-accent inline-flex rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em]"
              >
                For SaaS founders, operators, and ambitious product teams
              </motion.p>

              <div className="hero-copy-wrap mt-6 max-w-5xl">
                <motion.div variants={stagger} className="space-y-0">
                  {heroLines.map((line) => (
                    <motion.div key={line.text} variants={fadeUp} className="overflow-hidden">
                      <span className={`hero-line font-display ${line.accent ? "theme-accent" : "theme-ink"}`}>
                        {line.text}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
                <div className="hero-copy-glow" aria-hidden />
              </div>

              <motion.p
                variants={fadeUp}
                className="theme-copy-muted mt-6 max-w-3xl text-lg leading-relaxed sm:text-xl"
              >
                I build premium mobile products, operational systems, and conversion-ready software experiences for
                companies that want to look credible, modern, and expensive from the first screen.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#all-apps"
                  className="theme-button-primary inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
                >
                  View more apps
                </a>
                <a
                  href="#featured"
                  className="theme-button-secondary inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
                >
                  See priority work
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                {["Mobile apps", "AI workflows", "SaaS systems", "Business software"].map((item, index) => (
                  <motion.span
                    key={item}
                    animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
                    transition={{ duration: 5 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="theme-chip inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em]"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 grid gap-4 sm:grid-cols-3"
              >
                <ProofCard value={`${appCount}`} label="verified shipped apps now shown on the site" />
                <ProofCard value="10+" label="years building consumer, business, and operational apps" />
                <ProofCard value="AI + Ops" label="stronger fit for SaaS, logistics, enterprise, and field software" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <HeroSignalBoard />
            </motion.div>
          </div>

          <div className="theme-section-divider overflow-hidden py-5">
            <div className="marquee-track">
              {[...portfolioApps, ...portfolioApps].map((app, index) => (
                <a
                  key={`${app.slug}-${index}`}
                  href={app.href}
                  target="_blank"
                  rel="noreferrer"
                  className="marquee-card-shell"
                >
                  <ProjectMark project={app} size="small" />
                  <div>
                    <p className="theme-ink text-sm font-semibold">{app.name}</p>
                    <p className="theme-muted text-[11px] uppercase tracking-[0.24em]">{app.category}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="featured" className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <SectionIntro
              eyebrow="Featured Work"
              title="Selected products across SaaS, logistics, AI, and consumer mobile."
              body="A curated set of apps spanning business operations, travel, field intelligence, and customer-facing digital products."
            />

            <div className="mt-12 space-y-8 lg:space-y-10">
              {featuredProjects.map((project, index) => (
                <ProjectPanel key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="all-apps" className="theme-section-soft px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="theme-section-divider flex flex-col gap-6 pb-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <p className="theme-accent text-xs font-semibold uppercase tracking-[0.32em]">All Apps</p>
                <h2 className="theme-ink mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Product work across multiple industries and use cases.
                </h2>
                <p className="theme-copy-muted mt-4 max-w-3xl text-base leading-relaxed">
                  Explore the broader portfolio across marketplaces, logistics, media, wellness, operations, and mobile-first business tools.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowAllApps((current) => !current)}
                className="theme-button-secondary inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
              >
                {showAllApps ? "Show less" : `View all ${appCount} apps`}
              </button>
            </div>

            <motion.div
              layout
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-120px" }}
              variants={stagger}
              className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            >
              {visibleApps.map((project) => (
                <AppCard key={project.slug} project={project} />
              ))}
            </motion.div>
          </div>
        </section>

        <section id="capabilities" className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <SectionIntro
              eyebrow="Capabilities"
              title="Product design, mobile engineering, and business-focused software delivery."
              body="Built for companies that need reliable execution, polished user experience, and software that supports real business growth."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {capabilityRows.map((row, index) => (
                <motion.article
                  key={row.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-panel rounded-[32px] p-7"
                >
                  <p className="theme-accent text-xs font-semibold uppercase tracking-[0.3em]">
                    0{index + 1}
                  </p>
                  <h3 className="theme-ink mt-5 text-2xl font-semibold leading-tight">{row.title}</h3>
                  <p className="theme-copy-muted mt-4 text-base leading-relaxed">{row.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-16 sm:px-8 lg:pb-24">
          <div className="mx-auto max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="theme-contact-panel relative overflow-hidden rounded-[40px] px-6 py-10 sm:px-8 lg:px-12 lg:py-14"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%)]" />
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative z-10">
                  <p className="theme-accent text-xs font-semibold uppercase tracking-[0.32em]">Contact</p>
                  <h2 className="theme-ink mt-4 font-display text-[3.4rem] uppercase leading-[0.88] sm:text-[4.8rem]">
                    Let&apos;s build
                    <span className="theme-accent block">your next product.</span>
                  </h2>
                  <p className="theme-copy-muted mt-5 max-w-2xl text-base leading-relaxed">
                    Available for mobile apps, SaaS platforms, internal tools, and custom software for growing businesses and ambitious teams.
                  </p>
                </div>

                <div className="relative z-10 space-y-4">
                  <ContactCard href={`mailto:${site.email}`} label="Email" value={site.email} />
                  <ContactCard href={`tel:${site.phone}`} label="Phone" value={site.phone} />
                  <ContactCard href={wa} label="WhatsApp" value="Open chat" external />
                </div>
              </div>
            </motion.div>

            <footer className="theme-section-divider theme-muted flex flex-col gap-3 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} {site.name}. Premium mobile products, SaaS, and business systems.</p>
              <p>{site.title}</p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

function HeroSignalBoard() {
  const signalApps = featuredProjects.slice(0, 4);
  const orbitApps = featuredProjects.slice(0, 4);

  return (
    <div className="hero-stage">
      <div className="hero-stage-glow" />
      <div className="hero-stage-grid" />
      <div className="hero-ring hero-ring-one" />
      <div className="hero-ring hero-ring-two" />
      <div className="hero-ring hero-ring-three" />

      {orbitApps.map((app, index) => (
        <motion.div
          key={app.slug}
          animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
          transition={{ duration: 7 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className={`hero-orbit-card hero-orbit-card-${index + 1} theme-float-card rounded-[22px] p-3`}
        >
          <div className="flex items-center gap-3">
            <ProjectMark project={app} size="small" />
            <div>
              <p className="theme-ink text-sm font-semibold">{app.name}</p>
              <p className="theme-muted text-[10px] uppercase tracking-[0.2em]">{app.category}</p>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="hero-stage-layout relative z-10 mx-auto flex h-full max-w-[620px] flex-col justify-center px-6 py-10 sm:px-10 sm:py-12">
        <div className="hero-chip-row mb-4 flex flex-wrap gap-2">
          {["SaaS systems", "AI workflows", "Mobile apps", "Business tools"].map((item) => (
            <span
              key={item}
              className="theme-chip inline-flex rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-[0.8fr_1fr]">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="hero-side-card theme-float-card rounded-[28px] p-5"
          >
            <p className="theme-accent text-[11px] uppercase tracking-[0.24em]">Featured apps</p>
            <p className="theme-ink mt-3 text-[1.65rem] font-semibold leading-tight">LinkEase, MeetWorth, CargoRent, STM</p>
            <p className="theme-copy-muted mt-3 text-sm leading-relaxed">Travel, founder networking, logistics, and AI-driven field products.</p>
            <div className="mt-6 space-y-2">
              {["Premium UX", "Operational logic", "Production-ready delivery"].map((item) => (
                <div key={item} className="theme-signal-card flex items-center gap-3 rounded-[18px] px-3 py-2.5">
                  <span className="hero-dot" />
                  <span className="theme-ink text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="theme-stage-card hero-signal-panel rounded-[34px] p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="theme-accent text-[11px] uppercase tracking-[0.3em]">Portfolio signal</p>
                <p className="theme-ink mt-3 text-3xl font-semibold leading-[0.98]">{portfolioApps.length} shipped apps</p>
              </div>
              <div className="theme-chip-accent rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em]">
                Live work
              </div>
            </div>

            <div className="hero-metric-row mt-6 grid gap-3 sm:grid-cols-3">
              <HeroMetric value="100+" label="Shipped apps" />
              <HeroMetric value="10+" label="Years" />
              <HeroMetric value="4" label="Priority sectors" />
            </div>

            <div className="mt-6 space-y-3">
              {signalApps.map((app, index) => (
                <FloatingSignal key={app.slug} app={app} delay={index * 0.12} />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["SaaS", "Logistics", "AI", "Consumer"].map((item) => (
                <span
                  key={item}
                  className="theme-chip inline-flex rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
          className="hero-fit-card theme-float-card mt-4 max-w-[340px] self-end rounded-[28px] p-5"
        >
          <p className="theme-accent text-[11px] uppercase tracking-[0.24em]">Best fit</p>
          <p className="theme-ink mt-3 text-xl font-semibold leading-tight">SaaS, logistics, field operations, and mobile products</p>
          <p className="theme-copy-muted mt-3 text-sm leading-relaxed">Built for teams that want software to feel credible, polished, and ready for real customers.</p>
        </motion.div>
      </div>
    </div>
  );
}

function HeroMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="theme-signal-card rounded-[20px] px-4 py-3">
      <p className="theme-ink text-xl font-semibold">{value}</p>
      <p className="theme-muted mt-1 text-[11px] uppercase tracking-[0.18em]">{label}</p>
    </div>
  );
}

function FloatingSignal({ app, delay }: { app: PortfolioApp; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="theme-signal-card flex items-center gap-3 rounded-[22px] px-3 py-3"
    >
      <ProjectMark project={app} size="small" />
      <div className="min-w-0">
        <p className="theme-ink truncate text-sm font-semibold">{app.name}</p>
        <p className="theme-muted truncate text-[11px] uppercase tracking-[0.22em]">{app.category}</p>
      </div>
    </motion.div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="theme-section-divider grid gap-8 pb-8 lg:grid-cols-[0.5fr_1.5fr]"
    >
      <p className="theme-accent text-xs font-semibold uppercase tracking-[0.32em]">{eyebrow}</p>
      <div className="max-w-5xl">
        <h2 className="theme-ink text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="theme-copy-muted mt-4 max-w-3xl text-base leading-relaxed">{body}</p>
      </div>
    </motion.div>
  );
}

function ProofCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass-panel rounded-[28px] px-5 py-5">
      <p className="theme-ink text-2xl font-semibold">{value}</p>
      <p className="theme-copy-muted mt-2 text-sm leading-relaxed">{label}</p>
    </div>
  );
}

function ProjectPanel({
  project,
  index
}: {
  project: PortfolioApp;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel grid gap-8 overflow-hidden rounded-[36px] p-5 sm:p-7 lg:grid-cols-[0.82fr_1.18fr]"
    >
      <div className={reversed ? "order-2" : "order-2 lg:order-1"}>
        <div className="theme-muted flex items-center gap-4">
          <span className="theme-muted-soft font-display text-6xl leading-none">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <p className="theme-accent text-xs font-semibold uppercase tracking-[0.28em]">{project.category}</p>
            <p className="theme-muted mt-1 text-sm">{project.tags.join(" • ")}</p>
          </div>
        </div>

        <h3 className="theme-ink mt-6 text-3xl font-semibold leading-tight sm:text-4xl">{project.name}</h3>
        <p className="theme-ink-soft mt-4 text-lg leading-relaxed">{project.headline}</p>
        <p className="theme-copy-muted mt-5 max-w-2xl text-base leading-relaxed">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="theme-chip inline-flex rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="theme-button-primary mt-8 inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
        >
          Open project
        </a>
      </div>

      <div className={reversed ? "order-1" : "order-1 lg:order-2"}>
        <FeatureVisual project={project} />
      </div>
    </motion.article>
  );
}

function FeatureVisual({ project }: { project: PortfolioApp }) {
  if (project.cover) {
    const coverSrc = withBasePath(project.cover);

    return (
      <div
        className="theme-feature-panel relative overflow-hidden rounded-[32px] p-5 sm:p-7"
        style={{ background: `linear-gradient(140deg, ${project.accent}22, var(--visual-end) 65%)` }}
      >
        <div className="theme-feature-overlay absolute inset-0" />
        <div className="theme-feature-label absolute right-5 top-5 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em]">
          Live product visual
        </div>

        <div className="relative mx-auto flex max-w-[520px] items-end justify-center gap-4 pt-14">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="theme-device-side hidden rounded-[28px] p-2 sm:block"
          >
            <div className="theme-device-screen relative aspect-[9/19] w-[160px] overflow-hidden rounded-[22px]">
              <Image src={coverSrc} alt={`${project.name} app preview`} fill className="object-cover object-top" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="theme-device-main relative rounded-[36px] p-3"
          >
            <div className="theme-device-notch absolute left-1/2 top-3 h-1.5 w-20 -translate-x-1/2 rounded-full" />
            <div className="theme-device-screen relative aspect-[9/19] w-[220px] overflow-hidden rounded-[28px] sm:w-[250px]">
              <Image src={coverSrc} alt={`${project.name} app screenshot`} fill className="object-cover object-top" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="theme-device-side hidden rounded-[28px] p-2 sm:block"
          >
            <div className="theme-device-screen relative aspect-[9/19] w-[160px] overflow-hidden rounded-[22px]">
              <Image src={coverSrc} alt={`${project.name} secondary preview`} fill className="object-cover object-top" />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-5 left-5">
          <div className="theme-float-card rounded-full px-3 py-3">
            <div className="flex items-center gap-3">
              <ProjectMark project={project} size="small" />
              <div>
                <p className="theme-ink text-sm font-semibold">{project.name}</p>
                <p className="theme-muted text-[11px] uppercase tracking-[0.24em]">{project.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="theme-feature-panel relative overflow-hidden rounded-[32px] p-6 sm:p-8"
      style={{ background: `linear-gradient(160deg, ${project.accent}22, var(--visual-end) 68%)` }}
    >
      <div className="theme-feature-overlay absolute inset-0" />
      <div className="feature-grid absolute inset-0 opacity-40" />
      <div className="feature-ring feature-ring-one" style={{ borderColor: `${project.accent}55` }} />
      <div className="feature-ring feature-ring-two" style={{ borderColor: `${project.accent}22` }} />

      <div className="relative flex min-h-[430px] flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <div className="theme-chip inline-flex rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em]">
            Strategic highlight
          </div>
          <div className="theme-chip-accent inline-flex rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em]">
            {project.category}
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[420px] flex-col items-center gap-6 py-8 text-center">
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 6.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="theme-device-side rounded-[32px] p-5"
          >
            <ProjectMark project={project} size="large" />
          </motion.div>

          <div>
            <p className="theme-ink text-2xl font-semibold">{project.name}</p>
            <p className="theme-copy-muted mt-2 text-sm leading-relaxed">{project.summary}</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {project.tags.map((tag, index) => (
            <motion.div
              key={tag}
              animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
              transition={{ duration: 5 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="theme-chip inline-flex rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em]"
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AppCard({ project }: { project: PortfolioApp }) {
  return (
    <motion.a
      layout
      variants={fadeUp}
      href={project.href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -8 }}
      className="group glass-panel rounded-[30px] p-5 transition"
    >
      <div className="flex items-start justify-between gap-4">
        <ProjectMark project={project} size="medium" />
        {project.priority ? (
          <span className="theme-chip-accent inline-flex rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em]">
            Priority
          </span>
        ) : null}
      </div>

      <div className="mt-5">
        <p className="theme-ink text-lg font-semibold">{project.name}</p>
        <p className="theme-accent mt-2 text-[11px] uppercase tracking-[0.24em]">{project.category}</p>
        <p className="theme-copy-muted mt-4 text-sm leading-relaxed">{project.headline}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="theme-chip inline-flex rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

function ProjectMark({
  project,
  size
}: {
  project: PortfolioApp;
  size: "small" | "medium" | "large";
}) {
  const dimensions =
    size === "small"
      ? "h-12 w-12 rounded-2xl"
      : size === "medium"
        ? "h-16 w-16 rounded-[22px]"
        : "h-28 w-28 rounded-[30px]";

  if (project.icon) {
    const iconSrc = withBasePath(project.icon);

    return (
      <div className={`theme-mark-shell relative overflow-hidden ${dimensions}`}>
        <Image src={iconSrc} alt={`${project.name} icon`} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`generated-mark theme-mark-shell grid place-items-center ${dimensions}`}
      style={{ background: `linear-gradient(135deg, ${project.accent}, rgba(7,17,31,0.94))` }}
    >
      <span className={size === "large" ? "text-3xl font-semibold text-white" : "text-lg font-semibold text-white"}>
        {project.initials}
      </span>
    </div>
  );
}

function ContactCard({
  href,
  label,
  value,
  external = false
}: {
  href: string;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="theme-signal-card block rounded-[26px] px-5 py-4 transition"
    >
      <p className="theme-accent text-xs font-semibold uppercase tracking-[0.24em]">{label}</p>
      <p className="theme-ink mt-2 text-lg font-semibold">{value}</p>
    </a>
  );
}
