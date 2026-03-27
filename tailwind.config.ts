import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Arial"]
      },
      colors: {
        ink: {
          950: "#060810",
          900: "#0B0F17",
          800: "#0E1420",
          700: "#121A2A"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,.35)",
        glow: "0 0 0 1px rgba(255,255,255,.08), 0 20px 60px rgba(0,0,0,.35)"
      }
    }
  },
  plugins: []
} satisfies Config;
