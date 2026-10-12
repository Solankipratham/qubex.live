import React from "react";
import { FaGamepad, FaGlobe, FaChalkboardTeacher } from "react-icons/fa"; // Import icons
import { FaShoppingCart, FaBullhorn, FaHeartbeat, FaCube, FaMobileAlt, FaEye } from "react-icons/fa"; // Import icons

import img2 from "/src/assets/Images/PlatformDevloper.png";
import { Link } from "react-router-dom";
const ArVr = () => {
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
            AR/VR Solutions for Immersive Experiences
          </h1>
          <p className="text-white text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Transform the way your business interacts with customers and
            employees using cutting-edge Augmented Reality (AR) and Virtual
            Reality (VR) solutions. We deliver immersive experiences that
            enhance engagement, training, and decision-making.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>
      <div>
      {/* Hero Section */}
      <section className="text-center py-10 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-4">
          Hire Experienced XR / Virtual Reality (VR) Developers
        </h1>
        <p className="text-lg mb-6">
          Our VR software engineers are highly experienced in VR software development, engineering new VR software
          solutions from scratch and modifying existing solutions to create a custom-tailored approach.
        </p>
      </section>

      {/* Features and Image Section */}
      <section className="flex flex-col lg:flex-row items-center gap-8 px-10 py-10">
        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Feature Card 1 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaGamepad /> {/* VR Games Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">VR Games</h3>
            <p className="text-gray-600">
              With Chetu’s high-definition rendering pipeline, rapid iteration capabilities, authoring tools, adaptive
              systems, and industry-leading XR development experience, we engineer a highly immersive VR game
              development experience.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaGlobe /> {/* 3D Tourism Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">3D Tourism</h3>
            <p className="text-gray-600">
              We develop VR-enabled 360-degree tours designed to showcase locations in full view and virtual maps
              connected to interactive 3D maps, along with CMS integrations to enable fast and convenient content updates.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaChalkboardTeacher /> {/* Corporate Training Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Corporate Training</h3>
            <p className="text-gray-600">
              We customize simulation-based employee training software to help companies achieve organizational and
              instructional objectives for overcoming workplace challenges in a safe, immersive learning environment.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src="/Images/VrandAr.jpg" // Replace with actual image URL
            alt="VR / AR Solutions"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>

    <div>
      {/* Hero Section */}
      <section className="text-center py-10 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-4">
          Hire Experienced XR / Augmented Reality (AR) Developers
        </h1>
        <p className="text-lg mb-6">
          Our augmented reality software experts engineer new AR software solutions from the ground up or revamp your current solution with custom integrations to generate the ultimate immersive & cinematic experience.
        </p>
      </section>

      {/* Features and Image Section */}
      <section className="flex flex-col lg:flex-row items-center gap-8 px-10 py-10">
        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Feature Card 1 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaCube /> {/* Mixed Reality Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Mixed Reality (MR) Software Development</h3>
            <p className="text-gray-600">
              We provide full-cycle MR software solutions involving 3D modeling, rendering, texturing, content development, and system integration to build spatially aware, cloud-based, and cross-platform MR applications.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaShoppingCart /> {/* E-Commerce Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">E-Commerce</h3>
            <p className="text-gray-600">
              We develop AR software solutions for the e-commerce industry, enabling shoppers to experience products in 3D within their real environment to make decisions confidently.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaBullhorn /> {/* Marketing & Advertising Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Marketing & Advertising</h3>
            <p className="text-gray-600">
              We develop highly interactive and immersive XR experiences that add excitement to marketing campaigns, product launch advertisements, corporate events, social media campaigns, and more.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaHeartbeat /> {/* Industrial & Medical Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Industrial & Medical</h3>
            <p className="text-gray-600">
              We engineer AR software solutions designed to boost efficiency and minimize errors for medical professionals and industrial technicians during complex processes and high-pressure procedures.
            </p>
          </div>

          {/* Feature Card 5 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaCube /> {/* 3D Data Visualization Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">3D Data Visualization Platforms</h3>
            <p className="text-gray-600">
              We design 3D data visualization platforms to provide a clearer understanding of large data sets at a glance, allowing users to uncover distinct data trends and patterns.
            </p>
          </div>

          {/* Feature Card 6 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaMobileAlt /> {/* Internet of Things (IoT) Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Internet of Things (IoT) Integration</h3>
            <p className="text-gray-600">
              We enable your existing virtual, augmented, and mixed reality headsets & hardware solutions to communicate with sensors, controllers, cameras, and other IoT connected devices through seamless integration.
            </p>
          </div>

          {/* Feature Card 7 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaEye /> {/* Computer Vision Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Computer Vision Software</h3>
            <p className="text-gray-600">
              We integrate computer vision software with image analysis, facial & emotion recognition, biometrics, intelligent agents and medical image analysis for optimized workflow automation, bolstered security, and data analysis acceleration.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src="/Images/ar.jpg" // Replace with actual image URL
            alt="Augmented Reality Solutions"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>


      <div className="max-w-7xl mx-auto  py-6">
        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/arvr1.webp"
              alt="Augmented Reality (AR)"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Augmented Reality (AR)
            </h2>
            <p className="text-black text-sm sm:text-base">
              Enhance real-world environments with digital overlays. From
              product visualization to interactive AR apps, we bring innovative
              AR solutions to life.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/arvr2.webp"
              alt="Virtual Reality (VR)"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Virtual Reality (VR)
            </h2>
            <p className="text-black text-sm sm:text-base">
              Create fully immersive virtual environments for training, gaming,
              and simulation. Engage users with high-quality VR experiences
              tailored to your needs.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/arvr3.webp"
              alt="Mixed Reality (MR)"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Mixed Reality (MR)
            </h2>
            <p className="text-black text-sm sm:text-base">
              Combine the real and virtual worlds with mixed reality solutions.
              Enable users to interact with digital objects in physical spaces
              seamlessly.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
            <img
              src="/Images/arvr4.webp"
              alt="AR/VR App Development"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              AR/VR App Development
            </h2>
            <p className="text-black text-sm sm:text-base">
              Develop custom AR/VR applications for mobile, web, and wearable
              devices. Enhance user engagement with tailored interactive
              solutions.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-4">
            Why Choose Our AR/VR Solutions?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black">
            <li>
              <strong>Innovative Designs:</strong> Leverage state-of-the-art
              AR/VR technology to deliver unmatched immersive experiences.
            </li>
            <li>
              <strong>Custom Solutions:</strong> Tailored AR/VR applications to
              meet your specific industry needs.
            </li>
            <li>
              <strong>Cross-Platform Development:</strong> Create solutions
              compatible with mobile, desktop, and wearable devices.
            </li>
            <li>
              <strong>Proven Expertise:</strong> Trusted by businesses across
              sectors for delivering impactful AR/VR solutions.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium"
          >
            Contact Us for AR/VR Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArVr;
