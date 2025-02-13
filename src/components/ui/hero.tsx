import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('images/bck4.jpg')" }}
    >
      <div className="">
        <div className="text-4xl text-white font-semibold pt-32 ml-12 mb-3">
          <h3>Everything PJ And More</h3>
        </div>
        <p className="flex ml-12 w-2/5 gap-y-4 space-y-5 text-white  tracking-wide ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          veritatis sit, alias rem cumque ducimus, optio earum tempora sequi
          nulla voluptatibus dicta deserunt nisi culpa. Tempore omnis quam dicta
          similique.
        </p>
        <input
          placeholder="e.g design shirt"
          className="py-7 px-4 w-1/3 border rounded-xl shadow-xl ml-12 mt-8 mb-14 focus:outline-none"
        ></input>
      </div>
    </div>
  );
}
