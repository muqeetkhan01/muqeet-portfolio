"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    className: "left-[8%] top-[12%] h-56 w-56 bg-sky-400/18",
    x: [0, 40, -20, 0],
    y: [0, -30, 24, 0],
    scale: [1, 1.12, 0.96, 1],
    duration: 18
  },
  {
    className: "right-[10%] top-[8%] h-72 w-72 bg-amber-300/14",
    x: [0, -34, 16, 0],
    y: [0, 30, -16, 0],
    scale: [1, 0.92, 1.08, 1],
    duration: 22
  },
  {
    className: "bottom-[10%] left-[28%] h-80 w-80 bg-cyan-300/10",
    x: [0, 26, -12, 0],
    y: [0, -18, 26, 0],
    scale: [1, 1.06, 0.94, 1],
    duration: 24
  }
];

export function PageBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_34%),radial-gradient(circle_at_18%_18%,_rgba(56,189,248,0.14),_transparent_28%),radial-gradient(circle_at_82%_10%,_rgba(245,158,11,0.16),_transparent_30%),radial-gradient(circle_at_50%_72%,_rgba(103,232,249,0.08),_transparent_36%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.11)_1px,transparent_1px)] [background-size:140px_140px] [mask-image:radial-gradient(circle_at_center,black,transparent_74%)]" />

      {orbs.map((orb) => (
        <motion.div
          key={orb.className}
          className={`absolute rounded-full blur-3xl ${orb.className}`}
          animate={{ x: orb.x, y: orb.y, scale: orb.scale }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,8,16,0)_0%,rgba(6,8,16,0.22)_35%,rgba(6,8,16,0.82)_100%)]" />
    </div>
  );
}
