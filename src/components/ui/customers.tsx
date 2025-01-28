import React from "react";
import Image from "next/image";

const IMAGES = ["/images/bck21.jpg", "/images/bck25.jpg"];

export default function Customers() {
  return (
    <div>
      <h2 className="text-4xl mt-12 mb-4 text-gray-600 text-center uppercase">
        satisfied clients
      </h2>
      <p className="text-center  w-2/4 italic mb-14 ml-96">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In similique
        dignissimos eum saepe delectus pariatur. Laboriosam, doloribus dicta vol
      </p>
      {IMAGES.map((clientphoto) => (
        <Image src={clientphoto} alt="photos" width={80} height={40} />
      ))}
    </div>
  );
}
