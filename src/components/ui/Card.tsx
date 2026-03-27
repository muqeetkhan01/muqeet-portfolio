import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("glass surface-outline rounded-[28px] shadow-soft", className)}>{children}</div>;
}
