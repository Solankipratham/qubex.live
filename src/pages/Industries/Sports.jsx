import React from "react";

import { Link } from "react-router-dom";
const Sports = () => {
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
            Indoor Sports & Recreation
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            At our company, we believe in maintaining a healthy balance between
            work and relaxation. Our indoor sports facilities are designed to
            provide our employees with a fun and stress-free environment where
            they can unwind, recharge, and boost their productivity. After all,
            a happy and healthy team is a successful team!
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Hire Sports Software Developers Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Hire Experienced Sports Software Developers
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto mt-4">
              Our team specializes in developing custom sports management
              software solutions for fitness clubs, athletic programs, and
              sports medicine practices. We have on-demand developers to help
              you navigate your sports management technology challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img
                src="/Images/tabletennis.jpg"
                alt="Sports Software"
                className="rounded-lg shadow-md mx-auto"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { title: "Fitness Club Management", icon: "🏋️" },
                { title: "Golf", icon: "⛳" },
                { title: "Sports Analytics & Athlete Performance", icon: "📊" },
                { title: "Training", icon: "🤸" },
                { title: "Kinesiology", icon: "🏃" },
                { title: "Sports Health", icon: "🩺" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-3xl text-blue-500">{item.icon}</div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="text-center mb-12">
            <button className="bg-black text-white py-3 px-8 rounded-full font-semibold transition">
              Hire Sports Software Developers
            </button>
          </div>

          {/* AI Solutions for Sports Management Section */}
          <div className="text-center mb-12 px-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Artificial Intelligence Solutions for Sports Management
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto mt-4">
              We leverage cutting-edge AI analysis to modernize sports
              management by designing intuitive wearables for customized
              training, personalized nutrition, and performance monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Driven Health Athlete Metrics",
                description:
                  "Custom AI solutions to measure health metrics in real-time using parameters like agility, speed, and endurance.",
                icon: "📈",
              },
              {
                title: "Player Biometrics System",
                description:
                  "Monitor player heart rate, fatigue, and oxygen rates in real-time to provide data-driven insights into athletic performance.",
                icon: "💓",
              },
              {
                title: "AI Voice Recognition Software",
                description:
                  "Voice recognition software to aid athletes with visual or mobility impairments, using Natural Language Processing.",
                icon: "🎙️",
              },
              {
                title: "Game Strategy Optimization",
                description:
                  "Elevate your digital playbook with AI enhancements and tools for data-driven game adjustments.",
                icon: "🎮",
              },
              {
                title: "AI-Driven Virtual Reality Sports Training",
                description:
                  "VR training solutions with AI to simulate real-life scenarios for athletic improvement and strategy testing.",
                icon: "🕶️",
              },
              {
                title: "Intelligent Video Assistant Referee",
                description:
                  "Enhance officiating with intelligent video assistants optimized for multi-view image and audio capture.",
                icon: "🎥",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl text-blue-500">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-12">
            <button className="bg-black text-white py-3 px-8 rounded-full font-semibold transition">
              Optimize Sports Software with AI
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4">
        <div className="container py-5 mx-auto px-4">
          {/* Sports Analytics Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Sports Analytics & Athlete Performance Solutions
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto mt-4">
              Our sports software developers build a suite of sports analytics
              tools designed for ultimate performance intelligence with
              tailor-made data capture modules for training, injury monitoring,
              and tactical game analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img
                src="/Images/Fitness.webp"
                alt="Smart Watches"
                className="rounded-lg shadow-md mx-auto"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Athlete Performance Tracking",
                  description:
                    "We develop solutions to monitor athlete performance with wearable devices, RFID, and GPS technology.",
                  icon: "📡",
                },
                {
                  title: "Sports Performance Analysis Software",
                  description:
                    "Engineer tools for sports performance analysis through video tracking, biometrics, and motion capture.",
                  icon: "📊",
                },
                {
                  title: "Sports Data Management",
                  description:
                    "Collect, store, and analyze sports data with EDI capabilities and big data analytics for improved efficiency.",
                  icon: "💾",
                },
                {
                  title: "Sports Performance Integrations",
                  description:
                    "Integrate analytics platforms with apps for video recording, data exporting, and live feedback.",
                  icon: "🔗",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-3xl text-blue-500">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="text-center mb-16">
            <button className="bg-black text-white py-3 px-8 rounded-full font-semibold transition">
              Develop Sports Analytics Software
            </button>
          </div>

          {/* Gym Management Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Fitness Club and Gym Management Web Platform
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto mt-4">
              We engineer custom fitness & gym management solutions to enhance
              efficiency, reduce costs, and provide seamless management for your
              facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Membership Management Software",
                  description:
                    "Streamline membership registration, automate payments, and integrate digital ID capturing.",
                  icon: "🧾",
                },
                {
                  title: "Fitness Equipment Software Technology",
                  description:
                    "Preventative maintenance software, user-friendly interfaces, and tracking analysis tools.",
                  icon: "🏋️",
                },
                {
                  title: "Fitness Club Management Software",
                  description:
                    "Custom solutions to enhance operational efficiency and streamline workflows.",
                  icon: "📋",
                },
                {
                  title: "Gym Mobile App Development",
                  description:
                    "Branded mobile apps to boost engagement with features like class bookings and fitness tracking.",
                  icon: "📱",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-3xl text-blue-500">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <img
                src="/Images/SmartWe.webp"
                alt="Gym Management Platform"
                className="rounded-lg shadow-md mx-auto"
              />
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-12">
            <button className="bg-black text-white py-3 px-8 rounded-full font-semibold transition">
              Hire Gym Management Software Developers
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl py-10 mx-auto text-center">
        <div className="grid px-4 pt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Carrom */}
          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="/Images/sports1.webp"
              alt="Carrom Game"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-black mb-4">Carrom</h2>
            <p className="text-black mb-4">
              A classic game that brings our employees together for friendly
              competition. Our carrom boards are set up in a relaxing space
              where you can engage in strategic thinking and fun interaction.
            </p>
            <ul className=" text-black">
              <li>Perfect for quick breaks</li>
              <li>Ideal for team bonding</li>
              <li>Strategic gameplay for mental relaxation</li>
            </ul>
          </div>

          {/* Table Tennis */}
          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="/Images/sports2.webp"
              alt="Table Tennis"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-black mb-4">
              Table Tennis
            </h2>
            <p className="text-black mb-4">
              A fast-paced and exciting game that lets our employees break away
              from their desks and get moving. Table tennis is perfect for
              relieving stress and keeping your energy levels high.
            </p>
            <ul className=" text-black">
              <li>Improves concentration and reflexes</li>
              <li>Great for short breaks during the workday</li>
              <li>Ideal for friendly competitions</li>
            </ul>
          </div>

          {/* Badminton */}
          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="/Images/sport3.webp"
              alt="Badminton"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-black mb-4">
              Badminton
            </h2>
            <p className="text-black mb-4">
              For those who enjoy more active recreation, our indoor badminton
              courts offer a chance to get some exercise while having fun with
              colleagues. It’s a great way to relieve stress and improve overall
              health.
            </p>
            <ul className=" text-black">
              <li>Helps improve coordination and agility</li>
              <li>Provides a full-body workout</li>
              <li>Ideal for stress relief and teamwork</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
