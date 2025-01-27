import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="p-8">
      <h2 className="text-5xl my-4 font-semibold text-gray-600">About</h2>
      <div className="flex">
        <div className="w-1/3 text-lg">
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
            src="/images/bck21.jpg"
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
