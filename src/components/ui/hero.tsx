import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-slate-100">
      <div className="">
        <div className="text-4xl font-semibold pt-32 ml-12 text-gray-600">
          <h2 className="text-5xl">Beckson</h2>
          <h3>Everything PJ And More</h3>
        </div>
        <p className="flex ml-12 w-2/5 gap-y-4 space-y-5 text-gray-500  tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          veritatis sit, alias rem cumque ducimus, optio earum tempora sequi
          nulla voluptatibus dicta deserunt nisi culpa. Tempore omnis quam dicta
          similique.
        </p>
        <input
          placeholder="e.g double breasted suit"
          className="py-7 px-4 w-1/3 border rounded-xl shadow-xl ml-12 mt-8 mb-14 focus:outline-none"
        ></input>
      </div>

      {/* <div className="w-96">
        <Image
          src="/images/bck31annex.jpg"
          alt="hero image"
          layout="responsive"
          width={20}
          height={10}
        />
      </div> */}
    </div>
  );
}
