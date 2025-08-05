import React from "react";
import Image from "next/image";
import Link from "next/link";

const SHIRTS = [
  {
    link: "/images/bck11.jpg",
    description: "Black and White box design",
    price: "GHS 220",
    status: "New",
  },
  {
    link: "/images/bck12.jpg",
    description: "Red striped box design shirt",
    price: "GHS 220",
    status: "New",
  },
  {
    link: "/images/bck7.jpg",
    description: "Vintage black design shirt",
    price: "GHS 220",
    status: "sold",
  },
  {
    link: "/images/bck13.jpg",
    description: "See me plain design shirt",
    price: "GHS 220",
    status: "sold",
  },
];

export default function DesignShirt() {
  return (
    <section>
      <h3 className="text-5xl capitalize text-gray-500 mt-24 mb-10 ml-14 text-center font-serif">
        design shirts
      </h3>
      <div className="grid grid-cols-4 w-full ">
        {SHIRTS.map((photo, i) => (
          <div
            key={i}
            className="flex flex-col items-center transform transition-transform duration-700 ease-in-out hover:scale-110"
          >
            <Image
              src={photo.link}
              alt="kaftan"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
            <div className="items-center justify-center flex flex-col my-6 italic text-gray-500">
              <p>{photo.description}</p>
              <p>{photo.price}</p>
              <p>{photo.status}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-3">
        <Link href="/shirt">
          <button className="text-white bg-yellow-800 hover:bg-yellow-700 p-3 rounded-3xl px-7">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
}
