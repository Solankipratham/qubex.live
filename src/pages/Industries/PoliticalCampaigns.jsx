import React from "react";

import { Link } from "react-router-dom";
const PoliticalCampaigns = () => {
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
            Political Campaign Software Solutions
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Our company specializes in developing custom software solutions
            tailored for political campaigns. We offer a comprehensive suite of
            services designed to enhance voter outreach, streamline fundraising
            efforts, and optimize campaign management, ensuring electoral
            success.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>

      {/* Service Areas */}
      <div className="grid px-4 pt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Marketing Automation */}
        <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="Images/ticket2.webp"
            alt="Marketing Automation"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Marketing Automation
          </h2>
          <p className="text-black mb-4">
            Our marketing automation solutions enable campaigns to automate
            interactions with voters and donors through multiple digital
            channels, enhancing engagement and efficiency.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Interactive and action-driven websites</li>
            <li>Email, social media, and text campaigns</li>
            <li>Advertising management tools</li>
          </ul>
        </div>

        {/* Event and Resource Management */}
        <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/ticket3.webp"
            alt="Event and Resource Management"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Event and Resource Management
          </h2>
          <p className="text-black mb-4">
            Our solutions streamline campaign events and resource management,
            ensuring smooth operations and effective resource utilization.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Fundraising management</li>
            <li>Online payment processing</li>
            <li>Event and travel management</li>
          </ul>
        </div>

        {/* Campaign Management and Analysis */}
        <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/ticket1.webp"
            alt="Campaign Management and Analysis"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Campaign Management and Analysis
          </h2>
          <p className="text-black mb-4">
            Our campaign management solutions provide comprehensive tools for
            managing events, donor databases, and analyzing campaign
            performance.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Event and venue management</li>
            <li>Donor database systems</li>
            <li>Transportation logistics</li>
          </ul>
        </div>
      </div>
      <section className="  py-8">
        {/* Top Section */}
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Hire Experienced and Dedicated Campaign Management Systems
            Developers
          </h2>
          <p className="text-gray-600 mb-8">
            Chista caters to the technical needs of the political industry by
            delivering world-class political campaign software with integrated
            features for mobile voter outreach, online donation management,
            voter database systems, and more to improve political marketing
            efforts and help win more elections.
          </p>
          <div className="flex justify-center">
            <img
              src="/Images/CampaignManagementSystem.jpg" // Replace with actual image URL
              alt="Campaign Management System"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💡",
                title: "Marketing Automation",
              },
              {
                icon: "📊",
                title: "Campaign Management and Analysis",
              },
              {
                icon: "🌍",
                title: "Demographic Data",
              },
              {
                icon: "📅",
                title: "Event and Resource Management",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm bg-white"
              >
                <div className="text-5xl text-teal-500 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold">{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* AI Solutions Section */}
        <div className="bg-white mt-12 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-semibold mb-6">
              AI Solutions for Political Campaigns
            </h3>
            <p className="text-gray-600 mb-8">
              Our custom AI solutions empower political campaigns with
              predictive modeling, chatbots, virtual assistants, fundraising
              optimization, and more to enhance political marketing efforts for
              electoral success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🔮",
                  title: "Predictive Modeling for Voter Support",
                  description:
                    "Our experts develop custom predictive modeling solutions for political campaigns to identify voter patterns and preferences to determine voter support more efficiently.",
                },
                {
                  icon: "💬",
                  title: "Speech Writing with AI",
                  description:
                    "Custom AI-powered systems help create impactful speeches tailored to voter demographics and linguistic backgrounds.",
                },
                {
                  icon: "📈",
                  title: "Intelligent Marketing Performance Tracking",
                  description:
                    "AI-driven tools analyze campaign performance data, enhancing decision-making and improving strategies.",
                },
                {
                  icon: "📊",
                  title: "Personalized Messaging with Voter Analysis",
                  description:
                    "AI-powered analysis ensures targeted, effective communication with voters in real-time.",
                },
                {
                  icon: "🤖",
                  title: "AI-Powered Campaign Management",
                  description:
                    "Manage campaign schedules, budgets, and voter interaction using advanced AI tools.",
                },
                {
                  icon: "📉",
                  title: "Campaign Expense Tracking AI",
                  description:
                    "AI-driven tools ensure accurate financial tracking, reducing discrepancies and improving efficiency.",
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg shadow-sm bg-gray-50 text-center"
                >
                  <div className="text-5xl text-teal-500 mb-4">
                    {solution.icon}
                  </div>
                  <h4 className="text-lg font-semibold">{solution.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marketing Automation Section */}
        <div className="max-w-6xl mx-auto px-4 mt-12">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Marketing Automation System
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌐",
                title: "Interactive & Action-Driven Websites",
                description:
                  "We build professional, modern websites designed for maximum impact and engagement.",
              },
              {
                icon: "📞",
                title: "Telecommunication Integrations",
                description:
                  "Seamlessly integrate with third-party communication platforms like Twilio or Plivo.",
              },
              {
                icon: "📺",
                title: "Multiplatform Political Advertising Integration",
                description:
                  "Chista’s solutions deliver ads across multiple platforms with AI-driven optimization.",
              },
            ].map((automation, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-sm bg-gray-50 text-center"
              >
                <div className="text-5xl text-teal-500 mb-4">
                  {automation.icon}
                </div>
                <h4 className="text-lg font-semibold">{automation.title}</h4>
                <p className="text-sm text-gray-600 mt-2">
                  {automation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <div className="py-10 text-center">
        <h3 className="text-2xl font-semibold text-black mb-4">
          Transform Your Political Campaign
        </h3>
        <p className="text-lg text-black mb-8">
          Partner with us to develop customized software solutions that meet the
          unique needs of your political campaign. Our team is dedicated to
          delivering high-quality, scalable, and user-friendly applications that
          drive voter engagement and campaign success.
        </p>
        <Link
          to={"/contact"}
          className="inline-block bg-black text-white px-6 py-3 rounded-lg text-xl font-semibold transition-colors"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default PoliticalCampaigns;
