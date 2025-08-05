import React from "react";
import Image from "next/image";

const IMAGES = [
  {
    src: "/images/bck24.jpg",
    alt: "Partner 1",
  },
  {
    src: "/images/bck22.jpg",
    alt: "Partner 2",
  },
  {
    src: "/images/bck23.jpg",
    alt: "Partner 3",
  },
  {
    src: "/images/bck25.jpg",
    alt: "Partner 4",
  },
  {
    src: "/images/bck26.jpg",
    alt: "Partner 5",
  },
  {
    src: "/images/bck27.jpg",
    alt: "Partner 6",
  },
];

export default function Partners() {
  return (
    <div>
      <h2 className="text-5xl mb-4 mt-32 text-center font-serif uppercase text-gray-600">
        Our Partners
      </h2>
      <p className="text-center italic w-2/4 ml-96">
        Collaborating with industry leaders to drive innovation and deliver
        exceptional value. Building trusted relationships that empower growth
        and shared success worldwide.
      </p>
      <div className="grid grid-cols-3 w-2/3 items-center ml-60">
        <div></div>
        <Image
          src="/images/bck24.jpg"
          alt="hero image"
          width={200}
          height={200}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
}
