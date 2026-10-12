import React, { useState } from "react";
import emailjs from "emailjs-com";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
    };

    // 1️⃣ Send email to OWNER
    emailjs.send(
      "service_gmftyng",
      "template_7r9aksn",
      templateParams,
      "O8CF35rntPzgHvXt4"
    );

    // 2️⃣ Send THANK YOU email to USER
    emailjs.send(
      "service_ox1jwoj",
      "template_5fmjdm8",
      {
        name: formData.name,
        email: formData.email,
      },
      "O8CF35rntPzgHvXt4"
    );

    setShowModal(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      {/* Banner */}
      <div className="relative text-white">
        <div className="relative">
          <img
            src="/Images/contactbanner.jpg"
            alt="Contact Banner"
            className="w-full h-[800px] md:h-[600px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col sm:pt-20 pt-10 bg-black bg-opacity-50 px-6 py-12 sm:py-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 mt-20">
              Let’s Collaborate to Build Something Extraordinary
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 w-[90%] sm:w-[80%] mb-6">
              Have a question or a project in mind? Reach out to us, and let’s
              make it happen together.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-start w-full mx-auto sm:px-4">
        {/* Left Form */}
       <div className="flex flex-col items-center min-h-screen bg-[#f5f7fa] text-center justify-center p-8 rounded-lg w-full md:w-[50%] shadow-md">

  {/* TOP TEXT CONTENT */}
  <div className="max-w-xl mb-8">
    <h4 className="text-lg sm:text-2xl font-semibold text-black uppercase">
      Seeking a reliable tech partner? We’re your top choice in the industry.
    </h4>

    <p className="text-gray-600 mt-4 leading-relaxed text-base sm:text-lg">
      Share your vision with us, and we’ll assess your requirements to deliver a
      tailored solution designed for success.
    </p>

    <p className="text-black font-semibold mt-4 text-base sm:text-lg">
      Contact us today to get started!
    </p>
  </div>

  {/* FORM (UNCHANGED) */}
  <form onSubmit={handleSubmit} className="space-y-6 w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {["name", "email", "phone", "company"].map((field) => (
        <div key={field} className="relative">
          <label
            className={`absolute top-3 left-3 text-sm text-gray-500 ${
              formData[field] && "top-[-10px] text-xs text-black"
            }`}
          >
            {field.toUpperCase()}
          </label>
          <input
            type={field === "email" ? "email" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full text-black placeholder-transparent"
            required
          />
        </div>
      ))}
    </div>

    <div className="relative">
      <label
        className={`absolute top-3 left-3 text-sm text-gray-500 ${
          formData.message && "top-[-10px] text-xs text-black"
        }`}
      >
        MESSAGE
      </label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="border border-gray-300 p-3 rounded-lg w-full h-32 text-black placeholder-transparent"
        required
      />
    </div>

    <div className="flex justify-between items-center flex-wrap gap-4">
      <button
        type="submit"
        className="bg-[#171717] text-white px-6 py-3 rounded-full hover:bg-[#272727]"
      >
        SEND REQUEST →
      </button>

      <p className="text-sm text-gray-600">
        or contact us at{" "}
        <Link to="mailto:qubexoffical@gmail.com" className="font-semibold">
          qubexoffical@gmail.com
        </Link>
      </p>
    </div>
  </form>
</div>

        {/* Right Info */}
     <div className="flex flex-col justify-center min-h-screen w-full md:w-[30%] p-8">
  {/* Small Label */}
  <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
    You Are Here
  </h4>

  {/* Main Heading */}
  <h2 className="text-3xl sm:text-4xl font-bold text-black mt-3">
    Let's Start
  </h2>

  {/* Subtitle */}
  <p className="text-gray-600 mt-4 leading-relaxed">
    Initiating Your Journey to Success and Growth.
  </p>

  {/* Email */}
  <div className="mt-8 flex items-center space-x-4">
    <span className="border border-gray-300 text-black p-3 rounded-full">
      <MdOutlineMessage />
    </span>
    <Link
      to="mailto:qubexoffical@gmail.com"
      className="text-gray-700 font-medium hover:underline"
    >
      qubexoffical@gmail.com
    </Link>
  </div>

  {/* Steps */}
  <div className="mt-10 space-y-5">
    {[
      "Share your requirements",
      "Discuss them with our experts",
      "Get a free quote",
      "Start the project",
    ].map((text, index) => (
      <div
        key={index}
        className="flex items-center text-gray-700 font-medium"
      >
        <span className="flex items-center justify-center w-9 h-9 border border-black rounded-full text-sm font-semibold mr-4">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>{text}</span>
      </div>
    ))}
  </div>
</div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-sm text-center">
            <h2 className="text-xl font-bold mb-2">
              Thank You for Contacting Qubex
            </h2>
            <p className="text-gray-600 mb-4">
              Your request has been submitted successfully. We will contact you
              within <b>2 hours</b>.
            </p>
            <button
              onClick={closeModal}
              className="bg-black text-white px-6 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;