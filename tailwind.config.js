/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}", "./*.{astro,html,js,jsx,ts,tsx}"],
  safelist: [
    // shadcn/ui variant utilities that Tailwind might miss (attribute/data variants)
    "data-[active=true]:bg-accent/50",
    "data-[state=open]:bg-accent/50",
    "data-[active=true]:text-accent-foreground",
    "data-[state=open]:text-accent-foreground",
    "data-[state=open]:zoom-in-90",
    "data-[state=open]:zoom-in-95",
    "data-[state=closed]:zoom-out-95",
    "data-[state=open]:fade-in-0",
    "data-[state=closed]:fade-out-0",
    "data-[state=open]:animate-in",
    "data-[state=closed]:animate-out",
    "[&[data-state=open]>svg]:rotate-180",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
