import React from "react";
import SideNav from "./SideNav";

export default function CoursePageLayout({ post, allPosts }) {
  return (
    <div className="flex space-x-6">
      <SideNav posts={allPosts} />
      <div className="px-2 py-4">
        <article
          className="prose lg:prose-xl "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
