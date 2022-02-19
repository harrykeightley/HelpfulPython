import Link from "next/link";
import React from "react";

export default function SideNav({ posts }) {
  return (
    <div className="w-60 h-full mt-4">
      <div className="sticky top-0 h-full">
        <p className="mb-4 font-bold">Course Outline</p>
        <ul className="flex flex-col space-y-2 border rounded-lg p-2 bg-slate-200">
          {posts.map((post, index) => (
            <Link key={post.title} href={`/course/${post.slug}`} passHref>
              <li className="cursor-pointer text-blue-500">{post.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
