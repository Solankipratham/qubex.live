import React from "react";
import {
  FaBolt,
  FaTint,
  FaSolarPanel,
  FaWind,
  FaFire,
  FaTrashAlt,
  FaAtom,
  FaCog,
  FaShieldAlt,
  FaRecycle,
  FaChartLine,
  FaUsers,
  FaNetworkWired,
  FaCogs,
} from "react-icons/fa";
import { FaWater, FaTools, FaWifi } from "react-icons/fa";

import { Link } from "react-router-dom";
const EnergyUtilities = () => {
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
            Energy & Utilities Solutions
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Our company is dedicated to driving innovation in the Energy &
            Utilities sector. With an increasing global demand for sustainable
            energy solutions, we are working to integrate cutting-edge
            technologies and practices that optimize energy production,
            distribution, and consumption. From renewable energy solutions to
            smart utilities, we are committed to shaping a more sustainable
            future for all.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>
      {/* Hero Section */}

      <section className="bg-gray-50 py-12 px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Custom Energy and Utilities Software Solutions
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Our experts produce cutting-edge energy management solutions that
            cater to the growing technical needs of the energy & utilities
            industry.
          </p>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-16">
          <div className="flex flex-col items-center">
            <FaBolt className="text-blue-500 text-5xl mb-2" />
            <p className="text-lg font-medium">Electric</p>
          </div>
          <div className="flex flex-col items-center">
            <FaTint className="text-blue-500 text-5xl mb-2" />
            <p className="text-lg font-medium">Water</p>
          </div>
          <div className="flex flex-col items-center">
            <FaNetworkWired className="text-blue-500 text-5xl mb-2" />
            <p className="text-lg font-medium">Smart Grid</p>
          </div>
          <div className="flex flex-col items-center">
            <FaFire className="text-blue-500 text-5xl mb-2" />
            <p className="text-lg font-medium">Heat</p>
          </div>
          <div className="flex flex-col items-center">
            <FaSolarPanel className="text-blue-500 text-5xl mb-2" />
            <p className="text-lg font-medium">Solar</p>
          </div>
          <div className="flex flex-col items-center">
            <FaTrashAlt className="text-blue-500 text-5xl mb-2" />
            <p className="text-lg font-medium">Waste Management</p>
          </div>
          <div className="flex flex-col items-center">
            <FaWind className="text-blue-500 text-5xl mb-2" />
            <p className="text-lg font-medium">Wind</p>
          </div>
          <div className="flex flex-col items-center">
            <FaAtom className="text-blue-500 text-5xl mb-2" />
            <p className="text-lg font-medium">Nuclear</p>
          </div>
        </div>

        {/* Custom Energy Management Solutions */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/Images/Energy&Utilities1.png"
              alt="Smart Home Dashboard"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Custom Energy Management Software Solutions
            </h3>
            <div className="space-y-6">
              {/* Utility Tracking Software */}
              <div className="flex items-start">
                <FaBolt className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Utility Tracking Software
                  </h4>
                  <p className="text-gray-600">
                    Our developers create tailored cloud-based utility tracking
                    software to accurately capture data such as cost and
                    consumption.
                  </p>
                </div>
              </div>

              {/* Energy Portfolio Management */}
              <div className="flex items-start">
                <FaNetworkWired className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Energy Portfolio Management
                  </h4>
                  <p className="text-gray-600">
                    Facilitate the organization of your entire energy portfolio
                    while significantly lowering costs & balancing energy needs.
                  </p>
                </div>
              </div>

              {/* Utility Asset Management */}
              <div className="flex items-start">
                <FaCogs className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Utility Asset Management
                  </h4>
                  <p className="text-gray-600">
                    Our developers assist utility businesses with tracking,
                    documentation, and performance monitoring.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-black text-white py-3 px-6 rounded-lg transition">
              GET AI ENERGY DEVELOPERS
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6">
        {/* Custom Water Management Solutions Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              Custom Water Management Solutions
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              We develop custom water quality monitoring solutions to help
              businesses manage and meet all of their water and wastewater
              management needs, tracking sampling activities, producing
              region-specific discharge monitoring reports (DMRs), and ensuring
              continual compliance with all water and wastewater requirements.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Image Section */}
            <div className="flex justify-center lg:w-1/2">
              <img
                src="/Images/WaterManagement.png" // Replace with the actual image URL
                alt="Water Management"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Features Section */}
            <div className="space-y-6 lg:w-1/2">
              {/* Feature 1 */}
              <div className="flex items-start">
                <FaWater className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Water Software Development
                  </h4>
                  <p className="text-gray-600">
                    We develop software to accurately and efficiently manage
                    day-to-day operations for any water treatment plant or water
                    service provider.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex items-start">
                <FaShieldAlt className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Water Quality Monitoring
                  </h4>
                  <p className="text-gray-600">
                    Our water industry experts program custom features for water
                    sample management, pollutant identification, chemical
                    analysis, and more.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="flex items-start">
                <FaTools className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Utility Management Software
                  </h4>
                  <p className="text-gray-600">
                    Our custom cloud-based solutions automate billing,
                    invoicing, process payments, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-black text-white py-3 px-6 rounded-lg transition">
              GET WATER MANAGEMENT SOLUTIONS
            </button>
          </div>
        </div>

        {/* Custom Smart Grid Technology Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              Custom Smart Grid Technology Software
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Our developers can either augment existing systems or provide
              custom solutions to fit specific business needs, engineering
              advanced technologies for grid distribution, transmission,
              consumption processes, and more.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Features Section */}
            <div className="space-y-6 lg:w-1/2">
              {/* Feature 1 */}
              <div className="flex items-start">
                <FaWifi className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Smart Grid Communication
                  </h4>
                  <p className="text-gray-600">
                    Reduce energy consumption and maximize grid operation with
                    actual-time status notifications and automatic resource
                    detection features.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex items-start">
                <FaCogs className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">Grid Integrations & IoT</h4>
                  <p className="text-gray-600">
                    We develop solutions for smart grid data analytics,
                    automation workflows, machine-to-machine communications, and
                    smart grid technology interfaces.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="flex items-start">
                <FaTools className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Smart Grid Meter Programming
                  </h4>
                  <p className="text-gray-600">
                    Program smart grid meters with features like automatic meter
                    reading, advanced metering infrastructure, and more.
                  </p>
                </div>
              </div>
            </div>
            {/* Image Section */}
            <div className="flex justify-center lg:w-1/2">
              <img
                src="/Images/GridTechnology.png" // Replace with the actual image URL
                alt="Smart Grid Technology"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-black text-white py-3 px-6 rounded-lg transition">
              HIRE SMART GRID DEVELOPERS
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6">
        {/* AI-Powered Energy Solutions Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            AI-Powered Energy and Utilities Solutions
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Chetu’s experts design powerful AI solutions for energy and utility
            companies that want more efficiency, productivity, and
            resourcefulness. Let Chetu’s AI technology help your staff maximize
            their efforts to benefit loyal customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <FaCog className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-lg font-bold mb-2">Optimized Workflows</h3>
            <p className="text-gray-600">
              AI and machine learning systems can automate the backend processes
              of energy and utility spaces, enhancing grid operations, field
              schedules, and work orders.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <FaChartLine className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-lg font-bold mb-2">
              Predictive Maintenance Analysis
            </h3>
            <p className="text-gray-600">
              Chetu’s AI solutions predict potential maintenance malfunctions
              that could interrupt user activities, like power outages, ensuring
              safety and efficiency.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <FaRecycle className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-lg font-bold mb-2">
              Damage Assessment and Recovery
            </h3>
            <p className="text-gray-600">
              Assess damages caused by natural disasters promptly, creating
              actionable plans to restore essential services.
            </p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-center text-center">
            <FaShieldAlt className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-lg font-bold mb-2">AI-Based Cybersecurity</h3>
            <p className="text-gray-600">
              Protect critical energy and utility data from cyber threats with
              robust AI-based security systems, identifying suspicious activity.
            </p>
          </div>
          {/* Card 5 */}
          <div className="flex flex-col items-center text-center">
            <FaRecycle className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-lg font-bold mb-2">
              Emission Tracking for Sustainability
            </h3>
            <p className="text-gray-600">
              Track greenhouse gas emissions, optimize energy consumption, and
              preserve the environment with AI-driven sustainability solutions.
            </p>
          </div>
          {/* Card 6 */}
          <div className="flex flex-col items-center text-center">
            <FaUsers className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-lg font-bold mb-2">
              Customer Engagement Solutions
            </h3>
            <p className="text-gray-600">
              Use AI-driven virtual assistants and chatbots to streamline
              customer interactions, improving satisfaction and efficiency.
            </p>
          </div>
        </div>

        {/* Electric Utility Software Solutions Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Electric Utility Software Solutions
            </h3>
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="flex items-start">
                <FaBolt className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Electric Software Services
                  </h4>
                  <p className="text-gray-600">
                    We develop software to provide Distribution Management
                    Systems (DMS) for network monitoring and operations support.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex items-start">
                <FaCog className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Electrical Estimating Software
                  </h4>
                  <p className="text-gray-600">
                    Our energy management developers construct estimating
                    software to provide fast and accurate results.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="flex items-start">
                <FaBolt className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-lg font-bold">
                    Electric Mobile App Software
                  </h4>
                  <p className="text-gray-600">
                    We program custom mobile apps for field service tools,
                    document management, and more.
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-8 bg-black text-white py-3 px-6 rounded-lg transition">
              GET ELECTRIC MANAGEMENT DEVELOPERS
            </button>
          </div>

          {/* Mobile Image */}
          <div className="flex justify-center">
            <img
              src="/Images/Electric.png" // Replace with actual image link
              alt="Electric Utility App"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <div className="py-16 px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-12">
          {/* Renewable Energy Solutions */}
          <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
            <img
              src="/Images/energy1.webp"
              alt="Renewable Energy Solutions"
              className="w-full h-56 object-cover rounded-xl mb-6 transform transition-transform duration-500 hover:scale-110"
            />
            <h2 className="text-3xl font-bold text-black mb-4">
              Renewable Energy Solutions
            </h2>
            <p className="text-lg text-black mb-6">
              We are actively working to bring clean, renewable energy sources
              to the forefront. Our renewable energy solutions include solar,
              wind, and geothermal power, all aimed at reducing reliance on
              fossil fuels and promoting a more sustainable energy future.
            </p>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li>Solar and wind power generation</li>
              <li>Energy storage systems for renewable sources</li>
              <li>Reducing carbon footprints and environmental impact</li>
            </ul>
          </div>

          {/* Smart Grid & Utilities */}
          <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
            <img
              src="/Images/energy2.webp"
              alt="Smart Grid & Utilities"
              className="w-full h-56 object-cover rounded-xl mb-6 transform transition-transform duration-500 hover:scale-110"
            />
            <h2 className="text-3xl font-semibold text-black mb-4">
              Smart Grid & Utilities
            </h2>
            <p className="text-lg text-black mb-6">
              Our smart grid solutions aim to modernize the way energy is
              distributed and consumed. By integrating smart meters, sensors,
              and data analytics, we help utilities better manage energy
              distribution, reduce losses, and improve efficiency across the
              grid.
            </p>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li>Real-time energy monitoring and control</li>
              <li>Smart meters and data analytics</li>
              <li>Efficient energy management and distribution</li>
            </ul>
          </div>

          {/* Energy Efficiency & Sustainability */}
          <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
            <img
              src="/Images/energy3.webp"
              alt="Energy Efficiency & Sustainability"
              className="w-full h-56 object-cover rounded-xl mb-6 transform transition-transform duration-500 hover:scale-110"
            />
            <h2 className="text-3xl font-semibold text-black mb-4">
              Energy Efficiency & Sustainability
            </h2>
            <p className="text-lg text-black mb-6">
              We help businesses and communities optimize their energy use
              through energy-efficient solutions. Our focus is on creating
              systems that minimize energy consumption while ensuring comfort,
              productivity, and sustainability for future generations.
            </p>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li>Energy-efficient buildings and systems</li>
              <li>Smart thermostats and energy-saving devices</li>
              <li>Building green, sustainable communities</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="">
        <p className="text-lg text-black text-center px-4">
          By embracing innovation in the energy and utilities sector, we are
          positioning ourselves to tackle some of the most pressing challenges
          of our time. We are committed to making the world a more sustainable
          place, focusing on renewable energy sources, smart grid technology,
          and energy-efficient solutions. Our work in this field ensures that we
          can contribute positively to a cleaner, more sustainable future for
          all.
        </p>
      </div>

      {/* Call to Action */}
      <div className=" text-center  text-black py-16 px-6 sm:px-8 lg:px-16 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
        <h3 className="text-3xl font-semibold mb-4">
          Start Your Sustainable Energy Journey Today
        </h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Partner with us to implement innovative energy solutions that drive
          sustainability, efficiency, and reduce your carbon footprint.
        </p>
        <Link
          to={"/contact"}
          className="inline-block bg-black text-white px-8 py-4 rounded-lg text-xl font-semibold  transition-colors transform hover:scale-105 duration-300"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default EnergyUtilities;
