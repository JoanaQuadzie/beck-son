import React from "react";
import Image from "next/image";

const IMAGES = [
  {
    link: "/images/bck43.jpg",
    description: "Gray minimalist styled kaftan",
    price: "GHS 600",
    status: "sold",
  },
  {
    link: "/images/bck44.jpg",
    description: "Gray minimalist styled kaftan",
    price: "GHS 600",
    status: "sold",
  },
  {
    link: "/images/bck46.jpg",
    description: "Gray minimalist styled kaftan",
    price: "GHS 600",
    status: "sold",
  },
  {
    link: "/images/bck46.jpg",
    description: "Gray minimalist styled kaftan",
    price: "GHS 600",
    status: "sold",
  },
];

export default async function page(props) {
  const searchParams = await props.searchParams;
  const searchKeyword = searchParams.q;
  let searchedShirts;
  if (searchKeyword) {
    searchedShirts = IMAGES.filter((shirt) => {
      return (
        shirt.description
          .toLowerCase()
          .includes(searchKeyword?.toLowerCase()) ||
        shirt.status.toLowerCase().includes(searchKeyword?.toLowerCase())
      );
    });
  } else {
    searchedShirts = IMAGES;
  }
  return (
    <section>
      <div>
        <h2 className="text-center text-4xl font-semibold my-12">
          DESIGN SHIRTS
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-12 w-9/12 rounded-full ">
          {searchedShirts.length === 0 && <p>No shirts found</p>}
          {searchedShirts.map((photo, index) => (
            <div key={index}>
              <Image src={photo.link} alt="shirt" width={2} height={2} />
              <div className="items-center justify-center flex flex-col my-6 italic text-gray-500">
                <p>{photo.description}</p>
                <p>{photo.price}</p>
                <p>{photo.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
