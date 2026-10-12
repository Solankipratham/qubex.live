import React from "react";

import { Link } from "react-router-dom";
const HCM = () => {
  return (
    <div className="">
      <div
        className="bg-cover opacity-6 bg-center w-full h-screen sm:h-[600px] z-[-10]"
        style={{
          background: `url(/Images/HCM.png) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundAttachment: "fixed", // Keeps the image fixed
        }}
      >
        <div className="flex items-left text-white pt-10 sm:pt-20 px-10 flex-col">
          <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
            Human Capital Management (HCM)
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            At our company, we understand that our employees are our greatest
            asset. Human Capital Management (HCM) is at the core of our strategy
            for ensuring a productive, engaged, and happy workforce. We are
            dedicated to developing, retaining, and empowering our employees to
            reach their full potential. Through our comprehensive HCM practices,
            we invest in our people to drive business success and growth.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>

      {/* Key Areas of HCM */}
      <div className="py-16 px-6 sm:px-8 lg:px-16">
        <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Recruitment & Onboarding */}
          <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
            <img
              src="/Images/hcm1.webp"
              alt="Recruitment & Onboarding"
              className="w-full h-56 object-cover rounded-xl mb-6 transform transition-transform duration-500 hover:scale-110"
            />
            <h2 className="text-3xl font-semibold text-black mb-4">
              Recruitment & Onboarding
            </h2>
            <p className="text-lg text-black mb-6">
              Our recruitment process is designed to attract the best talent
              from around the world. We aim to bring in diverse skills and
              backgrounds to foster innovation. Once hired, our onboarding
              process ensures that new employees feel supported and
              well-equipped to succeed from day one.
            </p>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li className="text-lg">Attracting top talent</li>
              <li className="text-lg">Comprehensive onboarding programs</li>
              <li className="text-lg">Personalized training and mentorship</li>
            </ul>
          </div>

          {/* Employee Development */}
          <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
            <img
              src="/Images/hcm2.webp"
              alt="Employee Development"
              className="w-full h-56 object-cover rounded-xl mb-6 transform transition-transform duration-500 hover:scale-110"
            />
            <h2 className="text-3xl font-semibold text-black mb-4">
              Employee Development
            </h2>
            <p className="text-lg text-black mb-6">
              We are committed to the continuous growth of our employees through
              personalized development plans, leadership training, and skills
              enhancement programs. Our goal is to ensure that each employee has
              the tools and opportunities to excel in their roles and advance in
              their careers.
            </p>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li className="text-lg">Personalized development plans</li>
              <li className="text-lg">Leadership and management training</li>
              <li className="text-lg">Skills enhancement workshops</li>
            </ul>
          </div>

          {/* Employee Engagement & Retention */}
          <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
            <img
              src="/Images/hcm3.webp"
              alt="Employee Engagement & Retention"
              className="w-full h-56 object-cover rounded-xl mb-6 transform transition-transform duration-500 hover:scale-110"
            />
            <h2 className="text-3xl font-semibold text-black mb-4">
              Employee Engagement & Retention
            </h2>
            <p className="text-lg text-black mb-6">
              Our employees' well-being and engagement are essential to our
              success. We focus on fostering a supportive and inclusive
              environment where employees feel valued and motivated to
              contribute. Our retention strategies include competitive
              compensation, work-life balance programs, and career advancement
              opportunities.
            </p>
            <ul className="list-disc pl-6 text-black space-y-2">
              <li className="text-lg">
                Employee well-being and support programs
              </li>
              <li className="text-lg">Work-life balance initiatives</li>
              <li className="text-lg">
                Recognition and rewards for performance
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 px-6 sm:px-8 lg:px-16">
        <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
          <h2 className="text-3xl font-semibold text-black mb-6">
            Additional HCM Services
          </h2>
          <p className="text-lg text-black mb-6">
            Our comprehensive HCM services also include:
          </p>
          <ul className="list-disc pl-5 text-black space-y-3">
            <li className="text-lg  transition-colors">
              Performance Management
            </li>
            <li className="text-lg  transition-colors">
              Compensation & Benefits
            </li>
            <li className="text-lg  transition-colors">Employee Relations</li>
            <li className="text-lg  transition-colors">Talent Management</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className=" text-center  text-black py-16 px-6 sm:px-8 lg:px-16 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
        <h3 className="text-3xl font-semibold mb-4">
          Start Investing in Your Team Today
        </h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Our commitment to Human Capital Management ensures that we not only
          attract the best talent but also nurture, grow, and retain our
          employees for long-term success. By prioritizing employee development,
          engagement, and well-being, we create an environment where everyone
          can thrive and contribute to the success of the company.
        </p>
        <Link
          to={"/contact"}
          className="inline-block bg-black text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors transform hover:scale-105 duration-300"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default HCM;
