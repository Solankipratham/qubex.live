import React from "react";

import { Link } from "react-router-dom";
const MediaEntertainment = () => {
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
            Media & Entertainment Software Solutions
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Our company specializes in developing custom software solutions for
            the media and entertainment industry. We offer a comprehensive suite
            of services designed to enhance content creation, distribution, and
            consumption, ensuring seamless experiences for both creators and
            audiences.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>

      {/* Service Areas */}
      <div className="grid grid-cols-1 pt-10 px-4 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Digital Asset Management */}
        <div className="bg-[#f5f7fa] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/media1.webp"
            alt="Digital Asset Management"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Digital Asset Management
          </h2>
          <p className="text-black mb-4">
            Our Digital Asset Management (DAM) solutions enable efficient
            organization, storage, and retrieval of digital assets, streamlining
            workflows and enhancing collaboration across teams.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Centralized asset storage</li>
            <li>Advanced search and retrieval capabilities</li>
            <li>Version control and metadata management</li>
          </ul>
        </div>

        {/* Streaming Solutions */}
        <div className="bg-[#f5f7fa] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/media2.webp"
            alt="Streaming Solutions"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Streaming Solutions
          </h2>
          <p className="text-black mb-4">
            We develop robust streaming platforms that support live and
            on-demand content delivery, ensuring high-quality experiences across
            various devices and networks.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Live streaming platforms</li>
            <li>On-demand video services</li>
            <li>Adaptive bitrate streaming</li>
          </ul>
        </div>

        {/* Content Management Systems */}
        <div className="bg-[#f5f7fa] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/media3.webp"
            alt="Content Management Systems"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Content Management Systems
          </h2>
          <p className="text-black mb-4">
            Our CMS solutions empower organizations to create, manage, and
            distribute content efficiently, enhancing audience engagement and
            operational efficiency.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Customizable content workflows</li>
            <li>Multi-channel content distribution</li>
            <li>Analytics and reporting tools</li>
          </ul>
        </div>
      </div>

      {/* Additional Services */}
      <div className=" text-center">
        <h2 className="text-3xl font-semibold text-black mb-6">
          Additional Services
        </h2>
        <p className="text-lg text-black">
          Beyond core software solutions, we offer a range of services to
          further enhance your media and entertainment operations:
        </p>
        <ul className="text-black mt-4">
          <li>Mobile application development</li>
          <li>Augmented and Virtual Reality experiences</li>
          <li>Artificial Intelligence and Machine Learning integration</li>
          <li>Blockchain technology for content rights management</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className=" text-center py-10">
        <h3 className="text-2xl font-semibold text-black mb-4">
          Transform Your Media Business
        </h3>
        <p className="text-lg text-black mb-8">
          Partner with us to develop customized software solutions that meet the
          unique needs of your media and entertainment business. Our team is
          dedicated to delivering high-quality, scalable, and user-friendly
          applications that drive efficiency and enhance audience engagement.
        </p>
        <Link
          to={"/contact"}
          className="inline-block bg-black text-white px-6 py-3 rounded-lg text-xl font-semibold transition-colors"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default MediaEntertainment;
