import React from "react";
import {
  FaClipboardList,
  FaUserCheck,
  FaUsers,
  FaLaptopCode,
  FaCogs,
  FaHandHolding,
} from "react-icons/fa"; // Importing relevant icons

import { FaRobot, FaDev, FaDatabase } from "react-icons/fa";
import { Link } from "react-router-dom";



const PlanningAndStrategy = () => {
  const steps = [
    {
      step: "STEP 1",
      title: "We kick off with a consulting session",
      description:
        "Define your project objectives, outline the project scope, create the high-level architecture of your cyber-physical system, and assess development costs.",
    },
    {
      step: "STEP 2",
      title: "Sit down and find the best strategy",
      description:
        "Create an iterative project roadmap to deliver business benefits (a technical vision, prototype, features) with each phase.",
    },
    {
      step: "STEP 3",
      title: "Then we can start the implementation process",
      description:
        "We follow software and hardware development best practices, including DevOps, to create a scalable, secure product.",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Planning and strategy
        </h2>
        <p className="text-gray-600 mb-10">
          This is a brief overview of the process we follow when working on
          improving your business.
        </p>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Step Number */}
              <h3 className="text-blue-600 text-sm font-semibold mb-2">
                {step.step}
              </h3>
              {/* Title */}
              <h4 className="text-lg font-bold text-gray-800 mb-4">
                {step.title}
              </h4>
              {/* Description */}
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Learn More Link */}
        <div className="mt-8">
          <a
            href="#how-we-develop"
            className="text-blue-600 font-medium hover:underline"
          >
            Learn more about How we develop →
          </a>
        </div>
      </div>
    </div>
  );
};

const DigitalTransformation = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative text-white">
        <div className="relative">
          <img
            src="/Images/PlatformDevloper.png" // Replace with your uploaded image URL
            alt="Custom Software Development"
            className="w-full h-screen object-cover"
          />
          <div className="absolute inset-0 flex flex-col pt-10 sm:pt-20 px-6 bg-black bg-opacity-50 py-12 sm:py-24 md:py-32">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 mt-20 text-white">
              Digital Transformation
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white  w-[90%] sm:w-[80%]  mb-6 ">
              As a leading software company, we help businesses embrace digital
              transformation to enhance operational efficiency, improve customer
              experience, and stay competitive in the ever-evolving digital
              world.
            </p>
            <Link to={"/contact"} className="bg-black max-w-fit text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
              Start Your Project →
            </Link>
          </div>
        </div>
      </div>

      <div className="py-10 text-center">
        <h2 className="text-3xl font-bold mb-4 px-2">
          Drive Growth and Innovation With Our Digital Transformation Solutions
        </h2>
        <p className="text-black max-w-3xl mx-auto">
          Qubex’s digital transformation experts will help your business reach
          optimal performance through innovative strategies and implementation
          of digital transformation initiatives. Our{" "}
          <a href="#" className="text-blue-500 underline">
            DevOps
          </a>{" "}
          specialists are available to develop, deploy, and support technical
          solutions.
        </p>

        <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mt-8">
          {/* Process Automation */}
          <div className="bg-[#f5f7fa] shadow-lg rounded-lg p-6 text-center">
            <FaRobot className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Process Automation</h3>
            <p className="text-black">
              We automate repetitive business processes with intelligent
              technologies such as{" "}
              <a href="#" className="text-blue-500 underline">
                robotic process automation
              </a>{" "}
              (RPA). Our custom-developed RPA tools are capable of intelligent
              document recognition, data extraction, Excel automation, and image
              processing.
            </p>
          </div>

          {/* DevOps Success Teams */}
          <div className="bg-[#f5f7fa] shadow-lg rounded-lg p-6 text-center">
            <FaDev className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">DevOps Success Teams</h3>
            <p className="text-black">
              Our DevOps specialists provide not only tangible technical
              solutions but consulting services that include planning and
              assessment, QA testing, and onboarding. We have the personnel and
              resources to ensure success in meeting your IT infrastructure
              needs.
            </p>
          </div>

          {/* Development & Implementation */}
          <div className="bg-[#f5f7fa] shadow-lg rounded-lg p-6 text-center">
            <FaCogs className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Development & Implementation
            </h3>
            <p className="text-black">
              Our experts can develop and implement custom technical solutions
              to fit your business needs. We provide continuous integration and
              delivery as well as monitoring, alerting, and incident response to
              maintain the health of your IT system.
            </p>
          </div>

          {/* IT Infrastructure Support */}
          <div className="bg-[#f5f7fa] shadow-lg rounded-lg p-6 text-center">
            <FaDatabase className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              IT Infrastructure Support
            </h3>
            <p className="text-black">
              We provide outsourced{" "}
              <a href="#" className="text-blue-500 underline">
                infrastructure support
              </a>{" "}
              services for enhanced scalability. This includes cross-platform
              support for both cloud-based and on-premises databases, using
              machine learning technologies to enhance database management
              systems.
            </p>
          </div>
        </div>

        <Link to={"/contact"} className="mt-8 px-6 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-black transition duration-300">
          WORK WITH DX EXPERTS
        </Link>
      </div>

      {/* What is Team Augmentation Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">
          What is Team Augmentation?
        </h2>
        <p className="text-lg text-black mb-6 max-w-3xl mx-auto">
          Team augmentation allows businesses to expand their development
          capabilities by adding experienced developers to their in-house teams.
          Whether you need full-stack developers, mobile developers, or
          blockchain experts, we can provide the right talent to complement your
          team.
        </p>
      </section>

      {/* Flexibility, Expertise, Seamless Integration Sections */}
      <section className="px-6 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 text-blue-700">
              Flexibility
            </h2>
            <p className="text-lg text-black mb-6">
              Scale your development team up or down according to your project's
              needs, ensuring flexibility and cost efficiency.
            </p>
            
          </div>

          <div className="md:w-1/2">
            <img
              src="/Images/Flexibility.png" // Replace with your image URL
              alt="Team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>


      <div className="flex flex-col sm:flex-row sm:px-10 px-5 items-start  justify-evenly py-10 ">
        {/* Text Section */}
        <div className="text-start sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Social presence
          </h1>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            A social presence is important for any business. It is a way to
            communicate with the customers and potential clients, as well as a
            way to promote their products and services.
          </p>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            Social media has become an important part of every business
            strategy. There are many ways that businesses can use social media
            as part of their digital transformation strategy. They can use it
            for marketing purposes, for customer service, or to create awareness
            about their brand.
          </p>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            Having a funnel that integrates and automates all the channels,
            starting from marketing to customer service, and gives you insights
            about your audiences is something that puts you on a totally
            different level than your competitors: this is how you can truly
            understand your customers and beat the competition.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/4 flex justify-center relative">
          <div className="flex">
            {/* iPhone Mockup */}
            <div className="w-full h-96">
              <img
                src="/Images/social.jpg" // Replace with your iPhone mockup image
                alt="iPhone Mockup"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="">
      <PlanningAndStrategy />
      </div>

      <div className="flex flex-col sm:flex-row sm:px-10 px-5 gap-x-10 items-center justify-center py-5 sm:py-10">
        {/* Text Section */}
        <div className="text-start sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Let us analyse the requirements of your digital transformation for
            free
          </h1>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            We help our clients build industry-defining businesses by delivering
            an unique set of capabilities that enable enterprises to unify human
            experiences, unlocking new value, creating new revenue streams and
            new ways of engaging with consumers
          </p>
          <Link
            to="/contact"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
          >
            Get a quote
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center pt-10 relative">
          <div className="flex">
            {/* iPhone Mockup */}
            <div className="w-full h-full">
              <img
                src="/Images/monitor.jpg" // Replace with your iPhone mockup image
                alt="iPhone Mockup"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <section className="py-16 px-6  text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">How We Work</h2>
        <p className="text-lg text-black mb-6 max-w-3xl mx-auto">
          Our team augmentation model is designed to be flexible and adaptive,
          ensuring that your team has the right skills and support to succeed.
          Here's how we work with you:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Step 1 - Consultation */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaLaptopCode className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Consultation
            </h3>
            <p className="text-black">
              We start by understanding your project needs and the skills
              required to support your team.
            </p>
          </div>

          {/* Step 2 - Developer Selection */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaCogs className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Developer Selection
            </h3>
            <p className="text-black">
              We match you with the most qualified developers based on your
              technology stack and project requirements.
            </p>
          </div>

          {/* Step 3 - Integration */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaHandHolding className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Seamless Integration
            </h3>
            <p className="text-black">
              Our developers integrate with your team, ensuring smooth
              collaboration and seamless communication.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">
          Why Choose Us?
        </h2>
        <p className="text-lg text-black mb-6 max-w-3xl mx-auto">
          We understand that finding the right talent for your project is
          crucial. Our developers bring the expertise and experience needed to
          deliver high-quality software solutions, on time and within budget.
          With our team augmentation services, you can scale up quickly without
          compromising on quality.
        </p>
        <Link to={"/contact"} className="bg-black text-white px-8 py-3 rounded-lg transition">
          Contact Us →
        </Link>
      </section>
    </div>
  );
};

export default DigitalTransformation;
