import React, { useState } from "react";
import { FaHeadset, FaTools, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Telecommunications = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
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
            Telecommunications Software Solutions
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Our company specializes in developing custom software solutions
            tailored for the telecommunications industry. We offer a
            comprehensive suite of services designed to enhance network
            performance, streamline operations, and improve customer
            experiences, ensuring your business stays competitive in a rapidly
            evolving market.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>
      {/* Upper Section with Background Image */}
      <section className=" bg-white">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Hire Experienced and Dedicated Telecommunications Systems Developers
          </h2>
          <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12">
            Our dedicated development team has many years of combined
            telecommunications industry experience building custom software
            solutions, such as mobile & web applications, Omnichannel solutions,
            OSS/BSS solutions, VoIP services, and machine learning algorithms.
          </p>

          {/* OSS and BSS Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-8 items-center">
            {/* OSS Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Operations Support Systems (OSS)
              </h3>
              <p className="text-gray-600">
                Our developers program custom OSS Telecom solutions with
                VoIP-based services, like server-side applications to enable
                soft switches and personalized SIP clients to optimize the
                operations of multiple operations, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Network Resources Inventory Management</li>
                <li>Fault Management</li>
                <li>Fraud Protection Solutions</li>
                <li>Performance Management</li>
                <li>Troubleshooting</li>
                <li>Trouble Ticketing</li>
                <li>Customer Billing Management</li>
                <li>Data Reports & Dashboards</li>
                <li>Security Authentication</li>
              </ul>
            </div>
            <div>
              <img
                src="/Images/christopher-gower-m_HRfLhgABo-unsplash.jpg"
                alt="OSS Systems"
                className="rounded-lg shadow-md mx-auto"
              />
            </div>

            {/* BSS Section */}
            <div>
              <img
                src="/Images/thisisengineering-Bg0Geue-cY8-unsplash.jpg"
                alt="BSS Systems"
                className="rounded-lg shadow-md mx-auto"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Business Support Systems (BSS)
              </h3>
              <p className="text-gray-600">
                We build custom BSS Telecom solutions to manage your products,
                orders, revenue stream, and customer management processes,
                equipped with tailor-made platforms, applications, tools, and
                systems, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>CRM Systems</li>
                <li>ERP Software Solutions</li>
                <li>Billing Systems</li>
                <li>Customer-Self Service Portals</li>
                <li>Personnel Management Corporate Portals</li>
                <li>Predictive Analytics Solutions</li>
                <li>Report Generation & Data Visualization Tools</li>
                <li>Sales & Lead Generation Automation Systems</li>
              </ul>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-12">
            <button className="bg-black text-white font-semibold py-3 px-8 rounded-full transition">
              Get Telecom Developers
            </button>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section>
        <div className="container mx-auto mt-10 px-8">
          {/* Custom Telecom Solutions */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Custom Telecom Solutions
            </h2>
            <p className="text-gray-600 mt-4">
              We develop top-of-the-line telecommunication systems designed to
              optimize workflows, streamline processes, and deliver operational
              value.
            </p>
          </div>

          {/* Solutions List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Telecom BI Solutions
              </h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Strategic Performance Management</li>
                <li>Campaign Management</li>
                <li>Revenue Management</li>
                <li>Customer Management</li>
                <li>Payment Risk Management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Telecom Application Support Services
              </h3>
              <p className="text-gray-600">
                Comprehensive support services for telecom applications,
                ensuring optimal performance and long-term efficiency.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                VoIP-Based Telecom Solutions
              </h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Video, Audio, & SMS Applications</li>
                <li>Data Security & Encryption</li>
                <li>Connection Breaks</li>
                <li>Interactive Dashboards</li>
              </ul>
            </div>
          </div>

          {/* Icons Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Responsive 24/7 Help Desk",
                description:
                  "Promptly address issues and ensure uninterrupted service with advanced systems.",
                bgColor: "bg-blue-100",
                iconColor: "text-blue-500",
                icon: <FaHeadset className="w-12 h-12" />,
              },
              {
                title: "Extended Support & Maintenance",
                description:
                  "Monitor applications to identify issues before they impact operations.",
                bgColor: "bg-green-100",
                iconColor: "text-green-500",
                icon: <FaTools className="w-12 h-12" />,
              },
              {
                title: "Quality Assurance & Testing",
                description:
                  "Ensure optimal performance and security with rigorous testing protocols.",
                bgColor: "bg-purple-100",
                iconColor: "text-purple-500",
                icon: <FaCheckCircle className="w-12 h-12" />,
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div
                  className={`${item.bgColor} ${item.iconColor} p-4 rounded-lg`}
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 7H7v6h6V7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className=" py-16">
        <div className="container mx-auto px-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Telecom Software: Frequently Asked Questions
          </h3>
          <div className="max-w-7xl mx-auto">
            {[
              "What is telecommunications software?",
              "How is AI being used in telecommunications?",
              "What are the challenges of AI in telecom?",
              "What is SAP telecom?",
              "What are software support services for telecom?",
            ].map((question, index) => (
              <div
                key={index}
                className="border-b border-gray-300 py-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium text-gray-800">
                    {question}
                  </h4>
                  <span>
                    {activeIndex === index ? (
                      <svg
                        className="h-6 w-6 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 15a.75.75 0 01-.53-.22l-4-4a.75.75 0 011.06-1.06l3.47 3.47 3.47-3.47a.75.75 0 111.06 1.06l-4 4A.75.75 0 0110 15z" />
                      </svg>
                    ) : (
                      <svg
                        className="h-6 w-6 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 5a.75.75 0 01.53.22l4 4a.75.75 0 11-1.06 1.06L10 6.56 6.53 10.28a.75.75 0 11-1.06-1.06l4-4A.75.75 0 0110 5z" />
                      </svg>
                    )}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="text-gray-600 mt-2">
                    The telecommunications industry utilizes a wide array of
                    software tools that cater to diverse aspects of network
                    planning, management, service delivery, and customer
                    engagement.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Telecommunications;
