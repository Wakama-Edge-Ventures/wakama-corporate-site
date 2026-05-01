import type {Config} from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundDeep: "#070A12",
        navy: "#0B1020",
        panelDark: "#11182A",
        softLight: "#F7FAFC",
        cyanLogo: "#63E0E8",
        skyBlue: "#8FB8F8",
        violetLogo: "#B58BE8",
        mintCta: "#35F59B",
        wakamaGreen: "#21D882",
        orangeAccent: "#FF7A1A",
        ink: "#101828",
        muted: "#667085",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-sora)", "Sora", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 42px rgba(53, 245, 155, 0.18)",
        panel: "0 24px 80px rgba(7, 10, 18, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
