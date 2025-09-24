import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./pages/**/*.{ts,tsx,js,jsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        blossom: "#fff7fb",
        "rose-petal": "#fbe1e7",
        "rose-dust": "#f2c7d3",
        "rose-velvet": "#8a2c51",
        "berry-ink": "#3d1e3a"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"]
      },
      boxShadow: {
        blossom: "0 30px 60px -35px rgba(138, 44, 81, 0.45)",
        "petal-inner": "inset 0 1px 0 0 rgba(255, 255, 255, 0.6)"
      },
      backgroundImage: {
        "rose-gradient": "linear-gradient(135deg, rgba(255, 240, 246, 0.95), rgba(250, 215, 231, 0.95) 40%, rgba(245, 205, 232, 0.9))"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -6px, 0)" }
        },
        glow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.08)" }
        }
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        "float-slow": "float 18s ease-in-out infinite",
        glow: "glow 14s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
