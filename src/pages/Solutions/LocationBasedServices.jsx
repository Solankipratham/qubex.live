import React from 'react';

import img2 from "/Images/PlatformDevloper.png";
import { Link } from 'react-router-dom';
const LocationBasedServices = () => {
  const services = [
    {
      title: "GPS and Navigation Applications",
      description:
        "Our developers program GPS-based applications capable of integrating with third parties, such as weather and traffic apps, through custom APIs. We program real-time routing and re-routing software for efficient fleet and logistics management with integrated location-based software and GPS tracking systems.",
      icon: "📍",
    },
    {
      title: "Field Service Apps",
      description:
        "We develop mobile field service applications that let employers keep track of their entire workforce from one user location. Our location-based development solutions include geolocation apps with abilities to locate individual field workers, track deliveries, route drivers, handle dispatching operations, and maintain a database of location-specific events.",
      icon: "📱",
    },
    {
      title: "Location Intelligence Software",
      description:
        "Our LBS software specialists develop custom geolocation software that gathers and analyzes geospatial data, transforming that location data into business intelligence. We ensure this will help understand customer behavior by optimizing routes and implementing targeted advertising services solely based on where users are located geographically.",
      icon: "🗺️",
    },
    {
      title: "Geofencing Software",
      description:
        "We provide geofencing solutions with integrated alert triggers for targeted messaging and email communications. We also perform geotagging software development with custom modules to integrate with photo applications, and remote sensing devices (RFID, barcode, QR scanners).",
      icon: "📶",
    },
    {
      title: "Asset Tracking Software",
      description:
        "Maintaining visibility on every one of a company’s assets, whether that’s IT equipment, heavy machinery or human assets, is critical for keeping operations running smoothly and revenue generating. We leverage technologies like barcodes, RFID trackers, NFC tags, and IoT scanners to update centralized databases in real time when assets are moved.",
      icon: "📊",
    },
    {
      title: "Location Based Marketing Solutions",
      description:
        "“Checking in” has rapidly become one of the most used hyperlocal marketing strategies in social media solutions and one of the most beneficial for a wide variety of businesses. We have experience developing and integrating social media apps with location-based services, including location-based tagging, for uses ranging from infotainment to emergency services.",
      icon: "📢",
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
        Location-Based Services for Smarter Engagement
        </h1>
        <p className="text-xl sm:text-2xl pt-5 text-white w-[90%] sm:w-[80%] ">
          Leverage advanced location-based solutions to enhance customer experiences, streamline operations, and boost
          engagement. From geofencing to navigation, our services empower businesses to deliver real-time, personalized
          interactions and insights.
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
          Develop Custom Location-Based Services
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Chetu's certified software experts in geolocation app development
          build location-based apps, geo-positioning systems, location-based
          games, and location-based VR (LBVR). We also develop apps for iOS and
          Android devices.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="mb-8 flex items-start space-x-4">
                <div className="text-4xl text-blue-500">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
            <img
              src="/Images/tobias-CyX3ZAti5DA-unsplash.jpg" // Replace with actual image URL
              alt="Field Service App"
              className="mt-8 rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column */}
          <div>
            {services.slice(3).map((service, index) => (
              <div key={index} className="mb-8 flex items-start space-x-4">
                <div className="text-4xl text-blue-500">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
            <img
              src="/Images/cardmapr-nl-aU-tyT7E0lw-unsplash.jpg" // Replace with actual image URL
              alt="Location Intelligence App"
              className="mt-8 rounded-lg shadow-lg "
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow ">
            HIRE GEOLOCATION APP DEVELOPERS
          </button>
        </div>
      </div>
    </section>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
          {/* Feature 1 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/location1.jpg"
              alt="Geofencing Solutions"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Geofencing Solutions
            </h2>
            <p className="text-black-300">
              Define virtual boundaries to trigger real-time alerts and notifications. Our geofencing solutions help
              businesses engage with customers at the right time and place.
            </p>
          </div>

          {/* Feature 2 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/location2.jpg"
              alt="Navigation and Mapping"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Navigation and Mapping
            </h2>
            <p className="text-black-300">
              Provide seamless navigation experiences with our advanced mapping solutions. From indoor navigation to
              real-time traffic updates, we simplify travel for your users.
            </p>
          </div>

          {/* Feature 3 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/location3.jpg"
              alt="Location-Based Marketing"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Location-Based Marketing
            </h2>
            <p className="text-black-300">
              Engage customers with personalized promotions and offers based on their location. Drive foot traffic,
              improve conversions, and build stronger connections with your audience.
            </p>
          </div>

          {/* Feature 4 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/location4.jpg"
              alt="Real-Time Tracking"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Real-Time Tracking
            </h2>
            <p className="text-black-300">
              Monitor assets, employees, or deliveries in real-time with our tracking solutions. Increase operational
              efficiency and ensure timely updates for all stakeholders.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className=" py-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">Why Choose Our Location-Based Services?</h2>
          <ul className="list-disc list-inside space-y-2 text-black-300">
            <li>
              <strong>Comprehensive Solutions:</strong> From geofencing to analytics, we offer end-to-end location-based
              services.
            </li>
            <li>
              <strong>Scalable for All Industries:</strong> Whether in retail, logistics, or hospitality, our solutions
              are designed to fit your needs.
            </li>
            <li>
              <strong>Personalized Engagement:</strong> Enhance customer experiences with targeted interactions and
              offers.
            </li>
            <li>
              <strong>Real-Time Analytics:</strong> Access actionable insights for better decision-making and strategy
              development.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className=" py-10 text-center">
          <a
            href="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium  transition"
          >
            Contact Us for Location-Based Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationBasedServices;
