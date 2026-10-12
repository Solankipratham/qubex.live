import React from 'react';
import { FaCog, FaFileAlt, FaShieldAlt,  FaMobileAlt,  FaChartLine, FaCogs } from "react-icons/fa";
import { FaBrain, FaBarcode, FaCloud, FaDatabase,FaIndustry, FaWrench,  FaDesktop, FaUserAlt, FaBluetooth } from 'react-icons/fa';


import img2 from "/src/assets/Images/PlatformDevloper.png";
import { Link } from 'react-router-dom';
const IoTM2M = () => {
  return (
    <div className="min-h-screen mb-20">{/* Background Image */}
    <div
      className="bg-cover opacity-6 bg-center w-full h-screen z-[-10]"
      style={{
        background: `url(${img2}) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))`,
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundAttachment: "fixed", // Keeps the image fixed
      }}
    >
      <div className="flex items-left pt-5 sm:pt-20 px-4 flex-col">
        <h1 className="text-white font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
        IoT & M2M Solutions for Smart Connectivity
        </h1>
        <p className="text-xl text-white sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
          Drive innovation and enhance connectivity with our cutting-edge IoT and M2M solutions. Our services empower
          businesses to build smarter systems, streamline operations, and deliver seamless communication between
          devices, transforming the way you work and live.
        </p>
        <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
          Start Your Project →
        </Link>
      </div>
    </div>
      <div className="max-w-7xl mx-auto px-6">

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/iotm1.webp"
              alt="Device Connectivity"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Device Connectivity</h2>
            <p className="text-black">
              Enable seamless communication between devices using advanced IoT protocols. Connect, monitor, and control
              your devices remotely for real-time efficiency.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/iotm2.webp"
              alt="Predictive Maintenance"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Predictive Maintenance</h2>
            <p className="text-black">
              Use IoT-powered analytics to predict equipment failures before they happen. Reduce downtime and extend the
              life of your assets with proactive maintenance strategies.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/iotm3.webp"
              alt="Smart Automation"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Smart Automation</h2>
            <p className="text-black">
              Automate your processes with IoT and M2M technologies. From industrial automation to smart home solutions,
              we bring efficiency and intelligence to your systems.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/iotm4.webp"
              alt="Data-Driven Insights"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Data-Driven Insights</h2>
            <p className="text-black">
              Harness real-time data from connected devices to make smarter decisions. Our IoT analytics solutions
              provide actionable insights for improved operations and strategies.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">Why Choose Our IoT & M2M Solutions?</h2>
          <ul className="list-disc list-inside space-y-2 text-black">
            <li>
              <strong>Custom IoT Development:</strong> Tailored IoT solutions for industries like manufacturing,
              healthcare, logistics, and more.
            </li>
            <li>
              <strong>Scalable Connectivity:</strong> Reliable and scalable connectivity for small devices to large
              networks.
            </li>
            <li>
              <strong>Proactive Monitoring:</strong> Advanced monitoring tools to detect issues before they impact your
              business.
            </li>
            <li>
              <strong>24/7 Expert Support:</strong> Our dedicated team ensures seamless implementation and ongoing
              support.
            </li>
          </ul>
        </div>


        <section className="bg-white py-12 px-4">
      <div className="container mx-auto  text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Artificial Intelligence of Things (AIoT) Solutions
        </h2>
        <p className="text-xl text-black mb-12">
          We integrate powerful Artificial Intelligence technologies to provide
          organizations with improved performance, greater efficiency,
          cost-effectiveness, and enhanced decision-making to drive innovation and success.
        </p>

        {/* AIoT Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Predictive Maintenance */}
          <div className="flex flex-col bg-[#f5f7fa] py-4 items-center rounded-sm text-center">
            <div className="bg-[#02b5f1] p-4 rounded-full mb-4">
              <FaCog className="text-white  text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold text-[#02b5f1] mb-4">
              Predictive Maintenance
            </h3>
            <p className="text-lg p-4 text-black">
              Our dedicated AI specialists program machine learning (ML) algorithms to analyze IoT sensor data and detect patterns and irregularities, enabling predictive maintenance, which reduces downtime and lowers maintenance costs by identifying potential failures before they happen.
            </p>
          </div>

          {/* Risk Assessment */}
          <div className="flex flex-col bg-[#f5f7fa] py-4 items-center text-center">
            <div className="bg-[#02b5f1] p-4 rounded-full mb-4">
              <FaFileAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold text-[#02b5f1] mb-4">
              Risk Assessment
            </h3>
            <p className="text-lg p-4 text-black">
              We develop deep learning (DL) models, natural language processing (NLP) models, ML classifiers, and reinforcement learning to assist with risk assessment in the Internet of Things software development processes. These models analyze IoT data for inconsistencies, provide predictive analytics, assign risk scores, conduct security analysis, and monitor compliance.
            </p>
          </div>

          {/* Security Enhancements */}
          <div className="flex flex-col bg-[#f5f7fa] py-4 items-center text-center">
            <div className="bg-[#02b5f1] p-4 rounded-full mb-4">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold text-[#02b5f1] mb-4">
              Security Enhancements
            </h3>
            <p className="text-lg p-4 text-black">
              Our expert developers mobilize AI technologies to provide organizations with advanced security capabilities, enabling them to respond to threats more effectively and protect the integrity, confidentiality, and availability of their smart devices and data.
            </p>
          </div>

          {/* Data Analytics */}
          <div className="flex flex-col bg-[#f5f7fa] py-4 items-center text-center">
            <div className="bg-[#02b5f1] p-4 rounded-full mb-4">
              <FaChartLine className="text-black text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold text-[#02b5f1] mb-4">
              Data Analytics
            </h3>
            <p className="text-lg p-4 text-black">
              Our software solutions experts configure data analytics functionality to augment IoT application development and generate valuable insights, optimize performance, expand predictive capabilities, customize user experiences, boost security, optimize resources, ensure scalability, and improve efficiency.
            </p>
          </div>

          {/* Data Acquisition Systems */}
          <div className="flex flex-col bg-[#f5f7fa] py-4 items-center text-center">
            <div className="bg-[#02b5f1] p-4 rounded-full mb-4">
              <FaCogs className="text-black text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold text-[#02b5f1] mb-4">
              Data Acquisition Systems
            </h3>
            <p className="text-lg p-4 text-black">
              We integrate AI technologies to assist IoT data acquisition systems by filtering and prioritizing relevant data, detecting abnormalities, predicting data events, adapting sampling rates, optimizing energy efficiency, and enabling scalability.
            </p>
          </div>

          {/* AI Engineering */}
          <div className="flex flex-col bg-[#f5f7fa] py-4 items-center text-center">
            <div className="bg-[#02b5f1] p-4 rounded-full mb-4">
              <FaCogs className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold text-[#02b5f1] mb-4">
              AI Engineering
            </h3>
            <p className="text-lg p-4 text-black">
              AI engineering greatly impacts the IoT firmware processes by enhancing data processing, enabling predictive capabilities, optimizing resource management, personalizing user experiences, improving security, automating tasks, ensuring scalability, and supporting continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>

        {/* Call-to-Action */}
        <div className=" text-center mb-8">
          <Link
            to="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium transition"
          >
            Contact Us for IoT & M2M Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IoTM2M;
