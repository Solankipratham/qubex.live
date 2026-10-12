import React from "react";
import { FaAppStore, FaCode, FaCogs } from "react-icons/fa"; // Importing relevant icons
import img2 from "../../assets/Images/Servicesbg.png"; // Make sure the path is correct
import img1 from "../../assets/Images/AndroidTraining.png"; // Make sure the path is correct
import { DiAndroid } from "react-icons/di";
import { FaAppStoreIos } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        Navigating app deployment with ease
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
        We handle every detail of your app's deployment process, whether on
        Apple's App Store or Google Play. From managing your accounts,
        coordinating app submissions, and navigating the approval process, we
        ensure a smooth and swift launch to get your app in the hands of users
        swiftly and effectively.
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

const AndroidiOSDevelopment = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative h-screen bg-[#171717] text-white">
        {/* Image Section with Text Overlay */}
        <div
          className="bg-cover bg-center h-screen w-full z-[-10]"
          style={{
            background: `url(/Images/applicationdevelopment.jpg) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))`,
            backgroundSize: "cover", // Ensures the image covers the entire div
            backgroundAttachment: "fixed", // Keeps the image fixed
          }}
        >
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-left pt-10 sm:pt-20 px-10 bg-black bg-opacity-50 p-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl mt-10 sm:mt-20 w-full sm:w-2/3 text-white font-bold">
              APPLICATION DEVELOPMENT
            </h1>
            <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%]  text-white">
              At our company, we specialize in crafting robust, scalable, and
              user-friendly applications. Whether it's a custom mobile app, a
              web app, or enterprise software, we deliver tailored solutions
              that enhance your business operations and user engagement.
            </p>
            <Link
              to={"/contact"}
              className="bg-black max-w-fit text-white px-8 py-3 rounded-lg transition mt-6"
            >
              Start Your Project →
            </Link>
          </div>
        </div>
      </div>
      <div className=" py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-10 md:space-y-0">
          {/* Right Side: Images */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="flex space-x-6">
              {/* iPhone Mockup */}
              <div className="w-96 h-full">
                <img
                  src="/Images/andoird.jpg" // Replace with your iPhone mockup image
                  alt="iPhone Mockup"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          {/* Left Side: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg text-gray-600 mb-2">
              {" "}
              Thinking mobile-first?
            </p>
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Expert iOS, Android & Cross-Platform App Development Services
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Qubex, we transform your mobile aspirations into digital
              excellence. We specialize in iOS, Android, and cross-platform
              development, leveraging the latest technologies and agile
              approaches. From utility tools to robust mobile applications and
              intricate SaaS platforms, we're committed to precision and
              innovation. Embark on a transformative digital journey with us and
              redefine mobile possibilities.
            </p>
            <Link
              to="/contact"
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="container  mx-auto flex flex-col md:flex-row items-center justify-between  px-10 sm:px-6 space-y-10 md:space-y-0">
          {/* Left Side: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Cross-Platform and Native Development
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our mastery in mobile software development spans across the
              utilization of cutting-edge cross-platform technologies such as
              Unity, React Native, and Flutter, without compromising on our
              ability to deliver pristine native applications, or modules that
              we bridge to other apps, like Netflix does.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We recognize the unique demands of every project and accordingly
              choose the most suitable technology to ensure optimal performance,
              seamless user experience, and maximized cost efficiency. Whether
              it's crafting visually stunning, interactive mobile games using
              Unity, or harnessing the power of React Native and Flutter for
              rapid, scalable application development, or even diving deep into
              native coding for enhanced performance and integration, we are
              equipped to transform your vision into a robust, user-centric
              mobile application.
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

          {/* Right Side: Images */}
          <div className="md:w-1/2  flex justify-center relative">
            <div className="flex space-x-6">
              {/* iPhone Mockup */}
              <div className="w-56 sm:w-80 h-full">
                <img
                  src="/Images/phone.jpg" // Replace with your iPhone mockup image
                  alt="iPhone Mockup"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="container  mx-auto flex flex-col md:flex-row items-center justify-around px-10 sm:px-6 space-y-10 md:space-y-0">
          {/* Left Side: Text */}
          <div className="md:w-1/3 flex justify-center relative">
            <div className="flex space-x-6">
              {/* iPhone Mockup */}
              <div className="w-full h-auto">
                <img
                  src="/Images/qualityassurance.jpg" // Replace with your iPhone mockup image
                  alt="iPhone Mockup"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Images */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Assuring unmatched quality in every app
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Qubex, we embrace a 'quality-first' approach to software
              development. Our rigorous testing across multiple environments
              ensures that your software stands firm and performs optimally
              under diverse circumstances. Each line of code, every new feature,
              and each bug fix is meticulously tested through a stringent
              process.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our Quality Assurance (QA) team, skilled in detecting bugs and
              regressions, also utilizes automated tests to enhance reliability.
              Our QA engineers strive to ensure the impeccable quality of your
              product by deeply understanding your business values. Whether it's
              a nascent product concept, an ongoing development, or a launched
              product, our quality assurance services are designed to fortify
              your success.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our QA process extends beyond formulating and executing tests,
              involving the establishment of robust procedures and their
              automation.
            </p>
            <Link
              to="/software-quality-assurance"
              className="text-blue-500 font-medium"
            >
              Click here to delve into quality assurance →
            </Link>
          </div>
        </div>
      </div>
      {/* Our Application Development Services */}
      <div>
        <div className="flex items-start  sm:p-10 flex-col text-center">
          <h1 className=" font-bold text-4xl sm:text-5xl w-full">
            Cross-Platform Mobile App Development
          </h1>

          {/* Application Development Features Section */}
          <section className="py-5 px-6 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Custom Application Development */}
              <div className=" p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <FaAppStore className=" mx-auto text-4xl" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                  Custom Application Development
                </h3>
                <p className="text-gray-400">
                  We specialize in creating custom-built applications that meet
                  your unique business needs. From ideation to execution, our
                  team works with you to design and develop apps that drive
                  business value and enhance user experiences.
                </p>
              </div>
              {/* Software Development */}
              <div className=" p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <FaCode className=" mx-auto text-4xl" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                  Our Application Development Services
                </h3>
                <p className="text-gray-400">
                  Our software development services ensure that your business
                  software is reliable, scalable, and efficient. We leverage the
                  latest technologies to build solutions that help streamline
                  your processes.
                </p>
              </div>

              {/* Enterprise Solutions */}
              <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <FaCogs className=" mx-auto text-4xl" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                  Enterprise Solutions
                </h3>
                <p className="text-gray-400">
                  We build enterprise-grade applications that integrate
                  seamlessly with your existing systems, improve collaboration,
                  and optimize operational efficiency.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="py-5">
        <AppLaunchProcess />
      </div>{" "}
    </div>
  );
};

export default AndroidiOSDevelopment;
