/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#29A2A1", hover: "#20626C", active: "#1C6C53" },
        secondary: { DEFAULT: "#20636D", hover: "#3C5A4E", active: "#154D44" },
        neutral: { white: "#FFFFFF", black: "#000000", gray: "#9CA3AF" },
        state: { success: "#33CC33", warning: "#DDCB25", error: "#EE0000" },
      },
      borderRadius: { xl: "12px" },
      fontFamily: {
        display: ["var(--font-montserrat)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
}


