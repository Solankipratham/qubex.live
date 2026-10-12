import React from "react";
import {
  FiMap,
  FiGrid,
  FiCpu,
  FiDroplet,
  FiSettings,
  FiLayers,
} from "react-icons/fi";
import {
  FaSearch,
  FaDesktop,
  FaCog,
  FaRobot,
  FaQuestionCircle,
} from "react-icons/fa";
import FAQ from "../../components/FAQ";
import { Link } from "react-router-dom";
const AgriTech = () => {
  const faqs = [
    {
      question: "What is agriculture software development?",
      answer:
        "Agriculture software development involves the creation of custom software solutions to support the farming and agricultural industry, including tools for managing crops, inventory, and data analytics.",
    },
    {
      question: "What technologies are commonly used in agriculture software?",
      answer:
        "Technologies like AI, IoT, cloud computing, machine learning, and GIS are commonly used to enhance agricultural software solutions.",
    },
    {
      question: "What is AgTech?",
      answer:
        "AgTech refers to agricultural technology, which is the use of innovative tools and techniques such as data analysis, AI, and automation in farming and agriculture.",
    },
    {
      question: "How is AI used in Agriculture?",
      answer:
        "AI in agriculture is used for tasks like crop prediction, disease detection, and soil analysis, helping optimize farming processes and reduce labor costs.",
    },
    {
      question: "What is the benefit of AI in agriculture?",
      answer:
        "AI improves productivity, accuracy, and sustainability in agriculture by enabling predictive analytics, real-time monitoring, and optimization of resources.",
    },
    {
      question: "Is AgTech the future?",
      answer:
        "Yes, AgTech is the future of agriculture, driving innovation and efficiency in farming practices through automation and digitalization.",
    },
  ];
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
        <div className="flex items-left text-white pt-10 sm:pt-20 px-10 flex-col ">
          <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
          AgriTech Software Solutions
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Our company specializes in developing custom software solutions
            tailored for the AgriTech industry. We offer a comprehensive suite
            of services designed to enhance agricultural productivity,
            streamline operations, and promote sustainable practices.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-24 py-12 space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Land Management Software Solutions
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Qubex's land management software developers have vast agricultural
            industry experience and first-hand knowledge of how to develop
            world-class solutions for agricultural operations.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section: Laptop Image */}
          <div className="flex-shrink-0">
            <img
              src="/Images/Landmapping.jpg"
              alt="Land Management Dashboard"
              className="w-full max-w-lg shadow-lg"
            />
          </div>

          {/* Right Section: Features */}
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <FiMap className="text-blue-500 text-6xl" />
              <div>
                <h2 className="text-xl font-bold">
                  Land Mapping & GPS Software
                </h2>
                <p className="text-gray-600">
                  We program GIS & GPS technologies and integrate them with your
                  current systems for site-specific data mapping optimization
                  and accurate yield forecasting.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <FiGrid className="text-blue-500 text-6xl" />
              <div>
                <h2 className="text-xl font-bold">
                  3D Field Design Applications
                </h2>
                <p className="text-gray-600">
                  We engineer custom 3D field design apps to seamlessly
                  integrate with topography mapping software for added
                  visualization and management of land areas.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-center gap-4">
              <FiCpu className="text-blue-500 text-6xl" />
              <div>
                <h2 className="text-xl font-bold">
                  Smart Controllers & Sensors
                </h2>
                <p className="text-gray-600">
                  We implement smart controllers & sensors that screen the
                  yields for changes in temperature, light, humidity, weather
                  patterns, and other environmental factors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Right Section: Features */}
          <div className="space-y-8">
            {/* Feature 4 */}
            <div className="flex items-center gap-4">
              <FiSettings className="text-blue-500 text-6xl" />
              <div>
                <h2 className="text-xl font-bold">
                  Autonomous Farming Management Systems
                </h2>
                <p className="text-gray-600">
                  We incorporate prescriptive technology, harvesting & crop
                  management modules, and decision support systems (DSS) to
                  maximize operational performance for autonomous farming.
                </p>
              </div>
            </div>
            {/* Feature 5 */}
            <div className="flex items-center gap-4">
              <FiDroplet className="text-blue-500 text-6xl" />
              <div>
                <h2 className="text-xl font-bold">
                  Irrigation System Management
                </h2>
                <p className="text-gray-600">
                  We design our irrigation software with computer-aided designs
                  (CAD), digital terrain modeling (DTM), hydraulic systems, and
                  irrigation patterns.
                </p>
              </div>
            </div>
            {/* Feature 6 */}
            <div className="flex items-center gap-4">
              <FiLayers className="text-blue-500 text-6xl" />
              <div>
                <h2 className="text-xl font-bold">Operations Management</h2>
                <p className="text-gray-600">
                  We integrate unmanned aerial vehicle (UAV) software with
                  third-party APIs for irrigation management to streamline
                  consistent operational workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Left Section: Mobile Image */}
          <div className="flex-shrink-0">
            <img
              src="/Images/Farming.jpg"
              alt="Smart Farming Dashboard"
              className="w-full max-w-sm shadow-lg"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-black text-white font-semibold rounded-full ">
            Get Land Mgmt Software Developer
          </button>
        </div>
      </div>

      <div className="">
        {/* Hero Section */}
        <div className="bg-gray-100 text-black py-16 px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            IT Support Services for Agriculture Software
          </h1>
          <p className="max-w-3xl mx-auto text-xl">
            Qubex's IT specialists and support team design, implement, and
            monitor the performance of today’s agriculture software solutions.
            Our support services team provides scalable solutions to exceed
            evolving demands and offers continuous guidance and troubleshooting
            while mitigating workflow interruption.
          </p>
        </div>

        {/* Services Section */}
        <div className="py-12 px-6 md:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <FaSearch className="text-blue-500 text-4xl mx-auto" />
              <h2 className="text-xl font-semibold mt-4">
                Agricultural Software Integration Expertise
              </h2>
              <p className="text-gray-700 mt-2">
                Qubex’s unrivaled integration expertise produces seamless
                solutions utilizing the newest programs to propel your business
                strategies forward.
              </p>
            </div>

            <div className="text-center">
              <FaDesktop className="text-blue-500 text-4xl mx-auto" />
              <h2 className="text-xl font-semibold mt-4">
                Comprehensive Managed IT Support
              </h2>
              <p className="text-gray-700 mt-2">
                Qubex creates individualized, comprehensive IT support plans
                for your unique needs to ensure all resources run optimally.
              </p>
            </div>

            <div className="text-center">
              <FaCog className="text-blue-500 text-4xl mx-auto" />
              <h2 className="text-xl font-semibold mt-4">
                Remote Assistance for Agribusiness Technology
              </h2>
              <p className="text-gray-700 mt-2">
                Our adept software development teams create remote-based support
                service solutions to enable your business to grow while
                receiving proven guidance and troubleshooting strategies.
              </p>
            </div>

            <div className="text-center">
              <FaRobot className="text-blue-500 text-4xl mx-auto" />
              <h2 className="text-xl font-semibold mt-4">
                Smart Agriculture Technology Integration
              </h2>
              <p className="text-gray-700 mt-2">
                Qubex’s AI experts leverage powerful resources to modernize
                operations and streamline tasks, enabling the full optimization
                of smart agriculture resources.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-200 py-12 px-6 md:px-16">
          <h2 className="text-3xl text-center font-semibold mb-8">
            Agriculture Software Development: Frequently Asked Questions
          </h2>
          <div>
            <FAQ faqs={faqs} />
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="py-16 px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Farm Management Software */}
          <div className="bg-[#f5f7fa] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
            <img
              src="/Images/agri1.webp"
              alt="Farm Management"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray mb-4">
              Farm Management Software
            </h2>
            <p className="text-gray mb-4">
              Our farm management solutions provide real-time insights into crop
              health, soil conditions, and weather patterns, enabling farmers to
              make informed decisions and optimize yields.
            </p>
            <ul className="list-disc pl-5 text-gray">
              <li>Crop management</li>
              <li>Soil health monitoring</li>
              <li>Weather forecasting</li>
              <li>Data analytics and reporting</li>
            </ul>
          </div>

          {/* Livestock Management Software */}
          <div className="bg-[#f5f7fa] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
            <img
              src="/Images/agri2.webp"
              alt="Livestock Management"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray mb-4">
              Livestock Management Software
            </h2>
            <p className="text-gray mb-4">
              Our livestock management systems streamline breeding, feeding, and
              health monitoring, ensuring optimal care and productivity.
            </p>
            <ul className="list-disc pl-5 text-gray">
              <li>Breeding management</li>
              <li>Feeding schedules</li>
              <li>Health tracking</li>
              <li>Inventory management</li>
            </ul>
          </div>

          {/* Supply Chain Management Software */}
          <div className="bg-[#f5f7fa] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
            <img
              src="/Images/agri3.webp"
              alt="Supply Chain Management"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray mb-4">
              Supply Chain Management Software
            </h2>
            <p className="text-gray mb-4">
              Our supply chain solutions ensure efficient tracking of produce
              from farm to market, enhancing transparency and reducing waste.
            </p>
            <ul className="list-disc pl-5 text-gray">
              <li>Inventory tracking</li>
              <li>Logistics management</li>
              <li>Supplier and distributor coordination</li>
              <li>Real-time analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className=" py-10 px-6 sm:px-8 lg:px-16">
        <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
          <h2 className="text-3xl font-semibold text-gray mb-6">
            Additional Services
          </h2>
          <p className="text-lg text-gray mb-6">
            Beyond core software solutions, we offer a range of services to
            further enhance your AgriTech operations:
          </p>
          <ul className="list-disc pl-5 text-gray space-y-3">
            <li className="text-lg hover:text-blue-500 transition-colors ">
              {" "}
              Precision agriculture solutions
            </li>
            <li className="text-lg ">Drone and UAV integration</li>
            <li className="text-lg ">IoT sensor integration</li>
            <li className="text-lg ">Mobile application development</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center text-gray py-10 px-6 sm:px-8 lg:px-16 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
        <h3 className="text-3xl font-semibold mb-4">
          Transform Your Agricultural Operations
        </h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Partner with us to develop customized software solutions that meet the
          unique needs of your AgriTech business. Our team is dedicated to
          delivering high-quality, scalable, and user-friendly applications that
          drive efficiency and promote sustainable practices.
        </p>
        <Link
          to={"/contact"}
          className="inline-block bg-black text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors transform"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default AgriTech;
