import React from 'react';
import { FaTachometerAlt, FaDesktop, FaMobileAlt, FaCogs } from "react-icons/fa"; // Import icons
import { AiOutlineAim, AiOutlineBarChart, AiOutlineSafety } from "react-icons/ai"; // Verified icons
import { FaServer, FaBuilding, FaDollarSign } from "react-icons/fa"; // Verified icons
import {
  FaExchangeAlt,
  FaFileAlt,
  FaWarehouse,
  FaHeadset,
  FaTools,
} from "react-icons/fa"; // Icons from Font Awesome
import { AiOutlineCheckCircle } from "react-icons/ai"; // Icon from Ant Design

import { Link } from "react-router-dom";

import img2 from "/Images/PlatformDevloper.png";
const AssetTracking = () => {
  return (
    <div className="min-h-screen">
    <div
      className="bg-cover opacity-6 bg-center w-full h-screen z-[-10]"
      style={{
        background: `url(${img2}) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))`,
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundAttachment: "fixed", // Keeps the image fixed
      }}
    >
      <div className="flex items-left pt-10 sm:pt-20 px-4 flex-col">
        <h1 className="text-white font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
        Asset Tracking Solutions for Enhanced Visibility
        </h1>
        <p className="text-white text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
        Streamline your operations and maximize asset utilization with our cutting-edge asset tracking solutions. From real-time monitoring to predictive analytics, our services ensure efficiency, transparency, and cost optimization for businesses of all sizes.
        </p>
        <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
          Start Your Project →
        </Link>
      </div>
    </div>
      <div className="max-w-7xl mx-auto py-6">

      <div>
      {/* Hero Section */}
      <section className="text-center py-10 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-4">
          Hire Experienced Asset Tracking Software Developers
        </h1>
        <p className="text-lg mb-6">
          Our expert developers have many years of combined experience in the supply chain industry and developing
          shipping & logistics, warehouse management, freight forwarding, and order processing software solutions to
          simplify asset tracking workflows throughout the transportation of goods from start to finish.
        </p>
        <button className="px-6 py-3 bg-black text-white font-bold rounded-full ">
          Get Asset Tracking Developers
        </button>
      </section>

      {/* Features and Image Section */}
      <section className="flex flex-col lg:flex-row items-center gap-8 px-10 py-10">
        {/* Image Section */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src="/Images/jon-tyson-FlHdnPO6dlw-unsplash.jpg" // Replace with the actual image URL
            alt="Asset Tracking Software"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2  gap-8 w-full">
          {/* Feature Card 1 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaTachometerAlt /> {/* Asset Performance Management Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Asset Performance Management</h3>
            <p className="text-gray-600">
              We develop systems equipped with data capture abilities, visualizations, and analytics to provide condition
              monitoring and predictive forecasting so that critical assets can be thoroughly monitored and equipment
              failures can be anticipated before they occur.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaDesktop /> {/* Computerized Maintenance Management Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Computerized Maintenance Management</h3>
            <p className="text-gray-600">
              We develop Computerized Maintenance Management (CMMS) software to minimize downtime and enhance asset
              performance by managing work orders, tracking & scheduling preventive maintenance, managing service requests, and more.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaMobileAlt /> {/* Mobile Asset Management Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Mobile Asset Management</h3>
            <p className="text-gray-600">
              We build native iOS and Android and cross-platform mobile apps with GPS-powered asset tracking maps, camera
              scanners, and full database functionality, equipped with notification systems for alerting users of when assets
              have been relocated without proper permissions.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaCogs /> {/* Fixed Asset Tracking Software Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Fixed Asset Tracking Software</h3>
            <p className="text-gray-600">
              We develop customized fixed asset tracking software equipped with interactive maps, customizable fields, asset
              directories, photo tagging capabilities, reporting tools, third-party integrations, and more using leading data
              systems like Oracle, SQL Server, and MySQL.
            </p>
          </div>
        </div>
      </section>
    </div>

    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="py-10 px-6 text-center">
        <h1 className="text-3xl font-bold">AI-Powered Asset Tracking Software Solutions</h1>
        <p className="mt-4 text-lg text-gray-600">
          Our AI-enabled asset-tracking solutions redefine asset management by providing real-time tracking, optimizing efficiency, and enhancing security through AI anomaly detection. Our advanced reporting and analytics features ensure valuable insights for informed decision-making.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 py-10">
        {/* Feature 1 */}
        <div className="text-center">
          <AiOutlineAim className="mx-auto mb-4 text-blue-500" size={56} />
          <h3 className="text-xl font-semibold">Real-Time Tracking and Location with AI</h3>
          <p className="mt-2 text-gray-600">
            Our team can develop AI algorithms to power computer vision that analyzes images or video feeds in real-time to identify and track assets...
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center">
          <AiOutlineBarChart className="mx-auto mb-4 text-green-500" size={56} />
          <h3 className="text-xl font-semibold">Enhanced Operational Efficiency with AI</h3>
          <p className="mt-2 text-gray-600">
            Our AI-driven predictive analytics analyze historical data and usage patterns to forecast when assets will likely require maintenance...
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center">
          <AiOutlineSafety className="mx-auto mb-4" size={56} />
          <h3 className="text-xl font-semibold">Security and Anomaly Detection Enhanced by AI</h3>
          <p className="mt-2 text-gray-600">
            Our Machine Learning models are trained to recognize normal patterns of asset behavior. When deviations or anomalies occur...
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center py-6">
        <button className="bg-black text-white py-2 px-6 rounded">
          GET AI-POWERED ASSET TRACKING SOLUTIONS
        </button>
      </div>

      {/* Custom Solutions Section */}
      <section className="bg-white py-10 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Custom Asset Tracking Solutions
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Our asset tracking experts develop custom solutions for the tracking and management of assets such as heavy equipment, tools, vehicles, and technology with features to effectively monitor assets throughout your entire organization and supply chain.
        </p>

        {/* Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
          {/* Solution 1 */}
          <div className="text-center">
            <FaServer className="mx-auto mb-4 text-purple-500" size={48} />
            <h3 className="text-xl font-semibold">IT Asset Tracking Solutions</h3>
            <p className="mt-2 text-gray-600">
              Our solutions help manage software and hardware components of IT assets with barcodes, perform system-wide audits...
            </p>
          </div>

          {/* Solution 2 */}
          <div className="text-center">
            <FaBuilding className="mx-auto mb-4 text-teal-500" size={48} />
            <h3 className="text-xl font-semibold">Facility Management Solutions</h3>
            <p className="mt-2 text-gray-600">
              We develop solutions that optimize record-keeping and ensure all assets are accounted for by allowing you to manage...
            </p>
          </div>

          {/* Solution 3 */}
          <div className="text-center">
            <FaDollarSign className="mx-auto mb-4 text-yellow-500" size={48} />
            <h3 className="text-xl font-semibold">Funding Management Solutions</h3>
            <p className="mt-2 text-gray-600">
              Our custom solutions can manage approved funds and assets purchased with them, disperse them accordingly...
            </p>
          </div>
        </div>
      </section>
    </div>
    <div className="bg-gray-50 text-gray-800">
      {/* Section 1: EDI Solutions */}
      <section className="py-10 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Custom EDI Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20">
          {/* Item 1 */}
          <div className="flex items-center">
            <FaCogs className="text-blue-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Custom EDI Solutions</h3>
              <p className="text-gray-600">
                Our expert team of Asset Tracking Software Developers engineer
                custom web-based, on-premise, and hybrid systems to enable
                reliable EDI software communications that conform to prominent
                standards.
              </p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex items-center">
            <FaExchangeAlt className="text-green-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">EDI Development</h3>
              <p className="text-gray-600">
                Our expert EDI developers have extensive experience with all
                types of EDI methodologies, including Direct EDI, Mobile EDI,
                and EDI Outsourcing.
              </p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="flex items-center">
            <FaFileAlt className="text-yellow-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">EDI Translations</h3>
              <p className="text-gray-600">
                We translate your existing EDI to adhere to ANSI ASC, EDIFACT,
                JSON, or TRADACOMS standards to effectively communicate codes.
              </p>
            </div>
          </div>
          {/* Item 4 */}
          <div className="flex items-center">
            <FaWarehouse className="text-red-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">
                Digital EDI Filing & Storage
              </h3>
              <p className="text-gray-600">
                Our EDI solutions ensure all information is securely stored with
                advanced access controls like Role-Based User Controls (RBAC).
              </p>
            </div>
          </div>
        </div>
        <div className="text-center py-6">
          <button className="bg-[#171717] text-white py-2 px-6 rounded">
            GET CUSTOM EDI INTEGRATIONS
          </button>
        </div>
      </section>

      {/* Section 2: Asset Tracking Support */}
      <section className="py-10 px-6 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">
          Asset Tracking Software Support Services
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
          Asset tracking software is crucial for organizations as it optimizes
          asset utilization, reduces costs, enhances efficiency, mitigates
          risks, and provides supply chain visibility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20">
          {/* Item 1 */}
          <div className="flex items-center">
            <AiOutlineCheckCircle className="text-blue-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">
                Comprehensive Application Support
              </h3>
              <p className="text-gray-600">
                Our technical application support assists organizations with
                integration, usability improvements, and addressing data
                integrity issues.
              </p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex items-center">
            <FaHeadset className="text-green-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Responsive 24/7 Help Desk</h3>
              <p className="text-gray-600">
                Our experts provide around-the-clock support powered by an
                advanced ticketing system to minimize downtime.
              </p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="flex items-center">
            <FaTools className="text-yellow-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">
                Extended Support & Maintenance
              </h3>
              <p className="text-gray-600">
                Our extended support enhances resilience and keeps systems
                updated with the latest advancements.
              </p>
            </div>
          </div>
          {/* Item 4 */}
          <div className="flex items-center">
            <AiOutlineCheckCircle className="text-red-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">
                Quality Assurance & Testing
              </h3>
              <p className="text-gray-600">
                We ensure reliability through rigorous quality assurance and
                performance assessments.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center py-6">
          <button className="bg-black text-white py-2 px-6 rounded">
            GET APPLICATION SUPPORT
          </button>
        </div>
      </section>
    </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/asset1.webp"
              alt="Augmented Reality (AR)"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
            Real-Time Asset Tracking
            </h2>
            <p className="text-black text-sm sm:text-base">
            Monitor the location and status of your assets in real time. Improve visibility across your supply chain and reduce operational delays with our advanced tracking systems.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/asset2.webp"
              alt="Virtual Reality (VR)"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
            IoT-Enabled Sensors
            </h2>
            <p className="text-black text-sm sm:text-base">
            Leverage IoT sensors to collect and analyze asset data. Track parameters like temperature, movement, and utilization to optimize performance and prevent losses.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/asset3.webp"
              alt="Mixed Reality (MR)"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
            Predictive Analytics
            </h2>
            <p className="text-black text-sm sm:text-base">
            Use predictive analytics to anticipate asset maintenance needs and prevent downtime. Make informed decisions based on accurate, real-time data.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/asset4.webp"
              alt="AR/VR App Development"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
            Custom Asset Management
            </h2>
            <p className="text-black text-sm sm:text-base">
            Develop tailored asset management solutions to meet your unique business needs. Enhance operational efficiency and optimize resource allocation with our customized platforms.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-4">
            Why Choose Our Asset Tracking Solutions?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black">
            <li>
              <strong>Comprehensive Monitoring:</strong> Real-time tracking and analytics for complete visibility of your assets.
            </li>
            <li>
              <strong>Advanced Technology:</strong> Leverage IoT, GPS, and predictive analytics for superior performance.
            </li>
            <li>
              <strong>Custom Solutions:</strong> Tailored asset tracking systems designed to fit your specific requirements.
            </li>
            <li>
              <strong>Proven Expertise:</strong> Trusted by businesses across industries for reliable and scalable solutions.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium"
          >
            Contact Us for Asset Tracking Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssetTracking;
