"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Stagger, revealScale, revealUp } from "@/components/ui/Motion";

const points = [
  { title: "A decade of experience", desc: "Strong delivery habits, reliable communication, and real-world product perspective." },
  { title: "Product mindset", desc: "I build features that move the needle — not just code that “works”." },
  { title: "Scalable systems", desc: "Clean architecture that supports growth, iteration, and long-term maintenance." },
  { title: "Premium UI implementation", desc: "Polished spacing, typography, and interactions that impress clients and users." },
  { title: "Client-focused development", desc: "Clear milestones, transparency, and a focus on outcomes." },
  { title: "End-to-end delivery", desc: "Mobile + backend + admin workflows — complete solutions, not partial work." }
];

export function WhyWorkWithMe() {
  return (
    <section id="why" className="pt-16 sm:pt-20">
      <Container>
        <Card className="spotlight p-6 sm:p-10">
          <Stagger>
            <motion.div variants={revealUp} className="flex flex-wrap items-center gap-2">
              <Badge>Professional</Badge>
              <Badge>Reliable</Badge>
              <Badge>Premium Quality</Badge>
            </motion.div>

            <motion.h2 variants={revealUp} className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
              Why work with me
            </motion.h2>
            <motion.p variants={revealUp} className="mt-3 max-w-2xl text-white/70">
              I focus on building high-quality products that look premium, scale properly, and deliver business value.
            </motion.p>
          </Stagger>

          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point, index) => (
              <motion.div
                key={point.title}
                variants={revealScale}
                custom={0.04 * index}
                className="interactive-card rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-semibold text-white">{point.title}</p>
                  <span className="text-xs font-semibold tracking-[0.24em] text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/68">{point.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </Card>
      </Container>
    </section>
  );
}
