"use client";
import React from "react";
import { useState } from "react";
import { MdAddLocationAlt } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function page() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <Header />
      {/* <article className="flex justify-center gap-8 mt-16">
        <div>
          <MdAddLocationAlt size={20} />
          <p>Address:</p>
          <p>125 Spintex Rd </p>
          <p>Accra, Ghana</p>
        </div>
        <div>
          <FaPhoneAlt size={20} />
          <p>Phone:</p>
          <p>0247726625</p>
        </div>
        <div>
          <SiMinutemailer size={20} />
          <p>Email:</p>
          <p>pamihere01@gmail.com</p>
        </div>
      </article> */}

      <section className="flex justify-center">
        <form className="my-7 flex flex-col">
          <div className="flex space-x-7">
            <label>
              <input
                required
                onChange={(event) => {
                  setName(event.target.value);
                }}
                className="border-2 p-4 w-96 mb-5 border-black"
                type="text"
                placeholder="Name"
              />
            </label>

            <label>
              <input
                required
                onChange={(event) => {
                  setSubject(event.target.value);
                }}
                className="border-2 p-4 w-96 mb-1 border-black"
                type="text"
                placeholder="Email"
              />
            </label>
          </div>

          <label>
            <input
              required
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              className="border-2 p-4 w-full mb-5 border-black"
              type="text"
              placeholder="Subject"
            />
          </label>

          <label>
            <input
              required
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              className="border-2 h-36 p-8 w-full border-black"
              type="text"
              placeholder="Message"
            />
          </label>
        </form>
      </section>
      <div className="flex justify-center items-center ">
        <a href="mailto:pascalamihere01@gmail.com?subject=How May I Assist You">
          <button className="bg-black text-white hover:bg-gray-500 hover:text-white text-lg p-2 mb-3 border w-28">
            Send
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
}
