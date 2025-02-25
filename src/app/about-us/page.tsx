import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="p-8">
      <h2 className="text-4xl my-4 uppercase text-gray-600 text-center">
        About
      </h2>
      <p className="text-center  w-2/4 italic mb-14 ml-96">
        Discover a collection of stylish and versatile clothing that blends
        comfort with elegance. Our mission is to empower you to express your
        unique style while feeling confident and comfortable in every outfit
      </p>
      <div className="flex justify-center gap-20">
        <div className="w-1/3 text-lg text-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab,
            commodi molestias porro natus, distinctio quis harum facilis sunt ad
            ipsam vitae pariatur consequatur excepturi totam. Mollitia modi
            tempora ex.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab,
            commodi molestias porro natus, distinctio quis harum facilis sunt ad
            ipsam vitae pariatur consequatur excepturi totam. Mollitia modi
            tempora ex.
          </p>
        </div>
        <div className="w-96">
          <Image
            src="/images/bck29.jpg"
            alt="hero image"
            layout="responsive"
            width={20}
            height={10}
          />
        </div>
      </div>
    </div>
  );
}
