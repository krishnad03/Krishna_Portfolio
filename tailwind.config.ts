import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./sections/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#070708",
        charcoal: "#111217",
        ember: "#ff5c22",
        blood: "#8f1010",
        gold: "#d9a441"
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-jost)", "sans-serif"]
      },
      boxShadow: {
        ember: "0 0 30px rgba(255,92,34,0.35)"
      },
      keyframes: {
        emberFloat: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.15" },
          "100%": { transform: "translateY(-100vh) scale(0.2)", opacity: "0" }
        },
        smokeDrift: {
          "0%,100%": { transform: "translateX(0)", opacity: "0.25" },
          "50%": { transform: "translateX(2.5rem)", opacity: "0.45" }
        },
        firePulse: {
          "0%,100%": { filter: "brightness(0.95)" },
          "50%": { filter: "brightness(1.15)" }
        }
      },
      animation: {
        emberFloat: "emberFloat 10s linear infinite",
        smokeDrift: "smokeDrift 14s ease-in-out infinite",
        firePulse: "firePulse 2.4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
