import React from "react";
import { Link } from "react-router-dom";

import img2 from "/src/assets/Images/PlatformDevloper.png";
const ITService = () => {
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
        <div className="flex items-left text-white pt-10 sm:pt-20 px-4 flex-col">
          <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
            Comprehensive IT Services for Your Business
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Empower your business with our innovative IT solutions tailored to
            meet your unique requirements. From software development to IT
            consulting, we ensure seamless technology integration to drive
            efficiency and growth.
          </p>
          <Link
            to={"/contact"}
            className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto"
          >
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
              src="https://cdn.intuji.com/2023/08/Custom-software-development.jpg"
              alt="Custom Software Development"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Custom Software Development
            </h2>
            <p className="text-gray-600">
              Build scalable and robust software solutions tailored to your
              business needs. Our expert developers ensure seamless integration
              and performance optimization.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="https://www.device42.com/blog/wp-content/uploads/2023/03/14_01edge-cloud-computing.jpg"
              alt="Cloud Solutions"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Cloud Solutions
            </h2>
            <p className="text-gray-600">
              Leverage cloud technology to enhance scalability, security, and
              accessibility. We offer end-to-end cloud migration, management,
              and support services.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="https://5.imimg.com/data5/NU/NN/OS/SELLER-43612382/it-consulting-service.jpg"
              alt="IT Consulting"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              IT Consulting
            </h2>
            <p className="text-gray-600">
              Optimize your IT infrastructure with our consulting services. We
              help you strategize and implement the best technology solutions
              for maximum productivity.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="https://pollysys.com/srcfxonl/uploads/2023/01/IT-Support-Services-Detailed-IT-Services.jpg"
              alt="IT Support Services"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              IT Support Services
            </h2>
            <p className="text-gray-600">
              Ensure uninterrupted business operations with our dedicated IT
              support. From troubleshooting to system updates, we've got you
              covered 24/7.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
            Why Choose Our IT Services?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <strong>Expertise Across Industries:</strong> Proven track record
              of delivering IT solutions for healthcare, finance, retail, and
              more.
            </li>
            <li>
              <strong>End-to-End Support:</strong> Comprehensive IT lifecycle
              management from planning to implementation.
            </li>
            <li>
              <strong>Scalable Solutions:</strong> IT services designed to grow
              with your business.
            </li>
            <li>
              <strong>Cutting-Edge Technology:</strong> Leverage the latest
              tools and platforms for competitive advantage.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium transition"
          >
            Contact Us for IT Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default ITService;
