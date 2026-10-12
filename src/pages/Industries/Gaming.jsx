import React from "react";
import {
  FaVrCardboard,
  FaShieldAlt,
  FaUserFriends,
  FaBug,
  FaRobot,
  FaCube,
  FaMobileAlt,
  FaGamepad,
  FaPaintBrush,
  FaFootballBall,
  FaEye,
  FaDice,
  FaUnity,
  FaUsers,
  FaImage,
  FaCode,
  FaCogs,
} from "react-icons/fa";

import { Link } from "react-router-dom";
const Games = () => {
  return (
    <div className="">
      <div
        className="bg-cover opacity-6 bg-center w-full h-screen sm:h-[600px] z-[-10]"
        style={{
          background: `url(/Images/banner.png) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundAttachment: "fixed", // Keeps the image fixed
        }}
      >
        <div className="flex items-left text-white pt-10 sm:pt-20 px-10 flex-col">
          <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
            Game Development Services
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            We specialize in providing cutting-edge game development services to
            create captivating and interactive experiences across various
            platforms. Whether it's mobile, console, or PC games, our team
            brings your ideas to life with stunning visuals, engaging gameplay,
            and immersive features. Our expertise ensures top-notch game
            development solutions for your business needs.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>

      <section className="bg-gray-50 py-12 px-6">
        {/* Section 1: Game Development Services */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              Chetu’s Game Development Services
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Our certified gaming software development experts can create your
              video game project from scratch or revamp existing solutions with
              updates and integrations to stay in line with current gaming
              industry trends.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Service Cards */}
            <div className="flex items-center space-x-4">
              <FaGamepad className="text-blue-500 text-4xl" />
              <span className="text-gray-600 font-medium">Video Games</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPaintBrush className="text-blue-500 text-4xl" />
              <span className="text-gray-600 font-medium">
                Game Concept Art
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaFootballBall className="text-blue-500 text-4xl" />
              <span className="text-gray-600 font-medium">Fantasy Sports</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMobileAlt className="text-blue-500 text-4xl" />
              <span className="text-gray-600 font-medium">
                Mobile and Tablet Games
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEye className="text-blue-500 text-4xl" />
              <span className="text-gray-600 font-medium">AR / VR</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaDice className="text-blue-500 text-4xl" />
              <span className="text-gray-600 font-medium">iGaming</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaUnity className="text-blue-500 text-4xl" />
              <span className="text-gray-600 font-medium">
                Unreal Game Engine
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaUsers className="text-blue-500 text-4xl" />
              <span className="text-gray-600 font-medium">Social Gaming</span>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <img
              src="/Images/Game.png" // Replace with actual image URL
              alt="Game Development Showcase"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Section 2: Custom PixiJS Development */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Custom PixiJS Development</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Are you looking to create impressive PixiJS examples or PixiJS
              games? At Chetu, we leverage the power of PixiJS, the HTML5
              creation engine that offers the quickest and most adaptable 2D
              WebGL renderer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* PixiJS Features */}
            <div className="flex items-start space-x-4">
              <FaImage className="text-blue-500 text-4xl" />
              <div>
                <h4 className="font-semibold text-lg">
                  Graphics & Animation Services
                </h4>
                <p className="text-gray-600">
                  Achieve unique looks with texture management, sprite sheets,
                  and animated sprite creation with custom shaders.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaCode className="text-blue-500 text-4xl" />
              <div>
                <h4 className="font-semibold text-lg">Rapid Prototyping</h4>
                <p className="text-gray-600">
                  Develop quick game prototypes showcasing interaction, levels,
                  and mechanics using PixiJS canvas rendering.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaCogs className="text-blue-500 text-4xl" />
              <div>
                <h4 className="font-semibold text-lg">Physics Integration</h4>
                <p className="text-gray-600">
                  Utilize collision detection and WebGL fluid simulation to
                  deliver advanced gameplay experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            AI-Powered Gaming Solutions
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            With gaming being one of the most lucrative industries in today’s
            world, Artificial Intelligence (AI) in games has become an
            increasingly important pillar of game development. Our experts have
            industry-specific technical expertise for cutting-edge AI game
            development. Artificial Intelligence stands as an innovative tool
            that can level up the gaming experience.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="text-center bg-white shadow rounded-lg p-6">
            <FaGamepad className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              Player Behavior Analytics
            </h3>
            <p className="text-gray-600">
              Leverage AI to analyze player behavior data, gaming patterns, and
              preferences to tailor evolving gameplay and drive retention and
              monetization strategies.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center bg-white shadow rounded-lg p-6">
            <FaVrCardboard className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              Enhancing Virtual Reality (VR) & Augmented Reality (AR) with AI
            </h3>
            <p className="text-gray-600">
              Utilize AI-enhanced technology for VR and AR, enabling object
              detection, gesture recognition, and immersive experiences.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center bg-white shadow rounded-lg p-6">
            <FaShieldAlt className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              Anti-Cheat Solutions with AI
            </h3>
            <p className="text-gray-600">
              Implement AI-powered anti-cheat solutions to detect cheating
              behaviors, safeguard players, and maintain a secure gaming
              environment.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center bg-white shadow rounded-lg p-6">
            <FaUserFriends className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              Creating Dynamic and Versatile NPCs with AI
            </h3>
            <p className="text-gray-600">
              Develop intelligent NPCs that adapt to players' actions, creating
              memorable allies or foes for immersive gameplay experiences.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="text-center bg-white shadow rounded-lg p-6">
            <FaCogs className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              AI-Driven Game Development
            </h3>
            <p className="text-gray-600">
              Incorporate AI-driven techniques like deep learning and adaptive
              gameplay to elevate combat, storytelling, and overall player
              experiences.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="text-center bg-white shadow rounded-lg p-6">
            <FaBug className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              AI-Based Game Testing and Quality Assurance
            </h3>
            <p className="text-gray-600">
              Use AI for automated testing, efficient bug detection, and
              performance enhancements to optimize the gaming experience.
            </p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-6 py-3 rounded-lg transition">
            GET AI IN GAME DEVELOPMENT
          </button>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            AR & VR Development Game Services
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Chetu provides a full cycle of{" "}
            <Link to={"/vr-ar-mr-development"} className="text-blue-500 hover:underline">
              AR & VR game solutions
            </Link>{" "}
            and applications, engineering native, web, and hybrid platforms for
            tablets and other mobile devices.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src="/Images/Gamevr.png" // Replace with actual image URL
              alt="AR & VR Development"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Features Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start">
                <FaVrCardboard className="text-blue-500 text-5xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Custom AR, VR, & MR Software
                  </h3>
                  <p className="text-gray-600">
                    Engineer custom-tailored AR, VR, & MR software solutions
                    designed with stunning high-definition visuals and audio to
                    deliver highly immersive gaming experiences.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start">
                <FaMobileAlt className="text-blue-500 text-5xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Custom AR, VR, & MR Applications
                  </h3>
                  <p className="text-gray-600">
                    Create next-generation{" "}
                    <Link to={"/android-ios-development"} className="text-blue-500 hover:underline">
                      mobile application solutions
                    </Link>{" "}
                    compatible with head-mounted & head-up displays (HMD & HDU),
                    digital eyewear, tablets, and smartphone devices.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start">
                <FaCogs className="text-blue-500 text-5xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    AR & VR IoT Integration Solutions
                  </h3>
                  <p className="text-gray-600">
                    We enable your existing AR, VR, or MR headsets & hardware
                    solutions to communicate with sensors, controllers, cameras,
                    position trackers, and other{" "}
                    <Link to={"/iot-m2m"} className="text-blue-500 hover:underline">
                      IoT-connected devices
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-6 py-3 rounded-lg transition">
            GET AR/VR GAME SOLUTIONS
          </button>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Mobile Game Development Services
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Chetu's mobile game software solutions allow you to deliver engaging
            and highly immersive games to players worldwide, built with
            cutting-edge technology and monetization solutions.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="text-center bg-white shadow rounded-lg p-6">
            <FaGamepad className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Mobile Game Design</h3>
            <p className="text-gray-600">
              Proficient in building role-playing games (RPGs), casino, racing,
              adventure, e-learning, sports, and other games designed and coded
              to play on Android and iOS devices.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center bg-white shadow rounded-lg p-6">
            <FaCube className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              Mobile Game Animation
            </h3>
            <p className="text-gray-600">
              Leverage industry-standard tools, like Blender and Maya, to model
              and animate realistic game characters, environments, and other
              details.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center bg-white shadow rounded-lg p-6">
            <FaVrCardboard className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              Mobile AR & VR Solutions
            </h3>
            <p className="text-gray-600">
              Engineer cross-platform mobile AR & VR gaming solutions using
              popular programming languages, such as C++, Java, JavaScript,
              Python, Swift, and Kotlin.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center bg-white shadow rounded-lg p-6">
            <FaRobot className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Platform</h3>
            <p className="text-gray-600">
              Develop AI-powered game elements, including NPCs with realistic
              behaviors, random maps, and realistic physics simulations.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="text-center bg-white shadow rounded-lg p-6">
            <FaUserFriends className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">NFT Game Development</h3>
            <p className="text-gray-600">
              Offers custom NFT game development solutions, including
              pre-production and high-quality game creation tailored to client
              requirements.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="text-center bg-white shadow rounded-lg p-6">
            <FaMobileAlt className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              Mobile Social Gaming Development
            </h3>
            <p className="text-gray-600">
              Create interactive mobile apps using integrated social media APIs
              to develop social games for mobile platforms.
            </p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-6 py-3 rounded-lg transition">
            HIRE MOBILE GAME DEVELOPERS
          </button>
        </div>
      </section>

      {/* Game Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 px-4 gap-12">
        {/* Game Development */}
        <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
          <img
            src="/Images/game1.webp"
            alt="Game Development"
            className="w-full h-56 object-cover rounded-xl mb-6 transform transition-transform duration-500 hover:scale-110"
          />
          <h2 className="text-3xl font-bold text-black mb-4">
            Game Development
          </h2>
          <p className="text-lg text-black mb-6">
            Our game development team is equipped with cutting-edge tools to
            deliver engaging games with top-tier visuals and performance. We
            specialize in mobile, console, and PC games, providing interactive
            experiences that immerse players across all platforms.
          </p>
          <ul className="list-disc pl-6 text-black space-y-2">
            <li className="text-lg">Custom Game Engines</li>
            <li className="text-lg">3D/2D Game Development</li>
            <li className="text-lg">Cross-Platform Games</li>
            <li className="text-lg">Real-Time Multiplayer Games</li>
          </ul>
        </div>

        {/* Game Testing */}
        <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
          <img
            src="/Images/gamee2.webp"
            alt="Game Testing"
            className="w-full h-56 object-cover rounded-xl mb-6 transform transition-transform duration-500 hover:scale-110"
          />
          <h2 className="text-3xl font-semibold text-black mb-4">
            Game Testing
          </h2>
          <p className="text-lg text-black mb-6">
            Our QA team ensures your game performs flawlessly across all
            devices. From functionality to load performance testing, we ensure
            the final product meets the highest standards before it reaches your
            players.
          </p>
          <ul className="list-disc pl-6 text-black space-y-2">
            <li className="text-lg">Game Functionality Testing</li>
            <li className="text-lg">Performance Testing</li>
            <li className="text-lg">Compatibility Testing</li>
            <li className="text-lg">Beta Testing & User Feedback</li>
          </ul>
        </div>

        {/* Game Integration */}
        <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
          <img
            src="/Images/gamee3.webp"
            alt="Game Integration"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-3xl font-semibold text-black mb-4">
            Game Integration
          </h2>
          <p className="text-lg text-black mb-6">
            Our team provides seamless integration of your game with various
            platforms, payment gateways, and third-party systems. We ensure
            smooth interaction across APIs, backend services, and social media
            features to enhance user engagement.
          </p>
          <ul className="list-disc pl-6 text-black space-y-2">
            <li className="text-lg">Payment Gateway Integration</li>
            <li className="text-lg">Social Media Integration</li>
            <li className="text-lg">API and Backend Integration</li>
            <li className="text-lg">In-App Purchases</li>
          </ul>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 px-6 sm:px-8 lg:px-16">
        <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
          <h2 className="text-3xl font-semibold text-black mb-6">
            Additional Game Services
          </h2>
          <p className="text-lg text-black mb-6">
            Our comprehensive game development services also include:
          </p>
          <ul className="list-disc pl-5 text-black space-y-3">
            <li className="text-lg hover:text-blue-500 transition-colors">
              Augmented Reality (AR) & Virtual Reality (VR) Games
            </li>
            <li className="text-lg hover:text-blue-500 transition-colors">
              Game Monetization Solutions
            </li>
            <li className="text-lg hover:text-blue-500 transition-colors">
              Game Localization and Translation
            </li>
            <li className="text-lg hover:text-blue-500 transition-colors">
              Game Marketing & Launch Strategies
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className=" text-center  text-black py-16 px-6 sm:px-8 lg:px-16 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
        <h3 className="text-3xl font-semibold mb-4">
          Start Your Game Development Journey Today
        </h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Our experienced game development team is ready to bring your game
          ideas to life. Partner with us to create games that captivate and
          engage players worldwide. Let’s turn your vision into reality.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-black text-white px-8 py-4 rounded-lg text-xl font-semibold  transition-colors transform hover:scale-105 duration-300"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default Games;
