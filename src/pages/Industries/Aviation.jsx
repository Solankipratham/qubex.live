import React from "react";
import {
  FaPlane,
  FaCalendarAlt,
  FaTools,
  FaCogs,
  FaUsers,
  FaChartLine,
  FaSuitcase,
  FaDolly,
  FaCloud,
  FaRegHandshake,
} from "react-icons/fa";

import { Link } from "react-router-dom";
const Aviation = () => {
  return (
    <div className="">
      <div
        className="bg-cover opacity-6 bg-center w-full h-screen sm:h-[600px] z-[-10]"
        style={{
          background: `url(/Images/agritech.png) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundAttachment: "fixed", // Keeps the image fixed
        }}
      >
        <div className="flex items-left text-white pt-10 sm:pt-20 px-10 flex-col">
          <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
          AVIATION SOFTWARE DEVELOPMENT
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Revolutionize aviation operations with AI-powered solutions for
            seamless integration and enhanced efficiency.
          </p>
          <Link
            to={"/contact"}
            className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto"
          >
            Start Your Project →
          </Link>
        </div>
      </div>

      <div className="bg-gray-100">
        {/* Hero Section */}
        <div className=" text-black py-16 px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Custom Maintenance, Repair, & Overhaul (MRO) Solutions
          </h1>
          <p className="max-w-3xl mx-auto text-black text-xl">
            Qubex delivers aviation maintenance, repair, and overhaul (MRO)
            software solutions to aircraft maintenance directors, flight
            schedulers & dispatchers, inventory parts managers, and more.
          </p>
        </div>

        {/* MRO Solutions Section */}
        <div className="py-12 px-6 md:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <FaTools className="text-blue-500 text-4xl mx-auto" />
              <h2 className="text-xl font-semibold mt-4">
                Custom MRO Tracking Software
              </h2>
              <p className="text-gray-700 mt-2">
                Harness the power of machine learning and AI technologies to
                engineer MRO tracking solutions with automated mechanic
                assignments, assisted discrepancy reporting, auto part
                suggestions, and much more.
              </p>
            </div>

            <div className="text-center">
              <FaChartLine className="text-blue-500 text-4xl mx-auto" />
              <h2 className="text-xl font-semibold mt-4">
                Aviation MRO System Integrations
              </h2>
              <p className="text-gray-700 mt-2">
                Aviation MRO systems integrate with performance reporting,
                information systems (PRISM), inventory management & order
                processing systems (IMOPS), accounting systems, OEM databases,
                and ERP programs.
              </p>
            </div>

            <div className="text-center">
              <FaSuitcase className="text-blue-500 text-4xl mx-auto" />
              <h2 className="text-xl font-semibold mt-4">
                MRO Compliance Software Development
              </h2>
              <p className="text-gray-700 mt-2">
                Our custom MRO compliance systems are built with document, risk,
                vendor, staff, and CAPA management modules to ensure full
                compliance with regulatory standards, including FAA, CAB, FAR,
                ADC, EFL, NPWrs, and others.
              </p>
            </div>

            <div className="text-center">
              <FaCloud className="text-blue-500 text-4xl mx-auto" />
              <h2 className="text-xl font-semibold mt-4">
                Aviation Human Capital Management (HCM)
              </h2>
              <p className="text-gray-700 mt-2">
                Develop comprehensive aviation HCM platforms to streamline
                employee management, recruitment & onboarding, workforce
                planning, payroll & benefits, and more to support a thriving,
                results-oriented culture.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mb-12">
          <button className="bg-black text-white py-3 px-8 rounded-full ">
            Get MRO Software Developers
          </button>
        </div>

        {/* Drone Software Section */}
        <div className=" py-12 px-6 md:px-16">
          {/* Upper Section */}
          <h2 className="text-3xl text-center font-semibold mb-8">
            Custom Drone Software Development
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-center mb-8">
            Qubex develops custom drone software for agriculture,
            construction, cinematography, indoor/outdoor inspections,
            search-and-rescue, and many other industry sectors.
          </p>

          {/* Middle Section: Image and Content in Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Left Section: Image */}
            <div className="flex-shrink-0 w-full lg:w-1/2">
              <img
                src="/Images/Seamless-Integration.png"
                alt="Smart Farming Dashboard"
                className="w-full max-w-lg shadow-lg mx-auto"
              />
            </div>

            {/* Right Section: Content */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <FaDolly className="text-blue-500 text-4xl mx-auto" />
                <h3 className="text-xl font-semibold mt-4">
                  Mission Critical Drone Software Development
                </h3>
                <p className="text-gray-700 mt-2">
                  Develop drone software for mission-critical operations,
                  enabling the inspection of assets in metropolitan and remote
                  areas using advanced LIDAR sensor configurations and
                  high-resolution 3D photogrammetry.
                </p>
              </div>

              <div className="text-center">
                <FaRegHandshake className="text-blue-500 text-4xl mx-auto" />
                <h3 className="text-xl font-semibold mt-4">
                  Drone Mapping Software Development
                </h3>
                <p className="text-gray-700 mt-2">
                  Our cross-platform drone mapping software allows users to gain
                  aerial views, consolidate hundreds of acres of land into
                  consumable maps, share maps, visualize temperature ranges, and
                  gain valuable insights in real-time.
                </p>
              </div>

              <div className="text-center">
                <FaCloud className="text-blue-500 text-4xl mx-auto" />
                <h3 className="text-xl font-semibold mt-4">
                  Drone Photogrammetry Software Development
                </h3>
                <p className="text-gray-700 mt-2">
                  Leverage third-party GIS solutions to engineer geospatial
                  mapping interfaces for photogrammetry software, transforming
                  thermal, infrared, and RGB imagery into 3D terrain models &
                  orthomosaic maps.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center pb-10">
          <button className="bg-black text-white py-3 px-8 rounded-full ">
            Get Drone Software Developers
          </button>
        </div>
      </div>

      {/* Service Areas */}
      <div className="py-16 px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Flight Operations Software */}
          <div className=" p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
            <img
              src="/Images/aviation1.webp"
              alt="Flight Operations"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray mb-4">
              Flight Operations Software
            </h2>
            <p className="text-gray mb-4">
              Our flight operations solutions streamline scheduling,
              dispatching, and real-time tracking, ensuring efficient flight
              management.
            </p>
            <ul className="list-disc pl-5 text-gray">
              <li>Flight scheduling and dispatching</li>
              <li>Real-time tracking and monitoring</li>
              <li>Automated reporting and analytics</li>
              <li>Integration with existing systems</li>
            </ul>
          </div>

          {/* Maintenance, Repair, and Overhaul (MRO) Software */}
          <div className=" p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
            <img
              src="/Images/aviation2.avif"
              alt="MRO"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray mb-4">
              Maintenance, Repair, and Overhaul (MRO) Software
            </h2>
            <p className="text-gray mb-4">
              Our MRO solutions optimize maintenance workflows, track
              compliance, and manage inventory, ensuring aircraft readiness and
              safety.
            </p>
            <ul className="list-disc pl-5 text-gray">
              <li>Maintenance scheduling and tracking</li>
              <li>Compliance management</li>
              <li>Inventory and parts management</li>
              <li>Work order management</li>
            </ul>
          </div>

          {/* Passenger Service Systems (PSS) */}
          <div className=" p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
            <img
              src="/Images/aviation3.avif"
              alt="Passenger Service"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray mb-4">
              Passenger Service Systems (PSS)
            </h2>
            <p className="text-gray mb-4">
              Our PSS solutions enhance the passenger experience through
              efficient booking, check-in, and boarding processes.
            </p>
            <ul className="list-disc pl-5 text-gray">
              <li>Online booking and reservation systems</li>
              <li>Check-in and boarding management</li>
              <li>Mobile application development</li>
              <li>Customer relationship management (CRM) integration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 px-6 sm:px-8 lg:px-16">
        <div className="p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
          <h2 className="text-3xl font-semibold text-gray mb-6">
            Additional Services
          </h2>
          <p className="text-lg text-gray mb-6">
            Beyond core software solutions, we offer a range of services to
            further enhance your aviation operations:
          </p>
          <ul className="list-disc pl-5 text-gray space-y-3">
            <li className="text-lg hover:text-blue-500 transition-colors">
              Drone software development
            </li>
            <li className="text-lg">Flight planning and scheduling systems</li>
            <li className="text-lg">
              Digital twinning for aircraft maintenance
            </li>
            <li className="text-lg">AI-powered flight operations solutions</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className=" text-center  text-gray py-16 px-6 sm:px-8 lg:px-16 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
        <h3 className="text-3xl font-semibold mb-4">
          Transform Your Aviation Operations
        </h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Partner with us to develop customized software solutions that meet the
          unique needs of your aviation business. Our team is dedicated to
          delivering high-quality, scalable, and user-friendly applications that
          drive efficiency and enhance safety.
        </p>
        <Link
          to={"/contact"}
          className="inline-block bg-black text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors transform hover:scale-105 duration-300"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default Aviation;
