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
    <div className="relative">
      <header className="pl-14 h-24 bg-yellow-700 text-white flex absolute top-11 w-full justify-between items-center">
        <nav className="flex justify-between items-center">
          <ul className="hidden md:flex gap-5 text-base">
            {NAVLINKS.map(({ title, link }, index) => (
              <li key={index}>
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <Search />
        </div>

        <div className="flex items-center mr-24">
          <ul className="flex gap-5 text-base mr-10">
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
      </header>

      <header>
        <nav className="flex py-3 ml-14">
          <ul className="hidden md:flex gap-5 text-base ">
            {NAVLINKSANNEX.map(({ title, link }, index) => (
              <li key={index}>
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>

          {/* <div className="ml-96">
            <Link href="/login">
              <h2 className="text-base font-semibold">Logout</h2>
            </Link>
          </div> */}
        </nav>
      </header>
    </div>
  );
}
