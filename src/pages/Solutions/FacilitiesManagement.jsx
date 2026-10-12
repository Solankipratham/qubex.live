import React from "react";
import { FiHome, FiClipboard, FiTool, FiUsers } from 'react-icons/fi';

import { Link } from "react-router-dom";

import img2 from "/Images/PlatformDevloper.png";
const FacilitiesManagement = () => {
  return (
    <div className="min-h-screen  ">
      {/* Background Image */}
      <div
        className="bg-cover opacity-6 bg-center w-full h-screen z-[-10]"
        style={{
          background: `url(${img2}) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundAttachment: "fixed", // Keeps the image fixed
        }}
      >
        <div className="flex text-white items-left pt-10 sm:pt-20 px-4 flex-col">
          <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
            Multifaceted Facility Management Software Development
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Whether you need a whole new Facility Management Software (FMS)
            solution developed from scratch or custom features integrated within
            your existing solution to facilitate FM operational tasks more
            efficiently, we've got you covered.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          Custom Facility Management Software Solutions
        </h1>
        <p className="text-gray-700 max-w-4xl mx-auto">
          Qubex develops innovative facility management software solutions to help organizations streamline maintenance operations, track assets, and enhance building management processes for greater efficiency and reduced costs.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src="/Images/FacilityManagement.jpg"
            alt="Facility Management Dashboard"
            className="w-full max-w-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-8">
          {/* Card 1 */}
          <div className="flex items-center gap-4">
            <FiHome className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Building Maintenance</h2>
              <p className="text-gray-700">
                Manage building repairs, inspections, and maintenance schedules efficiently to ensure optimal facility conditions and reduced downtime.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4">
            <FiClipboard className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Work Order Management</h2>
              <p className="text-gray-700">
                Automate work order creation, assignment, and tracking to streamline tasks and improve response times for maintenance requests.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4">
            <FiTool className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Asset Tracking</h2>
              <p className="text-gray-700">
                Monitor equipment and asset usage in real-time to optimize resource allocation and reduce operational costs.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center gap-4">
            <FiUsers className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Staff Management</h2>
              <p className="text-gray-700">
                Coordinate and manage facility staff, contractors, and vendors efficiently to ensure smooth operations and accountability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <button className="px-8 py-3 bg-black text-white font-semibold rounded-full">
        Develop Facility Management Solutions
      </button>
    </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {/* Card Items */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition-transform">
          <img
            src="/Images/facility1.avif"
            alt="CAFM Software"
            className="w-full h-48  object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-black mb-4">
            Computer-Aided Facility Management (CAFM) Software
          </h2>
          <p className="text-black">
            We develop CAFM software that allows for the planning, execution,
            and monitoring of all activities within the building lifecycle
            before, during, and after the equipment maintenance phase.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition-transform">
          <img
            src="/Images/facility2.avif"
            alt="IWMS"
            className="w-full h-48  object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-black mb-4">
            Integrated Workplace Management Systems (IWMS)
          </h2>
          <p className="text-black">
            We develop customizable IWMS software to help commercial,
            residential, educational, and government facility managers optimize
            property management processes.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition-transform">
          <img
            src="/Images/facility3.webp"
            alt="AI Technologies"
            className="w-full h-48  object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-black mb-4">
            Machine Learning and AI Technologies
          </h2>
          <p className="text-black">
            Integrate machine learning and AI technologies into the best
            facility management software to enhance capabilities, including
            predictive maintenance schedules and energy optimization.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition-transform">
          <img
            src="/Images/facility4.avif"
            alt="CMMS"
            className="w-full h-48  object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-black mb-4">
            Computerized Maintenance Management Systems (CMMS)
          </h2>
          <p className="text-black">
            Focused on asset tracking and scheduling, we program CMMS solutions
            combined with Enterprise Asset Management (EAM) features to monitor
            various assets.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition-transform">
          <img
            src="/Images/facility5.avif"
            alt="CRS"
            className="w-full h-48  object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-black mb-4">
            Integrated Central Reservation Systems (CRS)
          </h2>
          <p className="text-black">
            We prepare CRS software for direct booking, room inventory,
            check-in/check-out for part management, room access control,
            confirmation/automation, and more.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition-transform">
          <img
            src="/Images/facility6.webp"
            alt="Cloud-Based Platform"
            className="w-full h-48  object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-black mb-4">
            Cloud-based Platform
          </h2>
          <p className="text-black">
            Cloud-based platform offers robust data security measures, regular
            updates, and streamlined workflows for improved collaboration across
            facilities management teams.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-black text-white mb-4 font-semibold rounded-lg shadow-md transition duration-300">
          Manage Your Facilities with Ease
        </button>
      </div>
    </div>
  );
};

export default FacilitiesManagement;
