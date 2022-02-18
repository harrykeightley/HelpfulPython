import React from "react";
import PostHeader from "../../components/PostHeader";
import SideNav from "../../components/SideNav";
import { getAllPosts, getPostBySlug } from "../../lib/getMarkdownFiles";
import markdownToHtml from "../../lib/markdownToHtml";

export default function CoursePage({ post, allPosts }) {
  const { title, author, date, content } = post;
  return (
    <div>
      <SideNav posts={allPosts} />
      <article
        className="prose lg:prose-xl "
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const allPosts = getAllPosts([
    "title",
    "order",
  ]);
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "order",
  ]);


  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      allPosts,
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
