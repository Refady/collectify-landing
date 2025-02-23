import { defineCollection } from "astro:content";
import faqLoader from "@/loaders/faq-loader.ts";
import featuresLoader from "@/loaders/features-loader.ts";

const faqs = defineCollection({
  loader: faqLoader
});

const features = defineCollection({
  loader: featuresLoader
});

export const collections = { faqs, features };