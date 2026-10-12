import React from "react";
import {
  FaCogs,
  FaDraftingCompass,
  FaPlug,
  FaCode,
  FaCube,
  FaNetworkWired,
} from "react-icons/fa";
import { FaTools, FaSyncAlt } from "react-icons/fa";

import img2 from "/Images/PlatformDevloper.png";
import { Link } from "react-router-dom";
const Autodesk = () => {
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
        <div className="flex items-left pt-10 sm:pt-20 px-4 flex-col">
          <h1 className="text-white font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
            Autodesk Solutions for Precision and Innovation
          </h1>
          <p className="text-white text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Streamline design, engineering, and manufacturing processes with our
            tailored Autodesk solutions. From CAD to BIM and beyond, we empower
            businesses to create, innovate, and build with precision.
          </p>
          <Link
            to={"/contact"}
            className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto"
          >
            Start Your Project →
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6">
        <div>
          {/* Header Section */}
          <section className=" text-center py-12">
            <h1 className="text-2xl font-bold text-blue-600">
              Qubex is a Leading Autodesk Certified Partner
            </h1>
            <p className="text-gray-600 mt-4 max-w-4xl mx-auto">
              AUTODESK - Qubex is a certified Autodesk partner providing
              customers with seamless Autodesk integrations and support
              resources. Our Autodesk experts specialize in the installation and
              implementation of leading Autodesk products, including Revit, BIM
              360, AutoCAD, Maya, Inventor, and more.
            </p>

            {/* Image Section */}
            <div className="relative mt-12 flex justify-center">
              {/* Main Screen */}
              <img
                src="/Images/Autodesk2.jpg" // Replace with your actual image URL
                alt="Main Autodesk Products Screen"
                className="rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* Advanced Solutions Section */}
          <section className="py-12 ">
            <h2 className="text-xl font-bold text-blue-600 text-center">
              Advanced Autodesk Support Solutions
            </h2>
            <div className="mt-8 flex sm:flex-nowrap flex-wrap justify-center gap-8">
              {/* Card 1 */}
              <div className="bg-white shadow-md rounded-lg p-6 w-80 text-left">
                <div className="mb-4">
                  <FaTools className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Certified Technical Support for Autodesk Products
                </h3>
                <p className="text-gray-600 mt-2">
                  Qubex's certified Autodesk support team provides expert
                  technical guidance to exceed the demands of the evolving
                  business landscape...
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white shadow-md rounded-lg p-6 w-80 text-left">
                <div className="mb-4">
                  <FaDraftingCompass className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  CAD Software Expertise and Drafting Support
                </h3>
                <p className="text-gray-600 mt-2">
                  Autodesk enables nuanced, accurate 2D and 3D drafting designs
                  that augment design professionals' complete, high-quality
                  deliverables...
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white shadow-md rounded-lg p-6 w-80 text-left">
                <div className="mb-4">
                  <FaSyncAlt className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Streamlined Data Management and Migration
                </h3>
                <p className="text-gray-600 mt-2">
                  Qubex understands the value of quality data and provides
                  clients with error-free data analysis and fully streamlined
                  data monitoring...
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white shadow-md rounded-lg p-6 w-80 text-left">
                <div className="mb-4">
                  <FaCogs className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Seamless Integration with Third-Party Software
                </h3>
                <p className="text-gray-600 mt-2">
                  Our software specialists create customized integration
                  solutions to ensure compatibility and full functionality
                  within all third-party software programs...
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className=" py-12">
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
            Complete Autodesk Services: From Consulting to Implementation
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Qubex's comprehensive Autodesk services provide consulting,
            implementation, support solutions, and more. Our Autodesk services
            are set apart by expert, industry-informed customizations and
            integrations specifically designed to meet your needs.
          </p>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
            {/* Each Service */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaCogs size={40} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Autodesk Consulting Services
                </h3>
              </div>
              <p className="text-gray-600">
                As certified Autodesk Service Provider Select partners,
                Qubex's expert Autodesk consultants seamlessly integrate
                Autodesk products with your existing business workflows to bring
                ideas to life.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaDraftingCompass size={40} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Drawing & Drafting Services
                </h3>
              </div>
              <p className="text-gray-600">
                Qubex offers best-in-class 2D & 3D drawing and drafting
                services, leveraging feature-rich Autodesk editing, design, and
                annotation tools for engineers, architects, and construction
                professionals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaPlug size={40} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Autodesk Plug-in Design
                </h3>
              </div>
              <p className="text-gray-600">
                We harness Autodesk's API to design Autodesk plug-ins,
                leveraging specific features and functionalities to create and
                integrate custom tools.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaCode size={40} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Custom Autodesk Programming
                </h3>
              </div>
              <p className="text-gray-600">
                Our programming solutions extend Autodesk's functionality,
                expanding Autodesk products like Revit, AutoCAD, Fusion 360, and
                beyond with custom-made APIs, AI integrations, and more.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaCube size={40} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Personalized Design & Modeling
                </h3>
              </div>
              <p className="text-gray-600">
                Our Autodesk experts leverage 3D CAD and 3D design tools for
                modeling, engineering, drafting, and visualization to unleash
                the power of design technology.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaNetworkWired size={40} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Autodesk IoT Integrations
                </h3>
              </div>
              <p className="text-gray-600">
                We expertly connect IoT devices with Autodesk software for
                real-time data usage from physical assets like buildings,
                enabling smarter operations.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/autodesk1.webp"
              alt="CAD Design Solutions"
              className="w-full h-48  rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              CAD Design Solutions
            </h2>
            <p className="text-black text-sm sm:text-base">
              Create precise and detailed designs with our Autodesk CAD
              solutions. Perfect for architectural, mechanical, and product
              design projects.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/autodesk2.webp"
              alt="Building Information Modeling (BIM)"
              className="w-full h-48  rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Building Information Modeling (BIM)
            </h2>
            <p className="text-black text-sm sm:text-base">
              Leverage BIM tools to enhance collaboration and optimize
              construction processes. Transform ideas into actionable 3D models
              and workflows.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/autodesk3.webp"
              alt="3D Visualization and Animation"
              className="w-full h-48  rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              3D Visualization and Animation
            </h2>
            <p className="text-black text-sm sm:text-base">
              Bring designs to life with stunning 3D visualizations and
              animations. Communicate your concepts effectively with immersive
              experiences.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/autodesk4.webp"
              alt="Manufacturing and Fabrication"
              className="w-full h-48  rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Manufacturing and Fabrication
            </h2>
            <p className="text-black text-sm sm:text-base">
              Optimize manufacturing and fabrication processes with Autodesk
              tools. From prototypes to production, achieve precision and
              efficiency.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-4">
            Why Choose Our Autodesk Solutions?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black">
            <li>
              <strong>Comprehensive Expertise:</strong> Deep experience across
              Autodesk products, including AutoCAD, Revit, Maya, and more.
            </li>
            <li>
              <strong>Tailored Solutions:</strong> Customized workflows and
              tools to fit your business needs.
            </li>
            <li>
              <strong>Cutting-Edge Technology:</strong> Access the latest
              Autodesk tools for design, visualization, and manufacturing.
            </li>
            <li>
              <strong>Proven Success:</strong> Trusted by businesses worldwide
              for delivering impactful design and engineering solutions.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium"
          >
            Contact Us for Autodesk Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Autodesk;
