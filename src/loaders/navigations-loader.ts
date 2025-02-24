import { NavigationQuery } from "@/utils/queries.ts";
import type { Navigation } from "@/types.ts";

const navigationsLoader = async () => {
  const query = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: NavigationQuery,
      variables: {
        locales: ["pl"]
      }
    })
  };

  const res = await fetch(import.meta.env.HYGRAPH_ENDPOINT, query);
  const json = await res.json();
  const navigations: Navigation[] = json.data.navigations;

  return navigations;
};

export default navigationsLoader;