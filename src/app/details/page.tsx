import React from "react";
import Image from "next/image";
import Header from "@/components/ui/header";

const IMAGES = [
  {
    description: "Grey minimalist styled kaftan",
    price: "",
    stock: "",
    sizes: "",
  },
];

export default function page() {
  return (
    <div>
      {/* <Header /> */}
      <div className="flex items-center justify-center gap-12 mt-28">
        <section>
          <Image
            src="/images/kaftan3.jpg"
            alt="kaftan"
            width={400}
            height={400}
          />
        </section>

        <section>
          <h1 className="font-bold text-5xl ">Gray minimalist styled kaftan</h1>
          <div className="text-lg gap-y-2">
            <p>Price:</p>
            <p>Stock remaining:</p>
            <p>Sizes:</p>
          </div>
          <section>
            <label>Quantity</label>
          </section>
          <button className="border border-black rounded-sm px-32 py-2 my-4 hover:shadow-lg">
            Add to Cart
          </button>
          <section>
            <button className="bg-slate-700 text-white px-36 py-2 hover:shadow-lg">
              Buy Now
            </button>
          </section>
        </section>
      </div>
    </div>
  );
}
