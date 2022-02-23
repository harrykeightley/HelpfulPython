import React from "react";
import MarkdownArticle from "./MarkdownArticle";
import SideNav from "./SideNav";

export default function CoursePageLayout({ post, allPosts }) {
  return (
    <div className="w-full flex space-x-8 lg:space-x-10">
      <SideNav posts={allPosts} />
      <div className="flex-1">
        <MarkdownArticle markdownPage={post} />
      </div>
    </div>
  );
}
