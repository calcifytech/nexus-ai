import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                neon: "var(--neon)",
            },
            fontFamily: {
                inter: ["var(--font-inter)"],
            },
        },
    },
    plugins: [],
};
export default config;
