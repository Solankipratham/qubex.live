import React from "react";
import {
  FaCogs,
  FaShieldAlt,
  FaClipboardCheck,
  FaDatabase,
  FaCloudRain,
} from "react-icons/fa";
import {
  FaChartBar,
  FaBell,
  FaClipboardList,
  FaRecycle,
  FaWater,
  FaLeaf,
} from "react-icons/fa";

import { Link } from "react-router-dom";
const EnvironmentalManagement = () => {
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
            Environmental Management
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            At our company, we take pride in being responsible stewards of the
            environment. We are dedicated to implementing sustainable practices
            across all our operations, ensuring that we not only meet current
            environmental standards but also work towards a greener future. Our
            environmental management system is designed to minimize the impact
            of our activities on the planet, contributing to a cleaner,
            healthier world for generations to come.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>
      {/* Hero Section */}

      <section className="bg-gray-50 py-12 px-6">
        {/* Environmental Management Software Solutions */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              Environmental Management Software Solutions
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Chetu developers create custom environmental management software
              built with custom database reporting platforms that track, store,
              and manage essential environmental compliance requirements for
              air, water, and waste emissions.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Features Section */}
            <div className="space-y-6 lg:w-1/2">
              {/* Feature 1 */}
              <div className="flex items-start">
                <FaCogs className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Environmental Management System Development
                  </h4>
                  <p className="text-gray-600">
                    Develop software tailored to environmental systems that
                    ensure compliance and efficient tracking of environmental
                    metrics.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex items-start">
                <FaShieldAlt className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Risk Management Assessment Software
                  </h4>
                  <p className="text-gray-600">
                    Identify, assess, and mitigate environmental risks
                    effectively with our custom assessment tools.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="flex items-start">
                <FaClipboardCheck className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Compliance for Audits, Inspections, & Permits
                  </h4>
                  <p className="text-gray-600">
                    Ensure regulatory compliance with tools designed for
                    seamless audits, inspections, and permit management.
                  </p>
                </div>
              </div>
              {/* Feature 4 */}
              <div className="flex items-start">
                <FaDatabase className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Inventory Management & Waste Tracking
                  </h4>
                  <p className="text-gray-600">
                    Optimize waste tracking and inventory management with our
                    advanced software solutions.
                  </p>
                </div>
              </div>
              {/* Feature 5 */}
              <div className="flex items-start">
                <FaCloudRain className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Weather Management Software
                  </h4>
                  <p className="text-gray-600">
                    Leverage software to analyze and respond to weather patterns
                    affecting environmental strategies.
                  </p>
                </div>
              </div>
            </div>
            {/* Image Section */}
            <div className="flex justify-center lg:w-1/2">
              <img
                src="/Images/EnvironmentManagements.png" // Replace with the actual image URL
                alt="Environmental Management"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-black text-white py-3 px-6 rounded-lg transition">
              HIRE EMS DEVELOPERS
            </button>
          </div>
        </div>

        {/* Environmental Management System Development */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              Environmental Management System Development
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Chetu's custom environmental management system incorporates
              customizable features to monitor & manage parameters, regulatory
              limits, and compliance aspects with cutting-edge Artificial
              Intelligence.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Features Section */}
            <div className="lg:w-1/2 space-y-4 text-gray-700">
              <ul className="list-disc pl-6">
                <li>Compliance Management Tracker & Calendar</li>
                <li>Hazardous Materials Management</li>
                <li>Permit & Regulation Tracker</li>
                <li>Inventory Management</li>
                <li>Air, Water, & Waste Tracker/Log</li>
                <li>Performance Metrics</li>
                <li>Reporting & Analytics Dashboards</li>
                <li>Supplier Management</li>
                <li>KPI Monitoring Tools</li>
              </ul>
            </div>
            {/* Image Section */}
            <div className="flex justify-center lg:w-1/2">
              <img
                src="/Images/ManagementSystem.png" // Replace with the actual image URL
                alt="Environmental Management System"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-black text-white py-3 px-6 rounded-lg  transition">
              CALL EMS DEVELOPERS NOW
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6">
        {/* Section 1: Risk Management */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              Environmental Risk Management Assessment Database Software
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              We develop Enterprise Resource Planning (ERP) and Energy Trading
              Risk Management (ETRM) software systems that document policies,
              trade investigations in the energy sector, and ensure code
              compliance at local, state, and federal levels to maintain
              cleaner-greener ecosystems.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Features Section */}
            <div className="space-y-6 lg:w-1/2">
              {/* Feature 1 */}
              <div className="flex items-start">
                <FaChartBar className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Internal Activity Status, Escalation & Log Reporting
                  </h4>
                  <p className="text-gray-600">
                    Integrated with JIRA ticketing systems, we design
                    customizable activity logging & reporting modules for
                    employees to maintain internal processes during corrective
                    instances.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex items-start">
                <FaBell className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Notification Automation & Trigger Solutions
                  </h4>
                  <p className="text-gray-600">
                    Create customizable alert triggers and personalized
                    notifications to detect inconsistencies in real time.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="flex items-start">
                <FaShieldAlt className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Internal Risk Assessment Auditing
                  </h4>
                  <p className="text-gray-600">
                    We enable Role-Based Access Control (RBAC) modules and other
                    robust auditing features to ensure policy and operational
                    integrity.
                  </p>
                </div>
              </div>
            </div>
            {/* Image Section */}
            <div className="flex justify-center lg:w-1/2">
              <img
                src="/Images/EnvironmentalRisk.png" // Replace with actual image URL
                alt="Risk Management"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-black text-white py-3 px-6 rounded-lg transition">
              ASSESS ENVIRONMENTAL RISKS WITH EASE
            </button>
          </div>
        </div>

        {/* Section 2: Health and Safety */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              Environmental Health and Safety Software Systems for Audits,
              Inspections, & Permits
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Chetu's custom EHS software integrates Digital Asset Management
              (DAM) solutions to store inspections, permits, and audit documents
              from local municipalities, state, federal, and EU governance
              bodies to ensure compliance.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Features Section */}
            <div className="space-y-6 lg:w-1/2">
              {/* Feature 1 */}
              <div className="flex items-start">
                <FaClipboardList className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Environmental Permit Management Software
                  </h4>
                  <p className="text-gray-600">
                    Ensure consistent permit management across your organization
                    with workflows to track and report real-time intelligence.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex items-start">
                <FaCloudRain className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Environmental Air-Compliance Management Software
                  </h4>
                  <p className="text-gray-600">
                    Seamlessly integrate to monitor, configure, and track air
                    permit compliance and emission requirements.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="flex items-start">
                <FaWater className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Environmental Marine & Runoff Compliance Solutions
                  </h4>
                  <p className="text-gray-600">
                    Manage compliance for water treatments with configured
                    triggers and notifications.
                  </p>
                </div>
              </div>
              {/* Feature 4 */}
              <div className="flex items-start">
                <FaRecycle className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Environmental Waste Emissions Software
                  </h4>
                  <p className="text-gray-600">
                    Develop solutions for waste management tracking and
                    compliance with the U.S. Environmental Protection Act.
                  </p>
                </div>
              </div>
            </div>
            {/* Image Section */}
            <div className="flex justify-center lg:w-1/2">
              <img
                src="/Images/RiskManagement.png" // Replace with actual image URL
                alt="Risk Management"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas of Environmental Management */}
      <div className="py-16 px-6 sm:px-8 lg:px-16">
        <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Sustainable Practices */}
          <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
            <img
              src="/Images/environment1.webp"
              alt="Sustainable Practices"
              className="w-full h-56 object-cover rounded-xl mb-6 transform transition-transform duration-500 hover:scale-110"
            />
            <h2 className="text-3xl font-semibold text-black mb-4">
              Sustainable Practices
            </h2>
            <p className="text-lg text-black mb-6">
              Our commitment to sustainability is embedded in our operations,
              from sourcing materials responsibly to reducing waste at every
              stage. We prioritize renewable energy sources, minimize our carbon
              footprint, and encourage eco-friendly practices among our
              employees and partners.
            </p>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li>Use of renewable energy sources</li>
              <li>Minimizing waste and optimizing recycling</li>
              <li>Promoting eco-friendly materials and packaging</li>
            </ul>
          </div>

          {/* Environmental Compliance */}
          <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
            <img
              src="/Images/environment2.webp"
              alt="Environmental Compliance"
              className="w-full h-56 object-cover rounded-xl mb-6 transform transition-transform duration-500 hover:scale-110"
            />
            <h2 className="text-3xl font-semibold text-black mb-4">
              Environmental Compliance
            </h2>
            <p className="text-lg text-black mb-6">
              We adhere to all environmental regulations and strive to exceed
              industry standards. Our team works closely with regulatory bodies
              to ensure compliance with laws and certifications related to waste
              management, emissions, and water conservation.
            </p>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li>Adherence to environmental laws and regulations</li>
              <li>Continuous monitoring of environmental performance</li>
              <li>Green certifications and partnerships</li>
            </ul>
          </div>

          {/* Eco-Friendly Initiatives */}
          <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
            <img
              src="/Images/environment3.webp"
              alt="Eco-Friendly Initiatives"
              className="w-full h-56 object-cover rounded-xl mb-6 transform transition-transform duration-500 hover:scale-110"
            />
            <h2 className="text-3xl font-semibold text-black mb-4">
              Eco-Friendly Initiatives
            </h2>
            <p className="text-lg text-black mb-6">
              Our eco-friendly initiatives focus on fostering a culture of
              sustainability within our workforce and community. From reducing
              energy consumption to promoting green building standards, we aim
              to create a positive impact on the environment.
            </p>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li>Energy-efficient office practices</li>
              <li>Encouraging green building and LEED certification</li>
              <li>Supporting environmental community outreach programs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Environmental Goals */}
      <div className=" text-center">
        <h2 className="text-3xl font-semibold text-black mb-6">
          Our Environmental Goals
        </h2>
        <p className="text-lg text-black">
          As a forward-thinking company, we are constantly setting and reviewing
          our environmental goals to ensure we are doing our part to create a
          more sustainable world. Our objectives include reducing energy
          consumption by 30%, minimizing waste by 50%, and ensuring that all
          operations comply with the highest environmental standards.
        </p>
      </div>

      {/* Call to Action */}
      <div className=" text-center  text-black py-16 px-6 sm:px-8 lg:px-16 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
        <h3 className="text-3xl font-semibold mb-4">
          Join Us in Our Environmental Mission
        </h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          We believe in creating a sustainable future, and we encourage everyone
          – from our employees to our partners – to take part in our mission. By
          adopting green practices and working together, we can make a
          significant positive impact on the planet.
        </p>
        <Link
          to={"/contact"}
          className="inline-block bg-black text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors transform hover:scale-105 duration-300"
        >
          Learn More About Our Green Initiatives
        </Link>
      </div>
    </div>
  );
};

export default EnvironmentalManagement;
