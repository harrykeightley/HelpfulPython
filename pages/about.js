import React from "react";
import MarkdownArticle from "../components/MarkdownArticle";
import { getPageBySlug } from "../lib/getPageMarkdown";
import markdownToHtml from "../lib/markdownToHtml";

const authors = [
  { name: "Ashleigh Richardson", image: "/authors/ash.png" },
  { name: "Harry Keightley", image: "/authors/harry.jpg" },
];

export default function about({ content }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="flex justify-evenly items-center">
        {authors.map(({ name, image }) => (
          <div key={name} className="flex flex-col items-center space-y-2">
            <div
              className="rounded-full h-52 w-52 bg-right-top bg-cover"
              style={{ backgroundImage: `url(${image})` }}
              alt="author image"
            />
            <p className="font-semibold text-gray-600">{name}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 ">
        <MarkdownArticle markdownPage={content} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const home = getPageBySlug("about", ["title", "date", "author", "content"]);
  const content = await markdownToHtml(home.content || "");

  return {
    props: { content: { ...home, content } },
  };
}
