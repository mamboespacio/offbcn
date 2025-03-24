import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-grotek-mx-rwnd)', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: "#e7e500",
        black: "#1E1E1E",
        grey: "#8D8D8D",
        lightGrey: "#d4d4d4",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
} satisfies Config;
