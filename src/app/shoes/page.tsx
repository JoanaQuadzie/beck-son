import React from "react";
import Image from "next/image";

const IMAGES = [
  {
    link: "/images/shoes1.jpg",
    description: "lorem lorem lorem lorem",
    price: "GHS 450",
    status: "available",
  },
  {
    link: "/images/shoes2.jpg",
    description: "lorem lorem lorem lorem",
    price: "GHS 450",
    status: "available",
  },
  {
    link: "/images/shoes3.jpg",
    description: "lorem lorem lorem lorem",
    price: "GHS 450",
    status: "available",
  },
  {
    link: "/images/shoes4.jpg",
    description: "lorem lorem lorem lorem",
    price: "GHS 450",
    status: "available",
  },
  {
    link: "/images/shoes8.jpg",
    description: "lorem lorem lorem lorem",
    price: "GHS 450",
    status: "available",
  },
  {
    link: "/images/shoes6.jpg",
    description: "lorem lorem lorem lorem",
    price: "GHS 450",
    status: "available",
  },
  {
    link: "/images/shoes7.jpg",
    description: "lorem lorem lorem lorem",
    price: "GHS 450",
    status: "available",
  },
  {
    link: "/images/shoes5.jpg",
    description: "lorem lorem lorem lorem",
    price: "GHS 450",
    status: "available",
  },
];

export default function page() {
  return (
    <section>
      <div>
        <h2 className="text-center text-4xl font-semibold my-12">
          SHOES AND SNEAKERS
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-12 w-9/12 rounded-full ">
          {IMAGES.map((photo) => (
            <div key={photo.link}>
              <Image
                src={photo.link}
                alt="shoes"
                layout="responsive"
                width={2}
                height={2}
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
    </section>
  );
}
