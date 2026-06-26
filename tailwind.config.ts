import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FF69B4",
                secondary: "#FFD6E8",
                light: "#FFF9FB"
            },
            fontFamily: {
                sans: ["Plus Jakarta Sans", "sans-serif"]
            }
        }
    },
    plugins: []
};

export default config;