import React from "react";
import img2 from "../../assets/Images/PlatformDevloper.png"; // Adjust based on actual file path
import { FiTrendingUp, FiSettings, FiDatabase, FiUsers } from "react-icons/fi";

import { Link } from "react-router-dom";
// Ensure the correct path for img2

const EmbeddedSoftware = () => {
  return (
    <>
      <div
        className="bg-cover bg-center w-full h-screen"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img2})`, // Corrected here
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex flex-col items-start pt-10 sm:pt-20 px-10">
          <h1 className="text-white font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
          Custom ERP Software Solutions
          </h1>
          <p className="text-xl text-white sm:text-2xl pt-5 w-[90%] sm:w-[80%]">
            Qubex develops cutting-edge ERP software solutions to help
            businesses streamline operations, manage resources effectively, and
            boost productivity across all departments.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Learn More →
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 py-12 space-y-12">
        

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/Images/ERP.jpg"
              alt="ERP Management Dashboard"
              className="w-full max-w-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-8">
            {/* Card 1 */}
            <div className="flex items-center gap-4">
              <FiTrendingUp className="text-blue-500 text-4xl" />
              <div>
                <h2 className="text-xl font-bold">
                  Business Process Automation
                </h2>
                <p className="text-gray-700">
                  Automate key business processes such as inventory management,
                  finance, and procurement for increased efficiency and reduced
                  costs.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4">
              <FiSettings className="text-blue-500 text-4xl" />
              <div>
                <h2 className="text-xl font-bold">Customizable Modules</h2>
                <p className="text-gray-700">
                  Create tailored ERP modules to meet your unique business
                  needs, including HR, CRM, and supply chain management.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4">
              <FiDatabase className="text-blue-500 text-4xl" />
              <div>
                <h2 className="text-xl font-bold">
                  Centralized Data Management
                </h2>
                <p className="text-gray-700">
                  Access all business data from a centralized platform, enabling
                  better decision-making and real-time reporting.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-center gap-4">
              <FiUsers className="text-blue-500 text-4xl" />
              <div>
                <h2 className="text-xl font-bold">Collaboration Tools</h2>
                <p className="text-gray-700">
                  Enhance team collaboration across departments with integrated
                  communication tools and shared workflows.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <button className="px-8 py-3 bg-black text-white font-semibold rounded-full">
          Develop ERP Software Solutions
        </button>
      </div>

      {/* Main Content Section */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="text-center">
          <h2 className="text-4xl font-semibold text-blue-700 mb-6">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-gray-800 hover:scale-105 transition-transform">
              <img
                src="https://www.activesilicon.com/wp-content/uploads/Custom-Design-Services-COM-Express-Embedded-System.jpg"
                alt="Custom Embedded Systems"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-4 text-black">
                Custom Embedded Systems
              </h3>
              <p className="text-black">
                We specialize in creating tailored embedded systems for diverse
                industries. Our expertise helps optimize device performance and
                reliability.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-gray-800 hover:scale-105 transition-transform">
              <img
                src="https://s3.amazonaws.com/img2.copperdigital.com/wp-content/uploads/2023/09/20121825/IoT-consultancy.webp"
                alt="IoT Solutions"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-4 text-black">
                IoT Solutions
              </h3>
              <p className="text-black">
                We offer cutting-edge Internet of Things (IoT) solutions,
                integrating hardware and software to enable smart communication
                between devices.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-gray-800 hover:scale-105 transition-transform">
              <img
                src="https://www.nwengineeringllc.com/article/img/firmware-2.png"
                alt="Firmware Development"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-4 text-black">
                Firmware Development
              </h3>
              <p className="text-black">
                Our firmware development services ensure optimized and secure
                software for your embedded devices.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className=" text-black py-12 mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">
              We would love to hear about your embedded system project!
            </p>
            <Link to={"/contact"} className="bg-black text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default EmbeddedSoftware;
