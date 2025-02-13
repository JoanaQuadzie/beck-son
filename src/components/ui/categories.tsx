import React from "react";
import Image from "next/image";
import Link from "next/link";

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

export default function Categories() {
  return (
    <div className="">
      <div className="mt-36 my-14">
        <h2 className="text-5xl font-serif mt-8 mb-4 text-gray-600 text-center uppercase">
          Categories
        </h2>
        <p className="text-center  w-2/4 italic mb-14 ml-96">
          Enhance your professional presence with our curated selection of
          outfits, designed to help you exude confidence and showcase your best
          self!
        </p>
        <h3 className="text-5xl capitalize text-gray-500 mt-10 mb-5 ml-14 text-center font-serif">
          kaftans
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-7 w-11/12 rounded-full ">
          {IMAGES.map((photo) => (
            <div key={photo.link}>
              <Image
                src={photo.link}
                alt="kaftan"
                layout="responsive"
                width={5}
                height={5}
              />
              <div className="items-center justify-center flex flex-col my-6 italic text-gray-500">
                <p>{photo.description}</p>
                <p>{photo.price}</p>
                <p>{photo.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-3">
        <Link href="/kaftan">
          <button className="text-white bg-yellow-800 hover:bg-yellow-700 p-3 rounded-3xl px-7">
            View More
          </button>
        </Link>
      </div>

      <section>
        <h3 className="text-5xl font-serif capitalize text-gray-500 mt-24 mb-10 ml-14 text-center">
          Suits
        </h3>
        <div className="flex justify-center">
          <div className="w-11/12 grid grid-cols-4 gap-7 rounded-full">
            {SUITS.map((suit) => (
              <div key={suit.link}>
                <Image
                  src={suit.link}
                  alt="sneakers"
                  layout="responsive"
                  width={5}
                  height={5}
                />
                <div className="items-center justify-center flex flex-col my-6 italic text-gray-500">
                  <p>{suit.description}</p>
                  <p>{suit.price}</p>
                  <p>{suit.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-3 mb-20">
          <Link href="/suit">
            <button className="text-white bg-yellow-800 hover:bg-yellow-700 p-3 rounded-3xl px-7">
              View More
            </button>
          </Link>
        </div>
      </section>

      <section>
        <h3 className="text-5xl capitalize text-gray-500 mt-24 mb-10 ml-14 text-center font-serif">
          design shirts
        </h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-7 w-11/12 rounded-full ">
            {SHIRTS.map((photo) => (
              <div key={photo.link}>
                <Image
                  src={photo.link}
                  alt="kaftan"
                  layout="responsive"
                  width={5}
                  height={5}
                />
                <div className="items-center justify-center flex flex-col my-6 italic text-gray-500">
                  <p>{photo.description}</p>
                  <p>{photo.price}</p>
                  <p>{photo.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-3">
          <Link href="/shirt">
            <button className="text-white bg-yellow-800 hover:bg-yellow-700 p-3 rounded-3xl px-7">
              View More
            </button>
          </Link>
        </div>
      </section>

      <section>
        <h3 className="text-5xl font-serif capitalize text-gray-500 mt-24 mb-10 ml-14 text-center">
          Sneakers & Shoes
        </h3>
        <div className="flex justify-center">
          <div className="w-11/12 grid grid-cols-4 gap-7 rounded-full">
            {ACCESSORIES.map((shoes) => (
              <div key={shoes.link}>
                <Image
                  src={shoes.link}
                  alt="sneakers"
                  layout="responsive"
                  width={5}
                  height={5}
                />
                <div className="items-center justify-center flex flex-col my-6 italic text-gray-500">
                  <p>{shoes.description}</p>
                  <p>{shoes.price}</p>
                  <p>{shoes.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-3 mb-20">
          <button className="text-white bg-yellow-800 hover:bg-yellow-700 p-3 rounded-3xl px-7">
            View More
          </button>
        </div>
      </section>
    </div>
  );
}
