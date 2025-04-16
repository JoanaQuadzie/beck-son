"use client";
import Link from "next/link";
import React, { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { MdHelpOutline } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import Search from "./search";

const NAVLINKS = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about-us" },
  { title: "Shop", link: "/shop" },
  { title: "Flash Sales", link: "/flash sales" },
  { title: "Visit Us", link: "/contact" },
];

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const handleSearchComplete = () => {
    setShowSearch(false);
  };

  return (
    <div>
      <header className="pl-14 h-24 text-black relative">
        <nav className="flex absolute top-11 w-full justify-between items-center">
          <ul className="hidden md:flex gap-5 text-gray-700">
            {" "}
            {NAVLINKS.map(({ title, link }) => (
              <li key={link}>
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>

          {/* Conditionally rendered Search component */}
          <div className="text-gray-700">{showSearch && <Search />}</div>

          {/* <div className="text-gray-700">
            <Search />
          </div> */}

          <div className="flex items-center mr-24">
            <ul className="flex gap-5 text-gray-600 mr-10">
              <li>
                <button
                  className="flex items-center gap-2 hover:text-gray-400"
                  onClick={toggleSearch}
                >
                  <HiOutlineSearch size={30} />
                  Search
                </button>
              </li>
              <li>
                <button className="flex items-center gap-2 hover:text-gray-400">
                  <MdHelpOutline size={30} />
                  Help
                </button>
              </li>
              <li>
                <button className="flex items-center gap-2 hover:text-gray-400">
                  <TiShoppingCart size={30} />
                  Cart
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
