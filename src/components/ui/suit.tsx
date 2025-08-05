import React from "react";
import Link from "next/link";
import Image from "next/image";

const SUITS = [
  {
    link: "/images/suit14.jpg",
    description: "lorem lore lorem lorem",
    price: "GHS 1200",
    status: "available",
  },
  {
    link: "/images/suit2.jpg",
    description: "lorem lore lorem lorem",
    price: "GHS 950",
    status: "available",
  },
  {
    link: "/images/suit8.jpg",
    description: "lorem lore lorem lorem",
    price: "GHS 800",
    status: "available",
  },
  {
    link: "/images/suit13.jpg",
    description: "lorem lore lorem lorem",
    price: "GHS 900",
    status: "available",
  },
];

export default function Suit() {
  return (
    <section>
      <h3 className="text-5xl font-serif capitalize text-gray-500 mt-24 mb-10 ml-14 text-center">
        Suits
      </h3>
      <div className="w-full grid grid-cols-4 ">
        {SUITS.map((suit, i) => (
          <div
            key={i}
            className="flex flex-col items-center transform transition-transform duration-700 ease-in-out hover:scale-110"
          >
            <Image
              src={suit.link}
              alt="sneakers"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
            <div className="items-center justify-center flex flex-col my-6 italic text-gray-500">
              <p>{suit.description}</p>
              <p>{suit.price}</p>
              <p>{suit.status}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-3 mb-20">
        <Link href="/suit">
          <button className="text-white bg-yellow-800 hover:bg-yellow-700 p-3 rounded-3xl px-7">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
}
