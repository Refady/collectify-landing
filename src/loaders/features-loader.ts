import { FeaturesQuery } from "@/utils/queries.ts";
import type { FeatureQueryResult } from "@/types.ts";

const featuresLoader = async () => {
  const query = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: FeaturesQuery,
      variables: {
        locales: ["pl"]
      }
    })
  };

  const res = await fetch(import.meta.env.HYGRAPH_ENDPOINT, query);
  const json = await res.json();
  const faqs: FeatureQueryResult[] = json.data.features;

  return faqs;
};

export default featuresLoader;