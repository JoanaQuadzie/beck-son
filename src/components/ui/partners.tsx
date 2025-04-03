import React from "react";
import Image from "next/image";

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
        <Image
          src="/images/bck24.jpg"
          alt="hero image"
          width={20}
          height={10}
        />
        <Image
          src="/images/bck22.jpg"
          alt="hero image"
          width={20}
          height={10}
        />
        <Image
          src="/images/bck23.jpg"
          alt="hero image"
          width={20}
          height={10}
        />
        <Image
          src="/images/bck25.jpg"
          alt="hero image"
          width={20}
          height={10}
        />
        <Image
          src="/images/bck26.jpg"
          alt="hero image"
          width={20}
          height={10}
        />
        <Image
          src="/images/bck27.jpg"
          alt="hero image"
          width={20}
          height={10}
        />
        {/* <Image
          src="/images/bck28.jpg"
          alt="hero image"
          width={20}
          height={10}
        /> */}
      </div>
    </div>
  );
}
