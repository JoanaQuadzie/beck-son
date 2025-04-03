"use client";
import Link from "next/link";
import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { MdHelpOutline } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import Search from "./search";

const NAVLINKS = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about-us" },
  { title: "Shop", link: "/shop" },
  { title: "Flash Sales", link: "/flash sales" },
  { title: "Visit Us", link: "/contact" },
];

const NAVLINKSANNEX = [
  { title: "New In", link: "/new in" },
  { title: "African Designs", link: "/african designs" },
  { title: "Corporate", link: "/corporate" },
  { title: "Casuals", link: "/casuals" },
  { title: "More", link: "/more" },
];

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex w-full justify-between items-center p-4 bg-green-700 ">
        <ul className="hidden md:flex gap-5 text-white">
          {NAVLINKS.map(({ title, link }, i) => (
            <li key={i}>
              <Link href={link}>{title}</Link>
            </li>
          ))}
        </ul>

        <div>
          <Search />
        </div>

        <ul className="flex gap-5 items-center text-white">
          <li>
            <button className="flex items-center gap-2 hover:text-yellow-400">
              <MdHelpOutline size={30} />
              Help
              <RiArrowDropDownLine size={30} />
            </button>
          </li>
          <li>
            <button className="flex items-center gap-2 hover:text-yellow-400">
              <TiShoppingCart size={30} />
              Cart
            </button>
          </li>
        </ul>
      </div>

      <nav className="hidden md:flex p-3">
        <ul className="flex gap-5">
          {" "}
          {NAVLINKSANNEX.map(({ title, link }, i) => (
            <li key={i}>
              <Link href={link}>{title}</Link>
            </li>
          ))}
        </ul>

        {/* <div className="ml-96">
            <Link href="/login">
              <h2 className= font-semibold">Logout</h2>
            </Link>
          </div> */}
      </nav>
    </header>
  );
}
