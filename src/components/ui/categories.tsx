import React from "react";
import Image from "next/image";

const IMAGES = [
  "/images/bck10.jpg",
  "/images/bck2.jpg",
  "/images/bck9.jpg",
  "/images/bck14.jpg",
  "/images/bck11.jpg",
  "/images/bck12.jpg",
  "/images/bck7.jpg",
  "/images/bck13.jpg",
];
const ACCESSORIES = [
  "/images/bck3.jpg",
  "/images/bck5.jpg",
  "/images/bck17.jpg",
  "/images/bck18.jpg",
];

export default function Categories() {
  return (
    <div className="">
      <div className="mt-36 my-14">
        <h2 className="text-4xl mt-12 mb-4 text-gray-600 text-center uppercase">
          Categories
        </h2>
        <p className="text-center  w-2/4 italic mb-14 ml-96">
          Enhance your professional presence with our curated selection of
          outfits, designed to help you exude confidence and showcase your best
          self!
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-7 w-11/12 rounded-full ">
          {IMAGES.map((photo) => (
            <Image
              src={photo}
              alt="kaftan"
              layout="responsive"
              width={5}
              height={5}
            />
          ))}
        </div>

        {/* <div className="w-11/12">
          {ACCESSORIES.map((shoes) => (
            <Image
              src={shoes}
              alt="sneakers"
              layout="responsive"
              width={5}
              height={5}
            />
          ))}
        </div> */}
      </div>
      <div className="flex items-center justify-center my-10">
        <button className="text-white bg-yellow-800 hover:bg-yellow-600 p-3 rounded-2xl px-7">
          View More
        </button>
      </div>
    </div>
  );
}
