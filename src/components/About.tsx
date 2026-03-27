"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Stagger, revealScale, revealUp } from "@/components/ui/Motion";

const workFlow = [
  "Clear requirements become practical product decisions.",
  "UI polish is treated like part of the product, not decoration.",
  "Scalable architecture keeps launches fast and maintenance sane.",
  "Ownership extends from concept to delivery."
];

export function About() {
  return (
    <section id="about" className="pt-16 sm:pt-20">
      <Container>
        <Card className="spotlight p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12">
            <Stagger className="lg:col-span-7 prose-premium">
              <motion.p variants={revealUp} className="text-xs font-semibold tracking-[0.22em] text-white/55">
                ABOUT
              </motion.p>
              <motion.h2 variants={revealUp} className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Building premium products with a full-stack mindset
              </motion.h2>

              <motion.div variants={revealUp} className="mt-5 space-y-4">
                <p>
                  I am a full stack developer focused on creating mobile applications of all kinds,
                  from product-based apps to complete business systems and SaaS platforms.
                </p>
                <p>
                  With a decade of mobile app experience, I build end-to-end solutions: polished UI,
                  scalable backends, admin dashboards, integrations, and AI-powered features where they add real value.
                </p>
                <p>
                  My goal is simple: deliver professional, high-quality products that look premium,
                  perform fast, and help businesses grow.
                </p>
              </motion.div>

              <motion.div variants={revealUp} className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">10+</p>
                  <p className="mt-2 text-sm text-white/60">years building consumer and business products</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">Mobile + web</p>
                  <p className="mt-2 text-sm text-white/60">delivery across apps, systems, and dashboards</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">AI-ready</p>
                  <p className="mt-2 text-sm text-white/60">features added where they improve outcomes</p>
                </div>
              </motion.div>
            </Stagger>

            <Stagger className="lg:col-span-5">
              <motion.div variants={revealScale} className="grid gap-3">
                <Badge>Mobile Apps - 10+ years</Badge>
                <Badge>Full-Stack Delivery</Badge>
                <Badge>SaaS and Business Systems</Badge>
                <Badge>AI-Powered Features</Badge>
                <Badge>Admin Panels and Dashboards</Badge>
                <Badge>API Integrations</Badge>
              </motion.div>

              <motion.div variants={revealScale} className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-white">How I work</p>
                <div className="mt-4 space-y-4">
                  {workFlow.map((item, index) => (
                    <div key={item} className="flex gap-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-white/70">
                        0{index + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-white/68">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Stagger>
          </div>
        </Card>
      </Container>
    </section>
  );
}
