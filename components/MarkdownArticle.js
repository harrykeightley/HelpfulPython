import React from "react";

export default function MarkdownArticle({ markdownPage }) {
  return (
    <article
      className="prose lg:prose-xl max-w-none"
      dangerouslySetInnerHTML={{ __html: markdownPage.content }}
    />
  );
}
