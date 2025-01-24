import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black mt-10 px-14 py-20">
      <div className="flex flex-col md:flex-row w-full">
        <section>
          <div className="text-white text-2xl font-serif text-center p-8">
            <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
            <h3 className="text-lg">Do not miss out on our exciting stories</h3>
          </div>
          <div className="flex flex-col items-start md:items-stretch space-y-4 m-3">
            <input
              type="email"
              placeholder="Email address"
              className="placeholder:text-white text-white"
            />
            <button className="bg-white text-black rounded-2xl p-3 font-serif hover:bg-yellow-600">
              SUBSCRIBE
            </button>
          </div>
        </section>

        <div className="grid sm:grid-cols-3 w-full py-20 text-center text-white">
          <div className="space-y-3">
            <h3 className="font-bold font-lg">Information</h3>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Policy</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold font-lg">Contact</h3>
            <ul>
              <li>Wholesale</li>
              <li>General</li>
              <li>Instagram</li>
              <li>WhatsApp</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold font-lg">Socials</h3>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>WhatsApp</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
