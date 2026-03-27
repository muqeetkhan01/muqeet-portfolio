"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Stagger, revealScale, revealUp } from "@/components/ui/Motion";

const services = [
  { title: "Mobile apps", desc: "High-quality iOS/Android apps with premium UX and smooth performance." },
  { title: "SaaS platforms", desc: "Subscription-ready products with auth, billing readiness, and scalability." },
  { title: "AI-integrated apps", desc: "Practical AI features that enhance user experience and automation." },
  { title: "Business systems", desc: "Complete operational tools: workflows, reporting, roles, and data control." },
  { title: "Admin panels / dashboards", desc: "Clean dashboards for managing users, content, orders, and analytics." },
  { title: "End-to-end delivery", desc: "From product planning to launch: backend, APIs, UI, and deployment." }
];

export function Services() {
  return (
    <section id="services" className="pt-16 sm:pt-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12">
          <Stagger className="lg:col-span-4">
            <motion.p variants={revealUp} className="text-xs font-semibold tracking-[0.22em] text-white/55">
              SERVICES
            </motion.p>
            <motion.h2 variants={revealUp} className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              What I build
            </motion.h2>
            <motion.p variants={revealUp} className="mt-3 text-white/70">
              Product-first development with high-end polish and scalable engineering.
            </motion.p>
          </Stagger>

          <Stagger className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => (
                <motion.div key={service.title} variants={revealScale} custom={0.04 * index}>
                  <Card className="interactive-card spotlight h-full p-6">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm font-semibold text-white">{service.title}</p>
                      <span className="text-xs font-semibold tracking-[0.24em] text-white/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/68">{service.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
