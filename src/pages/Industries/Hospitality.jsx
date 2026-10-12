import React from "react";
import {
  FaRegClipboard,
  FaConciergeBell,
  FaBuilding,
  FaGamepad,
  FaHotel,
  FaConnectdevelop,
  FaPlaneDeparture,
  FaCogs,
  FaTools,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Hospitality = () => {
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
            Hospitality Services
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            We have the Best Solution for Hospitality Management Software. Our
            cutting-edge tools are designed to streamline operations, enhance
            guest experiences, and optimize resource management. With our
            tailored software, your business will thrive in the competitive
            hospitality industry.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>

      <div className="px-6 py-16 bg-gray-50">
        <div className="container mx-auto">
          {/* Title and Description */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-800">
              We have the Best Solution for Hospitality Management Software
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Our Hospitality Management System software solutions are tailored
              to your hospitality technology needs. It integrates into our
              powerful travel inventory management software and is designed to
              optimize your operations, streamline guest experiences, and boost
              your revenue.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <FaRegClipboard className="text-blue-500 text-4xl mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                Booking and Reservation Systems
              </h3>
              <p className="text-gray-600">
                Our centralized guest management platform manages guest
                profiles, preferences, and communications. Use reservation
                software with our easy-to-navigate tools for online bookings,
                phone reservations, and walk-ins.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <FaConciergeBell className="text-blue-500 text-4xl mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                Restaurant and Food Service Software
              </h3>
              <p className="text-gray-600">
                Integrate restaurant online ordering for seamless food delivery
                and increased revenue. Restaurant inventory management tracks
                inventory levels, automates ordering, and minimizes waste.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <FaBuilding className="text-blue-500 text-4xl mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                Vacation Rentals and Timeshare Management Software
              </h3>
              <p className="text-gray-600">
                Manage your bookings, activities, and experiences with our
                tourism booking software. Integrate effective hotel budgeting
                software to ensure vacation rentals operate profitably.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <FaGamepad className="text-blue-500 text-4xl mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                Software Development for Gaming and Entertainment
              </h3>
              <p className="text-gray-600">
                Casinos, amusement parks, and attractions can manage ticketing,
                admissions, guest flow, and concessions with software
                personalized to their unique business needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <FaHotel className="text-blue-500 text-4xl mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                PMS Software for Hotels and Resorts
              </h3>
              <p className="text-gray-600">
                Streamline tasks like reservations, housekeeping, guest
                communication, revenue management, and reporting with an
                advanced property management system.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <FaConnectdevelop className="text-blue-500 text-4xl mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                Travelport Portal and API Integration Solutions
              </h3>
              <p className="text-gray-600">
                Our hospitality management solutions integrate with existing
                travel platforms, enabling cruise lines and passenger
                transportation companies to manage bookings and connect with a
                broader audience.
              </p>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-12">
            <Link
              to={"/custom-software-development"}
              className="inline-block bg-black text-white font-semibold py-3 px-8 rounded-lg "
            >
              CONSULTATION FOR HOSPITALITY SOFTWARE
            </Link>
          </div>
        </div>
      </div>

      <div className="px-6 py-16 bg-gray-50">
        <div className="container mx-auto">
          {/* Title and Description */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-800">
              Travelport API Integration Solutions
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Chetu's developers ensure Travelport technologies connect
              effortlessly with your business's proprietary software, bringing
              together leading travel providers with online and offline travel
              buyers to facilitate travel commerce through their B2B travel
              platform.
            </p>
          </div>

          {/* Image and Service Cards Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
            <div className="flex-shrink-0 w-full lg:w-1/2 mb-6 lg:mb-0">
              <img
                src="/Images/Travelport.png" // Replace with your actual image source
                alt="Travelport API Integration"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="w-full lg:w-1/2">
              {/* Service Cards */}
              <div className="space-y-12">
                <div className="flex items-start space-x-4">
                  <FaPlaneDeparture className="text-blue-500 text-4xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Travelport API Integration
                    </h3>
                    <p className="text-gray-600">
                      Our expert developers provide custom integrations with
                      Travelport solutions including Travelport Universal API,
                      Travelport Universal Profile, Travelport Universal Policy,
                      Travelport Universal Record, Travelport Galileo,
                      Travelport Apollo, and more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaCogs className="text-blue-500 text-4xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Travelport Configuration
                    </h3>
                    <p className="text-gray-600">
                      We configure and customize Travelport solutions and
                      platforms to your exact needs, programming custom
                      workflows, integrating data, and extending platform
                      capabilities for branding, merchandising, and content
                      distribution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaTools className="text-blue-500 text-4xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Travelport System Upgrades
                    </h3>
                    <p className="text-gray-600">
                      Any necessary Travelport upgrades of the Universal API,
                      development mobile, branding, digital media, ancillary,
                      and aggregated shopping solutions are provided by our
                      expert team of developers to help you stay ahead of the
                      competition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-12">
            <Link
              to={"/custom-software-development"}
              className="inline-block bg-black text-white font-semibold py-3 px-8 rounded-lg"
            >
              GET TRAVELPORT SOFTWARE SOLUTIONS
            </Link>
          </div>
        </div>
      </div>

      {/* Hospitality Areas */}
      <div className="grid grid-cols-1 px-4 pt-10 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Personalized Services */}
        <div className="bg-[#f5f7fa] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/healthy2.webp"
            alt="Personalized Services"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Personalized Services
          </h2>
          <p className="text-black mb-4">
            We understand that every guest is unique. Our team is committed to
            providing personalized services tailored to meet the specific needs
            of each visitor. From tailored event planning to specific room
            requirements, we ensure that every experience is customized to
            perfection.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Customized room settings and preferences</li>
            <li>Personalized concierge services</li>
            <li>Dedicated event and meeting planning</li>
          </ul>
        </div>

        {/* Comfortable Environment */}
        <div className="bg-[#f5f7fa] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/hosipital1.webp"
            alt="Comfortable Environment"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Comfortable Environment
          </h2>
          <p className="text-black mb-4">
            We believe in providing an environment that promotes relaxation and
            productivity. Our facilities are designed to create a comfortable
            atmosphere, whether you're here for business or leisure. With
            top-notch amenities and relaxing spaces, we ensure every guest feels
            at home.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Comfortable meeting and event spaces</li>
            <li>Relaxing lounge areas</li>
            <li>State-of-the-art amenities</li>
          </ul>
        </div>

        {/* Professional Service */}
        <div className="bg-[#f5f7fa] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/hospital2.webp"
            alt="Professional Service"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Professional Service
          </h2>
          <p className="text-black mb-4">
            Our hospitality team is highly trained and dedicated to providing
            exceptional service at every touchpoint. Whether you're attending a
            meeting, event, or just visiting, we ensure a smooth, professional
            experience from start to finish.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Friendly and professional staff</li>
            <li>Seamless event coordination</li>
            <li>24/7 guest assistance</li>
          </ul>
        </div>
      </div>

      {/* Hospitality Goals */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-black mb-6">
          Our Hospitality Goals
        </h2>
        <p className="text-lg text-black">
          We aim to create a welcoming environment for everyone who interacts
          with our company. Our goals include fostering meaningful relationships
          with guests, providing world-class service, and ensuring that every
          visitor feels valued and appreciated. We strive to provide not just a
          service, but an experience that people remember and cherish.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center py-10">
        <h3 className="text-2xl font-semibold text-black mb-4">
          Experience Our Hospitality
        </h3>
        <p className="text-lg text-black mb-8">
          Whether you're visiting for a business meeting or an event, we ensure
          your experience is seamless and enjoyable. Reach out to us today to
          learn more about our hospitality services and book your next visit
          with us.
        </p>
        <Link
          to={"/contact"}
          className="inline-block bg-black text-white px-6 py-3 rounded-lg text-xl font-semibold transition-colors"
        >
          Book Your Visit Now
        </Link>
      </div>
    </div>
  );
};

export default Hospitality;
