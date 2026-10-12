import React from 'react';

import img2 from "/Images/PlatformDevloper.png";
import { Link } from 'react-router-dom';
const Kiosk = () => {
  const kioskServices = [
    {
      title: "Kiosk Hardware Integration",
      description:
        "We integrate kiosk system software with hardware for biometric retina scanners, fingerprint readers, cameras, simple card readers, receipt/thermal printers, bill acceptors/dispensers, barcode scanners, RFID, ticketing systems, and lockdown devices in kiosk mode.",
      icon: "🔧",
    },
    {
      title: "Interactive Kiosk Services",
      description:
        "We build interactive kiosk services, including touch screen functionality, animation, virtual keyboards, graphics, multimedia, digital signature, and camera applications.",
      icon: "🖥️",
    },
    {
      title: "Self-Service Kiosk Software",
      description:
        "We program kiosk software to be used as a self-service platform, retail app, photo booth, digital signage, ticketing, bill payment, and more.",
      icon: "🛒",
    },
    {
      title: "Digital Signage Kiosk Solutions",
      description:
        "Our experts provide digital signage kiosk solutions programming, including Content Management Systems (CMS) with remote kiosk management controls.",
      icon: "📺",
    },
    {
      title: "Photo Booth Kiosk",
      description:
        "Our photo booth kiosk software development solutions include integrations with payment processing, camera features, social media platforms, and custom features programming.",
      icon: "📷",
    },
    {
      title: "Customer Experience",
      description:
        "Pull and report data while dynamically controlling your overall customer experience, enabling you to serve your customers the best way possible.",
      icon: "📊",
    },
  ];

  const aiSolutions = [
    {
      title: "AI-Driven Personalized Solutions",
      description:
        "We build custom AI-driven software solutions for kiosks. We integrate intelligent features such as natural language processing and facial recognition, creating custom tailored interfaces that cater to your audience while fitting your brand.",
      icon: "🤖",
    },
    {
      title: "AI-Enhanced Smart Kiosk Experiences",
      description:
        "Our custom AI-powered solutions enable your smart kiosks to become more intuitive and enhance the user experience as your business needs. Smart kiosk capabilities include touchscreen interfaces, contextual awareness through Natural Language Processing, adaptive recommendations, and advanced security measures.",
      icon: "🧠",
    },
    {
      title: "AI-Driven Remote Management Solutions",
      description:
        "Our kiosk solution experts can help you streamline and centralize kiosk management with our custom AI-powered remote management solutions. AI integrations enable more efficient kiosk management, ensuring consistent performance, uptime, and swift issue resolution for your kiosk network.",
      icon: "📡",
    },
    {
      title: "AI-Powered Virtual Assistant Integration",
      description:
        "Our AI experts specialize in integrating personalized virtual assistants into kiosk software. We harness the latest in AI advancements to create custom virtual assistants that are tailored to fit your brand voice, enhancing customer interactions.",
      icon: "💬",
    },
    {
      title: "AI-Enhanced Self-Service Ticketing",
      description:
        "Our experts will help you optimize your self-service ticketing system with custom-tailored AI solutions. Through AI-enhanced functionalities, we streamline ticketing processes and provide seamless user experiences while fulfilling specific operational requirements.",
      icon: "🎟️",
    },
  ];

  return (
    <div className="min-h-screen ">{/* Background Image */}
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
        Kiosk Solutions for Smart Interactions
        </h1>
        <p className="text-xl sm:text-2xl pt-5 text-white w-[90%] sm:w-[80%] ">
        Transform the way you engage with customers using our innovative kiosk solutions. From self-service to interactive displays, our kiosks are designed to deliver seamless user experiences and enhance operational efficiency across industries.
        </p>
        <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg  transition w-full sm:w-auto">
          Start Your Project →
        </Link>
      </div>
    </div>
      <div className="max-w-7xl mx-auto px-6">

      <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
          Custom Kiosk Application Development
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Kiosk Image */}
          <div className="flex justify-center">
            <img
              src="/Images/cardmapr-nl-aU-tyT7E0lw-unsplash.jpg" // Replace with actual image URL
              alt="Kiosk Application"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side: Kiosk Services */}
          <div>
            {kioskServices.map((service, index) => (
              <div key={index} className="flex items-start space-x-4 mb-8">
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

        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow ">
            CONSULTATION FOR KIOSK SOFTWARE
          </button>
        </div>
      </div>

      {/* AI-Powered Solutions Section */}
      <div className="mt-16  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl font-extrabold text-gray-900 mb-6">
            AI-Powered Solutions for Kiosks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSolutions.map((solution, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-4xl text-blue-500">{solution.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {solution.title}
                  </h4>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow ">
              GET AI-POWERED KIOSK SOLUTIONS
            </button>
          </div>
        </div>
      </div>
    </section>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
          {/* Feature 1 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/kisok1.jpg"
              alt="Self-Service Kiosks"
              className="w-full h-48 rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Self-Service Kiosks</h2>
            <p className="text-black-300">
              Empower customers with self-service kiosks for quick and efficient transactions. From ticketing to check-ins, our solutions streamline processes and reduce wait times.
            </p>
          </div>

          {/* Feature 2 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/kisok2.jpg"
              alt="Interactive Touch Displays"
              className="w-full h-48 rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Interactive Touch Displays</h2>
            <p className="text-black-300">
              Enhance user engagement with interactive touch displays. Ideal for information kiosks, retail promotions, and wayfinding, these kiosks offer a dynamic and intuitive interface.
            </p>
          </div>

          {/* Feature 3 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/kisok3.jpg"
              alt="Payment Kiosks"
              className="w-full h-48 rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Payment Kiosks</h2>
            <p className="text-black-300">
              Facilitate secure and fast transactions with our payment kiosks. Perfect for retail, hospitality, and transportation industries, these kiosks support multiple payment methods.
            </p>
          </div>

          {/* Feature 4 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/kisok4.jpg"
              alt="Custom Kiosk Solutions"
              className="w-full h-48 rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Custom Kiosk Solutions</h2>
            <p className="text-black-300">
              Tailor kiosks to meet your specific business needs. Whether it's for healthcare, banking, or entertainment, we design solutions that align with your goals and enhance user experience.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className=" p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">Why Choose Our Kiosk Solutions?</h2>
          <ul className="list-disc list-inside space-y-2 text-black-300">
            <li><strong>Versatile Applications:</strong> From self-service to interactive advertising, our kiosks cater to diverse industries and use cases.</li>
            <li><strong>User-Friendly Designs:</strong> Intuitive interfaces for effortless navigation and interaction.</li>
            <li><strong>Scalable Solutions:</strong> Flexible designs to accommodate evolving business needs.</li>
            <li><strong>Reliable Support:</strong> Ongoing maintenance and technical assistance to ensure uninterrupted operations.</li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium transition"
          >
            Contact Us for Kiosk Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Kiosk;
