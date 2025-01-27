import React from "react";
import Image from "next/image";

export default function Partners() {
  return (
    <div className="pb-10">
      <h2 className="text-6xl mt-16 mb-4 text-center font-semibold text-gray-600">
        Our Partners
      </h2>
      <div className="grid grid-cols-3 w-2/3 items-center ml-60">
        <Image
          src="/images/bck24.jpg"
          alt="hero image"
          layout="responsive"
          width={20}
          height={10}
        />
        <Image
          src="/images/bck22.jpg"
          alt="hero image"
          layout="responsive"
          width={20}
          height={10}
        />
        <Image
          src="/images/bck23.jpg"
          alt="hero image"
          layout="responsive"
          width={20}
          height={10}
        />
        <Image
          src="/images/bck25.jpg"
          alt="hero image"
          layout="responsive"
          width={20}
          height={10}
        />
        <Image
          src="/images/bck26.jpg"
          alt="hero image"
          layout="responsive"
          width={20}
          height={10}
        />
        <Image
          src="/images/bck27.jpg"
          alt="hero image"
          layout="responsive"
          width={20}
          height={10}
        />
        {/* <Image
          src="/images/bck28.jpg"
          alt="hero image"
          layout="responsive"
          width={20}
          height={10}
        /> */}
      </div>
    </div>
  );
}
