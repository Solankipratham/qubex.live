import React from 'react';

import img2 from "/Images/PlatformDevloper.png";
import { Link } from 'react-router-dom';
const Salesforce = () => {
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
        Salesforce Solutions for Business Excellence
        </h1>
        <p className="text-xl sm:text-2xl text-white pt-5  w-[90%] sm:w-[80%] ">
          Unlock the full potential of Salesforce with our customized solutions. From implementation to integration and
          beyond, we help businesses streamline operations, improve customer relationships, and achieve their goals
          with Salesforce's powerful CRM platform.
        </p>
        <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg  transition w-full sm:w-auto">
          Start Your Project →
        </Link>
      </div>
    </div>
      <div className="max-w-7xl mx-auto px-6">

      <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
          We’ve Got Salesforce® Developers
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          With over 23 years of CRM development experience and as Certified
          Salesforce® Partners, Chetu provides world-class programming,
          customization, configuration, migration, integration, implementation,
          administration support, and many other Salesforce® services.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <div className="space-y-6">
              {leftServices.map((service, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="text-4xl text-blue-500">{service.icon}</div>
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
              src="/Images/christopher-gower-m_HRfLhgABo-unsplash.jpg" // Replace with actual image URL.
              alt="Salesforce Mobile Dashboard"
              className="mt-8 rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column */}
          <div>
            <img
              src="/Images/radek-grzybowski-eBRTYyjwpRY-unsplash.jpg" // Replace with actual image URL.
              alt="Salesforce Web Dashboard"
              className="mb-8 rounded-lg shadow-lg"
            />
            <div className="space-y-6">
              {rightServices.map((service, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="text-4xl text-blue-500">{service.icon}</div>
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
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-center">
            <img
              src="/Images/sales1.jpg"
              alt="Salesforce Implementation"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Salesforce Implementation</h2>
            <p className="text-black-300">
              Seamlessly integrate Salesforce into your business operations with our expert implementation services.
              From setup to deployment, we ensure a smooth transition to Salesforce.
            </p>
          </div>

          {/* Feature 2 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-center">
            <img
              src="/Images/sales2.png"
              alt="Salesforce Customization"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Salesforce Customization</h2>
            <p className="text-black-300">
              Tailor Salesforce to your unique business needs. We create customized workflows, dashboards, and reports
              to optimize your CRM performance and meet your goals.
            </p>
          </div>

          {/* Feature 3 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-center">
            <img
              src="/Images/sales3.jpg"
              alt="Salesforce Integration"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Salesforce Integration</h2>
            <p className="text-black-300">
              Connect Salesforce with third-party applications and tools for seamless data synchronization and enhanced
              efficiency. We integrate Salesforce into your existing ecosystem with ease.
            </p>
          </div>

          {/* Feature 4 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-center">
            <img
              src="/Images/sales4.jpg"
              alt="Salesforce Support & Maintenance"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Salesforce Support & Maintenance</h2>
            <p className="text-black-300">
              Keep your Salesforce environment running smoothly with our support and maintenance services. From
              troubleshooting to upgrades, we ensure your system operates at its best.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className=" p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
            Why Choose Our Salesforce Solutions?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black-300">
            <li>
              <strong>Certified Expertise:</strong> Our Salesforce-certified professionals bring deep industry
              knowledge to every project.
            </li>
            <li>
              <strong>Tailored Solutions:</strong> Customized services to meet your unique business requirements.
            </li>
            <li>
              <strong>End-to-End Services:</strong> Comprehensive Salesforce solutions from implementation to support.
            </li>
            <li>
              <strong>Proven Track Record:</strong> Successfully delivered Salesforce projects across multiple
              industries.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium transition"
          >
            Contact Us for Salesforce Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Salesforce;
