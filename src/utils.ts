import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getFolderMarkups = (
  directory: string
): matter.GrayMatterFile<string>[] | null => {
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

export const getSlugs = (): any => {
  try {
    const pages = getFolderMarkups("/content/pages");

    return pages?.map((page) => ({
      slug: page.data.slug === "/" ? [""] : page.data.slug.split("/"),
    }));
  } catch (error) {
    return null;
  }
};

export const getBySlug = (slug: string[]) => {
  try {
    const pages = getFolderMarkups("/content/pages");
    const joinedSlug = slug.join("/");
    const page = pages?.find((page) =>
      joinedSlug === "" ? page.data.slug === "/" : page.data.slug === joinedSlug
    );
    if (page) return page.data;
  } catch (error) {
    return null;
  }
};

export const getMarkup = (
  directory: string,
  filename: string
): matter.GrayMatterFile<string> | null => {
  /* Converts specific file to a gray-matter object */
  try {
    const file = matter.read(path.join(process.cwd(), directory, filename));
    return file;
  } catch (error) {
    console.error(error);
    return null;
  }
};
