import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('images/signup.jpg')" }}
    >
      <div>
        <h2 className="text-white text-center text-5xl font-bold py-12">
          Sign Up
        </h2>
        <form className="flex flex-col justify-center items-center">
          {/* <label>
            <div className="text-white text-sm ml-2">Name</div>
            <input
              type="text"
              className="focus:outline-none border rounded-lg h-10 w-96 mb-4 shadow-lg"
            ></input>
          </label> */}
          <label>
            <div className="text-white text-sm ml-2">Email</div>
            <input
              type="text"
              className="focus:outline-none border rounded-lg h-10 w-96 mb-4 shadow-lg"
            ></input>
          </label>
          <label>
            <div className="text-white text-sm ml-2">Password</div>
            <input
              type="text"
              className="focus:outline-none border rounded-lg h-10 w-96 mb-4 shadow-lg"
            ></input>
          </label>
          <label>
            <div className="text-white text-sm ml-2">Confirm Password</div>
            <input
              type="text"
              className="focus:outline-none border rounded-lg h-10 w-96 mb-4 shadow-lg"
            ></input>
          </label>
          <button className="bg-red-700 text-white rounded-lg px-6 py-1 hover:bg-yellow-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
