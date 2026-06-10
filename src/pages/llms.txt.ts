import { SITE_DESCRIPTION, SITE_TITLE } from "@/consts";
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
    if (!site) {
        return new Response("Site URL is not defined", { status: 500 });
    }

    // TODO: Add sections for each content collection, e.g.:
    //
    // import { getCollection } from "astro:content";
    // const posts = await getCollection("posts");
    //
    // const postsSection = [
    //     "## Posts",
    //     posts.map((p) => `- [${p.data.title}](${new URL(p.id, site)})`).join("\n"),
    // ].join("\n\n");

    const lines = [
        `# ${SITE_TITLE}`,
        SITE_DESCRIPTION ? `> ${SITE_DESCRIPTION}` : undefined,
        // TODO: Add content sections here, e.g. postsSection
    ].filter(Boolean);

    return new Response(lines.join("\n\n") + "\n", {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
};
