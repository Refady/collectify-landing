import { defineCollection } from "astro:content";
import faqLoader from "@/loaders/faq-loader.ts";
import featuresLoader from "@/loaders/features-loader.ts";
import authorsLoader from "@/loaders/authors-loader.ts";
import navigationsLoader from "@/loaders/navigations-loader.ts";

const faqs = defineCollection({
  loader: faqLoader
});

const features = defineCollection({
  loader: featuresLoader
});

const authors = defineCollection({
  loader: authorsLoader
});

const navigations = defineCollection({
  loader: navigationsLoader
});

export const collections = { faqs, features, authors, navigations };