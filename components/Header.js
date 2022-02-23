import Link from "next/link";
import React from "react";

const links = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/about" },
  { name: "Course", link: "/course" },
];

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-green-200 ">
      <div className="container h-20 flex justify-between items-center">
        <Link href="/" passHref>
          <p className="text-2xl text-gray-700 font-bold cursor-pointer">
            🤗 <span className="text-blue-600">Helpful</span>Python 🐍
          </p>
        </Link>
        <ul className="flex space-x-8">
          {links.map(({ name, link }) => (
            <Link key={name} href={link} passHref={true}>
              <li className="font-semibold text-slate-700 cursor-pointer">
                {name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
