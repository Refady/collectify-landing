import { PagesQuery } from "@/utils/queries.ts";
import type { Page } from "@/types.ts";

const pagesLoader = async () => {
  const query = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: PagesQuery,
      variables: {
        locales: ["pl"]
      }
    })
  };

  const res = await fetch(import.meta.env.HYGRAPH_ENDPOINT, query);
  const json = await res.json();
  const pages: Page[] = json.data.pages;

  return pages.map(page => {
    return {
      id: page.slug,
      ...page
    };
  });
};

export default pagesLoader;