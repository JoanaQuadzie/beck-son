import React from "react";
import Image from "next/image";

const IMAGES = ["/images/sc5.jpg", "/images/sc2.jpg", "/images/bck30.jpg"];

export default function Customers() {
  return (
    <div>
      <h2 className="text-5xl font-serif mt-32 mb-4 text-gray-600 text-center uppercase">
        satisfied clients
      </h2>
      <p className="text-center  w-2/4 italic mb-14 ml-96">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In similique
        dignissimos eum saepe delectus pariatur. Laboriosam, doloribus dicta vol
      </p>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-10">
          {IMAGES.map((clientphoto, index) => (
            <Image
              key={index}
              src={clientphoto}
              alt="photos"
              width={270}
              height={270}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
