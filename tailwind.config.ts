import { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./theme.config.tsx",
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "var(--font-noto-sans-jp)",
          ...fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
