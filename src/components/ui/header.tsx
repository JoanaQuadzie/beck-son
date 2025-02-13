import Link from "next/link";
import React from "react";

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
      <header className="pl-14 h-20 bg-black text-white relative">
        <nav className="flex absolute top-11 w-full justify-between items-center">
          <ul className="hidden md:flex gap-5 text-base">
            {" "}
            {NAVLINKS.map(({ title, link }) => (
              <li key={link}>
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center mr-24">
            <ul className="flex gap-5 text-base mr-10">
              <li>Services</li>
              <li>Ads</li>
              <li>Visit Us</li>
            </ul>
          </div>
        </nav>
      </header>

      <header>
        <nav className="flex py-3 ml-14">
          <ul className="hidden md:flex gap-5 text-base ">
            {" "}
            {NAVLINKSANNEX.map(({ title, link }) => (
              <li key={link}>
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>

          <div className="ml-96">
            <Link href="/login">
              <h2 className="text-base font-semibold">Logout</h2>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
