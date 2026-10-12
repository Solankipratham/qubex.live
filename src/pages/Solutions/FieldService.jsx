import React from "react";
import { FiMapPin, FiClock, FiUserCheck, FiTruck } from 'react-icons/fi';


import img2 from "/Images/PlatformDevloper.png";
import { Link } from "react-router-dom";
const FieldService = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Background Image */}
      <div
        className="bg-cover opacity-6 bg-center w-full h-screen z-[-10]"
        style={{
          background: `url(${img2}) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundAttachment: "fixed", // Keeps the image fixed
        }}
      >
        <div className="flex items-left pt-10 sm:pt-20 px-4 flex-col">
          <h1 className="text-white font-bold text-2xl sm:text-3xl mt-10 sm:mt-20 w-full">
          We Have Experienced Field Service Management Software Developers
          </h1>
          <p className="text-xl sm:text-2xl  w-[90%] sm:w-[80%] ">
            We develop, integrate, and customize Field Service Management
            Software, implemented with Order Fulfillment Software, Inventory
            Management Systems, Shipping & Logistics Systems customer loyalty, and
            business efficiency for field service operations.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl text-black md:text-4xl font-bold">
          Custom Field Service Management Software Solutions
        </h1>
        <p className="text-gray-700 max-w-4xl mx-auto">
          Qubex designs & develops robust field service management solutions that enhance team coordination, optimize scheduling, and streamline on-site operations to ensure timely service delivery and improved customer satisfaction.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src="/Images/FieldService.jpg"
            alt="Field Service Dashboard"
            className="w-full max-w-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-8">
          {/* Card 1 */}
          <div className="flex items-center gap-4">
            <FiMapPin className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Real-Time Location Tracking</h2>
              <p className="text-gray-700">
                Enable real-time GPS tracking of field agents, vehicles, and equipment to optimize routes, reduce travel time, and ensure on-time task completion.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4">
            <FiClock className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Optimized Scheduling</h2>
              <p className="text-gray-700">
                Automate scheduling to assign tasks efficiently, reduce downtime, and ensure equitable workload distribution across your field service teams.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4">
            <FiUserCheck className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Customer Communication</h2>
              <p className="text-gray-700">
                Enhance customer satisfaction with automated notifications, real-time updates on service status, and accurate ETAs for on-site visits.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center gap-4">
            <FiTruck className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Inventory & Asset Management</h2>
              <p className="text-gray-700">
                Manage tools, equipment, and inventory efficiently to ensure field agents have the right resources for each job without delays.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <button className="px-8 py-3 bg-black text-white font-semibold rounded-full">
        Develop Field Service Management Solutions
      </button>
    </div>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {/* Feature Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
            <img
              src="/Images/field1.webp"
              alt="Field Service Management App Development"
              className="w-full h-auto mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-white text-center">
              Field Service Management App Development
            </h2>
            <p className="text-sm text-center text-black">
              We deliver end-to-end Field Service Management app development
              solutions to improve business efficiency, real-time communication,
              and fast response times.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
            <img
              src="/Images/field2.webp"
              className="w-full h-auto mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-black text-center">
              Customer FSM Self Service Portals
            </h2>
            <p className="text-sm text-center text-black">
              We build AI-powered portals with intuitive design to empower
              customers with chatbots, virtual agents, and self-service
              features.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
            <img
              src="/Images/field3.webp"
              alt="Reports & Dashboards"
              className="w-full h-auto mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-black text-center">
              Reports & Dashboards
            </h2>
            <p className="text-sm text-center text-black">
              Generate actionable insights with comprehensive dashboards that
              provide technician attendance reports, performance metrics, and
              more.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
            <img
              src="/Images/field4.webp"
              alt="Remote Assistance"
              className="w-full h-auto mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-black text-center">
              Remote Assistance
            </h2>
            <p className="text-sm text-center text-black">
              Enable field experts to remotely assist technicians in
              inaccessible locations using live video streams.
            </p>
          </div>

          {/* Feature Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
            <img
              src="/Images/field5.webp"
              alt="Logistics Management & Reverse Logistics Engines"
              className="w-full h-auto mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-black text-center">
              Logistics Management & Reverse Logistics Engines
            </h2>
            <p className="text-sm text-center text-black">
              Streamline logistics processes to enhance efficiency and reduce
              turnaround times for returns and repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Custom FSM Solutions Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-black">
            Custom Field Service Management Solutions
          </h2>
          <p className="text-lg mb-8 text-black">
            We engineer Custom FSM Solutions that incorporate Fleet Management,
            Supply Chain Management (SCM), Inventory Management, and Workforce
            Management Software in a centralized platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
              <img
              src="/Images/field6.avif"
                alt="Mobile Field Service Application"
                className="w-full h-auto mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-black">
                Mobile Field Service Application Solutions
              </h3>
              <p className="text-sm text-center text-black">
                Optimize scheduling, invoicing, and resource management with
                custom mobile FSM solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
              <img
              src="/Images/field7.webp"
                alt="FSM Inventory Management Solutions"
                className="w-full h-auto mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-black">
                FSM Inventory Management Solutions
              </h3>
              <p className="text-sm text-center text-black">
                Manage field service inventory with full visibility and advanced
                tools for warehouse and fleet management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-black">
            Artificial Intelligence Solutions for Field Service Management
          </h2>
          <p className="text-lg mb-8 text-black">
            Enhance operations with AI-driven insights, predictive maintenance,
            and route optimization to streamline workflows and reduce expenses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
              <img
              src="/Images/field8.webp"
                alt="AI-Driven Predictive Maintenance"
                className="w-full h-auto mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-black">
                AI-Driven Predictive Maintenance
              </h3>
              <p className="text-sm text-center text-black">
                Leverage AI to forecast failures and schedule proactive
                maintenance for seamless operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
              <img
              src="/Images/field9.avif"
                alt="Real-time Field Service Analytics"
                className="w-full h-auto mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-black">
                Real-time Field Service Analytics
              </h3>
              <p className="text-sm text-center text-black">
                Access advanced analytics for performance tracking and
                data-driven decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FieldService;
