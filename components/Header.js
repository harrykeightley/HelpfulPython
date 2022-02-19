import Link from "next/link";
import React from "react";

const links = [
  { name: "Home", link: "/" },
  { name: "Course", link: "/course" },
];

export default function Header() {
  return (
    <div className="bg-blue-200 ">
      <div className="max-w-5xl mx-auto h-20 flex justify-between items-center">
        <p className="text-3xl text-blue-700">Python Course</p>
        <ul className="flex space-x-8">
          {links.map(({ name, link }) => (
            <Link key={name} href={link} passHref={true}>
              <li className="cursor-pointer">{name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
