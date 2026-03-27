"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import {
  archiveProjects,
  capabilityRows,
  featuredProjects
} from "@/data/portfolioShowcase";

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const heroIconStrip = [...featuredProjects, ...archiveProjects, ...featuredProjects].slice(0, 18);

export function PortfolioExperience() {
  const wa = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`;

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f0e8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-black/15 bg-black text-sm font-semibold text-[#f5f0e8]">
              MK
            </span>
            <span>
              <span className="block text-[11px] uppercase tracking-[0.28em] text-black/45">
                Full-Stack Product Builder
              </span>
              <span className="text-sm font-semibold tracking-tight">{site.name}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-black/60 md:flex">
            <a href="#works" className="transition hover:text-black">Works</a>
            <a href="#archive" className="transition hover:text-black">Archive</a>
            <a href="#capabilities" className="transition hover:text-black">Capabilities</a>
            <a href="#contact" className="transition hover:text-black">Contact</a>
          </nav>

          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black bg-black px-5 py-2.5 text-sm font-semibold text-[#f5f0e8] transition hover:-translate-y-0.5 hover:bg-[#1e1e1e]"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-black/10">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 pb-12 pt-12 sm:px-8 lg:grid-cols-[1.4fr_0.8fr] lg:pb-16 lg:pt-16">
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="space-y-8"
            >
              <motion.p
                variants={sectionReveal}
                className="text-xs font-semibold uppercase tracking-[0.34em] text-black/45"
              >
                Built from real shipped apps, not placeholder cases
              </motion.p>

              <motion.div variants={sectionReveal}>
                <h1 className="font-display text-[4.7rem] uppercase leading-[0.84] text-[#111111] sm:text-[6.5rem] lg:text-[9.5rem]">
                  Mobile apps
                  <span className="block text-[#ff6f3c]">that sell, scale,</span>
                  and feel premium.
                </h1>
              </motion.div>

              <motion.div
                variants={sectionReveal}
                className="grid gap-5 border-t border-black/10 pt-6 sm:grid-cols-3"
              >
                <Stat value="10+" label="years building production mobile products" />
                <Stat value="30+" label="apps and systems represented across your PDF portfolio" />
                <Stat value="End-to-end" label="delivery across UI, backend, dashboards, and launch support" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-between gap-8"
            >
              <div className="rounded-[32px] border border-black/10 bg-white px-6 py-6 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-black/40">
                  Short version
                </p>
                <p className="mt-5 text-base leading-relaxed text-black/72">
                  You were right. The old version still looked like a generic template. This rebuild shifts the site
                  toward an editorial portfolio: bigger type, lighter surfaces, real app imagery, clearer hierarchy,
                  and a featured/archive structure that actually lets the work breathe.
                </p>
                <div className="mt-6 space-y-3 text-sm text-black/68">
                  <p>{site.title}</p>
                  <p>{site.location}</p>
                  <a className="block transition hover:text-black" href={`mailto:${site.email}`}>{site.email}</a>
                  <a className="block transition hover:text-black" href={`tel:${site.phone}`}>{site.phone}</a>
                </div>
              </div>

              <div className="rounded-[32px] bg-[#111111] px-6 py-6 text-[#f5f0e8] shadow-[0_30px_100px_rgba(17,17,17,0.22)]">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#f5f0e8]/50">
                  What This Portfolio Says Now
                </p>
                <p className="mt-4 text-2xl leading-tight">
                  Product quality matters. Visual taste matters. Execution matters.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="overflow-hidden border-t border-black/10 py-5">
            <div className="marquee-track">
              {[...heroIconStrip, ...heroIconStrip].map((project, index) => (
                <a
                  key={`${project.name}-${index}`}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="marquee-card"
                >
                  <Image
                    src={project.icon}
                    alt={`${project.name} icon`}
                    width={52}
                    height={52}
                    className="h-[52px] w-[52px] rounded-2xl object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-black">{project.name}</p>
                    <p className="text-xs uppercase tracking-[0.22em] text-black/45">{project.category}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="works" className="px-5 py-14 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-[1400px]">
            <SectionIntro
              eyebrow="Selected Work"
              title="Project imagery first. Better hierarchy. Stronger case-study rhythm."
              body="These are the products leading the portfolio now. Each one uses actual app art pulled from your supplied material and store listings, so the work feels real instead of abstract."
            />

            <div className="mt-12 space-y-10 lg:space-y-14">
              {featuredProjects.map((project, index) => (
                <ProjectPanel key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="archive" className="border-y border-black/10 bg-white px-5 py-14 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-[1400px]">
            <SectionIntro
              eyebrow="Archive"
              title="A wider shipping record across media, logistics, utility, fitness, and operations."
              body="The featured section leads with stronger visual stories. This archive keeps the breadth visible so clients can quickly see range."
            />

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-120px" }}
              variants={stagger}
              className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            >
              {archiveProjects.map((project) => (
                <motion.a
                  key={project.name}
                  variants={sectionReveal}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[28px] border border-black/10 bg-[#f8f3ec] p-5 transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_28px_80px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={project.icon}
                      alt={`${project.name} icon`}
                      width={72}
                      height={72}
                      className="rounded-[20px] object-cover shadow-[0_12px_25px_rgba(0,0,0,0.12)]"
                    />
                    <div>
                      <p className="text-base font-semibold text-black">{project.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.24em] text-black/45">{project.category}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="capabilities" className="px-5 py-14 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-[1400px]">
            <SectionIntro
              eyebrow="Capabilities"
              title="The strongest positioning is still the same: build serious products and make them feel expensive."
              body="That means good product judgment, clean architecture, reliable delivery, and interfaces that don’t feel rushed."
            />

            <div className="mt-12 space-y-4">
              {capabilityRows.map((row, index) => (
                <motion.div
                  key={row.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="grid gap-5 rounded-[30px] border border-black/10 bg-white px-6 py-7 lg:grid-cols-[0.9fr_1.1fr]"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-display text-5xl leading-none text-[#ff6f3c]">0{index + 1}</span>
                    <h3 className="text-2xl font-semibold leading-tight text-black">{row.title}</h3>
                  </div>
                  <p className="max-w-3xl text-base leading-relaxed text-black/70">{row.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-16 sm:px-8 lg:pb-24">
          <div className="mx-auto max-w-[1400px]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[36px] bg-[#111111] px-6 py-8 text-[#f5f0e8] sm:px-8 sm:py-10 lg:px-12 lg:py-12"
            >
              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f5f0e8]/55">
                    Contact
                  </p>
                  <h2 className="font-display mt-4 text-[3.4rem] uppercase leading-[0.88] text-[#f5f0e8] sm:text-[4.8rem]">
                    Let&apos;s turn the portfolio into a sales tool, not a template.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#f5f0e8]/72">
                    If you want, I can keep pushing from here too: more project coverage from the PDF, deeper case-study pages,
                    real backend contact handling, and an even closer motion treatment to the reference site.
                  </p>
                </div>

                <div className="space-y-4">
                  <ContactCard href={`mailto:${site.email}`} label="Email" value={site.email} />
                  <ContactCard href={`tel:${site.phone}`} label="Phone" value={site.phone} />
                  <ContactCard href={wa} label="WhatsApp" value="Open chat" external />
                </div>
              </div>
            </motion.div>

            <footer className="flex flex-col gap-3 border-t border-black/10 pt-6 text-sm text-black/55 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} {site.name}. Rebuilt around real shipped work.</p>
              <p>{site.title}</p>
            </footer>
          </div>
        </section>
      </main>
    </div>
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
      className="grid gap-8 border-b border-black/10 pb-8 lg:grid-cols-[0.55fr_1.45fr]"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-black/45">{eyebrow}</p>
      <div className="max-w-5xl">
        <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/68">{body}</p>
      </div>
    </motion.div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[24px] bg-white px-4 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.05)]">
      <p className="text-xl font-semibold text-black">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-black/62">{label}</p>
    </div>
  );
}

function ProjectPanel({
  project,
  index
}: {
  project: (typeof featuredProjects)[number];
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-6 rounded-[34px] border border-black/10 bg-white p-5 shadow-[0_28px_90px_rgba(0,0,0,0.05)] lg:grid-cols-[0.8fr_1.2fr] lg:p-7"
    >
      <div className={reversed ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
        <div className="flex items-center gap-4 text-black/40">
          <span className="font-display text-6xl leading-none text-black/18">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em]">{project.category}</p>
            <p className="mt-1 text-sm">{project.year}</p>
          </div>
        </div>

        <h3 className="mt-6 text-3xl font-semibold leading-tight text-black sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-black/72">{project.headline}</p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/65">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.deliverables.map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-black/55"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center rounded-full border border-black bg-black px-5 py-3 text-sm font-semibold text-[#f5f0e8] transition hover:-translate-y-0.5 hover:bg-[#262626]"
        >
          Open Project
        </a>
      </div>

      <div className={reversed ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
        <div
          className="relative overflow-hidden rounded-[32px] p-5 sm:p-7"
          style={{ background: `linear-gradient(135deg, ${project.accent}25, #111111 65%)` }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_28%)]" />
          <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-black/55">
            App Visual
          </div>

          <div className="relative mx-auto flex max-w-[470px] items-end justify-center gap-4 pt-14">
            <div className="hidden rounded-[28px] border border-white/20 bg-white/10 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:block">
              <div className="relative aspect-[9/19] w-[160px] overflow-hidden rounded-[22px] bg-[#ede5db]">
                <Image
                  src={project.cover}
                  alt={`${project.name} app preview`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="relative rounded-[36px] border border-black/10 bg-white p-3 shadow-[0_30px_90px_rgba(0,0,0,0.16)]">
              <div className="absolute left-1/2 top-3 h-1.5 w-20 -translate-x-1/2 rounded-full bg-black/10" />
              <div className="relative aspect-[9/19] w-[220px] overflow-hidden rounded-[28px] bg-[#ede5db] sm:w-[250px]">
                <Image
                  src={project.cover}
                  alt={`${project.name} mobile screenshot`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="hidden rounded-[28px] border border-white/20 bg-white/10 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:block">
              <div className="relative aspect-[9/19] w-[160px] overflow-hidden rounded-[22px] bg-[#ede5db]">
                <Image
                  src={project.cover}
                  alt={`${project.name} app preview detail`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full bg-white px-3 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.14)]">
            <Image
              src={project.icon}
              alt={`${project.name} icon`}
              width={48}
              height={48}
              className="rounded-2xl object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-black">{project.name}</p>
              <p className="text-[11px] uppercase tracking-[0.24em] text-black/45">{project.category}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
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
      className="block rounded-[26px] border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f5f0e8]/45">{label}</p>
      <p className="mt-2 text-lg font-semibold text-[#f5f0e8]">{value}</p>
    </a>
  );
}
