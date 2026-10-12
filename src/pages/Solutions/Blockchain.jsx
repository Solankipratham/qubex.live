import React from "react";
import { FaShieldAlt, FaCube, FaCogs, FaFileContract } from "react-icons/fa";
import {
  MdDataUsage,
  MdSecurity,
  MdGavel,
  MdDevicesOther,
} from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineAccountBalance, MdLocalGroceryStore } from "react-icons/md";

import img2 from "/Images/PlatformDevloper.png";
import { Link } from "react-router-dom";
const Blockchain = () => {
  return (
    <div className="min-h-screen">
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
            Blockchain Solutions for Secure and Transparent Innovation
          </h1>
          <p className="text-white text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Revolutionize your business operations with our advanced blockchain
            solutions. From smart contracts to decentralized applications
            (DApps), we empower businesses with secure, transparent, and
            scalable blockchain technology.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6">
        <div className="">
          {/* Section 1 */}
          <section className="py-12 px-6">
            <h2 className="text-center text-3xl font-bold mb-6">
              We Provide Blockchain Development Services
            </h2>
            <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto mb-10">
              Our software developers are highly proficient in building
              blockchain technologies from scratch and customizing existing
              blockchain solutions through software integrations, functionality
              modifications, and feature implementations.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <FaShieldAlt className="text-blue-500 text-5xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Blockchain Security
                </h3>
                <p className="text-gray-600">
                  We create blockchain security software that identifies and
                  addresses the fundamental elements of a cross-industry
                  standard for secure transactions.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <FaCube className="text-blue-500 text-5xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Public & Private Blockchain
                </h3>
                <p className="text-gray-600">
                  We develop customized and protected private blockchain
                  solutions and decentralized public blockchain systems for
                  businesses.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <FaCogs className="text-blue-500 text-5xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Decentralized Applications
                </h3>
                <p className="text-gray-600">
                  We create custom decentralized applications (dApps) for
                  various business transactions and collaboration.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-12 flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <img
                  src="/Images/BlockChain.jpg" // Replace with actual image URL
                  alt="Blockchain Solutions"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">
                  Comprehensive Blockchain Solutions
                </h3>
                <p className="text-gray-600 text-lg">
                  Our blockchain development services include secure and
                  scalable solutions tailored to your business needs. We provide
                  expertise in creating robust blockchain platforms, enhancing
                  business operations, and enabling seamless transactions.
                  Discover the power of blockchain for your industry today.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-gray-50">
            {/* Testimonial Section */}
            <section className="py-12 bg-white">
              <h2 className="text-center text-3xl font-bold mb-8">
                Hear What Our Clients Have to Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6 px-6 max-w-6xl mx-auto">
                {/* Testimonial 1 */}
                <div className="text-center border p-6 rounded-lg shadow-md">
                  <p className="italic text-gray-700 mb-4">
                    "The developer was quick to provide deliverables of code
                    commits and daily video. They clearly understand Python and
                    Blockchain which resulted in quick and efficient results."
                  </p>
                  <h4 className="font-bold text-gray-900">
                    Director of Operations, Gaming Industry
                  </h4>
                </div>
                {/* Testimonial 2 */}
                <div className="text-center border p-6 rounded-lg shadow-md">
                  <p className="italic text-gray-700 mb-4">
                    "As we approach the finish line of our project, we give
                    appreciation for the work put in. It’s been challenging
                    days, but thanks to your efforts and problem-solving, we are
                    here."
                  </p>
                  <h4 className="font-bold text-gray-900">
                    Director of Technology, Marketing Solutions Provider
                  </h4>
                </div>
              </div>
            </section>

            {/* Custom Blockchain Applications Section */}
            <section className="py-12 px-6 bg-gray-100">
              <h2 className="text-center text-3xl font-bold mb-6">
                We Build Custom Blockchain Applications
              </h2>
              <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
                {/* Left: Image */}
                <div className="lg:w-1/2">
                  <img
                    src="/Images/Blockchain Applications.jpg"
                    alt="Blockchain Wallet App"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                {/* Right: Details */}
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-2xl font-bold">
                    Blockchain Application Development
                  </h3>
                  <p className="text-gray-700">
                    We leverage third-party blockchain software solutions to
                    develop scalable Blockchain Applications designed to reduce
                    losses, avoid fraud, and eliminate intermediary fees.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FaShieldAlt className="text-blue-500 text-3xl mr-4" />
                      <div>
                        <h4 className="font-bold">Strengthen Security</h4>
                        <p className="text-gray-600">
                          We build breach-resistant applications to prevent
                          fraud and cyberattacks while managing sensitive data.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaCube className="text-blue-500 text-3xl mr-4" />
                      <div>
                        <h4 className="font-bold">
                          Bust Operational Bottlenecks
                        </h4>
                        <p className="text-gray-600">
                          Automate workflows to replace error-prone and
                          time-consuming processes.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaCogs className="text-blue-500 text-3xl mr-4" />
                      <div>
                        <h4 className="font-bold">Cut Intermediary Costs</h4>
                        <p className="text-gray-600">
                          Enable secure transactions and data exchange without
                          financial restraints.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Custom Blockchain Solutions Section */}
            <section className="py-12 px-6">
              <h2 className="text-center text-3xl font-bold mb-6">
                Custom Blockchain Solutions
              </h2>
              <p className="text-center text-lg text-gray-700 mb-10 max-w-4xl mx-auto">
                We develop Custom Blockchain Solutions from scratch or integrate
                customized features & components into existing systems for
                finance, healthcare, and gaming markets.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Solution 1 */}
                <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                  <MdOutlineAccountBalance className="text-blue-500 text-5xl mb-4" />
                  <h3 className="text-xl font-bold mb-2">Finance & Banking</h3>
                  <p className="text-gray-600">
                    Develop high-speed platforms for trading, payments, and
                    international money transfers.
                  </p>
                </div>
                {/* Solution 2 */}
                <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                  <MdSecurity className="text-blue-500 text-5xl mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    Healthcare Solutions
                  </h3>
                  <p className="text-gray-600">
                    Maintain compliance and protect sensitive patient data with
                    blockchain technologies.
                  </p>
                </div>
                {/* Solution 3 */}
                <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                  <MdLocalGroceryStore className="text-blue-500 text-5xl mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    Retail & E-Commerce
                  </h3>
                  <p className="text-gray-600">
                    Secure transactions and improve supply chain transparency
                    with blockchain.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Section 2 */}
          <section className="py-12 px-6 bg-gray-100">
            <h2 className="text-center text-3xl font-bold mb-6">
              Custom AI Blockchain Development Services
            </h2>
            <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto mb-10">
              Our developers can combine Artificial Intelligence (AI) and
              Blockchain to develop transformative solutions across various
              industries.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <MdDataUsage className="text-blue-500 text-5xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
                <p className="text-gray-600">
                  Our experts combine AI and blockchain to analyze large volumes
                  of data and detect anomalies for better predictions.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <MdSecurity className="text-blue-500 text-5xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Security and Fraud Detection
                </h3>
                <p className="text-gray-600">
                  AI-powered blockchain security enhances fraud detection,
                  monitors activity, and ensures the integrity of blockchain
                  networks.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <MdGavel className="text-blue-500 text-5xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Smart Contract Optimization
                </h3>
                <p className="text-gray-600">
                  AI-enhanced smart contract optimization automates creation,
                  validation, and enforcement for greater efficiency.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <MdDevicesOther className="text-blue-500 text-5xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Privacy and Confidentiality
                </h3>
                <p className="text-gray-600">
                  AI techniques like federated learning protect data privacy and
                  provide encrypted computations for sensitive blockchain data.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <FaFileContract className="text-blue-500 text-5xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  AI-Enhanced Consensus Mechanisms
                </h3>
                <p className="text-gray-600">
                  AI algorithms optimize consensus protocols, improving
                  scalability, efficiency, and fault tolerance in blockchain
                  networks.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/blockchain1.webp"
              alt="Blockchain Development"
              className="w-full h-48  rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Blockchain Development
            </h2>
            <p className="text-black text-sm sm:text-base">
              Build secure and robust blockchain applications tailored to your
              business needs. From private to public blockchains, we deliver
              custom solutions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/blockchain2.webp"
              alt="Smart Contracts"
              className="w-full h-48  rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Smart Contracts
            </h2>
            <p className="text-black text-sm sm:text-base">
              Automate and secure transactions with smart contracts. We design,
              deploy, and audit smart contracts to ensure transparency and
              efficiency.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/blockchain3.webp"
              alt="Decentralized Applications (DApps)"
              className="w-full h-48  rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Decentralized Applications (DApps)
            </h2>
            <p className="text-black text-sm sm:text-base">
              Develop decentralized applications for enhanced security and
              transparency. From gaming to finance, our DApps cater to diverse
              industries.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/blockchain4.webp"
              alt="Blockchain Integration"
              className="w-full h-48  rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Blockchain Integration
            </h2>
            <p className="text-black text-sm sm:text-base">
              Seamlessly integrate blockchain with your existing systems.
              Optimize operations and improve data security with customized
              blockchain solutions.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-4">
            Why Choose Our Blockchain Solutions?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black">
            <li>
              <strong>Comprehensive Expertise:</strong> Skilled in multiple
              blockchain platforms like Ethereum, Hyperledger, and Binance Smart
              Chain.
            </li>
            <li>
              <strong>Custom Solutions:</strong> Tailored blockchain
              applications to fit your business needs.
            </li>
            <li>
              <strong>Enhanced Security:</strong> Leverage decentralized
              technology to ensure data integrity and transparency.
            </li>
            <li>
              <strong>End-to-End Services:</strong> From development to
              deployment and maintenance, we handle every aspect of blockchain
              solutions.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 text-center">
          <Link
            to={"/contact"}
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium"
          >
            Contact Us for Blockchain Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blockchain;
