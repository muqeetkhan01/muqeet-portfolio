"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Stagger, revealScale, revealUp } from "@/components/ui/Motion";

const heroStats = [
  { value: "10+", label: "years of mobile product delivery" },
  { value: "Full stack", label: "apps, backend, dashboards, and APIs" },
  { value: "AI-ready", label: "features that improve product value" }
];

export function Hero() {
  const wa = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`;

  return (
    <section id="top" className="pt-10 sm:pt-14">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Stagger className="lg:col-span-7">
            <motion.div variants={revealUp} className="flex flex-wrap gap-2">
              <Badge className="border-[#f8c46a]/20 bg-[#f8c46a]/10 text-[#ffe0a0]">{site.experienceLine}</Badge>
              <Badge>Premium UI with motion</Badge>
              <Badge>Mobile, SaaS, and AI products</Badge>
            </motion.div>

            <motion.p variants={revealUp} className="mt-8 text-xs font-semibold uppercase tracking-[0.32em] text-white/45">
              Premium Product Engineering
            </motion.p>

            <motion.h1
              variants={revealUp}
              className="mt-4 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-[5.25rem] lg:leading-[0.92]"
            >
              <span className="block">{site.name}</span>
              <span className="text-gradient block text-2xl font-medium tracking-[-0.03em] text-white sm:mt-3 sm:text-3xl lg:text-[2.15rem]">
                {site.title}
              </span>
            </motion.h1>

            <motion.p variants={revealUp} className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
              {site.intro}
            </motion.p>

            <motion.div variants={revealUp} className="mt-8 flex flex-wrap gap-3">
              <a href="#projects">
                <Button>View My Work</Button>
              </a>
              <a href="#contact">
                <Button variant="secondary">Start a Project</Button>
              </a>
              <a href={wa} target="_blank" rel="noreferrer">
                <Button variant="ghost">WhatsApp Me -&gt;</Button>
              </a>
            </motion.div>

            <motion.div variants={revealUp} className="mt-8 flex flex-wrap gap-3 text-sm text-white/65">
              <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10 hover:text-white" href={`tel:${site.phone}`}>
                {site.phone}
              </a>
              <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10 hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{site.location}</span>
            </motion.div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.value}
                  variants={revealScale}
                  custom={0.08 * index}
                  className="glass surface-outline rounded-[24px] p-4"
                >
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </Stagger>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-10 rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(248,196,106,0.24),transparent_38%),radial-gradient(circle_at_bottom,rgba(56,189,248,0.18),transparent_42%)] blur-3xl" />

              <div className="floating-card absolute -left-6 top-10 hidden rounded-[24px] border border-white/12 bg-[#101722]/85 px-4 py-3 shadow-soft backdrop-blur xl:block">
                <p className="text-xs uppercase tracking-[0.24em] text-white/40">Delivery</p>
                <p className="mt-1 text-sm font-semibold text-white">End-to-end product ownership</p>
              </div>

              <div className="floating-card floating-card-delay absolute -right-6 bottom-16 hidden rounded-[24px] border border-white/12 bg-[#101722]/85 px-4 py-3 shadow-soft backdrop-blur xl:block">
                <p className="text-xs uppercase tracking-[0.24em] text-white/40">Edge</p>
                <p className="mt-1 text-sm font-semibold text-white">AI-ready features and polish</p>
              </div>

              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="glass surface-outline spotlight glow-pulse relative overflow-hidden rounded-[2.5rem] shadow-soft"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_40%,rgba(248,196,106,0.08)_100%)]" />
                <div className="relative aspect-[0.88]">
                  <Image
                    src={site.profileImage}
                    alt={`${site.name} profile`}
                    fill
                    priority
                    className="object-cover scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070c] via-transparent to-transparent" />
                </div>

                <div className="hairline relative grid gap-4 px-6 py-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-white/40">Available For</p>
                      <p className="mt-2 text-lg font-semibold text-white">Serious client work</p>
                    </div>
                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                      Open
                    </div>
                  </div>

                  <p className="max-w-sm text-sm leading-relaxed text-white/68">
                    High-end mobile apps, SaaS platforms, admin dashboards, and AI-enabled features that feel considered from day one.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/40">Focus</p>
                      <p className="mt-2 text-sm font-medium text-white">Premium UX with clean architecture</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/40">Products</p>
                      <p className="mt-2 text-sm font-medium text-white">Commerce, marketplaces, fitness, and SaaS</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
