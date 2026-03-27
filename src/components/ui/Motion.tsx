"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "-120px" } as const;

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay, ease }
  })
};

export const revealScale: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96, filter: "blur(10px)" },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay, ease }
  })
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04
    }
  }
};

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  variant?: "up" | "scale";
};

export function Reveal({
  className,
  children,
  delay = 0,
  variant = "up",
  ...props
}: RevealProps) {
  const variants = variant === "scale" ? revealScale : revealUp;

  return (
    <motion.div
      className={cn(className)}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  className,
  children,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={staggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  );
}
