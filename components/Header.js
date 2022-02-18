import Link from "next/link";
import React from "react";

const links = [
  { name: "Home", link: "/" },
  { name: "Course", link: "/course" },
];

export default function Header() {
  return (
    <div className="h-20 bg-blue-200 flex justify-between items-center px-8">
      <p>Header</p>
      <ul className="flex space-x-4">
        {links.map(({ name, link }) => (
          <Link key={name} href={link} passHref={true}>
            <li className="cursor-pointer">{name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
