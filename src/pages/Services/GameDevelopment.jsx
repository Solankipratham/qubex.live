import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const AppLaunchProcess = () => {
  const steps = [
    { number: "01", title: "Preparation" },
    { number: "02", title: "Build & Validation" },
    { number: "03", title: "Submission" },
    { number: "04", title: "Review & Approval" },
    { number: "05", title: "Launch & Maintenance" },
  ];

  return (
    <div className="text-center py-10">
      {/* App Store Icons */}
      <div className="flex justify-center gap-8 mb-6">
        <FaApple className="text-blue-500 text-5xl" />
        <FaGooglePlay className="text-green-500 text-5xl" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-bold mb-4">
        Launch your app on App Store and Play Store
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
        We maximize visibility and reach during our game launches, delivering a
        successful go-to-market strategy that drives downloads and engagement.
        With each title's launch, we deliver tangible results for our clients,
        ensuring an impactful market entry.
      </p>

      {/* Steps */}
      <div className="flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-0  pt-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-blue-500 text-xl font-bold">{step.number}</div>
            <div className="text-gray-600 text-sm mt-2">{step.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

import {
  FaPen,
  FaCogs,
  FaRocket,
  FaMobileAlt,
  FaVrCardboard,
  FaCube,
} from "react-icons/fa"; // Updated import for VR icon
import img2 from "../../assets/Images/Servicesbg.png";
import { FaGamepad } from "react-icons/fa";
import { Link } from "react-router-dom";
const GameDevelopment = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Image Section with Text Overlay */}
        <div className="relative">
          <img
            src="/Images/gamingbanner.jpg" // Replace with your uploaded image URL
            alt="Game Development"
            className="w-full h-screen object-cover"
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col pt-10 sm:pt-20 bg-black bg-opacity-50 px-6 py-12 sm:py-24 md:py-32">
            <h1 className="text-4xl sm:text-5xl md:text-6xl mt-20 font-bold mb-4 text-white">
              Game Development
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300  w-[90%] sm:w-[80%]   mb-6 ">
              Crafting captivating gaming experiences with passion, precision,
              and artistry. Our game development solutions combine cutting-edge
              technology with creative storytelling to create immersive worlds
              that captivate players.
            </p>
            <Link to={"/contact"} className="bg-black max-w-fit text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
              Start Your Project →
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:px-10 px-5 items-start  justify-around py-10 sm:py-20">
        {/* Text Section */}
        <div className="text-start sm:w-1/2 ">
          <p className="mb-6 text-2xl sm:text-2xl text-gray-600">
            Dreaming of the next big game hit?
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Transforming Concepts into Gaming Reality
          </h1>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            GWe specialize in converting gaming ideas into fully developed,
            multi-platform experiences. Leveraging our technical expertise, we
            construct compelling narratives, integrate robust gameplay
            mechanics, and create striking visuals. Our proficiency extends
            across iOS, Android, Web, Desktop, and immersive VR/AR environments.
            Our goal is to ensure your game concept effectively engages its
            intended audience.
          </p>
          <Link
            to="/contact"
            className="bg-black text-white px-6 py-3  rounded-full hover:bg-gray-800 transition duration-300"
          >
            Get a quote
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/4 flex justify-center  relative">
          <div className="flex sm:py-0 py-10">
            {/* iPhone Mockup */}
            <div className="w-full h-auto">
              <img
                src="/Images/game2.jpg" // Replace with your iPhone mockup image
                alt="game"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Platforms we support
          </h2>
          <p className="mt-4 text-gray-600">
            We specialize in game development, providing a seamless experience
            across mobile platforms, web browsers, and virtual reality. With our
            talented team of developers and designers, we bring your imaginative
            ideas to life, creating captivating gaming experiences for diverse
            audiences.
          </p>
          <Link
            to={"/contact"}
            className="mt-6 inline-block text-blue-600 px-6 py-2 rounded-lgtransition"
          >
            Let's get in touch →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center">
          {/* Web Games Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <FaGamepad className="text-blue-500 text-4xl mx-auto" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Web Games
            </h3>
            <p className="text-gray-600 mt-2">Web3 and NFTs</p>
          </div>

          {/* Mobile Games Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <FaMobileAlt className="text-green-500 text-4xl mx-auto" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Mobile Games
            </h3>
            <p className="text-gray-600 mt-2">iOS and Android</p>
          </div>

          {/* VR Games Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <FaVrCardboard className="text-purple-500 text-4xl mx-auto" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              VR Games
            </h3>
            <p className="text-gray-600 mt-2">Oculus Quest, Vision Pro</p>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-blue-500 w-32 h-32 rounded-full mx-auto relative flex items-center justify-center">
            <span className="text-white text-xl font-bold">👾</span>
            <div className="absolute w-36 h-36 bg-blue-300 opacity-50 rounded-full animate-ping"></div>
          </div>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row sm:px-10 px-5 items-start  justify-around py-10 sm:py-20">
        {/* Text Section */}
        <div className="text-start sm:w-1/2 ">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Cross-platform compatibility
          </h1>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            We adopt a meticulous approach to develop games that are universally
            compatible. Using advanced cross-platform technology, our games run
            flawlessly on Android and iOS devices alike. We adhere to a
            stringent process that ensures optimal performance and user
            experience, regardless of the platform chosen. This guarantees users
            the flexibility to engage with the game on their device of choice,
            thus enhancing user satisfaction and reach.
          </p>
          <div className="flex items flex-col sm:flex-row gap-x-4 ">
            <Link className="">
              <img
                src="/Images/app-store.avif" // Replace with your iPhone mockup image
                alt="iPhone Mockup"
                className="rounded-lg shadow-lg"
              />
            </Link>
            <Link className="">
              <img
                src="/Images/play-store.avif" // Replace with your iPhone mockup image
                alt="iPhone Mockup"
                className="rounded-lg shadow-lg"
              />
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/4 flex justify-center  relative">
          <div className="flex sm:py-0 py-10">
            {/* iPhone Mockup */}
            <div className="w-full h-auto">
              <img
                src="/Images/phonegaming.jpg" // Replace with your iPhone mockup image
                alt="iPhone Mockup"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div>
        <div className="flex items-start p-10 flex-col">
          <h1 className="text-blue-700 font-bold text-4xl sm:text-5xl md:text-6xl w-full sm:w-2/3">
            Our Game Development Process
          </h1>
          <p className="text-black text-xl sm:text-2xl pt-5 w-[90%]">
            From concept to release, we bring your vision to life through a
            systematic approach that focuses on creativity, technical expertise,
            and player engagement. Our team works collaboratively to ensure
            every game we create is a masterpiece.
          </p>
        </div>
      </div>

      {/* Blockchain Features Section */}
      <section className="py-16 px-6 mt-18 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Step 1 - Concept Design */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaPen className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Concept Design
            </h3>
            <p className="text-gray-400">
              We begin with the core concept, focusing on game mechanics,
              storylines, and character development, ensuring a solid foundation
              for an immersive experience.
            </p>
          </div>

          {/* Step 2 - Development */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaCogs className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Development
            </h3>
            <p className="text-gray-400">
              Our expert developers work with the latest game engines and
              technologies to bring the concept to life, ensuring smooth
              gameplay and cutting-edge visuals.
            </p>
          </div>

          {/* Step 3 - Testing & Launch */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaRocket className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Testing & Launch
            </h3>
            <p className="text-gray-400">
              Rigorous testing ensures that the game performs flawlessly. We
              handle every aspect of the launch, from deployment to updates,
              ensuring a seamless player experience.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col sm:px-10 px-5 items-center gap-y-10  justify-around py-10 sm:py-20">
        {/* Text Section */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Experience the VR & AR gaming
          </h1>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            Step into the future of gaming with our captivating Virtual Reality
            (VR) and Augmented Reality (AR) games. Explore unimaginable
            landscapes, face thrilling challenges, and immerse yourself in
            extraordinary worlds that feel real. Each game we craft is a blend
            of stunning graphics, intuitive controls, and engaging narratives,
            all designed to transport you beyond the screen and into the heart
            of the action. With our VR and AR games, you're not just playing -
            you're part of the story.
          </p>
          <Link to="/contact" className="text-blue-500 font-medium">
            Let’s get in touch →
          </Link>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
          {/* Tall Image */}
          <div className="row-span-2">
            <img
              src="/Images/Game1.jpg" // Replace with your iPhone mockup image
              alt="game image"
              className="w-full h-full rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Two Wide Images */}
          <div className="">
            <img
              src="/Images/ar.jpg" // Replace with your iPhone mockup image
              alt="Wide Image 1"
              className="w-full h-full rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="">
            <img
              src="/Images/vrgames.jpg" // Replace with your iPhone mockup image
              alt="Wide Image 2"
              className="w-full h-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      <AppLaunchProcess />
    </div>
  );
};

export default GameDevelopment;
