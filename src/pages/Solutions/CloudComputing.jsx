import React from "react";
import {
  FaCloud,
  FaLock,
  FaDatabase,
  FaCogs,
  FaCloudDownloadAlt,
  FaCloudUploadAlt,
} from "react-icons/fa"; // Import icons
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiGooglecloud } from "react-icons/si";

import img2 from "/Images/PlatformDevloper.png";
import { Link } from "react-router-dom";
const CloudComputing = () => {
  const services = [
    {
      name: "AWS",
      description:
        "Amazon Web Services provides on-demand cloud computing platforms and APIs.",
      image: <FaAws />,
      features: ["Compute", "Storage", "Networking", "AI & ML"],
    },
    {
      name: "Azure",
      description:
        "Microsoft Azure offers a variety of cloud services including hosting, AI, and databases.",
      image: <VscAzure />,
      features: ["VMs", "Databases", "Serverless", "Security"],
    },
    {
      name: "Google Cloud",
      description:
        "Google Cloud provides cloud storage, data analytics, and machine learning services.",
      image: <SiGooglecloud />,
      features: ["Big Data", "AI", "Cloud Storage", "Kubernetes"],
    },
  ];

  return (
    <div className="min-h-screen  text-black">
      {/* Background Image */}
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
            Hire Experienced Cloud Application Developers
          </h1>
          <p className="text-white text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Qubex's low-cost developers-for-hire have a wealth of knowledge,
            experience, and unprecedented expertise in developing custom
            cloud-based applications from scratch using best practices, as well
            as revamping existing cloud apps to fit unique organizational needs.
          </p>
          <Link
            to={"/contact"}
            className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto"
          >
            Start Your Project →
          </Link>
        </div>
      </div>
      <div>
        {/* Feature Cards Section */}
        <section className="flex flex-col lg:flex-row items-center gap-8 px-10 py-10">
          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Feature Card 1 */}
            <div className="text-black shadow rounded-lg p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <FaCloud /> {/* Cloud-Native Application Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">
                Cloud-Native Application Development
              </h3>
              <p className="text-gray-600">
                We develop cloud-native apps with domain-driven designs using
                powerful DevOps tools, enabling automated management experiences
                across public, private, hybrid, and multi-cloud computing
                environments.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="text-black shadow rounded-lg p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <FaLock /> {/* Private Cloud App Development Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">
                Private Cloud App Development Solutions
              </h3>
              <p className="text-gray-600">
                We create custom-tailored private cloud apps for businesses that
                require the same flexibility & openness as a public cloud
                solution while retaining complete control over large datasets &
                mission-critical business workflows.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="text-black shadow rounded-lg p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <FaDatabase /> {/* Hybrid & Multi Cloud App Development Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">
                Hybrid & Multi Cloud App Development
              </h3>
              <p className="text-gray-600">
                Our developers apply our expertise in cloud computing to create
                robust multi-cloud applications, designed for businesses that
                require the use of several cloud services to promote
                flexibility, performance optimization, and cost control.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:w-1/2">
            <img
              src="/Images/cloudComputer.png" // Replace with actual image URL
              alt="Cloud Application Development"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Cloud Application Development Services */}
        <section className="text-center py-10 bg-gray-100">
          <h2 className="text-2xl font-semibold mb-4">
            Qubex’s Cloud Application Development Services
          </h2>
          <p className="text-lg mb-6">
            Our cloud app development process helps businesses of all sizes
            unlock their business workflow’s full potential by offering our
            unbeatable cloud app development services.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 py-10">
            {/* Service 1 */}
            <div className="text-black shadow rounded-lg p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <FaCloudDownloadAlt /> {/* Google Cloud Solutions Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">Google Cloud Solutions</h3>
              <p className="text-gray-600">
                We integrate your current business software with Google
                Cloud-based applications to increase your entire IT
                infrastructure, promoting additional robustness, reliability,
                and cost-efficiency.
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-black shadow rounded-lg p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <FaCogs /> {/* Cloud Security Services Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">
                Cloud Security Services
              </h3>
              <p className="text-gray-600">
                We implement reliable security protocols like SSL/TLS,
                end-to-end encryption, 2F authentication, private keys, API
                credentials, password protection, and so much more.
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-black shadow rounded-lg p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <FaCloudUploadAlt /> {/* Cloud Backup Services Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud Backup Services</h3>
              <p className="text-gray-600">
                We develop all-in-one cloud-based data protection, backup, and
                recovery solutions housed in proprietary off-site data centers,
                colocation facilities, or a hybrid combination of servers.
              </p>
            </div>
          </div>
        </section>
      </div>

      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">
          Cloud Service Comparison
        </h1>
        <p className="text-lg text-black mt-2">
          Compare top cloud providers to choose the best for your needs.
        </p>
      </header>

      <div className="grid md:grid-cols-3 p-10 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-[#f5f7fa] rounded-lg shadow-lg p-4 ">
            <div className="text-center flex items-center gap-x-5 text-7xl">
              {service.image}
              <h2 className="text-2xl font-semibold text-black mb-2 text-center">
                {service.name}
              </h2>
            </div>
            <p className="text-black mb-4">{service.description}</p>
            <ul className="list-disc pl-6 space-y-1 text-black">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudComputing;
