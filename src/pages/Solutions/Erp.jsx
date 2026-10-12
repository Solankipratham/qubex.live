import React from "react";
import { FiTrendingUp, FiSettings, FiDatabase, FiUsers } from 'react-icons/fi';

import img2 from "../../assets/Images/PlatformDevloper.png";
import { Link } from "react-router-dom";

const Erp = () => {
  
  return (
    <div className="">
      {/* Background Section */}
      <div
        className="bg-cover bg-center w-full h-screen relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${img2})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex items-start pt-10 sm:pt-20 px-6 sm:px-10 flex-col">
          <h1 className="text-white font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
          CUSTOM ERP SOFTWARE DEVELOPMENT SERVICES
          </h1>
          <p className="text-lg sm:text-2xl pt-5 w-full sm:w-3/4 text-white">
          Unleashing the Power of AI-Integrated Custom ERP Solutions with Expert
          Consulting for Optimal Business Efficiency.
          </p>
          <Link to={"/contact"} className="bg-black mt-4 sm:mt-6 text-white px-8 py-3 rounded-lg transition-all w-full sm:w-auto">
          GET ERP DEVELOPMENT NOW →
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          Custom ERP Software Solutions
        </h1>
        <p className="text-gray-700 max-w-4xl mx-auto">
          Qubex develops cutting-edge ERP software solutions to help businesses streamline operations, manage resources effectively, and boost productivity across all departments.
        </p>
      </div>

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
              <h2 className="text-xl font-bold">Business Process Automation</h2>
              <p className="text-gray-700">
                Automate key business processes such as inventory management, finance, and procurement for increased efficiency and reduced costs.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4">
            <FiSettings className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Customizable Modules</h2>
              <p className="text-gray-700">
                Create tailored ERP modules to meet your unique business needs, including HR, CRM, and supply chain management.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4">
            <FiDatabase className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Centralized Data Management</h2>
              <p className="text-gray-700">
                Access all business data from a centralized platform, enabling better decision-making and real-time reporting.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center gap-4">
            <FiUsers className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-xl font-bold">Collaboration Tools</h2>
              <p className="text-gray-700">
                Enhance team collaboration across departments with integrated communication tools and shared workflows.
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

      {/* AI-Powered Solutions Section */}
      <section className="mt-16 py-10">
        <div className="text-center px-6">
          <h2 className="text-3xl font-semibold text-blue-900">
            Upgrade Your ERP Software with AI-Powered Solutions
          </h2>
          <p className="mt-4 text-black  max-w-3xl mx-auto">
            With Artificial Intelligence (AI) representing the next step towards efficiency,
            innovation, and more, we're ready to leverage it for your Enterprise Resource
            Planning needs.
          </p>
        </div>
        <div className="mt-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Intelligent ERP System Management",
              description:
                "Leverage AI and Machine Learning to adapt, optimize, and improve ERP systems in real time.",
              img: "/Images/erp1.webp",
            },
            {
              title: "Automated ERP System Development",
              description:
                "Develop systems to optimize deployment and operational efficiency.",
                img: "/Images/erp2.webp",
            },
            {
              title: "Innovative AI Solutions for ERP",
              description:
                "Incorporate NLP and AI to improve automation and understanding of unstructured data.",
                img: "/Images/erp3.webp",
            },
            {
              title: "Machine Learning Within ERP Systems",
              description:
                "Implement predictive analytics and fraud detection to stay ahead of the curve.",
                img: "/Images/erp4.webp",
            },
          ].map((feature, index) => (
            <article
              key={index}
              className="text-center bg-white text-black shadow-md rounded-lg p-6 relative"
            >
              <div className="w-20 h-20 mx-auto rounded-full border-4 border-white bg-gray-200 -mt-12">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="rounded-full w-full h-full"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-blue-400">
                  {feature.title}
                </h3>
                <p className="mt-4 ">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-black text-white rounded-lg ">
            GET AI-POWERED ERP SOLUTIONS
          </button>
        </div>
      </section>

      {/* Custom ERP Services Section */}
      <section className="py-10">
        <div className="text-center px-6">
          <h2 className="text-3xl font-semibold text-black">
            Custom ERP Services & Solutions from Experts
          </h2>
          <p className="mt-4 text-black  max-w-3xl mx-auto">
            We offer custom ERP solutions that enable administrators to take control of their entire
            business, from inventory and supply chain to distribution and sales.
          </p>
        </div>
        <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Custom ERP Development",
              description:
                "Customize off-the-shelf ERP solutions by automating workflows and integrating data.",
            },
            {
              title: "Expert ERP Implementation",
              description:
                "Deploy and configure systems to maintain data integrity with zero downtime.",
            },
            {
              title: "Seamless Data Migrations",
              description:
                "Migrate data from current environments to new ERP platforms.",
            },
          ].map((service, index) => (
            <article
              key={index}
              className="text-center bg-white shadow-md rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-blue text-blue-600">
                {service.title}
              </h3>
              <p className="mt-4 text-black">{service.description}</p>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-black  text-white rounded-lg ">
            REQUEST A CUSTOM ERP CONSULTATION
          </button>
        </div>
      </section>
    </div>
  );
};

export default Erp;
