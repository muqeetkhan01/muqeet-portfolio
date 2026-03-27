"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Stagger, revealScale, revealUp } from "@/components/ui/Motion";
import { site } from "@/data/site";

export function Contact() {
  const wa = useMemo(() => `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`, []);
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client…");
  }

  return (
    <section id="contact" className="pt-16 sm:pt-20 pb-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12">
          <Stagger className="lg:col-span-5">
            <motion.p variants={revealUp} className="text-xs font-semibold tracking-[0.22em] text-white/55">
              CONTACT
            </motion.p>
            <motion.h2 variants={revealUp} className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Let&apos;s build something premium
            </motion.h2>
            <motion.p variants={revealUp} className="mt-3 text-white/70">
              Tell me what you&apos;re building. I&apos;ll respond with clear next steps and a solid plan.
            </motion.p>

            <div className="mt-6 grid gap-3">
              <motion.a
                variants={revealScale}
                href={`tel:${site.phone}`}
                className="interactive-card glass surface-outline rounded-[28px] px-5 py-4"
              >
                <p className="text-sm font-semibold text-white">Click to call</p>
                <p className="mt-1 text-sm text-white/70">{site.phone}</p>
              </motion.a>
              <motion.a
                variants={revealScale}
                href={`mailto:${site.email}`}
                className="interactive-card glass surface-outline rounded-[28px] px-5 py-4"
              >
                <p className="text-sm font-semibold text-white">Click to email</p>
                <p className="mt-1 text-sm text-white/70">{site.email}</p>
              </motion.a>
              <motion.a
                variants={revealScale}
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="interactive-card glass surface-outline rounded-[28px] px-5 py-4"
              >
                <p className="text-sm font-semibold text-white">WhatsApp</p>
                <p className="mt-1 text-sm text-white/70">{site.whatsapp}</p>
              </motion.a>
            </div>
          </Stagger>

          <RevealCard>
            <Card className="spotlight p-6 sm:p-8">
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-[24px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/65">
                  <span>Email opens with your message prefilled.</span>
                  <span className="rounded-full border border-[#f8c46a]/20 bg-[#f8c46a]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffe0a0]">
                    No backend needed
                  </span>
                </div>

                <div className="grid gap-2">
                  <label className="text-sm text-white/80" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    className="input-surface rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm text-white/80" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="input-surface rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm text-white/80" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="input-surface rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                  <Button type="submit">Send Message</Button>
                  <a href={wa} target="_blank" rel="noreferrer">
                    <Button type="button" variant="secondary">WhatsApp Me</Button>
                  </a>
                  {status ? <p className="text-sm text-white/60">{status}</p> : null}
                </div>

                <p className="text-xs text-white/45">
                  This form opens your email client (no backend required). If you want a real backend form, tell me and I’ll add it.
                </p>
              </form>
            </Card>
          </RevealCard>
        </div>
      </Container>
    </section>
  );
}

function RevealCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="lg:col-span-7"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
