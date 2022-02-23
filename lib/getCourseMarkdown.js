import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const courseContentDirectory = join(process.cwd(), "content", "course");

function slugSeparator(slug) {
  return slug.split("_");
}

function getTrunactedSlug(slug) {
  const [_, name] = slugSeparator(slug);
  return name.replace(/\.md$/, "");
}

function getSlugs(dir) {
  return fs.readdirSync(dir);
}

const contentSlugMap = getSlugs(courseContentDirectory).reduce(
  (result, slug) => ({
    ...result,
    [getTrunactedSlug(slug)]: slug,
  }),
  {}
);

export function getPostBySlug(truncatedSlug, fields = []) {
  const slug = contentSlugMap[truncatedSlug];
  const [order, _] = slugSeparator(slug);

  const fullPath = join(courseContentDirectory, slug);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "order") {
      items[field] = order;
    }
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

export function getAllPosts(fields = []) {
  const truncatedSlugs = Object.keys(contentSlugMap);
  const posts = truncatedSlugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.order > post2.order ? 1 : -1));
  return posts;
}
