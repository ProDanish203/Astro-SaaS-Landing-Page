/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      heading: "Inter, sans-serif",
      body: "Karla, sans-serif",
    },
    extend: {
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
