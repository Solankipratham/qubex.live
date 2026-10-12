import React from "react";
import {
  FaFingerprint,
  FaLock,
  FaKey,
  FaShieldAlt,
  FaMobileAlt,
} from "react-icons/fa"; // Import icons
import {
  FaUserLock,
  FaUsers,
  FaLaptop,
  FaRegBuilding,
  FaShoppingCart,
  FaHotel,
  FaCogs,
  FaIndustry,
  FaBrain,
  FaRobot,
} from "react-icons/fa"; // Import icons
import { MdOutlineSecurity } from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi2";
import { GrVirtualMachine } from "react-icons/gr";
import { SiThealgorithms } from "react-icons/si";

import { Link } from "react-router-dom";
import img2 from "/Images/PlatformDevloper.png";
const Biometric = () => {
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
            Biometric Solutions for Secure and Seamless Authentication
          </h1>
          <p className="text-white text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Enhance security and streamline access control with our cutting-edge
            biometric solutions. From fingerprint scanning to facial
            recognition, we deliver tailored solutions to meet the unique needs
            of your business.
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
        {/* Hero Section */}
        <section className="text-center py-10 bg-gray-100">
          <h1 className="text-3xl font-semibold mb-4">
            Modernizing Identity Verification and Access Control with Advanced
            Biometric Solutions
          </h1>
          <p className="text-lg mb-6">
            Our biometric system development services empower businesses with
            advanced solutions. Our customized applications cater to diverse
            industries, ensuring optimal data encryption and unparalleled user
            confidence in today's digital landscape.
          </p>
          <button className="px-6 py-3 bg-blacktext-white font-bold rounded-full">
            Get Biometric Solutions
          </button>
        </section>

        {/* Feature Cards Section */}
        <section className="flex flex-col lg:flex-row items-center gap-8 px-10 py-10">
          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Feature Card 1 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <FaFingerprint /> {/* Biometric Identification Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">
                Biometric Identification
              </h3>
              <p className="text-gray-600">
                We develop biometric identification solutions to provide the
                highest level of security and seamless authentication processes.
                By implementing advanced facial recognition technology, we
                ensure accurate and quick user identification based on facial
                features.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <FaLock /> {/* Biometric Authentication Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">
                Biometric Authentication
              </h3>
              <p className="text-gray-600">
                Our specialized tech experts engineer biometric authentication
                systems that deliver cutting-edge security with an extensive
                range of features. Multi-factor authentication (MFA) systems
                ensure robust protection by incorporating various verification
                methods.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <FaKey /> {/* Biometric Access Control Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">
                Biometric Access Control
              </h3>
              <p className="text-gray-600">
                We seamlessly integrate biometric access control solutions that
                employ the latest technologies to reinforce security. By
                deploying biometric door lock systems, access is granted only to
                authorized personnel, assuring restricted entry.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:w-1/2">
            <img
              src="/Images/biometric1.webp" // Replace with actual image URL
              alt="Biometric Solutions"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </section>

        <div>
          {/* Hero Section */}
          <section className="text-center py-10 bg-gray-100">
            <h1 className="text-3xl font-semibold mb-4">
              Modernizing Identity Verification and Access Control with Advanced
              Biometric Solutions
            </h1>
            <p className="text-lg mb-6">
              Our biometric system development services empower businesses with
              advanced solutions. Our customized applications cater to diverse
              industries, ensuring optimal data encryption and unparalleled user
              confidence in today's digital landscape.
            </p>
            <button className="px-6 py-3 bg-black text-white font-bold rounded-full">
              Get Biometric Solutions
            </button>
          </section>

          {/* Feature Cards Section */}
          <section className="flex flex-col lg:flex-row items-center gap-8 px-10 py-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {/* Feature Card 1 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                  <FaUserLock /> {/* Biometric Identification Icon */}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Custom Biometric System Solutions
                </h3>
                <p className="text-gray-600">
                  Our custom biometric system solutions cater to your specific
                  requirements, integrating biometric functionalities into
                  existing systems.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                  <FaFingerprint /> {/* Biometric System Integrations Icon */}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Biometric System Integrations
                </h3>
                <p className="text-gray-600">
                  We integrate biometric solutions with your enterprise systems
                  to maximize security and efficiency. Ensure secure access
                  control with seamless integrations.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                  <FaUsers /> {/* Biometric Consulting Services Icon */}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Biometric Consulting Services
                </h3>
                <p className="text-gray-600">
                  Our biometric consulting services provide expert guidance to
                  optimize your biometric implementations and maximize system
                  security.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:w-1/2">
              <img
                src="/Images/Biometric.jpg" // Replace with actual image URL
                alt="Biometric Solutions"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* Industry Solutions Section */}
          <section className="bg-gray-100 py-10">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Industry Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
              {/* Industry Solution 1 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                  <FaRegBuilding /> {/* Financial Services Icon */}
                </div>
                <h3 className="text-xl font-bold mb-2">Financial Services</h3>
                <p className="text-gray-600">
                  We implement biometric banking solutions to ensure secure
                  access and protect sensitive financial data, enhancing
                  customer trust and security.
                </p>
              </div>

              {/* Industry Solution 2 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                  <FaLaptop /> {/* Healthcare Icon */}
                </div>
                <h3 className="text-xl font-bold mb-2">Healthcare</h3>
                <p className="text-gray-600">
                  We provide biometric solutions for healthcare, streamlining
                  patient verification and ensuring medical staff security with
                  biometric authentication.
                </p>
              </div>

              {/* Industry Solution 3 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                  <FaShoppingCart /> {/* Retail and E-Commerce Icon */}
                </div>
                <h3 className="text-xl font-bold mb-2">Retail & E-Commerce</h3>
                <p className="text-gray-600">
                  We engineer biometric solutions for the retail and e-commerce
                  sectors, enabling seamless transactions and protecting
                  customer data.
                </p>
              </div>

              {/* Industry Solution 4 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                  <FaHotel /> {/* Hospitality and Tourism Icon */}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Hospitality and Tourism
                </h3>
                <p className="text-gray-600">
                  We deploy biometric solutions for the hospitality industry,
                  improving customer experiences and optimizing access control
                  with biometric verification.
                </p>
              </div>

              {/* Industry Solution 5 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                  <FaIndustry /> {/* Manufacturing Icon */}
                </div>
                <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
                <p className="text-gray-600">
                  We provide biometric solutions for the manufacturing sector,
                  enhancing security and streamlining employee access with
                  biometric verification.
                </p>
              </div>

              {/* Industry Solution 6 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                  <FaCogs /> {/* IT and Technology Icon */}
                </div>
                <h3 className="text-xl font-bold mb-2">IT and Technology</h3>
                <p className="text-gray-600">
                  We deploy biometric solutions to safeguard network security,
                  ensuring secure access to sensitive data and protecting
                  critical infrastructure.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Industry Solutions Section */}
        <section className="bg-gray-100 py-10">
          <h2 className="text-2xl font-semibold text-center mb-6">
            AI-Powered Biometric System Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
            {/* Industry Solution 1 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <HiOutlineIdentification /> {/* Financial Services Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">
                AI-Powered Biometric Identification
              </h3>
              <p className="text-gray-600">
                Our dedicated AI specialists utilize facial recognition with
                deep learning technologies for precise and rapid identification.
                We employ fingerprint matching using neural networks to boost
                security. Our skilled programmers implement iris recognition
                with convolutional neural networks (CNN) to provide accurate and
                reliable identification systems.
              </p>
            </div>

            {/* Industry Solution 2 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <SiThealgorithms /> {/* Healthcare Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">
                Advanced Biometric Authentication Algorithms
              </h3>
              <p className="text-gray-600">
                Our software engineers employ advanced solutions for heightened
                security using multi-modal biometric fusion techniques. We
                integrate behavioral biometrics and AI models for user-specific
                authentication. We deploy AI-based voiceprint authentication for
                seamless and secure voice recognition.
              </p>
            </div>

            {/* Industry Solution 3 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <GrVirtualMachine /> {/* Retail and E-Commerce Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">
                Machine Learning for Biometric Accuracy
              </h3>
              <p className="text-gray-600">
                We leverage machine learning (ML) for biometric accuracy and
                deliver a solution with elevated precision. Our team of
                programming innovators enhances biometric system accuracy with
                machine learning, adapting to evolving conditions through
                continuous learning for adaptive biometrics. We actuate dynamic
                thresholding using machine learning for peak performance and
                reliable identification.
              </p>
            </div>

            {/* Industry Solution 4 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <FaBrain /> {/* Hospitality and Tourism Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">
                AI-Driven Biometric Surveillance
              </h3>
              <p className="text-gray-600">
                Our AI-driven biometric surveillance systems development provide
                top-notch security. We activate real-time facial recognition for
                surveillance, identifying individuals swiftly and accurately.
                Our AI-driven biometric solutions can detect anomalies in
                biometric data streams to advance threat detection. Employ
                AI-based object tracking with biometric analysis for blanket
                surveillance and critical data insights.
              </p>
            </div>

            {/* Industry Solution 5 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <MdOutlineSecurity /> {/* Manufacturing Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">
                Deep Neural Networks for Biometric Security
              </h3>
              <p className="text-gray-600">
                We integrate deep neural networks for biometric security to
                offer superior protection. We develop deep neural network (DNN)
                models for anti-spoofing and liveness detection to establish
                secure authentication. We mobilize robust deep learning models
                for biometric encryption to protect sensitive data. Our expert
                engineers perform deep feature extraction in biometric data for
                accurate and dependable identification.
              </p>
            </div>

            {/* Industry Solution 6 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <FaRobot /> {/* IT and Technology Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">
                Biometric Data Analysis using AI
              </h3>
              <p className="text-gray-600">
                Our biometric data analysis using AI algorithms delivers
                insightful solutions. We implement AI-enabled biometric pattern
                recognition for precise identification. Our specialized tech
                experts perform sentiment analysis in voice biometrics to
                enhance the user experience. We employ AI-driven behavior
                analysis for authentication, providing robust security and
                accurate verification.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Service Section */}
        <section className="bg-gray-100 py-10">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">
              Biometric Mobile Application Development
            </h2>
            <p className="text-lg mb-6">
              We elevate your mobile applications with our biometric mobile
              application development services that integrate advanced biometric
              features. Enhance user experience and security with biometric user
              authentication for mobile apps.
            </p>
          </div>
          <div className="flex justify-center">
            <FaMobileAlt className="text-blue-500 text-6xl" />
          </div>
        </section>
      </div>

      <div className="max-w-7xl mx-auto py-6">
        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/biometric4.webp"
              className="w-full h-48  rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Fingerprint Recognition
            </h2>
            <p className="text-black text-sm sm:text-base">
              Ensure secure and quick access with fingerprint recognition
              technology. Ideal for authentication, attendance systems, and
              access control.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/biometric3.webp"
              alt="Facial Recognition"
              className="w-full h-48  rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Facial Recognition
            </h2>
            <p className="text-black text-sm sm:text-base">
              Leverage advanced facial recognition for seamless and contactless
              identification. Enhance security and improve user experiences.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/biometric1.webp"
              alt="Iris Scanning"
              className="w-full h-48  rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Iris Scanning
            </h2>
            <p className="text-black text-sm sm:text-base">
              Experience unparalleled security with iris scanning technology.
              Suitable for high-security environments and sensitive data
              protection.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/biometric2.webp"
              alt="Voice Recognition"
              className="w-full h-48  rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Voice Recognition
            </h2>
            <p className="text-black text-sm sm:text-base">
              Enable secure and convenient authentication with voice
              recognition. Enhance user experience with advanced biometric
              solutions.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-4">
            Why Choose Our Biometric Solutions?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black">
            <li>
              <strong>Comprehensive Biometric Services:</strong> From
              fingerprint to facial recognition, we offer a wide range of
              solutions.
            </li>
            <li>
              <strong>Enhanced Security:</strong> Reduce fraud and ensure secure
              authentication with our advanced biometric technologies.
            </li>
            <li>
              <strong>Custom Solutions:</strong> Tailored biometric systems to
              meet your specific business requirements.
            </li>
            <li>
              <strong>Proven Expertise:</strong> Trusted by businesses worldwide
              for reliable and scalable biometric solutions.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 text-center">
          <Link
            to={"/contact"}
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium"
          >
            Contact Us for Biometric Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Biometric;
