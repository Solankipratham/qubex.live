import React from "react";
import {
  FaDesktop,
  FaWifi,
  FaCogs,
  FaMapMarkerAlt,
  FaVideo,
  FaFileAlt,
} from "react-icons/fa";


import { Link } from "react-router-dom";
const MeetingsEvents = () => {
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
      <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
      Meetings & Events at Our Office
      </h1>
      <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Our office is equipped with state-of-the-art facilities designed to
            ensure your meetings and events are successful and memorable.
            Whether you're hosting a corporate meeting, a team brainstorming
            session, or a large conference, we have the perfect space for you.
      </p>
      <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
    </div>
  </div>

      <div className="px-6 py-16 bg-gray-50">
        <div className="container mx-auto">
          {/* Event Technology Solutions Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">
                Event Technology Solutions
              </h2>
              <p className="text-lg text-gray-600">
                We engineer and program{" "}
                <strong>event technology solutions</strong> to create AR/VR
                experiences, integrate with wearable technologies, and produce
                digital presentations.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaDesktop className="text-indigo-500 text-4xl mr-4" />
                  <div>
                    <h3 className="font-medium text-xl">
                      Event Technology Software
                    </h3>
                    <p className="text-gray-600">
                      Our custom event technology software creates brand
                      interactivity and enhances social promotion, content
                      distribution, and blended live & digital experiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaWifi className="text-indigo-500 text-4xl mr-4" />
                  <div>
                    <h3 className="font-medium text-xl">
                      Beacon Software Integrations
                    </h3>
                    <p className="text-gray-600">
                      We develop beacon applications that enable resource
                      tracking, navigation, interactive maps, proximity
                      marketing, and more via Bluetooth and iBeacon
                      technologies.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaCogs className="text-indigo-500 text-4xl mr-4" />
                  <div>
                    <h3 className="font-medium text-xl">
                      AR/VR Event Technology Solutions
                    </h3>
                    <p className="text-gray-600">
                      We develop event technology solutions that integrate with
                      AR & VR headsets and other wearable tech solutions to
                      create highly immersive experiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-indigo-500 text-4xl mr-4" />
                  <div>
                    <h3 className="font-medium text-xl">
                      Digital Presentation Software
                    </h3>
                    <p className="text-gray-600">
                      We develop digital presentation software to enable
                      interactive virtual presentations with existing Word,
                      Excel, PDF, PowerPoint/Google Slides, and other media
                      files.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to={"/custom-software-development"}
                className="inline-block text-indigo-600 font-semibold mt-6"
              >
                Get Event Tech Solutions
              </Link>
            </div>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/Images/EventTechnology.png"
                alt="Event Technology"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Advanced Support Solutions Section */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/Images/Meeting.png"
                alt="Event Support"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">
                Qubex Powers Up Your Events and Meetings with Advanced Support
                Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Qubex’s developers offer the best technical support for
                meeting software, event feedback software, and virtual meeting
                software. Our mobile event apps ensure seamlessness for users,
                and our integration capabilities will enhance your event and
                meetings.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaVideo className="text-indigo-500 text-6xl mr-4" />
                  <div>
                    <h3 className="font-medium text-xl">
                      IT Support for Event Apps
                    </h3>
                    <p className="text-gray-600">
                      Our IT support for event apps provides technical
                      assistance and maintenance to ensure smooth event
                      operations. We integrate real-time event analytics,
                      meeting scheduling tools, and software for corporate
                      events to enhance functionality and efficiency.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaDesktop className="text-indigo-500 text-6xl mr-4" />
                  <div>
                    <h3 className="font-medium text-xl">
                      Event Networking Platforms
                    </h3>
                    <p className="text-gray-600">
                      We develop event networking platforms to facilitate
                      communication among attendees at conferences, trade shows,
                      and corporate meetings. They enable real-time meetings and
                      have capabilities like conference planning software,
                      agenda and scheduling, and attendee profiles.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaCogs className="text-indigo-500 text-6xl mr-4" />
                  <div>
                    <h3 className="font-medium text-xl">
                      Event Software System Integrations
                    </h3>
                    <p className="text-gray-600">
                      Our team performs integrations into event software systems
                      for maximized functionality. We integrate event logistics
                      software for streamlined venue and attendee management and
                      event agenda planning tools for easy-to-use interfaces and
                      interactive features.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="inline-block text-indigo-600 font-semibold mt-6"
              >
                Get Event Support Solutions
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 pt-10 px-4 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Meeting Rooms */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/meeting1.webp"
            alt="Meeting Room"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Meeting Rooms
          </h2>
          <p className="text-black mb-4">
            Our meeting rooms are designed to provide a comfortable,
            collaborative environment, equipped with the latest technology and
            high-speed internet. Perfect for small to medium-sized groups.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Seating for up to 10 people</li>
            <li>Projector and whiteboard available</li>
            <li>High-speed internet</li>
          </ul>
        </div>

        {/* Conference Room */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/meeting2.webp"
            alt="Conference Room"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Conference Room
          </h2>
          <p className="text-black mb-4">
            For larger events or conferences, our conference room offers ample
            space and all the necessary amenities to make your event a success.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Seating for up to 50 people</li>
            <li>High-quality AV system</li>
            <li>Video conferencing equipment</li>
          </ul>
        </div>

        {/* Event Spaces */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/meeting3.webp"
            alt="Event Space"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Event Spaces
          </h2>
          <p className="text-black mb-4">
            Whether you're hosting a product launch, seminar, or networking
            event, our event spaces are versatile and customizable to meet your
            needs.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Capacity for up to 100 guests</li>
            <li>Flexible room layouts</li>
            <li>Catering and event planning support</li>
          </ul>
        </div>
      </div>

      <div className="py-16">
        <p className="text-lg text-center text-black">
          We are committed to making your meetings and events as smooth and
          successful as possible. Contact us today to book your space or learn
          more about our services.
        </p>
      </div>
    </div>
  );
};

export default MeetingsEvents;
