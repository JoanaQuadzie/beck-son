"use client";
import React from "react";
import { useState } from "react";
import { MdAddLocationAlt } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

export default function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="bg-gray-200">
      <div className="text-5xl my-4 text-gray-600 text-center p-8 font-serif">
        <h2>CONTACT FORM</h2>
      </div>
      <article className="flex justify-center gap-8">
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
      </article>

      <section className="flex justify-center">
        <form className="my-7">
          <label>
            <div className="ml-2">Name</div>
            <input
              required
              onChange={(event) => {
                setName(event.target.value);
              }}
              className="border-2 rounded-lg h-3 p-4 w-80 mb-1"
              type="text"
            />
          </label>
          <label>
            <div className="ml-2">Email</div>
            <input
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="border-2 rounded-lg h-3 p-4 w-80 mb-1"
              type="text"
            />
          </label>
          <label>
            <div className="ml-2">Subject</div>
            <input
              required
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              className="border-2 rounded-lg h-3 p-4 w-80 mb-1"
              type="text"
            />
          </label>
          <label>
            <div className="ml-2">Message</div>
            <input
              required
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              className="border-2 rounded-lg h-36 p-8 w-80"
              type="text"
            />
          </label>
        </form>
      </section>
      <div className="flex justify-center items-center ">
        <a href="mailto:pascalamihere01@gmail.com?subject=How May I Assist You">
          <button className="bg-gray-400 hover:bg-gray-500 hover:text-white text-lg p-2 mb-3 border rounded-3xl w-28">
            Send
          </button>
        </a>
      </div>
    </div>
  );
}
