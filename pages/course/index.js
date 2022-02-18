import React from "react";
import SideNav from "../../components/SideNav";
import { getAllPosts } from "../../lib/getMarkdownFiles";

export default function Course({allPosts}) {
  return (
    <div>
      <SideNav posts={allPosts}/>
      <p>Content</p>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug", "author"]);

  return {
    props: { allPosts },
  };
}
