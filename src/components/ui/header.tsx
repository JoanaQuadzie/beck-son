import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

const NAVLINKS = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about-us" },
  { title: "Shop", link: "/shop" },
  { title: "Flash Sales", link: "/flash sales" },
  { title: "Best Selling", link: "/best selling" },
];

export default function Header() {
  return (
    <div>
      <header className="border-b border-b-primary px-6 py-4 bg-yellow-300 text-black font-semibold text-lg">
        <p className="text-center">
          Our collection of best shirts combines quality and style at an
          affordable prices.
        </p>
      </header>

      <header className="border-b border-b-primary px-6 py-10 bg-black text-white justify-end items-end">
        <nav className="flex ">
          <ul className="hidden md:flex gap-5 text-lg">
            {" "}
            {NAVLINKS.map(({ title, link }) => (
              <li key={link}>
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>

          <div className="justify-end items-end">
            <ul className="flex gap-5 text-lg">
              <li>Services</li>
              <li>Ads</li>
            </ul>
          </div>

          <button className="border-4 border-yellow-300 rounded-xl px-12 py-1">
            <FaSearch />
            Search
          </button>
        </nav>
      </header>
    </div>
  );
}
