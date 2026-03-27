"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

export function Modal({
  open,
  onClose,
  title,
  children
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <button
            onClick={onClose}
            className="absolute inset-0 bg-black/70"
            aria-label="Close modal"
          />
          <motion.div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl glass shadow-soft"
            initial={{ y: 16, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <h3 className="text-base font-semibold">{title}</h3>
              <button
                onClick={onClose}
                className="rounded-xl px-2 py-1 text-white/70 hover:text-white hover:bg-white/5"
              >
                ✕
              </button>
            </div>
            <div className="px-6 py-5">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
