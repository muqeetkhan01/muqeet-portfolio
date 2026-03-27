import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none";
  const styles: Record<Variant, string> = {
    primary:
      "bg-white text-ink-900 hover:bg-[#fff4dd] shadow-glow",
    secondary:
      "glass surface-outline text-white hover:bg-white/12 shadow-soft",
    ghost:
      "text-white/80 hover:text-white hover:bg-white/5"
  };
  return <button className={cn(base, styles[variant], className)} {...props} />;
}
