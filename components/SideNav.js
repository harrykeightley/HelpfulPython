import Link from "next/link";
import React from "react";

export default function SideNav({ posts }) {
  return (
    <div className="w-60 h-full mt-4">
      <div className="sticky top-0 h-full">
        <p className="mb-4 font-bold">Course Outline</p>
        <ul
          className="grid grid-cols-1 border shadow-md 
        shadow-slate-300 rounded-lg px-2 bg-slate-200 divide-y divide-slate-300"
        >
          {posts.map((post, index) => (
            <Link key={post.title} href={`/course/${post.slug}`} passHref>
              <li className="cursor-pointer text-blue-500 py-2">
                {post.order} {post.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
