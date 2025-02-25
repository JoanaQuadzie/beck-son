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
      <article className="grid grid-cols-3">
        <div>
          <MdAddLocationAlt className="" />
          <p>Address:</p>
          <p>125 Spintex Rd, Accra, Ghana</p>
        </div>
        <div>
          <FaPhoneAlt />
          <p>Phone:</p>
          <p>0247726625</p>
        </div>
        <div>
          <SiMinutemailer />
          <p>Email:</p>
          <p>pamihere01@gmail.com</p>
        </div>
      </article>

      <section>
        <form>
          <label>
            <div>Name</div>
            <input
              required
              onChange={(event) => {
                setName(event.target.value);
              }}
              className="w-2/3 border-2 rounded-full h-14 p-8"
              type="text"
            />
          </label>
          <label>
            <div>Email</div>
            <input
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="w-2/3 border-2 rounded-full h-14 p-8"
              type="text"
            />
          </label>
          <label>
            <div>Subject</div>
            <input
              required
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              className="w-2/3 border-2 rounded-full h-14 p-8"
              type="text"
            />
          </label>
          <label>
            <div>Message</div>
            <input
              required
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              className="w-2/3 border-2 rounded-full h-14 p-8"
              type="text"
            />
          </label>
        </form>
      </section>
    </div>
  );
}
