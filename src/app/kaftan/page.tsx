import React from "react";
import Image from "next/image";

const IMAGES = [
  {
    link: "/images/bck10.jpg",
    description: "Gray minimalist styled kaftan",
    price: "GHS 600",
    status: "sold",
  },
  {
    link: "/images/bck10.jpg",
    description: "Gray minimalist styled kaftan",
    price: "GHS 600",
    status: "sold",
  },
  {
    link: "/images/bck10.jpg",
    description: "Gray minimalist styled kaftan",
    price: "GHS 600",
    status: "sold",
  },
  {
    link: "/images/bck10.jpg",
    description: "Gray minimalist styled kaftan",
    price: "GHS 600",
    status: "sold",
  },
  {
    link: "/images/bck10.jpg",
    description: "Gray minimalist styled kaftan",
    price: "GHS 600",
    status: "sold",
  },
];

export default function page() {
  return (
    <section>
      <div>
        <h2 className="text-center text-4xl font-semibold my-12">KAFTANS</h2>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-12 w-9/12 rounded-full ">
          {IMAGES.map((photo) => (
            <div key={photo.link}>
              <Image
                src={photo.link}
                alt="kaftan"
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
