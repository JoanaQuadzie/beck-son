import React from "react";
import Search from "./search";

export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center backdrop-blur-3xl"
      style={{ backgroundImage: "url('images/new4.jpg')" }}
    >
      <div className="pt-32 px-8 space-y-3">
        {/* <div className="text-4xl text-white font-semibold">
          <h3>Everything PJ And More</h3>
        </div> */}
        {/* <p className="w-2/5 text-white tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          veritatis sit, alias rem cumque ducimus, optio earum tempora sequi
          nulla voluptatibus dicta deserunt nisi culpa. Tempore omnis quam dicta
          similique.
        </p> */}
        {/* <Search /> */}
      </div>
    </div>
  );
}
