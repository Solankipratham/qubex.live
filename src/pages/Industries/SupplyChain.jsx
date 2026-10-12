import React from 'react';

import { Link } from "react-router-dom";
const SupplyChain = () => {
  return (
    <div className=""><div
    className="bg-cover opacity-6 bg-center w-full h-screen sm:h-[600px] z-[-10]"
    style={{
      background: `url(/Images/banner.png) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))`,
      backgroundSize: "cover", // Ensures the image covers the entire div
      backgroundAttachment: "fixed", // Keeps the image fixed
    }}
  >
    <div className="flex items-left text-white pt-10 sm:pt-20 px-10 flex-col">
      <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">Supply Chain Management Software Solutions
      </h1>
      <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Our company specializes in developing custom software solutions tailored for supply chain management. We offer a
            comprehensive suite of services designed to enhance operational efficiency, improve decision-making, and drive
            profitability across the entire supply chain.
      </p>
      <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
    </div>
  </div>
      {/* Upper Section with Background Image */}
      <section className="mt-10">
      <div className="container mx-auto px-4">
        {/* SCM Software Development Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Supply Chain Management (SCM) Software Development
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto mt-4">
            We develop SCM software to enable inventory management, electronic
            data interchange (EDI), material requirements planning (MRP), order
            management systems (OMS), and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-4">
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Inventory & Manufacturing Processes:</strong> We
                implement analytical and material planning tools within your SCM
                workflows to manage end-to-end inventory and manufacturing
                processes.
              </li>
              <li>
                <strong>Shipping & Logistics Support:</strong> We integrate
                custom shipping & logistics modules to manage all functions
                needed for LTL, TL, and intermodal freight operations.
              </li>
              <li>
                <strong>Reverse Logistics Management:</strong> We incorporate
                logistics and return logistics post-delivery customer support
                processes to minimize relationship disturbances.
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/Images/tobias-CyX3ZAti5DA-unsplash.jpg"
              alt="SCM Development"
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
        </div>
        <div className="text-center mb-12">
          <button className="bg-black text-white py-3 px-8 rounded-full font-semibold transition">
            Get SCM Solutions
          </button>
        </div>

        {/* AI-Enabled Supply Chain Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            AI-Enabled Supply Chain Software Solutions
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto mt-4">
            Our AI experts can create custom software solutions that leverage AI
            in supply chain and logistics to enable capabilities such as
            predictive forecasting, AI-powered inventory management, route
            optimization, and smart warehouse management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: "Predictive Forecasting",
              description:
                "Leverage market trends, historical data, and other external sources to provide cutting-edge predictive forecasting. Accurately anticipate demand through pattern recognition.",
              icon: "📊",
            },
            {
              title: "AI-Powered Inventory Management",
              description:
                "Monitor real-time inventory levels, proactively respond to market changes, and streamline your supply chain operations with AI assistance.",
              icon: "🤖",
            },
            {
              title: "Streamlining Operations with RPA",
              description:
                "Automate tasks like order processing and invoice generation using robotic process automation (RPA) to minimize manual errors.",
              icon: "⚙️",
            },
            {
              title: "Enhanced Decision Making with AI Assistance",
              description:
                "Provide intelligent real-time support for strategic and tactical decision-making with AI-enabled tools.",
              icon: "🧠",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-3xl text-orange-500">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-12">
          <button className="bg-black text-white py-3 px-8 rounded-full font-semibold transition">
            Get AI Enabled SCM Solutions
          </button>
        </div>

        {/* SCM Inventory Management Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            SCM Inventory Management Software Solutions
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto mt-4">
            We implement inventory management capabilities to enable full
            visibility and control over your inventory, allowing you to know
            exactly how much material is in stock at all times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/Images/christopher-gower-m_HRfLhgABo-unsplash.jpg"
              alt="Inventory Management"
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
          <div className="space-y-4">
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>EDI Integration Support:</strong> Manage inventory data
                across multiple channels with EDI integration.
              </li>
              <li>
                <strong>SCM Warehouse Management:</strong> Seamlessly manage
                stock inventory, updates, and specific stock details.
              </li>
              <li>
                <strong>Fulfillment Management:</strong> Enable fulfillment
                management modules with accounting and multi-location
                capabilities.
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-black text-white py-3 px-8 rounded-full font-semibold transition">
            Manage Inventory Now
          </button>
        </div>
      </div>
    </section>

      {/* Service Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-12">
        {/* Inventory Management Software Solutions */}
        <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img 
            src="/Images/supply1.webp"
            alt="Inventory Management" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-black  mb-4">Inventory Management Software Solutions</h2>
          <p className="text-black  mb-4">
            Our inventory management solutions ensure stock synchronization, full visibility, and precise quantity
            adjustments, utilizing RFID and QR code scanners to identify supply chain inventory items.
          </p>
          <ul className="text-black ">
            <li>Real-time inventory tracking</li>
            <li>Automated stock replenishment</li>
            <li>Integration with existing business systems</li>
          </ul>
        </div>

        {/* Warehouse Management Software Solutions */}
        <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img 
            src="/Images/supply2.webp"
            alt="Warehouse Management" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-black  mb-4">Warehouse Management Software Solutions</h2>
          <p className="text-black  mb-4">
            Our warehouse management systems optimize stock management, inventory status updates, and channel-specific
            stocking, ensuring efficient warehouse operations.
          </p>
          <ul className="text-black ">
            <li>Seamless stock management</li>
            <li>Inventory status updates</li>
            <li>Channel-specific stocking</li>
          </ul>
        </div>

        {/* Shipping & Logistics Software Solutions */}
        <div className="p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img 
            src="/Images/supply3.webp"
            alt="Shipping & Logistics" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-black  mb-4">Shipping & Logistics Software Solutions</h2>
          <p className="text-black  mb-4">
            Our shipping and logistics solutions enable real-time tracking and monitoring of product shipments,
            deliveries, and fuel supply, enhancing supply chain visibility.
          </p>
          <ul className="text-black ">
            <li>Real-time tracking</li>
            <li>Delivery monitoring</li>
            <li>Fuel supply management</li>
          </ul>
        </div>
      </div>
      <section className="">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-2xl lg:text-4xl mt-10 font-bold text-center text-gray-800 mb-8">
          Get Custom Supply Chain Management (SCM) Software Solutions
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Qubex's custom supply chain management (SCM) software solutions offer a streamlined, automated, and highly interoperable approach to all of your operational workflows and business processes.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <div className="flex justify-center mb-4">
              <div className="text-blue-500 text-4xl">
                {/* Replace with your icon */}
                <i className="fas fa-layer-group"></i>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              Custom Multi-Channel Inventory Solutions
            </h3>
            <p className="text-gray-600 mt-2 text-center">
              Qubex builds custom inventory management solutions that sync across multiple channels, locations, and warehouses using RFID barcodes and QR code scanners.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <div className="flex justify-center mb-4">
              <div className="text-blue-500 text-4xl">
                {/* Replace with your icon */}
                <i className="fas fa-box"></i>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              Custom Order Management Solutions
            </h3>
            <p className="text-gray-600 mt-2 text-center">
              We develop custom order management software solutions with seamless integrations of orders from multiple inventory channels across the entire order fulfillment network.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <div className="flex justify-center mb-4">
              <div className="text-blue-500 text-4xl">
                {/* Replace with your icon */}
                <i className="fas fa-truck"></i>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              Custom Fleet Management Solutions
            </h3>
            <p className="text-gray-600 mt-2 text-center">
              We integrate custom fleet management software into your SCM solution for full visibility and control over GPS fleet tracking, maintenance, fuel, assets, and telematics.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <div className="flex justify-center mb-4">
              <div className="text-blue-500 text-4xl">
                {/* Replace with your icon */}
                <i className="fas fa-warehouse"></i>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              Custom Warehouse Management Solutions
            </h3>
            <p className="text-gray-600 mt-2 text-center">
              We design, develop, and integrate warehouse management solutions into your current business systems to maintain peak efficiency and control throughout your entire warehouse.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-12 flex justify-center">
          <img
            src="/Images/HireExperienced.png" // Replace with actual image URL
            alt="SCM Solutions"
            className="max-w-xs lg:max-w-md rounded-lg shadow-md"
          />
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg ">
            Get SCM Solutions
          </button>
        </div>
      </div>
    </section>

      {/* Call to Action */}
      <div className="py-10 text-center">
        <h3 className="text-2xl font-semibold text-black mb-4">Transform Your Supply Chain Operations</h3>
        <p className="text-lg text-black mb-8">
          Partner with us to develop customized software solutions that meet the unique needs of your supply chain. Our
          team is dedicated to delivering high-quality, scalable, and user-friendly applications that drive efficiency and
          enhance decision-making.
        </p>
        <Link
          to={"/contact"}
          className="inline-block bg-black text-white px-6 py-3 rounded-lg text-xl font-semibold  transition-colors"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default SupplyChain;
