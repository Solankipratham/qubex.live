import React from "react";

import img2 from "/Images/PlatformDevloper.png";
import { Link } from "react-router-dom";
const POSPayment = () => {
  const leftServices = [
    {
      title: "Salesforce® Integration",
      description:
        "We leverage the Salesforce® platform API to integrate with your existing mobile application and internal databases, connecting you to all accounting, ERP, social media, e-commerce, and virtually any on-premise systems, cloud-based software products, or third-party platforms.",
      icon: "🔗", // Replace with desired icon.
    },
    {
      title: "Salesforce® Consulting",
      description:
        "As Certified Salesforce® Partners, Chetu provides consulting services focused on driving customer success across various industries. Our expertise lies in aligning Salesforce® solutions with your unique business needs to create exceptional customer experiences and foster long-term success.",
      icon: "💼",
    },
    {
      title: "Salesforce® Programming",
      description:
        "Our Salesforce® developers use the Apex programming language with Java-like syntax, along with the Visualforce markup language, Salesforce® extensions for Visual Studio Code, Source Code Editor in the Developer Console workspace, and other programming tools.",
      icon: "💻",
    },
  ];

  const rightServices = [
    {
      title: "Salesforce® Implementation",
      description:
        "Chetu's Salesforce® implementation services consist of configuring your custom-tailored Salesforce® solutions using Apex™ code, which allows us to perform custom actions to your platform, including Salesforce® platform updates, insertions, deletions, etc.",
      icon: "⚙️",
    },
    {
      title: "Salesforce® Customization & Configuration",
      description:
        "Chetu offers configurations & modifications of your Salesforce® solution’s UI, business logic, and data model using point-and-click tools, as well as customization services for companies with large amounts of data, complex business logic, and external system integrations.",
      icon: "🛠️",
    },
    {
      title: "Salesforce® Custom App Development",
      description:
        "Specializing in Salesforce app development, our team harnesses years of expertise with Apex, VisualForce®, SOQL, REST/SOAP, Lightning Web Components, and JavaScript Frameworks. We excel in custom application development to create apps that are perfectly aligned with your business processes.",
      icon: "📱",
    },
  ];

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
            POS Payment Solutions for Seamless Transactions
          </h1>
          <p className="text-xl sm:text-2xl pt-5 text-white  w-[90%] sm:w-[80%] ">
            Empower your business with cutting-edge POS (Point of Sale) payment
            solutions. From secure transactions to advanced analytics, we
            provide scalable and customizable POS systems to meet your unique
            needs.
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
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
              We’ve Got Salesforce® Developers
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">
              With over 23 years of CRM development experience and as Certified
              Salesforce® Partners, Chetu provides world-class programming,
              customization, configuration, migration, integration,
              implementation, administration support, and many other Salesforce®
              services.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <div className="space-y-6">
                  {leftServices.map((service, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="text-4xl text-blue-500">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <img
                  src="/Images/PaymentE.webp" // Replace with actual image URL.
                  alt="Salesforce Mobile Dashboard"
                  className="mt-8 rounded-lg shadow-lg"
                />
              </div>

              {/* Right Column */}
              <div>
                <img
                  src="/Images/POSNE.webp" // Replace with actual image URL.
                  alt="Salesforce Web Dashboard"
                  className="mb-8 rounded-lg shadow-lg"
                />
                <div className="space-y-6">
                  {rightServices.map((service, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="text-4xl text-blue-500">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow ">
                HIRE SALESFORCE PROGRAMMERS NOW
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
          {/* Feature 1 */}
          <div className="p-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-center">
            <img
              src="/Images/pos1.jpg"
              alt="Customizable POS Systems"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Customizable POS Systems
            </h2>
            <p className="text-black-300">
              Tailor your POS systems to fit your business needs. From retail to
              hospitality, our solutions are designed to streamline operations
              and enhance customer experiences.
            </p>
          </div>

          {/* Feature 2 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-center">
            <img
              src="/Images/pos2.png"
              alt="Secure Payment Processing"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Secure Payment Processing
            </h2>
            <p className="text-black-300">
              Ensure safe and reliable payment transactions with advanced
              security protocols. Our systems support credit cards, mobile
              payments, and EMV chip cards.
            </p>
          </div>

          {/* Feature 3 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-center">
            <img
              src="/Images/pos3.jpg"
              alt="Inventory Management"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Inventory Management
            </h2>
            <p className="text-black-300">
              Track and manage inventory in real-time with integrated POS
              systems. Optimize stock levels and reduce losses with accurate
              insights.
            </p>
          </div>

          {/* Feature 4 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-center">
            <img
              src="/Images/pos4.jpg"
              alt="Advanced Analytics"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Advanced Analytics
            </h2>
            <p className="text-black-300">
              Gain actionable insights into your business performance with our
              analytics tools. Make informed decisions with real-time sales and
              customer data.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className=" p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
            Why Choose Our POS Payment Solutions?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black-300">
            <li>
              <strong>Scalable Solutions:</strong> POS systems designed to grow
              with your business.
            </li>
            <li>
              <strong>Omnichannel Support:</strong> Seamless integration across
              physical stores, online platforms, and mobile apps.
            </li>
            <li>
              <strong>Enhanced Security:</strong> PCI-compliant systems to
              ensure secure transactions.
            </li>
            <li>
              <strong>Customizable Features:</strong> Tailor-made solutions to
              suit your business requirements.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium "
          >
            Contact Us for POS Payment Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default POSPayment;
