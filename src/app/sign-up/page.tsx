import React from "react";

export default function page() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('images/signup.jpg')" }}
    >
      <div>
        <h2 className="text-white text-center text-5xl text-bold py-5">
          Sign Up
        </h2>
        <form className="flex flex-col justify-center items-center">
          <label>
            <div className="text-white text-sm">Name</div>
            <input
              type="text"
              className="focus:outline-none border rounded-lg h-10 w-96 mb-4 shadow-lg"
            ></input>
          </label>
          <label>
            <div className="text-white text-sm">Email</div>
            <input
              type="text"
              className="focus:outline-none border rounded-lg h-10 w-96 mb-4 shadow-lg"
            ></input>
          </label>
          <label>
            <div className="text-white text-sm">Password</div>
            <input
              type="text"
              className="focus:outline-none border rounded-lg h-10 w-96 mb-4 shadow-lg"
            ></input>
          </label>
          <label>
            <div className="text-white text-sm">Confirm Password</div>
            <input
              type="text"
              className="focus:outline-none border rounded-lg h-10 w-96 mb-4 shadow-lg"
            ></input>
          </label>
        </form>
      </div>
    </div>
  );
}
