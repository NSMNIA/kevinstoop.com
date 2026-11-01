import { getCollection, type CollectionEntry } from "astro:content";

export async function getPosts(): Promise<CollectionEntry<"writing">[]> {
  const posts = await getCollection("writing", ({ data }) =>
    import.meta.env.PROD ? data.draft !== true : true,
  );

  return posts.toSorted((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
