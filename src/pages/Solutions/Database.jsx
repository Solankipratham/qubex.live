import React from "react";
import {
  FaDatabase,
  FaNetworkWired,
  FaLaptop,
  FaFileAlt,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";

import img2 from "/Images/PlatformDevloper.png";
import { Link } from "react-router-dom";
const Database = () => {
  return (
    <div className="min-h-screen">
      {/* Background Image */}
      <div
        className="bg-cover opacity-6 bg-center w-full h-screen z-[-10]"
        style={{
          background: `url(${img2}) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundAttachment: "fixed", // Keeps the image fixed
        }}
      >
        <div className="flex items-left pt-10 sm:pt-20 px-10 flex-col">
          <h1 className="text-white font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
            CUSTOM DATABASE DEVELOPMENT SERVICES
          </h1>
          <p className="text-white text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Top-tier talent acquisition and tailored training programs to ensure
            your team has the skills they need to succeed in the competitive
            software industry.
          </p>
          <Link
            to={"/contact"}
            className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto"
          >
            Start Your Project →
          </Link>
        </div>
      </div>

      <div className="bg-gray-50">
        {/* Header Section */}
        <section className="py-12 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Hire An Experienced & Dedicated Database Development Company
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto mb-10">
            Chetu revamps existing databases with software development and
            builds new database systems from scratch for companies to gather,
            organize, and draw critical data insights.
          </p>
        </section>

        {/* Features Section */}
        <section className="py-12 px-6 grid lg:grid-cols-2 gap-12  mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaLaptop className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Custom Web and Mobile Database Design
              </h3>
              <p className="text-gray-600">
                Our expert database development team programs web and mobile
                database models to fit your software needs, including
                hierarchical, network, relational, and more.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaDatabase className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Database Application Development
              </h3>
              <p className="text-gray-600">
                Design data-driven desktop, mobile, and web-based applications
                that leverage robust database solutions for ease of use for
                employees and customers alike.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaCogs className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Data Mining & Transformation
              </h3>
              <p className="text-gray-600">
                Harness the power of leading data mining tools to structure,
                organize, and transform data while automating processes for
                critical insights.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaNetworkWired className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Data Integration & Migration Services
              </h3>
              <p className="text-gray-600">
                Automate data transfers, merging, and migrating data from
                various applications and formats using cutting-edge
                technologies.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/Images/Database.png"
              alt="Database Dashboard"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Custom Database Solutions Section */}
        <section className="py-12 px-6 bg-white">
          <h3 className="text-2xl font-bold text-center mb-6">
            We Develop Custom Database Solutions
          </h3>
          <p className="text-center text-gray-700 text-lg max-w-4xl mx-auto mb-12">
            We develop all kinds of database software solutions, providing
            custom-tailored database platforms to all industry types and
            business sizes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Solution 1 */}
            <div className="flex items-start">
              <FaFileAlt className="text-blue-500 text-4xl mr-4" />
              <div>
                <h4 className="text-xl font-bold">
                  Data Warehouse Software Development
                </h4>
                <p className="text-gray-600">
                  Develop advanced data warehouse solutions to ensure data
                  integrity and reporting.
                </p>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="flex items-start">
              <FaNetworkWired className="text-blue-500 text-4xl mr-4" />
              <div>
                <h4 className="text-xl font-bold">
                  Distributed Database Software Development
                </h4>
                <p className="text-gray-600">
                  Create distributed database software for managing structured
                  and interrelated data files.
                </p>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="flex items-start">
              <FaChartLine className="text-blue-500 text-4xl mr-4" />
              <div>
                <h4 className="text-xl font-bold">
                  Operational Database Software Development
                </h4>
                <p className="text-gray-600">
                  Engineer custom operational database software for
                  mission-critical data in real-time.
                </p>
              </div>
            </div>

            {/* Solution 4 */}
            <div className="flex items-start">
              <FaFileAlt className="text-blue-500 text-4xl mr-4" />
              <div>
                <h4 className="text-xl font-bold">
                  End-User Database Software Development
                </h4>
                <p className="text-gray-600">
                  Provide user-friendly database software with intuitive
                  interfaces and fast query processing.
                </p>
              </div>
            </div>

            {/* Solution 5 */}
            <div className="flex items-start">
              <FaCogs className="text-blue-500 text-4xl mr-4" />
              <div>
                <h4 className="text-xl font-bold">
                  Analytical Database Software Development
                </h4>
                <p className="text-gray-600">
                  Build advanced analytical database solutions for business
                  intelligence and analysis.
                </p>
              </div>
            </div>

            {/* Solution 6 */}
            <div className="flex items-start">
              <FaNetworkWired className="text-blue-500 text-4xl mr-4" />
              <div>
                <h4 className="text-xl font-bold">
                  External Database Software Development
                </h4>
                <p className="text-gray-600">
                  Design databases for large licensing schemas or data where
                  high performance is essential.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <button className="bg-black text-white px-6 py-3 rounded-full transition">
              GET DATABASE SOLUTIONS
            </button>
          </div>
        </section>
      </div>
      <div className="grid grid-cols-1 py-10 px-4 md:grid-cols-2 gap-8">
        {/* HeatWave Section */}
        <div className="bg-[#f5f7fa] shadow-md rounded-lg p-6 text-center">
          <div className="text-blue-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 10a4 4 0 014-4 4.978 4.978 0 013.535 1.464A4.478 4.478 0 0115 6a4 4 0 013.985 4.577A3 3 0 0116.5 17H6a3 3 0 01-3-3 3 3 0 01.364-1.414A3.97 3.97 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">HeatWave</h3>
          <p className="text-black">
            Use automated and integrated generative AI and machine learning (ML)
            in one cloud service for transactions and lakehouse scale analytics.
            Get faster insights from all your data with unmatched performance
            and deploy apps in your choice of cloud providers.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            Learn More »
          </a>
        </div>

        {/* MySQL Enterprise Edition Section */}
        <div className="bg-[#f5f7fa] shadow-md rounded-lg p-6 text-center">
          <div className="text-blue-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C7.03 2 3 3.34 3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5c0-1.66-4.03-3-9-3zm7 12.11c-1.74.79-4.24 1.27-7 1.27s-5.26-.48-7-1.27V7.89C6.74 8.68 9.24 9.16 12 9.16s5.26-.48 7-1.27v5.22zm0-7c-1.74.79-4.24 1.27-7 1.27s-5.26-.48-7-1.27C6.74 6.32 9.24 6.84 12 6.84s5.26-.52 7-1.27zM12 19c-2.76 0-5.26-.48-7-1.27v-2.11c1.74.79 4.24 1.27 7 1.27s5.26-.48 7-1.27v2.11c-1.74.79-4.24 1.27-7 1.27z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">
            MySQL Enterprise Edition
          </h3>
          <p className="text-black">
            The most comprehensive set of advanced features, management tools
            and technical support to achieve the highest levels of MySQL
            scalability, security, reliability, and uptime.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            Learn More »
          </a>
        </div>

        {/* MySQL for OEM/ISV Section */}
        <div className="bg-[#f5f7fa] shadow-md rounded-lg p-6 text-center">
          <div className="text-blue-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16z" />
              <path d="M12 6c-2.76 0-5 .89-5 2s2.24 2 5 2 5-.89 5-2-2.24-2-5-2zm0 6c-2.76 0-5 .89-5 2s2.24 2 5 2 5-.89 5-2-2.24-2-5-2z" />
              <path d="M9 1h2v2H9zm4 0h2v2h-2zm6 6h2v2h-2zm-16 0h2v2H3zm1 10H3v-2h2zm14 0h2v2h-2zm-8 3h2v2h-2zm-6-2h2v2H3z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">
            MySQL for OEM/ISV
          </h3>
          <p className="text-black">
            Over 2000 ISVs, OEMs, and VARs rely on MySQL as their products'
            embedded database to make their applications, hardware and
            appliances more competitive, bring them to market faster, and lower
            their cost of goods sold.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            Learn More »
          </a>
        </div>

        {/* MySQL Cluster CGE Section */}
        <div className="bg-[#f5f7fa] shadow-md rounded-lg p-6 text-center">
          <div className="text-blue-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="8" cy="8" r="2" fill="currentColor" />
              <circle cx="16" cy="8" r="2" fill="currentColor" />
              <circle cx="8" cy="16" r="2" fill="currentColor" />
              <circle cx="16" cy="16" r="2" fill="currentColor" />
              <line
                x1="8"
                y1="8"
                x2="16"
                y2="8"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="8"
                y1="8"
                x2="8"
                y2="16"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="16"
                y1="8"
                x2="16"
                y2="16"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="8"
                y1="16"
                x2="16"
                y2="16"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">
            MySQL Cluster CGE
          </h3>
          <p className="text-black">
            MySQL Cluster enables users to meet the database challenges of
            next-generation web, cloud, and communications services with
            uncompromising scalability, uptime and agility.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            Learn More »
          </a>
        </div>
      </div>
    </div>
  );
};

export default Database;
