import React from "react";
import Image from "next/image";
import Link from "next/link";

const ACCESSORIES = [
  {
    link: "/images/bck3.jpg",
    description: "lorem lorem lorem",
    price: "GHS 450",
    status: "sold",
  },
  {
    link: "/images/bck5.jpg",
    description: "lorem lorem lorem",
    price: "GHS 450",
    status: "sold",
  },
  {
    link: "/images/bck17.jpg",
    description: "lorem lorem lorem",
    price: "GHS 600",
    status: "available",
  },
  {
    link: "/images/bck18.jpg",
    description: "lorem lorem lorem",
    price: "GHS 600",
    status: "available",
  },
];

export default function Sneaker() {
  return (
    <section>
      <h3 className="text-5xl font-serif capitalize text-gray-500 mt-24 mb-10 ml-14 text-center">
        Sneakers & Shoes
      </h3>
      <div className="w-full grid grid-cols-4 ">
        {ACCESSORIES.map((shoes, i) => (
          <div
            key={i}
            className="flex flex-col items-center transform transition-transform duration-700 ease-in-out hover:scale-110"
          >
            <Image
              src={shoes.link}
              alt="sneakers"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
            <div className="items-center justify-center flex flex-col my-6 italic text-gray-500">
              <p>{shoes.description}</p>
              <p>{shoes.price}</p>
              <p>{shoes.status}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/shoes">
        <div className="flex items-center justify-center mt-3 mb-20">
          <button className="text-white bg-yellow-800 hover:bg-yellow-700 p-3 rounded-3xl px-7">
            View More
          </button>
        </div>
      </Link>
    </section>
  );
}
