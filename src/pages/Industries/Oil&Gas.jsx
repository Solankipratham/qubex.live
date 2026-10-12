import React from "react";
import {
  FaTools,
  FaSyncAlt,
  FaCogs,
  FaWrench,
  FaOilCan,
  FaShieldAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";
const OilGas = () => {
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
            Oil & Gas Software Solutions
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Our company specializes in developing custom software solutions
            tailored for the oil and gas industry. We offer a comprehensive
            suite of services designed to enhance operational efficiency,
            improve safety protocols, and optimize production processes,
            enabling companies to navigate the complexities of the energy sector
            effectively.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Header */}
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-6">
            Oil and Gas Software Development Solutions
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Qubex creates fully integrated oil & gas software that connects
            upstream, midstream, and downstream operations in a fully loaded &
            comprehensive platform.
          </p>

          {/* Icons Section */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center mb-12">
            <div>
              <i className="fas fa-oil-can text-blue-500 text-4xl mb-2"></i>
              <p className="text-gray-700 font-medium">Upstream</p>
            </div>
            <div>
              <i className="fas fa-robot text-blue-500 text-4xl mb-2"></i>
              <p className="text-gray-700 font-medium">AI-Powered Solutions</p>
            </div>
            <div>
              <i className="fas fa-faucet text-blue-500 text-4xl mb-2"></i>
              <p className="text-gray-700 font-medium">Midstream</p>
            </div>
            <div>
              <i className="fas fa-cogs text-blue-500 text-4xl mb-2"></i>
              <p className="text-gray-700 font-medium">Custom ERP</p>
            </div>
            <div>
              <i className="fas fa-headset text-blue-500 text-4xl mb-2"></i>
              <p className="text-gray-700 font-medium">IT Support</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Leveraging AI to Enhance Oil & Gas Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                At Qubex, we offer tailored AI-powered solutions that aim to
                transform your processes for the better.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <i className="fas fa-tools text-blue-500 text-2xl mr-4"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      AI-Enabled Field Service Management
                    </h4>
                    <p className="text-gray-600">
                      Being efficient at field service management with advanced
                      maintenance algorithms ensures better control over
                      operations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chart-line text-blue-500 text-2xl mr-4"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Refinery Performance Boost with AI
                    </h4>
                    <p className="text-gray-600">
                      AI-enabled solutions boost refinery performance by
                      predicting failures and optimizing operations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-tachometer-alt text-blue-500 text-2xl mr-4"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      AI-Driven Midstream & Downstream Solutions
                    </h4>
                    <p className="text-gray-600">
                      Streamline supply chain logistics with AI-powered
                      forecasting and compliance systems.
                    </p>
                  </div>
                </li>
              </ul>
              <button className="mt-6 bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg ">
                Get Oil Production Software
              </button>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/Images/oil&gas.jpg"
                alt="Oil & Gas Solutions"
                className="max-w-lg rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-12 text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Custom Upstream Software Solutions
            </h3>
            <section className="bg-gray-50 py-12">
              <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Image */}
                <div className="flex justify-center">
                  <img
                    src="/Images/sarah-dorweiler-QeVmJxZOv3k-unsplash.jpg"
                    alt="Dashboard on mobile"
                    className="max-w-sm rounded-lg shadow-md"
                  />
                </div>

                {/* Right: Content */}
                <div>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <i className="fas fa-oil-can text-blue-500 text-3xl mr-4"></i>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Oil & Gas Production Software
                        </h4>
                        <p className="text-gray-600">
                          Our custom upstream oil & gas software solutions are
                          built with geophysical modeling software, HDD
                          directional drilling software, daily drilling report
                          software, and more.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-tools text-blue-500 text-3xl mr-4"></i>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Field Service Management Software
                        </h4>
                        <p className="text-gray-600">
                          We engineer feature-rich field service management
                          applications with built-in GPS functionality,
                          automated time & date stamping, and more.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-chart-line text-blue-500 text-3xl mr-4"></i>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Oil & Gas Analytics Software
                        </h4>
                        <p className="text-gray-600">
                          Our team programs automated production analytics and
                          reporting modules for real-time forecasting, lifecycle
                          tracking, and more.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-file-alt text-blue-500 text-3xl mr-4"></i>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Land Management Software
                        </h4>
                        <p className="text-gray-600">
                          Seamlessly integrate cloud-based land management
                          systems with your ERP system to optimize land
                          agreements, automate workflows, and more.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <p className="text-gray-600 mb-6">
              Qubex designs custom exploration & production (E&P) software
              solutions to enhance productivity and minimize risks.
            </p>
            <button className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg ">
              Get Upstream Software Solutions
            </button>
          </div>
        </div>
      </section>
      {/* Service Areas */}
      <div className="grid grid-cols-1 pt-10 px-4 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Upstream Solutions */}
        <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/oil1.webp"
            alt="Upstream Solutions"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Upstream Solutions
          </h2>
          <p className="text-black mb-4">
            Our upstream solutions streamline exploration and production
            activities, from seismic data analysis to drilling operations,
            ensuring efficient resource extraction.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Seismic data processing</li>
            <li>Drilling optimization</li>
            <li>Reservoir management</li>
          </ul>
        </div>

        {/* Midstream Solutions */}
        <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/oil2.webp"
            alt="Midstream Solutions"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Midstream Solutions
          </h2>
          <p className="text-black mb-4">
            Our midstream solutions enhance the transportation and storage of
            oil and gas, ensuring safe and efficient movement of resources from
            production sites to refineries.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Pipeline monitoring</li>
            <li>Logistics management</li>
            <li>Storage facility optimization</li>
          </ul>
        </div>

        {/* Downstream Solutions */}
        <div className="p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/oil3.webp"
            alt="Downstream Solutions"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Downstream Solutions
          </h2>
          <p className="text-black mb-4">
            Our downstream solutions focus on refining processes, distribution,
            and marketing, ensuring high-quality products and compliance with
            industry standards.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Refinery scheduling</li>
            <li>Supply chain management</li>
            <li>Energy trading platforms</li>
          </ul>
        </div>
      </div>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
            Optimizing Oil & Gas Operations With Custom ERP Solutions
          </h2>
          <p className="text-center text-gray-600 mb-12">
            We specialize in customized ERP software solutions, offering
            expertise in tailoring systems to meet the specific needs of diverse
            industries. Our team excels in providing end-to-end services,
            including consulting, implementation, integration, migration,
            customization, testing, support, and maintenance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Section 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaCogs className="text-blue-500 w-12 h-12 mr-4" />
                <h3 className="text-xl font-bold text-gray-800">
                  Streamlined Efficiency Through ERP Customization
                </h3>
              </div>
              <p className="text-gray-600">
                ERP for oil and gas industries integrates data from various
                departments, ensuring accuracy and eliminating silos. It plays a
                vital role in compliance management, automating reporting
                processes to meet regulatory requirements, including finance and
                billing.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaSyncAlt className="text-green-500 w-12 h-12 mr-4" />
                <h3 className="text-xl font-bold text-gray-800">
                  Seamless Integration for Real-Time Insights
                </h3>
              </div>
              <p className="text-gray-600">
                ERP systems are crucial for streamlined business operations.
                Integrating CRMs enhances customer-centric processes, IoT cloud
                enables real-time data collection, and CMMMs ensure proactive
                maintenance.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaTools className="text-orange-500 w-12 h-12 mr-4" />
                <h3 className="text-xl font-bold text-gray-800">
                  ERP Software Integrations
                </h3>
              </div>
              <p className="text-gray-600">
                We provide scalable ERP integrations tailored to businesses of
                various sizes. Our solutions encompass industry-leading SaaS
                solutions such as Oracle Netsuite, SAP Business ByDesign, and
                more.
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaWrench className="text-purple-500 w-12 h-12 mr-4" />
                <h3 className="text-xl font-bold text-gray-800">
                  Tailoring Functionality to Industry Needs
                </h3>
              </div>
              <p className="text-gray-600">
                ERP customization allows systems to be tailored to specific
                needs. Asset management tracks assets throughout their
                lifecycle, including predictive maintenance and IoT integration.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaOilCan className="text-red-500 w-12 h-12 mr-4" />
                <h3 className="text-xl font-bold text-gray-800">
                  Specialized ERP Services For Oil & Gas
                </h3>
              </div>
              <p className="text-gray-600">
                Chetu is a leader in end-to-end solutions in ERP services,
                offering expertise in consulting, implementation, integration,
                migration, customization, testing, support, and maintenance.
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-teal-500 w-12 h-12 mr-4" />
                <h3 className="text-xl font-bold text-gray-800">
                  Enhanced Data Security Measures
                </h3>
              </div>
              <p className="text-gray-600">
                Our experts can develop custom ERP solutions that help you
                safeguard your critical oil & gas data. We implement robust
                security measures such as encryption, data backups, and access
                controls.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-black text-white px-6 py-3 rounded-lg transition">
              GET OIL & GAS ERP SOLUTIONS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OilGas;
