import { SITE_DESCRIPTION, SITE_TITLE } from "@/consts";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";

export function GET(context: APIContext) {
  const { site } = context;
  if (!site) {
    throw Error("Failed to generate feed.xml because there is no site set.");
  }

  // TODO: Populate items from a content collection, e.g.:
  //
  // import { getCollection } from "astro:content";
  // const posts = await getCollection("posts");
  //
  // items: posts.map((post) => ({
  //     title: post.data.title,
  //     description: post.data.description,
  //     pubDate: post.data.pubDate,
  //     link: `/${post.id}`,
  // })),

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION ?? "",
    site,
    items: [],
  });
}
