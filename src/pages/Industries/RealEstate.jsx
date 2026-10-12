import React from "react";
import FAQ from "../../components/FAQ";

import { Link } from "react-router-dom";
const RealEstate = () => {
  const faqs = [
    {
      question:
        "What is software for real estate, and how can it benefit realtors?",
      answer:
        "Software for real estate helps streamline processes, manage listings, and enhance client communication.",
    },
    {
      question: "What is the difference between RETS and IDX?",
      answer:
        "RETS is a framework for data sharing between MLS systems,while IDX is a tool for realtors to display MLS listings on their websites.",
    },
    {
      question: "What is HOA software?",
      answer:
        "HOA software manages homeowner association tasks like billing, maintenance, and communication.",
    },
    {
      question: "Why is IT support essential for real estate businesses?",
      answer:
        "IT support ensures smooth operations, enhances security, and minimizes downtime for real estate businesses.",
    },
    {
      question:
        "How can IT support help real estate businesses with backup solutions?",
      answer:
        "IT support provides robust backup solutions to prevent data loss and ensure business continuity.",
    },
  ];

  return (
    <div className="">
      <div
        className="bg-cover opacity-6 bg-center w-full h-screen sm:h-[600px] z-[-10]"
        style={{
          background: `url(/Images/banner.png) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundAttachment: "fixed", // Keeps the image fixed
        }}
      >
        <div className="flex items-left text-white pt-10 sm:pt-20 px-10 flex-col">
          <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
            Real Estate Software Solutions
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Our company specializes in developing custom software solutions
            tailored for the real estate industry. We offer a comprehensive
            suite of services designed to enhance property management,
            streamline transactions, and improve client engagement, ensuring
            seamless operations for real estate professionals.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>
      <section className="bg-gray-50 py-10 px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Explore Qubex Real Estate Software Solutions
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Icons and Services */}
          <div className="flex flex-col items-end text-right space-y-4 w-full md:w-1/3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">👩‍💼</span>
              <span className="text-lg font-medium text-gray-700">
                Real Estate Management Software
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">📄</span>
              <span className="text-lg font-medium text-gray-700">
                Multiple Listing Service (MLS)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔗</span>
              <span className="text-lg font-medium text-gray-700">IDX</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">📂</span>
              <span className="text-lg font-medium text-gray-700">
                Property Management
              </span>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center w-full md:w-1/3">
            <img
              src="/Images/HireExperienced.png"
              alt="Real Estate Solutions"
              className="w-80 h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Icons and Services */}
          <div className="flex flex-col items-start text-left space-y-4 w-full md:w-1/3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📈</span>
              <span className="text-lg font-medium text-gray-700">
                Real Estate Valuation Engines
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏘️</span>
              <span className="text-lg font-medium text-gray-700">
                HOA Management
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏦</span>
              <span className="text-lg font-medium text-gray-700">
                Real Estate Mortgages
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-black text-white px-6 py-3 rounded-lg shadow">
            Get MLS Solutions
          </button>
        </div>
      </section>

      {/* Service Areas */}
      <div className="grid px-4 pt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Property Management Software */}
        <div className="p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/real1.webp"
            alt="Property Management"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Property Management Software
          </h2>
          <p className="text-black mb-4">
            Our property management solutions streamline the management of
            residential and commercial properties, ensuring efficient operations
            and enhanced tenant satisfaction.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Tenant and lease tracking</li>
            <li>Maintenance management</li>
            <li>Accounting and financial reporting</li>
          </ul>
        </div>

        {/* Multiple Listing Service (MLS) Software */}
        <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/real2.avif"
            alt="MLS Software"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Multiple Listing Service (MLS) Software
          </h2>
          <p className="text-black mb-4">
            Our MLS software solutions facilitate property listings, search
            functionalities, and agent collaboration, enhancing the property
            search experience for clients.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Property listing management</li>
            <li>Advanced search and filter options</li>
            <li>Agent collaboration tools</li>
          </ul>
        </div>

        {/* Real Estate CRM Software */}
        <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/real3.webp"
            alt="Real Estate CRM"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Real Estate CRM Software
          </h2>
          <p className="text-black mb-4">
            Our CRM solutions help real estate professionals manage client
            relationships, track leads, and automate marketing efforts, driving
            sales and client retention.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Lead management and tracking</li>
            <li>Email marketing automation</li>
            <li>Client communication tools</li>
          </ul>
        </div>
      </div>
      {/* Description Section */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-medium text-gray-700">
          We Have Experienced Real Estate Software Developers
        </h3>
        <p className="text-gray-600 mt-4">
          We augment your current IT team to ensure your real estate software
          solutions align with specialized, multi-purpose technologies and
          industry-specific expertise.
        </p>
        <ul className="mt-6 space-y-4 text-left md:text-center">
          <li>📑 MLS Software Development Services</li>
          <li>💼 Real Estate Accounting Software</li>
          <li>🔒 Real Estate Transaction Software</li>
          <li>🌐 RESO Web API Integration</li>
        </ul>
      </div>

      <section className=" text-black mt-10 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-3xl font-semibold mb-6">
            Strict Adherence To Regulatory Standards
          </h2>
          <p className="text-center mb-10">
            Chista’s real estate software development company, integration, and
            implementation experts are fully compliant with strict regulatory
            standards inherent to the real estate, payments, and financial
            industries.
          </p>

          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
            <div>
              <h2 className="text-2xl font-bold  text-center text-gray-800 mb-6">
                Frequently Asked Questions about Real Estate
              </h2>
              <FAQ faqs={faqs} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;
