import React from "react";
import { FaMobileAlt, FaGamepad, FaClipboardList } from "react-icons/fa";

import { Link } from "react-router-dom";
const CasinoGames = () => {
  return (
    <div className="">
      <div
        className="bg-cover opacity-6 bg-center w-full h-screen sm:h-[600px] z-[-10]"
        style={{
          background: `url(/Images/agritech.png) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundAttachment: "fixed", // Keeps the image fixed
        }}
      >
        <div className="flex items-left text-white pt-10 sm:pt-20 px-10 flex-col">
          <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
          Casino Games Development
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Transform your vision into reality with our advanced casino game
            development services, combining cutting-edge technology, captivating
            designs, and immersive experiences.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>
      {/* Hero Section */}


      <div className="px-6 py-16 bg-gray-50">
        <div className="container mx-auto">
          {/* Mobile Game Development Services Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">
                Mobile Game Development Services
              </h2>
              <p className="text-lg text-gray-600">
                Qubex’s mobile game software solutions allow you to deliver
                engaging and highly immersive games to players worldwide, built
                with cutting-edge technology & monetization solutions.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaMobileAlt className="text-indigo-500 text-4xl mr-4" />
                  <div>
                    <h3 className="font-medium text-xl">Mobile Game Design</h3>
                    <p className="text-gray-600">
                      Proficient in building role-playing games (RPGs), casino,
                      racing, adventure, e-learning, sports, and other games
                      designed and coded to play on Android and iOS devices.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaGamepad className="text-indigo-500 text-5xl mr-4" />
                  <div>
                    <h3 className="font-medium text-xl">
                      Mobile Game Animation
                    </h3>
                    <p className="text-gray-600">
                      Our in-house team of game animators leverage
                      industry-standard tools, like Blender and Maya, to model
                      and animate realistic game characters, environments, and
                      other details.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaClipboardList className="text-indigo-500 text-4xl mr-4" />
                  <div>
                    <h3 className="font-medium text-xl">
                      Mobile AR & VR Solutions
                    </h3>
                    <p className="text-gray-600">
                      Engineer cross-platform mobile AR & VR gaming solutions
                      utilizing popular programming languages, including C++,
                      Java, JavaScript, Python, Swift, Kotlin, and many more.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to={"game-development"}
                className="inline-block text-indigo-600 font-semibold mt-6"
              >
                Get Mobile Gaming Software Solutions
              </Link>
            </div>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/Images/MobileGame.png"
                alt="Mobile Game"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Custom Casino Game Software Solutions */}
          <div className="py-16 px-6 sm:px-8 lg:px-16">
            <h2 className="text-3xl font-semibold text-black text-center mb-10">
              Custom Casino Game Software Solutions
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Online Casino Games */}
              <div className="bg-[#f5f7fa]] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Online Casino Games
                </h3>
                <p className="text-black mb-4">
                  Develop a wide variety of casino games, including slots,
                  poker, bingo, blackjack, roulette, and more, tailored to your
                  brand with advanced security and compliance.
                </p>
                <ul className="list-disc pl-5 text-black">
                  <li>Slots & Poker</li>
                  <li>Bingo & Baccarat</li>
                  <li>Roulette & Blackjack</li>
                </ul>
              </div>

              {/* AI-Powered Game Development */}
              <div className="bg-[#f5f7fa]] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
                <h3 className="text-2xl font-semibold text-black mb-4">
                  AI-Powered Game Development
                </h3>
                <p className="text-black mb-4">
                  Leverage AI to enhance player engagement with personalization,
                  fraud detection, and optimized gameplay experiences.
                </p>
                <ul className="list-disc pl-5 text-black">
                  <li>AI-driven fraud detection</li>
                  <li>Personalized user experiences</li>
                  <li>Optimized gameplay mechanics</li>
                </ul>
              </div>

              {/* Sweepstakes Solutions */}
              <div className="bg-[#f5f7fa]] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Sweepstakes Solutions
                </h3>
                <p className="text-black mb-4">
                  Create captivating sweepstakes platforms with unique game
                  skins, animations, and multi-platform compatibility.
                </p>
                <ul className=" text-black">
                  <li>Custom game skins</li>
                  <li>Multi-platform compatibility</li>
                  <li>Intuitive UX/UI designs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fantasy Sports Software Solutions Section */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">
                Fantasy Sports Software Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Qubex provides players with personalized gaming and fantasy
                league drafting experiences via our custom fantasy sports
                software solutions.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaMobileAlt className="text-indigo-500 text-4xl mr-4" />
                  <div>
                    <h3 className="font-medium text-xl">
                      Fantasy Sports Software Development
                    </h3>
                    <p className="text-gray-600">
                      Develop fantasy sports software for games, platforms, and
                      websites, covering all sports and engineering RESTful APIs
                      to retrieve sports, league, and player information.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaGamepad className="text-indigo-500 text-5xl mr-4" />
                  <div>
                    <h3 className="font-medium text-xl">
                      Fantasy Sports App Development
                    </h3>
                    <p className="text-gray-600">
                      Engineer custom fantasy sports applications with
                      integrated payment portals to collect dues and entry fees
                      and generate informative reports and create/delete games.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaClipboardList className="text-indigo-500 text-4xl mr-4" />
                  <div>
                    <h3 className="font-medium text-xl">
                      Fantasy Sports League & Draft Solutions
                    </h3>
                    <p className="text-gray-600">
                      Create software solutions for H2H, total points, salary
                      cap, auction, dynasty, keeper style, two quarterback, and
                      other league types with integrated STATS & SportDirect
                      live feeds.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to={"/sports"}
                className="inline-block text-indigo-600 font-semibold mt-6"
              >
                Get Fantasy Sports Software Solutions
              </Link>
            </div>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/Images/FantasySports.png"
                alt="Fantasy Sports"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 px-6 sm:px-8 lg:px-16 ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-black text-center mb-10">
            Additional Casino Game Services
          </h2>
          <p className="text-lg text-black  mb-6">
            Enhance your casino platforms with live gaming, mobile applications,
            and crypto gambling solutions tailored to meet the demands of a
            diverse gaming audience.
          </p>
          <ul className=" text-black  space-y-3">
            <li>Mobile Casino Game Development</li>
            <li>Live Casino Integration</li>
            <li>Crypto Casino Game Solutions</li>
            <li>Game Marketing and Promotion</li>
          </ul>
        </div>
      </div>

      {/* Compliance and Expertise */}
      <div className="py-16 px-6 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-semibold text-black text-center mb-10">
          Compliance & Expertise
        </h2>
        <p className="text-lg text-black max-w-4xl mx-auto text-center">
          We ensure all our casino games meet industry regulations and are
          equipped with robust security features, providing a safe and seamless
          experience for players.
        </p>
        <ul className=" text-black  mt-6 space-y-3 max-w-4xl mx-auto">
          <li>Adherence to GLI-11 through GLI-31 standards</li>
          <li>Secure payment integration</li>
          <li>Fraud management systems</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className=" text-center text-black py-16 px-6 sm:px-8 lg:px-16 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
        <h3 className="text-3xl font-semibold mb-4">
          Start Your Casino Game Project Today
        </h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Partner with us for professional casino game development services. We
          bring innovation, creativity, and technical expertise to every
          project, ensuring your casino games stand out and engage players
          across the globe.
        </p>
        <Link
          to={"/contact"}
          className="inline-block bg-black text-white px-8 py-2 rounded-lg text-xl font-semibold transition-colors transform hover:scale-105 duration-300"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default CasinoGames;
