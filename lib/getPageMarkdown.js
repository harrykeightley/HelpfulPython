import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const pageContentDirectory = join(process.cwd(), "content", "pages");

export function getPageBySlug(slug, fields = []) {
  const fullPath = join(pageContentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = truncatedSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}
