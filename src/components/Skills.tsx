"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Stagger, revealScale, revealUp } from "@/components/ui/Motion";

const skills = [
  "Mobile App Development",
  "Flutter Development",
  "Full Stack Development",
  "AI‑Powered Features",
  "SaaS Product Development",
  "Firebase / Backend Systems",
  "Business Products",
  "Admin Panels / Dashboards",
  "API Integrations",
  "Product Development End‑to‑End"
];

export function Skills() {
  return (
    <section id="skills" className="pt-16 sm:pt-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12">
          <Stagger className="lg:col-span-4">
            <motion.p variants={revealUp} className="text-xs font-semibold tracking-[0.22em] text-white/55">
              EXPERTISE
            </motion.p>
            <motion.h2 variants={revealUp} className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Skills that ship real products
            </motion.h2>
            <motion.p variants={revealUp} className="mt-3 text-white/70">
              A focused stack for mobile-first products, built with performance, scalability, and premium UX in mind.
            </motion.p>
          </Stagger>

          <Card className="spotlight lg:col-span-8 p-6 sm:p-8">
            <div className="section-grid absolute inset-x-6 top-6 h-24 rounded-[24px] opacity-60" />
            <Stagger className="relative grid gap-3 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={revealScale}
                  custom={0.04 * index}
                  whileHover={{ y: -6, x: index % 2 === 0 ? 4 : -4 }}
                  className="interactive-card rounded-[22px] border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-white/84">{skill}</p>
                    <span className="text-xs font-semibold tracking-[0.24em] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              ))}
            </Stagger>
          </Card>
        </div>
      </Container>
    </section>
  );
}
