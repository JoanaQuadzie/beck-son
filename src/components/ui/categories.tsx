import React from "react";
import Kaftan from "./kaftan";
import Suit from "./suit";
import DesignShirt from "./designShirt";
import Sneaker from "./sneaker";

export default function Categories() {
  return (
    <article className="container">
      <div className="mt-36 my-14">
        <h2 className="text-5xl font-serif mt-8 mb-4 text-gray-600 text-center uppercase">
          Categories
        </h2>
        <p className="text-center  w-2/4 italic mb-14 ml-96">
          Enhance your professional presence with our curated selection of
          outfits, designed to help you exude confidence and showcase your best
          self!
        </p>
        <h3 className="text-5xl capitalize text-gray-500 mt-10 mb-5 ml-14 text-center font-serif">
          kaftans
        </h3>
        <Kaftan />
        <Suit />
        <DesignShirt />
        <Sneaker />
      </div>
    </article>
  );
}
