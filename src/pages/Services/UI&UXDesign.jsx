import React from "react";

import {
  FaSearch,
  FaPaintBrush,
  FaClipboardCheck,
  FaUserCircle,
  FaMagic,
  FaMobileAlt,
} from "react-icons/fa"; // Importing the necessary icons
import { Link } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";

const Design = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Image Section with Text Overlay */}
        <div className="relative">
          <img
            src="/Images/UIUX2.png" // Replace with your uploaded image URL
            alt="Custom Software Development"
            className="w-full h-screen object-cover"
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col sm:pt-20 pt-10 bg-black bg-opacity-50 px-6 py-12 sm:py-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 mt-20 text-white">
              UI/UX Design
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300  w-[90%] sm:w-[80%]  mb-6">
              Improve your digital product with a user-centric interface, highly
              appealing and easy to use. Our UI/UX design services help you
              create exceptional user experiences that delight your customers
              and enhance your brand identity.
            </p>
            <Link to={"/contact"} className="bg-black max-w-fit text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
              Start Your Project →
            </Link>
          </div>
        </div>
      </div>

      {/* Our UI/UX Design Process */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">
          Our UI/UX Design Process
        </h2>
        <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto">
          We follow a systematic design approach that puts users at the center
          of everything we do. Our process is designed to ensure that every
          design decision enhances user experience while aligning with your
          business goals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <img
              src="/Images/uiux.png"
              alt="Project 1"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-black">Research</h3>
            <p className="text-gray-400">
              We begin by understanding your target audience, business goals,
              and market needs to gather insights for the design process.
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <img
              src="/Images/DigitalTransformation.png"
              alt="Project 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-black">Design</h3>
            <p className="text-gray-400">
              Our designers create wireframes, prototypes, and high-fidelity UI
              designs that ensure functionality and user engagement.
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <img
              src="/Images/UIUX1.png"
              alt="Project 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-black">Testing</h3>
            <p className="text-gray-400">
              We test the designs with real users to gather feedback and make
              data-driven decisions that improve the user experience.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col justify-center items-center gap-y-10 sm:gap-y-20 py-12">
        <div className="max-w-screen-xl w-full flex  flex-col justify-center gap-x-10 lg:flex-row items-center space-y-8 lg:space-y-0">
          {/* Left Section: Image */}
          <div className="w-full lg:w-1/3">
            <img
              src="/Images/intelchain.png" // Placeholder image, replace with your actual image
              alt="Roundrush Interface"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section: Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              IntelChain
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              IntelChain enables seamless data and asset transfers across
              multiple blockchains, ensuring security, scalability, and
              interoperability through its advanced multichain architecture.
            </p>
            <Link
              to={"https://intelchain.org"}
              className="inline-block text-blue-500 font-medium text-lg hover:text-blue-700 transition-colors"
            >
              Discover IntelChain →
            </Link>
          </div>
        </div>
        <div className="max-w-screen-xl w-full flex flex-col justify-center gap-x-10 lg:flex-row items-center space-y-8 lg:space-y-0">
          {/* Left Section: Image */}

          {/* <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Bywinn
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              IntelChain enables seamless data and asset transfers across
              multiple blockchains, ensuring security, scalability, and
              interoperability through its advanced multichain architecture.
            </p>
            <Link
              to={"https://bywinn.com/"}
              className="inline-block text-blue-500 font-medium text-lg hover:text-blue-700 transition-colors"
            >
              Discover Bywinn →
            </Link>
          </div> */}

          {/* Right Section: Text */}
          {/* <div className="w-full lg:w-1/3">
            <img
              src="/Images/bywinnpage.png" // Placeholder image, replace with your actual image
              alt="Roundrush Interface"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div> */}
        </div>
        <div className="max-w-screen-xl w-full flex flex-col justify-center gap-x-10 lg:flex-row items-center space-y-8 lg:space-y-0">
          {/* Left Section: Image */}
          <div className="w-full lg:w-1/3">
            <img
              src="/Images/noddipage.png" // Placeholder image, replace with your actual image
              alt="Roundrush Interface"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section: Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Noddi</h2>
            <p className="text-lg text-gray-600 mb-6">
              Noddi unveils an innovative early-access model, offering
              compelling investment opportunities for those eager to explore
              blockchain technology.
            </p>
            <Link
              to={"https://noddi.org/"}
              className="inline-block text-blue-500 font-medium text-lg hover:text-blue-700 transition-colors"
            >
              Discover Noddi →
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 text-center px-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Discover our clients
        </h1>
        <p className="mb-6 text-lg sm:text-2xl text-gray-600">
          We thrive on tackling difficult challenges in different industries,
          including SaaS platforms, Neuroscience, Blockchain, E-commerce, and
          Workflow Management Systems and much more. We believe that the tougher
          the obstacle, the greater the sense of fulfillment for both ourselves
          and our valued clients.
        </p>
        <Link
          to="/contact"
          className="bg-black  text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
      <ImageSlider />

      {/* Why Choose Our UI/UX Design Services */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">
          Why Choose Our UI/UX Design Services?
        </h2>
        <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto">
          Our UI/UX design services help you deliver digital experiences that
          your users love. We combine creativity with the latest design trends
          and technologies to create user-centric, visually appealing, and
          functional interfaces.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - User-Centered Design */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaUserCircle className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              User-Centered Design
            </h3>
            <p className="text-gray-400">
              We focus on understanding the needs and behaviors of your target
              audience to create designs that resonate with them.
            </p>
          </div>

          {/* Card 2 - Creative Solutions */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaMagic className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Creative Solutions
            </h3>
            <p className="text-gray-400">
              Our designers combine artistic vision with technical expertise to
              create innovative solutions that push the boundaries of digital
              design.
            </p>
          </div>

          {/* Card 3 - Mobile-First Design */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaMobileAlt className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Mobile-First Design
            </h3>
            <p className="text-gray-400">
              We design with mobile users in mind, ensuring your application is
              fully responsive and provides a seamless experience across all
              devices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;
