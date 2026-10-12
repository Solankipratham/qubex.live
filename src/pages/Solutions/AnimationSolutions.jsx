import React from "react";
import { FaVideo, FaFilm, FaRocket, FaDesktop } from "react-icons/fa"; // Importing icons
import {
  FaBullhorn,
  FaRegPlayCircle,
  FaStar,
  FaMobileAlt,
  FaVial,
  FaCog,
} from "react-icons/fa"; // Import icons

import { Link } from "react-router-dom";

import img2 from "/Images/PlatformDevloper.png";
import AnimationSection from "../../components/AnimationSection";
const AnimationSolutions = () => {
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
        <div className="flex items-left pt-10 sm:pt-20 px-10 flex-col">
          <h1 className="text-white font-bold text-3xl sm:text-4xl mt-10 sm:mt-20 w-full sm:w-2/3">
            Animation Solutions for Visual Excellence
          </h1>
          <p className="text-white text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Bring your ideas to life with our cutting-edge animation solutions.
            From 2D and 3D animations to motion graphics and visual effects, we
            create immersive experiences that captivate audiences and deliver
            powerful messages.
          </p>
          <Link
            to={"/contact"}
            className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto"
          >
            Start Your Project →
          </Link>
        </div>
      </div>

      <div className="font-sans">
        {/* Header */}
        <div>
          <div>
            {/* Hero Section */}
            <section className="text-center py-10 bg-gray-100">
              <h1 className="text-3xl font-semibold mb-4">
                Custom Graphic Design Solutions
              </h1>
              <p className="text-lg mb-6">
                Chetu offers Custom Graphic Design Solutions to create custom
                logos, personalized email marketing campaigns, digital
                brochures, social media graphics, videos, and other
                one-of-a-kind digital marketing materials.
              </p>
            </section>

            {/* Features and Image Section */}
            <section className="flex flex-col lg:flex-row items-center gap-8 px-10 py-10">
              {/* Feature Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {/* Feature Card 1 */}
                <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                    <FaBullhorn /> {/* Product Promotions Icon */}
                  </div>
                  <h3 className="text-xl font-bold mb-2">Product Promotions</h3>
                  <p className="text-gray-600">
                    We design product promotion videos to achieve shorter
                    conversion timelines, highlighting functionalities,
                    integrations, and critical features for enhanced branding.
                  </p>
                </div>

                {/* Feature Card 2 */}
                <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                    <FaRegPlayCircle /> {/* Animated Web Demos Icon */}
                  </div>
                  <h3 className="text-xl font-bold mb-2">Animated Web Demos</h3>
                  <p className="text-gray-600">
                    We design animated web demos for businesses to provide the
                    perfect medium for showcasing step-by-step processes on
                    multiple digital channels.
                  </p>
                </div>

                {/* Feature Card 3 */}
                <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                    <FaVideo /> {/* 3D & Hybrid Videos Icon */}
                  </div>
                  <h3 className="text-xl font-bold mb-2">3D & Hybrid Videos</h3>
                  <p className="text-gray-600">
                    We develop professional-grade, high-definition 3D and hybrid
                    videos that incorporate live-action video and
                    animation/realism components.
                  </p>
                </div>

                {/* Feature Card 4 */}
                <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                    <FaStar /> {/* Gamification Solutions Icon */}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Gamification Solutions
                  </h3>
                  <p className="text-gray-600">
                    We apply various methods to gamify an existing application
                    or website to better attract, reward, motivate, and connect
                    with audiences.
                  </p>
                </div>

                {/* Feature Card 5 */}
                <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                    <FaMobileAlt />{" "}
                    {/* Web & Mobile Application Solutions Icon */}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Web & Mobile Application Solutions
                  </h3>
                  <p className="text-gray-600">
                    Our expert team develops high-quality, responsive, and
                    reliable enterprise applications to optimize your business
                    solutions.
                  </p>
                </div>

                {/* Feature Card 6 */}
                <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                    <FaVial /> {/* VR & AR Software Solutions Icon */}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    VR & AR Software Solutions
                  </h3>
                  <p className="text-gray-600">
                    We create immersive Augmented Reality (AR) and Virtual
                    Reality (VR) solutions to bring your vision to life through
                    stunning interactive designs.
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex justify-center lg:w-1/2">
                <img
                  src="/Images/GraphicDesign.jpg" // Replace with actual image URL
                  alt="Graphic Design Solutions"
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
              </div>
            </section>
          </div>

          {/* Hero Section */}
          <section className="text-center py-10 bg-gray-100">
            <h1 className="text-3xl font-semibold mb-4">
              Custom Web Design & Animation Solutions
            </h1>
            <p className="text-lg mb-6">
              We develop, integrate, and customize attention-grabbing 2D and 3D
              animations with CRO in mind, capturing real-time interactions, and
              providing live data analytics to improve user experience and
              increase ROI.
            </p>
            <Link
              to={"/contact"}
              className="px-6 py-3 bg-black text-white font-bold rounded-full"
            >
              Get Animation Solutions
            </Link>
          </section>

          {/* Features and Image Section */}
          <section className="flex flex-col lg:flex-row items-center gap-8 px-10 py-10">
            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-8 w-full">
              {/* Feature Card 1 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                  <FaVideo /> {/* Web Animation Icon */}
                </div>
                <h3 className="text-xl font-bold mb-2">Web Animation</h3>
                <p className="text-gray-600">
                  Our skilled designers create vibrant 2D, 3D, and motion
                  graphics to enhance interactivity and engagement.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                  <FaFilm /> {/* Motion Graphics Icon */}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Motion Graphics Design
                </h3>
                <p className="text-gray-600">
                  Showcasing products creatively using motion graphics, UX/UI
                  animations, and landing pages.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                  <FaRocket /> {/* CRO Design Icon */}
                </div>
                <h3 className="text-xl font-bold mb-2">CRO Design</h3>
                <p className="text-gray-600">
                  Optimizing web design with conversion rate in mind to increase
                  clicks and capture data.
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                  <FaDesktop /> {/* UX/UI Design Icon */}
                </div>
                <h3 className="text-xl font-bold mb-2">UX/UI Design</h3>
                <p className="text-gray-600">
                  Implementing innovative design solutions like buttons,
                  chatbots, and interactive dashboards.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:w-1/2">
              <img
                src="/Images/Animation.jpg" // Replace with actual image URL
                alt="Augmented Reality or Custom Web Design"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </section>
        </div>

        <div className="max-w-7xl mx-auto py-6">
          {/* Features Section */}
          <AnimationSection />

          {/* Why Choose Us Section */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
              Why Choose Our Animation Solutions?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>
                **Creative Excellence:** Our team of skilled animators delivers
                high-quality, captivating animations that elevate your brand.
              </li>
              <li>
                **Custom Solutions:** Tailored animation services designed to
                meet your specific business and creative needs.
              </li>
              <li>
                **Advanced Technology:** Leverage the latest tools and
                techniques for stunning visuals and seamless animations.
              </li>
              <li>
                **Proven Expertise:** Trusted by businesses across industries
                for exceptional animation solutions.
              </li>
            </ul>
          </div>

          {/* Call-to-Action */}
          <div className="mt-10 text-center">
            <Link
              to={"/contact"}
              className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium"
            >
              Contact Us for Animation Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationSolutions;
