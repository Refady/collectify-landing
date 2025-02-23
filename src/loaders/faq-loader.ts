import { FaqsQuery } from "@/utils/queries.ts";
import type { FAQItem } from "@/types.ts";

const faqLoader = async () => {
  const query = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: FaqsQuery,
      variables: {
        locales: ["pl"]
      }
    })
  };
  
  const res = await fetch(import.meta.env.HYGRAPH_ENDPOINT, query);
  const json = await res.json();
  const faqs: FAQItem[] = json.data.faqs;

  return faqs;
};

export default faqLoader;