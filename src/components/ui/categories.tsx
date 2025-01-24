import React from "react";
import Image from "next/image";

const IMAGES = ["/images/bck10.jpg", "/images/bck7.jpg"];

export default function Categories() {
  return (
    <div className="p-8">
      <h2 className="text-5xl my-4 font-semibold text-gray-600">Categories</h2>
      <div className="grid grid-cols-3 gap-2">
        {/* <div>{IMAGES.map(({description}) => (

        ))}</div> */}

        {/* <Image
          src="/images/bck10.jpg"
          alt="kaftan"
          layout="responsive"
          width={5}
          height={5}
        />
        <Image
          src="/images/bck7.jpg"
          alt="kaftan"
          layout="responsive"
          width={5}
          height={5}
        />
        <Image
          src="/images/bck18.jpg"
          alt="kaftan"
          layout="responsive"
          width={10}
          height={8}
        /> */}
      </div>
    </div>
  );
}
