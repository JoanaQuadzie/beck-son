import React from "react";
import Image from "next/image";

const IMAGES = [
  {
    link: "/images/shoes1.jpg",
    description: "lorem lorem lorem lorem",
    price: "GHS 450",
  },
  {
    link: "/images/shoes2.jpg",
    description: "lorem lorem lorem lorem",
    price: "GHS 450",
  },
  {
    link: "/images/shoes3.jpg",
    description: "lorem lorem lorem lorem",
    price: "GHS 450",
  },
];

export default function page() {
  return (
    <section>
      <h2 className="text-center text-4xl font-semibold my-12">
        SHOES AND SNEAKERS
      </h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-12 w-9/12 rounded-full ">
          {IMAGES.map((photo) => (
            <div key={photo.link}>
              <Image
                src={photo.link}
                alt="shoes"
                width={200}
                height={200}
                className="h-auto w-auto"
              />
              <div className="items-center justify-center flex flex-col my-6 italic text-gray-500">
                <p>{photo.description}</p>
                <p>{photo.price}</p>
                <button className="text-white italic bg-yellow-800 hover:bg-yellow-700 px-3 py-1 border rounded-lg">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
