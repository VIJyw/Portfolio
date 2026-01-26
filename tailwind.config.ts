import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          hover: "var(--primary-hover)",
        },
        secondary: "var(--secondary)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
        },
        muted: "var(--muted)",
        border: "var(--border)",
        // New color palette
        navy: {
          DEFAULT: "#2A5C8E",
          light: "#3A6CA8",
          hover: "#4A7CC2",
          10: "rgba(42, 92, 142, 0.1)",
          15: "rgba(42, 92, 142, 0.15)",
          25: "rgba(42, 92, 142, 0.25)",
        },
        orange: {
          DEFAULT: "#A86C4A",
          light: "#B87C5A",
          hover: "#C88C6A",
          10: "rgba(168, 108, 74, 0.1)",
          15: "rgba(168, 108, 74, 0.15)",
          25: "rgba(168, 108, 74, 0.25)",
        },
        gray: {
          light: "#F2F2F2",
          DEFAULT: "#404040",
          dark: "#4F555A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        fancy: ["var(--font-playfair)", "Georgia", "serif"],
      },
      fontSize: {
        "4xl": ["2.5rem", { lineHeight: "3rem", letterSpacing: "-0.01em" }],
        "5xl": ["3rem", { lineHeight: "3.5rem", letterSpacing: "-0.02em" }],
        "6xl": ["4rem", { lineHeight: "4.5rem", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        lg: "12px",
        xl: "16px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "stagger": "stagger 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        stagger: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
