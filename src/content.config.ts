import { defineCollection } from "astro:content";
import faqLoader from "@/loaders/faq-loader.ts";
import featuresLoader from "@/loaders/features-loader.ts";
import authorsLoader from "@/loaders/authors-loader.ts";

const faqs = defineCollection({
  loader: faqLoader
});

const features = defineCollection({
  loader: featuresLoader
});

const authors = defineCollection({
  loader: authorsLoader
});

export const collections = { faqs, features, authors };