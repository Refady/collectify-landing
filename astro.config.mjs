// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify/functions"; // Netlify Functions adapter

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  adapter: netlify({}), // Enables SSR on Netlify Functions
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
