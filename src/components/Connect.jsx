import React, { useState } from "react";
import { FiPhone, FiMail, FiHome } from "react-icons/fi";
import RippleButton from "../style/RippleButton.jsx";
import Toast from "../style/Toast.jsx";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [status, setStatus] = useState(null);

  // 🔍 Validate fields
  const validate = (data) => {
    const newErrors = {};

    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      newErrors.email = "Invalid email";
    if (!data.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  const handleChange = (e) => {
    const updated = { ...formData, [e.target.name]: e.target.value };
    setFormData(updated);
    validate(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    setStatus("sending");

    const data = new FormData();
    data.append("access_key", import.meta.env.VITE_WEB3_KEY);
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    const json = await res.json();

    if (json.success) {
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsValid(false);
      setTimeout(() => {
        setStatus(null);
        setErrors({});
        setIsValid(false);
      }, 3000);

    } else {
      setStatus("error");
      setTimeout(() => {
        setStatus(null);
        setErrors({});
        setIsValid(false);
      }, 3000);

    }
  };

  // ⭐ Utility for dynamic borders
  const borderClass = (field, value) => {
    if (errors[field]) return "border-red-500";
    if (value.trim()) return "border-green-500";
    return "border-transparent";
  };

  return (
    <section
      id="connect"
      className="w-full md:w-3/4 max-w-[95%] mx-auto mt-6 sm:mt-12 p-4 sm:p-6 flex flex-col justify-center"
    >
      <Toast
        message={
          status === "success"
            ? "Message sent successfully!"
            : status === "error"
              ? "Something went wrong."
              : ""
        }
        type={status}
      />
      <h2 className="text-3xl md:text-4xl font-bold text-[#f4a01a] mt-3 sm:mt-0 mb-6 md:mb-10">
        Let's Connect
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT — FORM */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* NAME */}
            <input
              name="name"
              value={formData.name}
              type="text"
              placeholder="Your Name *"
              onChange={handleChange}
              // required
              className={`bg-ConnectBg text-black px-4 py-3 rounded-md outline-none placeholder:text-black/55 dark:placeholder:text-black/50 border ${borderClass(
                "name",
                formData.name
              )}`}
            />

            {/* PHONE */}
            <input
              name="phone"
              value={formData.phone}
              type="text"
              placeholder="Phone"
              onChange={handleChange}
              className="bg-ConnectBg text-black px-4 py-3 rounded-md outline-none placeholder:text-black/55 dark:placeholder:text-black/50"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* EMAIL */}
            <input
              name="email"
              type="email"
              value={formData.email}
              placeholder="Email *"
              // required
              onChange={handleChange}
              className={`bg-ConnectBg text-black px-4 py-3 rounded-md outline-none placeholder:text-black/55 dark:placeholder:text-black/50 border ${borderClass(
                "email",
                formData.email
              )}`}
            />

            {/* SUBJECT */}
            <input
              name="subject"
              value={formData.subject}
              type="text"
              placeholder="Subject"
              onChange={handleChange}
              className="bg-ConnectBg text-black px-4 py-3 rounded-md outline-none placeholder:text-black/55 dark:placeholder:text-black/50"
            />
          </div>

          {/* Honeypot */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            // required
            placeholder="Message *"
            onChange={handleChange}
            className={`bg-ConnectBg text-black px-4 py-3 rounded-md outline-none placeholder:text-black/55 dark:placeholder:text-black/50 border ${borderClass(
              "message",
              formData.message
            )}`}
          />

          {/* SUBMIT BUTTON */}
          <RippleButton
            type="submit"
            disabled={!isValid || status === "sending"}
            className={`bg-darkHeading text-text dark:text-white font-semibold py-3 rounded-md mt-4 transition-all w-full text-center ${!isValid || status === "sending"
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#d98b1c] cursor-pointer"
              }`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </RippleButton>

        </form>

        {/* RIGHT — CONTACT DETAILS */}
        <div className="flex flex-col gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 border bg-darkHeaderBg border-darkHeading rounded-md text-darkHeading">
              <FiPhone size={24} />
            </div>
            <div>
              <p className="text-darkHeading font-semibold">Mobile Number</p>
              <p className="text-text dark:text-darkText">+91 9051 281 659</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 border bg-darkHeaderBg border-darkHeading rounded-md text-darkHeading">
              <FiMail size={24} />
            </div>
            <div>
              <p className="text-darkHeading font-semibold">Email</p>
              <p className="text-text dark:text-darkText">royishita016@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 border bg-darkHeaderBg border-darkHeading rounded-md text-darkHeading">
              <FiHome size={24} />
            </div>
            <div>
              <p className="text-darkHeading font-semibold">Address</p>
              <p className="text-text dark:text-darkText">Bangalore, Karnataka, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
