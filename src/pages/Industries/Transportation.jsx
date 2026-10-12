import React from "react";

import { Link } from "react-router-dom";
const Transportation = () => {
  const fleetSolutions = [
    {
      title: "Fleet Telematics Software",
      description:
        "Engineer custom FMCSA/DVIR-compliant TMS software with built-in telematics systems to facilitate easy asset location tracking, mileage monitoring, and more.",
      icon: "🚚",
    },
    {
      title: "GPS Fleet Tracking Software",
      description:
        "Automate complex routing strategies with GPS tracking, geofencing, and specific dispatch zoning, maximized by integrating third-party technologies like GeoTab or Teletrac.",
      icon: "📍",
    },
    {
      title: "Fuel Management Software",
      description:
        "Optimize your fleet management by integrating fleet fuel card data that tracks your point-to-point fuel consumption and fuel usage fluctuations.",
      icon: "⛽",
    },
    {
      title: "Asset Management Software",
      description:
        "Integrate asset management software to effectively manage every fleet vehicle’s inventory, driver assignments, asset status history, and fleet-related documents.",
      icon: "📋",
    },
  ];

  const transportSolutions = [
    {
      title: "Vehicle Telematics Software",
      description:
        "Our business intelligence (BI) systems coordinate with public transportation vehicle telematics software to track real-time location, speed, mileage, inventory, and more.",
      icon: "🚍",
    },
    {
      title: "Route Optimization Software",
      description:
        "Implement advanced route optimization algorithms and machine learning techniques to help public transit authorities deliver improved service and lower operational costs.",
      icon: "🛣️",
    },
    {
      title: "Transportation Mapping Software",
      description:
        "Our programmers configure GIS and GPS software equipped with route optimizers, customer mapping, drive time radius, and other features displayed on an interactive map.",
      icon: "🗺️",
    },
    {
      title: "Paratransit Dispatch Software",
      description:
        "Custom paratransit and non-emergency medical transportation (NEMT) software solutions incorporate client-scheduling platforms, communication portals, and much more.",
      icon: "🩺",
    },
  ];

  return (
    <div className="">
      <div
        className="bg-cover opacity-6 bg-center w-full h-screen sm:h-[600px] z-[-10]"
        style={{
          background: `url(/Images/Travelport.png) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundAttachment: "fixed", // Keeps the image fixed
        }}
      >
        <div className="flex items-left text-white pt-10 sm:pt-20 px-10 flex-col">
          <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
            Transportation Facilities
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            At our company, we prioritize the convenience and comfort of our
            employees, which is why we offer a range of transportation options
            to ensure that commuting is never a hassle. Whether you're using
            public transport or our in-house company transport, we've got you
            covered with convenient and accessible transportation options.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>
      {/* Upper Section with Background Image */}
      <section className=" ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Fleet Management Software Solutions */}
          <div className="mb-16 pt-5">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
              Fleet Management Software Solutions
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">
              Chetu's fleet management software solutions and transportation
              management systems (TMS) facilitate fleet telematics, GPS fleet
              tracking, fuel management, vehicle maintenance management, and so
              much more.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Features */}
              <div className="space-y-8">
                {fleetSolutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-4xl text-blue-500">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Image */}
              <div className="flex justify-center">
                <img
                  src="/Images/thisisengineering-f4pUuCc3M0g-unsplash.jpg" // Replace with actual image URL
                  alt="Fleet Management Dashboard"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow ">
                GET FLEET MGMT SOFTWARE SOLUTIONS
              </button>
            </div>
          </div>

          {/* Public Transportation Software Solutions */}
          <div className="">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
              Public Transportation Software Solutions
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">
              Chetu's public transportation software solutions provide public
              transit agencies with enhanced fleet and passenger-oriented
              features for safe, simplified, and streamlined public transit
              experiences.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <div className="flex justify-center">
                <img
                  src="/Images/thisisengineering-Bg0Geue-cY8-unsplash.jpg" // Replace with actual image URL
                  alt="Public Transportation Dashboard"
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Right: Features */}
              <div className="space-y-8">
                {transportSolutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-4xl text-blue-500">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow ">
                GET PUBLIC TRANSPORT SOFTWARE SOLUTIONS
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Transportation Options */}
      <div className="max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Metro Station Proximity */}
          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="/Images/transport2.webp"
              alt="Metro Station Proximity"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-black mb-4">
              Near Metro Station
            </h2>
            <p className="text-black mb-4">
              Our office is conveniently located just 100 meters away from the
              nearest metro station. This makes it easy for our employees to
              commute to work, with quick and direct access to the metro system.
              You can skip the traffic and enjoy a smooth, reliable journey to
              the office.
            </p>
            <ul className=" text-black">
              <li>100 meters away from the metro station</li>
              <li>Easy and quick access to public transport</li>
              <li>Convenient for employees using the metro system</li>
            </ul>
          </div>

          {/* Company Transport */}
          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="/Images/transport1.webp"
              alt="Company Transport"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-black mb-4">
              Company Transport
            </h2>
            <p className="text-black mb-4">
              For added convenience, we provide company transport services for
              employees who prefer a more comfortable and direct commute. Our
              shuttle services cover key areas in the city, ensuring that
              employees have a hassle-free way to get to work.
            </p>
            <ul className="text-black">
              <li>Shuttle services to key areas in the city</li>
              <li>Comfortable and air-conditioned buses</li>
              <li>Scheduled pick-up and drop-off times</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transportation;
