"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 pt-4">
      <Container>
        <motion.div
          layout
          className={cn(
            "flex items-center justify-between gap-4 rounded-[28px] px-4 sm:px-5",
            scrolled
              ? "glass surface-outline h-16 shadow-soft"
              : "h-[4.5rem] bg-white/[0.03] shadow-[0_12px_40px_rgba(0,0,0,.16)]"
          )}
        >
          <a href="#top" className="flex items-center gap-3">
            <motion.span
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-white/10 text-sm font-semibold shadow-soft"
            >
              MK
            </motion.span>
            <span>
              <span className="block text-[11px] uppercase tracking-[0.22em] text-white/45">
                Premium Product Builder
              </span>
              <span className="text-sm font-semibold tracking-tight">{site.name}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((it, index) => (
              <motion.a
                key={it.href}
                href={it.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 * index }}
                className="rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                {it.label}
              </motion.a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
          <a href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
            <Button variant="secondary">WhatsApp</Button>
          </a>
          <a href="#contact">
            <Button>Contact</Button>
          </a>
          </div>

          <button
            className="glass surface-outline grid h-11 w-11 place-items-center rounded-2xl md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="relative block h-4 w-5">
              <span className={cn("absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-white transition", open && "top-[7px] rotate-45")} />
              <span className={cn("absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-white transition", open && "opacity-0")} />
              <span className={cn("absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-white transition", open && "top-[7px] -rotate-45")} />
            </span>
          </button>
        </motion.div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="md:hidden"
          >
            <Container className="pt-3">
              <div className="glass surface-outline rounded-[28px] px-4 py-4 shadow-soft">
                <div className="flex flex-col">
                  {navItems.map((it) => (
                    <a
                      key={it.href}
                      href={it.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                    >
                      {it.label}
                    </a>
                  ))}
                  <div className="mt-3 flex gap-2">
                    <a className="flex-1" href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
                      <Button className="w-full" variant="secondary">WhatsApp</Button>
                    </a>
                    <a className="flex-1" href="#contact" onClick={() => setOpen(false)}>
                      <Button className="w-full">Contact</Button>
                    </a>
                  </div>
                </div>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
