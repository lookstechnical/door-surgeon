const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const getFolderMarkups = (directory) => {
  /* Converts all files in a directory to gray-matter objects */
  try {
    const directoryPath = path.join(process.cwd(), directory);
    const files = fs.readdirSync(directoryPath);

    return files.map((filename) => {
      const filePath = path.join(directoryPath, filename);
      const data = matter.read(filePath);
      return data;
    });
  } catch (error) {
    return null;
  }
};

const getSlugs = () => {
  try {
    const pages = getFolderMarkups("/content/pages");

    return pages?.map((page) => ({
      slug: page.data.slug === "/" ? [""] : page.data.slug.split("/"),
    }));
  } catch (error) {
    return null;
  }
};

const slugs = getSlugs();

const trimTrailingSlash = (url) => url.replace(/\/$/, "");

const getLastMod = (slug) => {
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

// List of static pages

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${slugs
    .map(
      (page) => `
    <url>
      <loc>${trimTrailingSlash(
        `https://www.thedoorsurgeon.co.uk/${page.slug.join("/")}`
      )}</loc>
      <lastmod>${getLastMod(page.slug)}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`
    )
    .join("")}
</urlset>`;

// Save sitemap to public directory
fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap);
