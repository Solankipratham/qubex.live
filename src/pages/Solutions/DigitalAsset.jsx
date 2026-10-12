import React from "react";
import img2 from "/Images/PlatformDevloper.png";

import { Link } from "react-router-dom";
const DigitalAssetApp = () => {
  const damFeatures = [
    {
      title: "Digital Rights Management (DRM) Solutions",
      description:
        "We integrate GDPR-compliant digital rights management (DRM) solutions for tracking the release and possession of rich media while protecting your intellectual property.",
      icon: "🔒",
    },
    {
      title: "Rich Media DAM Software Solutions",
      description:
        "Our Digital Asset Management software solutions are designed to support rich media, enabling you to view large previews of your files and customize your own presets to batch convert your digital assets.",
      icon: "📹",
    },
    {
      title: "DAM & CMS Software Solutions",
      description:
        "We integrate content publication and content management system (CMS) capabilities, such as comprehensive editing modules, marketing automation, and social media publishing, with your Digital Asset Management Solutions.",
      icon: "📋",
    },
    {
      title: "Audit Trail & Version Control Solutions",
      description:
        "We integrate a powerful and fully scalable digital engine to enable the creation and management of multiple versions of an asset with varying quality standards.",
      icon: "📝",
    },
  ];

  const damIntegrations = [
    {
      title: "Bynder",
      description:
        "We integrate Bynder with your current business systems to provide you with a smart template tool to create branded materials and publish content on-demand.",
    },
    {
      title: "Cloudinary",
      description:
        "We integrate with Cloudinary for its AI-powered tagging asset functions, allowing you to set automatic tagging features by facial recognition, color, or object.",
    },
    {
      title: "Canto",
      description:
        "We integrate with Canto to enable users to preview their visual content on a gallery-style interface, plus an easy-to-use admin dashboard to run reports.",
    },
    {
      title: "Aprimo",
      description:
        "We integrate Aprimo with your existing systems to streamline both content ideation and content planning processes in a robust, reliable asset repository system.",
    },
  ];

  return (
    <div className="font-sans text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center w-full h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${img2})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex flex-col items-start pt-10 sm:pt-20 px-10">
          <h1 className="text-white font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
            Digital Asset Management (DAM) Software Solutions
          </h1>
          <p className="text-xl sm:text-2xl pt-5 w-[90%] sm:w-[80%]">
            Empower your team with top-tier talent acquisition and customized
            training programs to help them thrive in the competitive software
            industry.
          </p>
          <Link
            to={"/contact"}
            className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto"
          >
            GET DAM DEVELOPERS
          </Link>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="flex-grow flex flex-col justify-center items-center">
        <section className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <h2 className="text-center text-3xl font-extrabold pt-10 text-gray-900">
              Custom Digital Asset Management (DAM) Solutions
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">
              Our custom DAM solutions provide a central hub for your team to
              manage all of your essential content from ideation to publication.
            </p>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side: Image */}
              <div className="flex justify-center">
                <img
                  src="/Images/markus-spiske-iar-afB0QQw-unsplash.jpg" // Replace with actual image URL
                  alt="DAM Dashboard"
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Right Side: Features */}
              <div>
                {damFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 mb-8">
                    <div className="text-4xl text-blue-500">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow">
                INTEGRATE YOUR DAM NOW!
              </button>
            </div>
          </div>

          {/* Integrations Section */}
          <div className="mt-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-center text-2xl font-extrabold text-gray-900 mb-6">
                Custom DAM Software Integrations
              </h3>
              <p className="text-center text-lg text-gray-600 mb-12">
                We integrate leading Digital Asset Management (DAM) Software
                with your existing business systems to enable scalability and
                performance so that you can manage all content and digital
                assets on a single platform.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {damIntegrations.map((integration, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {integration.title}
                    </h4>
                    <p className="text-gray-600">{integration.description}</p>
                  </div>
                ))}
              </div>

              {/* Integration Image */}
              <div className="my-12 flex justify-center">
                <img
                  src="/Images/christopher-gower-m_HRfLhgABo-unsplash.jpg" // Replace with actual image URL
                  alt="Integration Diagram"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Decentralized Technology Section */}
        <section id="about" className="w-full">
          <div className="container mx-auto text-center px-4">
            <h3 className="text-3xl font-bold text-black mb-8">About Us</h3>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src="/Images/asset3.webp"
                  alt="About Us Image"
                  className="rounded-lg shadow-lg"
                />
              </div>
              {/* Content */}
              <div className="w-full lg:w-1/2 text-left">
                <p className="text-lg text-black mb-4">
                  We are revolutionizing the financial industry by integrating
                  blockchain technology into everyday transactions. Our platform
                  provides secure, scalable, and efficient solutions tailored to
                  the needs of modern enterprises.
                </p>
                <p className="text-lg  text-black mb-4">
                  By leveraging the latest innovations, we enable businesses to
                  simplify complex processes, reduce operational costs, and
                  build trust with their clients.
                </p>
                <Link to={"/about-us"} className="bg-black px-8 py-2 text-lg rounded-lg text-white transition">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className=" w-full">
          <div className="container mx-auto text-center px-4">
            <h3 className="text-3xl font-bold text-white mb-12">
              Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 py-10 lg:grid-cols-3 gap-12">
              <div className="bg-[#f5f7fa] p-6 rounded-lg">
                <h4 className="text-2xl text-black font-semibold mb-4">
                  Real-time Transactions
                </h4>
                <p className="text-black">
                  Experience instant settlement with blockchain-powered smart
                  contracts.
                </p>
              </div>
              <div className="bg-[#f5f7fa] p-6 rounded-lg">
                <h4 className="text-2xl text-black font-semibold mb-4">
                  Privacy-First Protocol
                </h4>
                <p className="text-black">
                  Data is kept private with end-to-end encryption and only
                  shared with authorized parties.
                </p>
              </div>
              <div className="bg-[#f5f7fa] p-6 rounded-lg">
                <h4 className="text-2xl text-black font-semibold mb-4">
                  Scalable Network
                </h4>
                <p className="text-black">
                  The Canton network scales as you grow, handling complex
                  financial transactions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DigitalAssetApp;
