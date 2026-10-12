import React from 'react';

import img2 from "/Images/PlatformDevloper.png";
import { Link } from 'react-router-dom';
const NetSuite = () => {
  const services = [
    {
      title: "NetSuite Consulting Services",
      description:
        "Our Certified NetSuite Consultants possess demonstrated industry & software expertise delivered with proven methodologies. Our NetSuite consultants will support you every step of the way to analyze, design, and deploy the perfect solution for your business needs.",
      icon: "👥",
    },
    {
      title: "NetSuite Customization",
      description:
        "Whether it’s building a new application, integrating with existing software solutions, or extending NetSuite to suit your specific business needs, we’ll create a custom NetSuite solution to streamline workflows and optimize business processes.",
      icon: "✔️",
    },
    {
      title: "NetSuite Implementation",
      description:
        "As a NetSuite ERP Implementation Partner, we will define and configure the best solution to fit your unique business needs. Chetu customizes, integrates, deploys, and optimizes your NetSuite products to ensure maximum business efficiency and growth.",
      icon: "⚙️",
    },
    {
      title: "NetSuite Support",
      description:
        "Our NetSuite support experts help businesses of all sizes and industry verticals to implement enhanced processes, solve problems, and foster steady growth, providing ongoing support, management, and maintenance of your entire NetSuite system.",
      icon: "🛠️",
    },
  ];
  return (
    <div className="min-h-screen">{/* Background Image */}
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
        NetSuite Solutions for Your Business Growth
        </h1>
        <p className="text-xl sm:text-2xl pt-5 text-white w-[90%] sm:w-[80%] ">
          Unlock the power of NetSuite ERP with our tailored solutions designed to streamline business processes,
          enhance productivity, and drive growth. From implementation to customization, we help you leverage
          NetSuite's full potential.
        </p>
        <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
          Start Your Project →
        </Link>
      </div>
    </div>
      <div className="max-w-7xl mx-auto px-6">

      <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
          NetSuite Certified Alliance Partners
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          As a NetSuite Certified Alliance Partner, we offer complete NetSuite
          implementation, consultation, integration, customization, and support
          services focused on delivering success-driven results for businesses
          everywhere.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/Images/sarah-dorweiler-QeVmJxZOv3k-unsplash.jpg" // Replace with actual image URL.
              alt="NetSuite Dashboard"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-4xl text-blue-500">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow ">
            GET NETSUITE SERVICES
          </button>
        </div>
      </div>
    </section>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
          {/* Feature 1 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/net1.png"
              alt="NetSuite Implementation"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">NetSuite Implementation</h2>
            <p className="text-black-300">
              Get started with NetSuite seamlessly. Our implementation services ensure smooth onboarding with minimal
              disruption to your operations.
            </p>
          </div>

          {/* Feature 2 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/net2.png"
              alt="NetSuite Customization"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">NetSuite Customization</h2>
            <p className="text-black-300">
              Tailor NetSuite to your unique business needs. From workflows to dashboards, we customize features to
              enhance your system's efficiency.
            </p>
          </div>

          {/* Feature 3 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/net3.png"
              alt="NetSuite Integration"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">NetSuite Integration</h2>
            <p className="text-black-300">
              Connect NetSuite with third-party applications for seamless data flow. Our integration services ensure
              compatibility and efficiency.
            </p>
          </div>

          {/* Feature 4 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/net4.jpg"
              alt="NetSuite Support & Maintenance"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">NetSuite Support & Maintenance</h2>
            <p className="text-black-300">
              Keep your NetSuite system running smoothly with our dedicated support and maintenance services. We ensure
              minimal downtime and optimal performance.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">Why Choose Our NetSuite Solutions?</h2>
          <ul className="list-disc list-inside space-y-2 text-black-300">
            <li>
              <strong>Comprehensive Expertise:</strong> Certified NetSuite professionals with extensive industry
              knowledge.
            </li>
            <li>
              <strong>Tailored Solutions:</strong> Customizable services to fit your unique business needs.
            </li>
            <li>
              <strong>End-to-End Services:</strong> From implementation to support, we cover all aspects of NetSuite.
            </li>
            <li>
              <strong>Proven Track Record:</strong> Successfully delivered NetSuite projects across various industries.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium  transition"
          >
            Contact Us for NetSuite Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default NetSuite;
