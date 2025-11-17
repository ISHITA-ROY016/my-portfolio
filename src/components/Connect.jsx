import React from "react";
import { FiPhone, FiMail, FiHome } from "react-icons/fi";

const Connect = () => {
  return (
    <section
      id="connect"
      className="w-full md:w-3/4 max-w-[95%] mx-auto mt-6 sm:mt-12 p-4 sm:p-6 flex flex-col justify-center"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-darkHeading mb-10">
        Let’s Connect
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE — FORM */}
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#EAE4FF] text-black px-4 py-3 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="Phone"
              className="bg-[#EAE4FF] text-black px-4 py-3 rounded-md outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="bg-[#EAE4FF] text-black px-4 py-3 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="bg-[#EAE4FF] text-black px-4 py-3 rounded-md outline-none"
            />
          </div>

          <textarea
            rows="4"
            placeholder="Message"
            className="bg-[#EAE4FF] text-black px-4 py-3 rounded-md outline-none"
          />

          <button
            type="submit"
            className="bg-darkHeading text-white font-semibold py-3 rounded-md mt-4 
            hover:bg-[#f4a02a] transition-all"
          >
            Send Message
          </button>
        </form>

        {/* RIGHT SIDE — CONTACT DETAILS */}
        <div className="flex flex-col gap-8">
          {/* PHONE */}
          <div className="flex items-start gap-4">
            <div className="p-3 border bg-darkHeaderBg border-darkHeading rounded-md text-darkHeading">
              <FiPhone size={24} />
            </div>
            <div>
              <p className="text-darkHeading font-semibold">Mobile Number</p>
              <p className="text-darkText">+91 9051 281 659</p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-4">
            <div className="p-3 border bg-darkHeaderBg border-darkHeading rounded-md text-darkHeading">
              <FiMail size={24} />
            </div>
            <div>
              <p className="text-darkHeading font-semibold">Email</p>
              <p className="text-darkText">royishita016@gmail.com</p>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="flex items-start gap-4">
            <div className="p-3 border bg-darkHeaderBg border-darkHeading rounded-md text-darkHeading">
              <FiHome size={24} />
            </div>
            <div>
              <p className="text-darkHeading font-semibold">Address</p>
              <p className="text-darkText">Bangalore, Karnataka, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
