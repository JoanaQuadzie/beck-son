import React from "react";
import Search from "./search";

export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center backdrop:blur-2xl"
      style={{ backgroundImage: "url('images/bck3.jpg')" }}
    >
      <div>
        <div className="text-4xl text-white font-semibold pt-32 ml-12 mb-3">
          <h3>Everything PJ And More</h3>
        </div>
        <p className="flex ml-12 w-2/5 gap-y-4 space-y-5 text-white  tracking-wide ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          veritatis sit, alias rem cumque ducimus, optio earum tempora sequi
          nulla voluptatibus dicta deserunt nisi culpa. Tempore omnis quam dicta
          similique.
        </p>
        <Search />
      </div>
    </div>
  );
}
