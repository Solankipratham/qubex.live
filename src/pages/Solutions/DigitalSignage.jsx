import React from "react";
import { Link } from "react-router-dom";

const DigitalSignage = () => {
  const featuresLeft = [
    {
      title: "Digital Signage CMS Repositories",
      description:
        "Our engineers build digital signage central repositories or digital asset management (DAM) systems jam-packed with stunning visuals, info-rich immersive experiences, and visual craft communication models to capture audiences' attention/engagement on all devices.",
      icon: "📄", // Replace with a real icon if needed
    },
    {
      title: "Security & Compliance Protocols",
      description:
        "We use end-to-end encrypted data, SSL, multi-factor authentication encryptions, Role-based access permissions (RBAC), and integrations with Single Sign-On (SSO) tools to ensure that all digital signage solutions are compliant with SOC 2, GLBA, SOX, and HIPAA standards.",
      icon: "🔒",
    },
    {
      title: "Scalable Network Management",
      description:
        "We engineer systems that monitor and manage messaging changes and software updates in real-time, custom-tailored to help companies effectively communicate with other team members all while managing their in-house or overseas teams.",
      icon: "🌐",
    },
  ];

  const featuresRight = [
    {
      title: "Digital Signage Software Development",
      description:
        "We develop state-of-the-art digital signage software with touch screen capabilities, sensor apps, beacons, RFID, QR Codes, NFC, SMS, and Bluetooth features with intuitive interfaces that showcase impressive graphics & animation, custom branded templates, and more.",
      icon: "💻",
    },
    {
      title: "Cloud-Based Digital Signage Software",
      description:
        "Our developers program intelligent cloud-based digital signage platforms using HTML5 (markup language written in HTML) as well as web-based applications that facilitate easy updates, seamless scalability, and easy remote access and management.",
      icon: "☁️",
    },
    {
      title: "Digital Signage Web & Mobile Applications",
      description:
        "Chetu experts develop digital signage applications for meeting rooms, dashboards, LED displays, wayfinding displays, information display systems, elevators, storefronts, ad engines, and much more with interactive and user-friendly UX/UI elements.",
      icon: "📱",
    },
  ];
  return (
    <div className="min-h-screen ">
      {/* Full-Width Image with Heading on Top */}
      <div className="relative w-full">
        <img
          src="/Images/soluciones.png" // Replace with your image URL
          alt="Digital Signage"
          className="w-full h-screen object-cover"
        />
        {/* Heading on Top of the Image */}
        <div className="absolute top-1/2 left-1/3 transform -translate-x-1/4 -translate-y-1/2 text-white text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Digital Signage Solutions for Enhanced Customer Engagement
          </h1>
        </div>
      </div>
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
            We've Got Experienced Digital Signage Software Developers-for-Hire
          </h2>
          <p className="text-center text-lg  mb-12">
            Our developers have years of experience creating world-class digital
            signage software solutions/platforms that empower designers and
            writers to create visually stunning, interactive, and user-friendly
            experiences directly from the custom digital signage platform.
          </p>

          {/* Features and Images Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              {featuresLeft.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-4xl text-blue-500">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
              <img
                src="/Images/crew-4Hg8LH9Hoxc-unsplash.jpg" // Replace with actual image URL
                alt="Digital Signage CMS"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {featuresRight.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-4xl text-blue-500">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
              <img
                src="/Images/HireExperienced.png" // Replace with actual image URL
                alt="Digital Signage Dashboard"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow">
              HIRE DIGITAL SIGNAGE EXPERTS
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl py-10 mx-auto ">
        {/* Header Section */}

        {/* Digital Signage Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Digital Signage Solution 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/digital1.webp"
              alt="Content Management"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Content Management
            </h2>
            <p className="text-gray-600">
              Easily manage and schedule your digital signage content through a
              powerful content management system (CMS) that allows for real-time
              updates.
            </p>
          </div>

          {/* Digital Signage Solution 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/digital2.webp"
              alt="Interactive Displays"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Interactive Displays
            </h2>
            <p className="text-gray-600">
              Engage your audience with interactive displays that allow for
              dynamic content interaction, enhancing the customer experience in
              various settings.
            </p>
          </div>

          {/* Digital Signage Solution 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/digital3.webp"
              alt="Advertising Solutions"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Advertising Solutions
            </h2>
            <p className="text-gray-600">
              Maximize the impact of your digital signage by displaying targeted
              advertisements that attract attention and drive conversions.
            </p>
          </div>

          {/* Digital Signage Solution 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/digital4.webp"
              alt="Real-Time Updates"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Real-Time Updates
            </h2>
            <p className="text-gray-600">
              Keep your content fresh and relevant with the ability to update
              signage in real-time, offering the latest information or
              promotions instantly.
            </p>
          </div>

          {/* Digital Signage Solution 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/digital5.webp"
              alt="Remote Management"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Remote Management
            </h2>
            <p className="text-gray-600">
              Manage and monitor your entire digital signage network from
              anywhere with cloud-based remote management tools that provide
              full control.
            </p>
          </div>

          {/* Digital Signage Solution 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/digital6.webp"
              alt="Video Wall"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Video Wall Integration
            </h2>
            <p className="text-gray-600">
              Create stunning visual experiences with multi-screen video walls
              that deliver high-definition content to a large audience.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium text-lg sm:text-xl"
          >
            Get Started with Our Digital Signage Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalSignage;
