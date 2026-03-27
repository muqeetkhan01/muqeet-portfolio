"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function SectionHeading({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        className="mb-8"
      >
        <p className="text-xs font-semibold tracking-[0.22em] text-white/55">{eyebrow.toUpperCase()}</p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? <p className="mt-3 max-w-2xl text-white/70">{subtitle}</p> : null}
      </motion.div>
    </Container>
  );
}
