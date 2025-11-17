import React, { useState } from "react";
import { FiPhone, FiMail, FiHome } from "react-icons/fi";
import RippleButton from "../style/RippleButton.jsx";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              value={formData.name}
              type="text"
              placeholder="Your Name"
              onChange={handleChange}
              className="bg-ConnectBg text-black px-4 py-3 rounded-md outline-none"
            />
            <input
              name="phone"
              value={formData.phone}
              type="text"
              placeholder="Phone"
              onChange={handleChange}
              className="bg-ConnectBg text-black px-4 py-3 rounded-md outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="email"
              type="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="bg-ConnectBg text-black px-4 py-3 rounded-md outline-none"
            />
            <input
              name="subject"
              value={formData.subject}
              type="text"
              placeholder="Subject"
              onChange={handleChange}
              className="bg-ConnectBg text-black px-4 py-3 rounded-md outline-none"
            />
          </div>

          <textarea
            name="message"
            rows="4"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="bg-ConnectBg text-black px-4 py-3 rounded-md outline-none"
          />

          <RippleButton
            className="bg-darkHeading text-white font-semibold py-3 rounded-md mt-4
             hover:bg-[#d98b1c] transition-all w-full text-center"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </RippleButton>

          {status === "success" && (
            <p className="text-green-400 mt-2">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-2">Something went wrong.</p>
          )}

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
