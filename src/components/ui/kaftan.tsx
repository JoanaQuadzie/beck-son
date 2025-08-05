import React from "react";
import Link from "next/link";
import Image from "next/image";

const IMAGES = [
  {
    link: "/images/bck10.jpg",
    description: "Gray minimalist styled kaftan",
    price: "GHS 600",
    status: "sold",
  },
  {
    link: "/images/kaftan1.jpg",
    description: "Minimalist styled kaftan",
    price: "GHS 500",
    status: "available",
  },
  {
    link: "/images/bck9.jpg",
    description: "Sea blue straight kaftan",
    price: "GHS 550",
    status: "sold",
  },
  {
    link: "/images/kaftan3.jpg",
    description: "Black and White styled kaftan",
    price: "GHS 600",
    status: "sold",
  },
];

export default function Kaftan() {
  return (
    <article className="container">
      <div className="grid grid-cols-4 w-full">
        {IMAGES.map((photo, i) => (
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
        <Link href="/kaftan">
          <button className="text-white bg-yellow-800 hover:bg-yellow-700 p-3 rounded-3xl px-7">
            View More
          </button>
        </Link>
      </div>
    </article>
  );
}
