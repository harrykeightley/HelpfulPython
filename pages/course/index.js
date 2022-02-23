import React from "react";
import CoursePageLayout from "../../components/CoursePageLayout";
import { getAllPosts } from "../../lib/getCourseMarkdown";
import { getPageBySlug } from "../../lib/getPageMarkdown";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Course(props) {
  return (
    <div className="flex">
      <CoursePageLayout {...props} />
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug", "author", "order"]);
  const introduction = getPageBySlug("introduction", [
    "title",
    "date",
    "author",
    "content",
  ]);

  const content = await markdownToHtml(introduction.content || "");

  return {
    props: { allPosts, post: { ...introduction, content } },
  };
}
