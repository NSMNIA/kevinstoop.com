// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Geist",
      cssVariable: "--font-sans",
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["latin"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Geist Mono",
      cssVariable: "--font-geist-mono",
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["latin"],
    },
  ],
  site: "https://kevinstoop.com",
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light-default",
        dark: "vesper",
      },
    },
  },
  integrations: [
    sitemap({
      changefreq: "monthly",
      priority: 1,
      lastmod: new Date(),
    }),
    mdx(),
  ],
});
