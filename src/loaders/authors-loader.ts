import type { Author } from "@/types.ts";
import { AuthorsQuery } from "@/utils/queries.ts";

const authorsLoader = async () => {
  const query = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: AuthorsQuery,
      variables: {
        locales: ["pl"]
      }
    })
  };

  const res = await fetch(import.meta.env.HYGRAPH_ENDPOINT, query);
  const json = await res.json();
  const authors: Author[] = json.data.authors;

  return authors;
};

export default authorsLoader;