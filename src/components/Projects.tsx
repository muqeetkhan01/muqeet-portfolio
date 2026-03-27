"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Stagger, revealScale, revealUp } from "@/components/ui/Motion";
import { projects, type Project } from "@/data/projects";

export function Projects() {
  const items = useMemo(() => projects, []);
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="pt-16 sm:pt-20">
      <Container>
        <Stagger className="flex items-end justify-between gap-4">
          <div>
            <motion.p variants={revealUp} className="text-xs font-semibold tracking-[0.22em] text-white/55">
              PORTFOLIO
            </motion.p>
            <motion.h2 variants={revealUp} className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Selected projects and products
            </motion.h2>
            <motion.p variants={revealUp} className="mt-3 max-w-2xl text-white/70">
              Real products across e-commerce, marketplaces, sports, fitness, and business platforms. AI is highlighted where relevant.
            </motion.p>
          </div>
          <motion.div variants={revealUp}>
            <a className="hidden sm:block" href="#contact">
              <Button variant="secondary">Hire Me</Button>
            </a>
          </motion.div>
        </Stagger>

        <Stagger className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((project, index) => (
            <motion.div key={project.name} variants={revealScale} custom={0.05 * index}>
              <Card className="interactive-card spotlight group h-full overflow-hidden p-6 sm:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,196,106,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.12),transparent_34%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge>{project.type}</Badge>
                      {project.ai?.length ? (
                        <Badge className="border-[#f8c46a]/20 bg-[#f8c46a]/10 text-[#ffe0a0]">AI</Badge>
                      ) : null}
                    </div>
                    <span className="text-xs font-semibold tracking-[0.28em] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/68">{project.description}</p>

                  <div className="mt-5 space-y-2">
                    {project.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex gap-3 text-sm text-white/62">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#f8c46a]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {(project.tags ?? []).slice(0, 3).map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-2">
                    <Button onClick={() => setActive(project)} variant="secondary">
                      View Details
                    </Button>
                    {project.links?.[0] ? (
                      <a href={project.links[0].url} target="_blank" rel="noreferrer">
                        <Button variant="ghost">{project.links[0].label} -&gt;</Button>
                      </a>
                    ) : null}
                    <span className="ml-auto text-xs uppercase tracking-[0.24em] text-white/30">
                      Tap for case study
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </Stagger>
      </Container>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.name ?? ""}>
        {active ? (
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <Badge>{active.type}</Badge>
              {(active.tags ?? []).map((t) => <Badge key={t}>{t}</Badge>)}
              {active.ai?.length ? <Badge className="border-[#f8c46a]/20 bg-[#f8c46a]/10 text-[#ffe0a0]">AI</Badge> : null}
            </div>

            <p className="text-sm text-white/75 leading-relaxed">{active.description}</p>

            <div>
              <p className="text-sm font-semibold">Key features</p>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                {active.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
            </div>

            {active.ai?.length ? (
              <div>
                <p className="text-sm font-semibold">AI functionality</p>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  {active.ai.map((a) => <li key={a}>• {a}</li>)}
                </ul>
              </div>
            ) : null}

            {active.businessValue?.length ? (
              <div>
                <p className="text-sm font-semibold">Business value</p>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  {active.businessValue.map((b) => <li key={b}>• {b}</li>)}
                </ul>
              </div>
            ) : null}

            {active.links?.length ? (
              <div className="flex flex-wrap gap-2 pt-2">
                {active.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                    <Button variant="secondary">{l.label} →</Button>
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
