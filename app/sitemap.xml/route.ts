// app/sitemap.xml/route.ts

import { getSlugs } from "@/src/utils";
import path from "path";
import * as fs from "fs";

export const runtime = "nodejs";
export const revalidate = 0;

const trimTrailingSlash = (url: string) => url.replace(/\/$/, "");

const getLastMod = (slug: string[]) => {
  const filePath = path.join(
    process.cwd(),
    "content",
    "pages",
    `${slug[slug.length - 1] || "home"}.md`
  ); // Adjust path based on build output
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString(); // Convert to proper lastmod format
  } catch (error) {
    return new Date().toISOString(); // Default to current date if file not found
  }
};

export async function GET() {
  const { getServerSideSitemap } = await import("next-sitemap");
  const slugs = getSlugs();
  const pages = slugs.map((slug: { slug: string[] }) => {
    return {
      loc: trimTrailingSlash(
        `https://www.thedoorsurgeon.co.uk/${slug.slug.join("/")}`
      ),
      lastmod: getLastMod(slug.slug),
      changefreq: "daily",
    };
  });

  return getServerSideSitemap(pages);
}
