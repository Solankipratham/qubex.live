import React from 'react';
import { FiShield, FiLock, FiHome } from 'react-icons/fi';
import { FaShieldAlt, FaLock, FaChartBar, FaShoppingCart, FaHeadset, FaUserCog } from 'react-icons/fa';


import img2 from "/src/assets/Images/PlatformDevloper.png";
import { Link } from 'react-router-dom';
const FraudProtection = () => {
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
        Fraud Protection Solutions
        </h1>
        <p className="text-white text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
          Protecting your business from fraud has never been more critical in today’s fast-paced digital world. At{' '}
          <span className="font-bold">Qubex</span>, we deliver cutting-edge fraud protection solutions
          designed to safeguard your financial assets, sensitive data, and customer trust. Our services empower
          businesses to detect, prevent, and mitigate fraud risks efficiently.
        </p>
        <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
          Start Your Project →
        </Link>
      </div>
    </div>
      <div className="max-w-7xl mx-auto px-6">

      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          Hire Experienced and Dedicated Fraud Prevention Software Developers
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Qubex’s highly experienced fraud prevention software developers engineer custom-tailored solutions designed to detect & prevent fraudulent activities from occurring across entire business infrastructures while delivering a superior customer experience.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center  gap-12 lg:gap-8">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src="/Images/Fraudprotection.jpg"
            alt="Fraud Prevention Dashboard"
            className="w-full max-w-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-8">
          {/* Card 1 */}
          <div className="flex items-center gap-4">
            <FiShield className="text-[#02b5f1] text-9xl" />
            <div>
              <h2 className="text-xl font-bold">Enterprise Fraud Protection Solutions</h2>
              <p className="text-gray-700">
                Qubex’s highly experienced developers program advanced fraud detection analytics for platforms with customized rule-based engines, machine learning, data analysis algorithms, and Continuous Controls Monitoring (CCM) technologies.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex items-center gap-4">
            <FiLock className="text-[#02b5f1] text-9xl" />
            <div>
              <h2 className="text-xl font-bold">E-Commerce Fraud Management Solutions</h2>
              <p className="text-gray-700">
                Protect your e-commerce business with end-to-end e-commerce fraud management solutions built with unique features for pattern recognition, data mining, real-time monitoring, and Knowledge Discovery in Databases (KDD).
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex items-center gap-4">
            <FiHome className="text-[#02b5f1] text-9xl" />
            <div>
              <h2 className="text-xl font-bold">Banking & Financial Crime Management Software</h2>
              <p className="text-gray-700">
                Our custom fraud prevention solutions enable banks, processors, acquirers, and other financial networks to stay ahead of fraudsters, reducing fraud losses, improving detection rates, and preventing financial crime in real-time, at scale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <button className="px-8 py-3 bg-black  text-white font-semibold rounded-full">
        Protect Your Business Against Fraudsters Now
      </button>
    </div>

    <div className="px-6 py-16 ">
      <div className="container mx-auto">
        {/* Fraud Prevention Software Development Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Fraud Prevention Software Development
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Prevent money laundering, tax evasion, forged bank checks, identity theft, cybersecurity threats, fraudulent insurance claims, terrorist financing, and other prevalent fraudulent activities that occur within organizations everywhere with Qubex's custom fraud prevention software solutions.
          </p>
          <div className="flex justify-center gap-12 mb-6">
            <div className="w-1/2">
              <img src="/Images/Laptop.png" alt="Fraud Prevention" className="object-cover w-full h-full" />
            </div>
          </div>
          <p className="text-lg text-gray-600">
            Qubex's team of highly experienced software developers has the required skills and resources to develop best-in-class fraud prevention software for desktop, web, and mobile devices, featuring key fraud prevention components.
          </p>
        </div>

        {/* Fraud Prevention Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Fraud Prevention Features
          </h2>
          <div className="grid md:grid-cols-3 gap-12 px-4">
            <div className="space-y-4">
              <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Internal Fraud Prevention</h3>
              <p className="text-gray-600">Prevent internal fraud by eliminating hand-offs, unauthorized employee access, and other internal fraudulent activities with secure employee identity verification protocols.</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                <FaLock />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Voice Recognition/Authentication</h3>
              <p className="text-gray-600">Protect your business from data breaches, account takeovers, remote access trojans, fraud bots, and other attacks by replacing your current one-time passcode-based account recovery systems with secure voice recognition/authentication.</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                <FaChartBar />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Fraud Statistical Data Analytics</h3>
              <p className="text-gray-600">Our fraud prevention software experts implement fraud data analytics modules that measure statistical parameter calculations, regression analysis, probability distributions & models, data matching, and time-series analysis.</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                <FaShoppingCart />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">E-Commerce Platform Fraud Solutions</h3>
              <p className="text-gray-600">Whether your e-commerce storefront runs on Magento, Shopify, BigCommerce, WooCommerce, or ZenCart, Qubex will develop a custom fraud prevention solution and integrate it within your current e-commerce platform.</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                <FaHeadset />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Phishing & Scam Protection</h3>
              <p className="text-gray-600">We program a combination of technologies, including deep learning, natural language processing, robotic process automation (RPA), and computer vision/logo detection to identify fake domains, phishing & scam sites, and cryptojacking sites in seconds.</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                <FaUserCog />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Authorized Push Payment (APP)</h3>
              <p className="text-gray-600">Our custom payment fraud prevention solutions allow users to perform real-time payment fraud screening, apply real-time rules as part of a multi-layered fraud protection strategy, combat APP fraud, and much more.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-12">
          <a href="#" className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[#171717] rounded-lg">
            Hire Fraud Prevention Experts Today
          </a>
        </div>
      </div>
    </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-8">
          {/* Feature 1 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/fraud1.webp"
              alt="Real-Time Monitoring"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Real-Time Monitoring</h2>
            <p className="text-black">
              Leverage advanced tools for monitoring transactions and activities across your systems. Receive instant
              alerts for suspicious behavior or unauthorized access, minimizing response times. Reduce losses with
              proactive detection of anomalies.
            </p>
          </div>

          {/* Feature 2 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/fraud2.webp"
              alt="AI-Driven Detection"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">AI-Driven Fraud Detection</h2>
            <p className="text-black">
              Harness machine learning algorithms to identify patterns of fraudulent activity. Continuously adapt to
              evolving threats using AI to stay ahead of fraudsters. Identify high-risk users or transactions with
              predictive analytics.
            </p>
          </div>

          {/* Feature 3 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/fraud3.webp"
              alt="Customizable Rules"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Customizable Risk Rules</h2>
            <p className="text-black">
              Design fraud detection rules tailored to your unique business requirements. Define thresholds for
              transaction amounts, geolocations, and device activities. Maintain operational efficiency while reducing
              false positives.
            </p>
          </div>

          {/* Feature 4 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/fraud4.webp"
              alt="Compliance Management"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Compliance Management</h2>
            <p className="text-black">
              Stay compliant with industry regulations, including PCI-DSS, GDPR, and SOC 2 standards. Protect sensitive
              customer data with state-of-the-art encryption and secure data storage methods.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className=" p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">Why Choose Our Fraud Protection Solutions?</h2>
          <ul className="list-disc list-inside space-y-2 text-black">
            <li>
              <strong>Comprehensive Coverage:</strong> Safeguard every aspect of your business, from transactions to user
              access.
            </li>
            <li>
              <strong>Scalable Solutions:</strong> Designed to grow with your business, ensuring consistent protection.
            </li>
            <li>
              <strong>Expert Support:</strong> 24/7 assistance from fraud prevention specialists.
            </li>
            <li>
              <strong>Cost-Effective:</strong> Reduce losses and minimize fraud risks without breaking the budget.
            </li>
          </ul>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-10 mb-4  text-center">
          <Link
            to={"/contact"}
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium transition"
          >
            Contact Us for Fraud Protection Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FraudProtection;
