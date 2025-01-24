import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

const NAVLINKS = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about-us" },
  { title: "Shop", link: "/shop" },
  { title: "Flash Sales", link: "/flash sales" },
  { title: "Best Selling", link: "/best selling" },
];

const NAVLINKSANNEX = [
  { title: "New In", link: "/new in" },
  { title: "African Designs", link: "/african designs" },
  { title: "Corporate", link: "/corporate" },
  { title: "Casuals", link: "/casuals" },
  { title: "On Sale", link: "/on sale" },
  { title: "More", link: "/more" },
];

export default function Header() {
  return (
    <div>
      <header className="border-b border-b-primary px-6 py-5 bg-yellow-400 text-black font-semibold text-lg">
        <p className="text-center text-base">
          Our collection of best shirts combines quality and style at an
          affordable prices.
        </p>
      </header>

      <header className="px-4 h-28 bg-black text-white relative">
        <div className="flex w-12 ">
          <Image
            src="/images/bcksnlogo.jpg"
            alt="Logo"
            layout="responsive"
            width={4}
            height={6}
          />
        </div>
        <nav className="flex absolute top-16 w-full justify-between items-center">
          <ul className="hidden md:flex gap-5 text-base hover:underline decoration-yellow-400 hover:text-yellow-400 underline-offset-4">
            {" "}
            {NAVLINKS.map(({ title, link }) => (
              <li key={link}>
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center">
            <ul className="flex gap-5 text-base mr-10 hover:text-yellow-400 hover:underline decoration-yellow-400 underline-offset-4">
              <li>Services</li>
              <li>Ads</li>
              <li>Visit Us</li>
            </ul>
          </div>
        </nav>
      </header>

      <header>
        <nav className="py-3 ml-4">
          <ul className="hidden md:flex gap-5 text-base hover:underline underline-offset-8">
            {" "}
            {NAVLINKSANNEX.map(({ title, link }) => (
              <li key={link}>
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
