import React from "react"; // Ensure the path is correct

import {
  FaCogs,
  FaCode,
  FaRocket,
  FaEye,
  FaUser,
  FaCloud,
  FaBrain,
  FaBitcoin,
  FaRobot,
  FaShoppingCart,
  FaTools,
  FaCar,
  FaGraduationCap,
  FaHeartbeat,
  FaClock,
  FaComments,
  FaBullhorn,
  FaBuilding,
  FaShieldAlt,
  FaGamepad,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const HowWeDevelop = () => {
  const steps = [
    { number: "01", label: "Communication" },
    { number: "02", label: "Planning" },
    { number: "03", label: "Execution" },
    { number: "04", label: "Architectures & Infrastructures" },
    { number: "05", label: "Transparency" },
    { number: "06", label: "Delivery" },
    { number: "07", label: "Retrospective" },
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">How we develop</h2>
        <p className="text-gray-600 mb-12">
          The service we provide to all of our clients is an entire dedicated
          team from software design and development to project management and
          DevOps, ranging between any kind of digital product.
        </p>

        {/* Timeline Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center md:w-1/7 w-full"
            >
              {/* Step Number */}
              <div className="text-blue-600 text-xl font-bold">{step.number}</div>
              {/* Dot */}
              <div
                className={`w-3 h-3 rounded-full bg-blue-600 my-4
                }`}
              ></div>
              {/* Label */}
              <div className="text-gray-400 text-sm">{step.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DomainAndIndustry = () => {
  const industries = [
    {
      icon: <FaCloud className="text-blue-600 text-3xl" />,
      label: "SaaS Platforms",
    },
    {
      icon: <FaBrain className="text-blue-600 text-3xl" />,
      label: "Neuroscience",
    },
    {
      icon: <FaBitcoin className="text-blue-600 text-3xl" />,
      label: "Blockchain & Fintech",
    },
    { icon: <FaRobot className="text-blue-600 text-3xl" />, label: "IoT & AI" },
    {
      icon: <FaShoppingCart className="text-blue-600 text-3xl" />,
      label: "E-Commerce",
    },
    {
      icon: <FaTools className="text-blue-600 text-3xl" />,
      label: "Workflow Management System",
    },
    { icon: <FaCar className="text-blue-600 text-3xl" />, label: "Automotive" },
    {
      icon: <FaGraduationCap className="text-blue-600 text-3xl" />,
      label: "Education",
    },
    {
      icon: <FaHeartbeat className="text-blue-600 text-3xl" />,
      label: "Healthcare",
    },
    {
      icon: <FaClock className="text-blue-600 text-3xl" />,
      label: "Time Tracking",
    },
    {
      icon: <FaComments className="text-blue-600 text-3xl" />,
      label: "Social Networking",
    },
    {
      icon: <FaBullhorn className="text-blue-600 text-3xl" />,
      label: "Marketing & Advertising",
    },
    {
      icon: <FaBuilding className="text-blue-600 text-3xl" />,
      label: "Construction",
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
      label: "Cybersecurity",
    },
    { icon: <FaGamepad className="text-blue-600 text-3xl" />, label: "Gaming" },
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Domain and Industry Agnostic
        </h2>
        <p className="text-gray-600 mb-10">
          Our teams worked for years on any kind of application domain: mobile,
          web, and desktop. We also accrued extensive knowledge and experience
          that made us work in healthcare, neuroscience, e-commerce, workflow
          management, agile tools, constructions, automotive, time tracking,
          social networking, and much more.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              {industry.icon}
              <h3 className="text-lg font-medium text-gray-800 mt-4">
                {industry.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const CustomSoftwareDevelopment = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div
          className="bg-cover bg-center h-screen w-full z-[-10]"
          style={{
            background: `url("/Images/banner.png") no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))`,
            backgroundSize: "cover", // Ensures the image covers the entire div
            backgroundAttachment: "fixed", // Keeps the image fixed
          }}
        >
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col pt-10 sm:pt-20 px-6 bg-black bg-opacity-50 py-12 sm:py-24 md:py-32">
            <h1 className="text-4xl sm:text-5xl md:text-6xl  mt-10 sm:mt-10 w-[90%] md:w-[70%] font-bold mb-4 text-white">
              Custom Software Development
            </h1>
            <p className="text-[#ffffff] text-xl sm:text-2xl pt-5 w-[90%] sm:w-[80%] ">
              We specialize in building custom software solutions powered by
              blockchain technology. Our blockchain-driven approach ensures
              security, scalability, and transparency in every project we
              deliver, enabling businesses to thrive in the digital age.
            </p>
            <Link to={"/contact"} className="bg-black max-w-fit mt-5 sm:mt-10 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
              Start Your Project →
            </Link>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="flex items-start px-10 py-5 flex-col">
        <h1 className="text-blue-700 font-bold text-4xl sm:text-5xl w-full sm:w-2/3">
          What We Do
        </h1>
        <p className=" text-xl sm:text-2xl pt-5 w-full sm:w-4/5">
          Our custom software solutions are built using the latest technologies,
          including blockchain, to deliver secure, transparent, and efficient
          systems for your business. We work closely with you to create software
          that meets your unique needs.
        </p>

        {/* Blockchain Features Section */}
        <section className="py-16 px-6 mt-18 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6">
            {/* Blockchain Integration */}
            <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-4">
                <FaShieldAlt className="text-black mx-auto text-4xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                Blockchain Integration
              </h3>
              <p className="text-gray-400">
                Integrate blockchain into your custom software for enhanced
                security, transparency, and decentralization.
              </p>
            </div>

            {/* Tailored Solutions */}
            <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-4">
                <FaCogs className="text-black mx-auto text-4xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                Tailored Solutions
              </h3>
              <p className="text-gray-400">
                We provide customized software solutions that are specifically
                designed to address the unique needs of your business.
              </p>
            </div>

            {/* End-to-End Development */}
            <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-4">
                <FaCode className="text-black mx-auto text-4xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                End-to-End Development
              </h3>
              <p className="text-gray-400">
                From concept to deployment, we handle the entire development
                lifecycle, ensuring a seamless and efficient process.
              </p>
            </div>
          </div>
        </section>
      </div>

      <DomainAndIndustry />
      <HowWeDevelop />

      <div className=" py-16">
        <div className="container mx-auto flex flex-col justify-around md:flex-row items-start px-6 space-y-10 md:space-y-0">
          {/* Right Side: Images */}
          <div className="md:w-1/3 flex justify-center pt-10 relative">
            <div className="flex">
              {/* iPhone Mockup */}
              <div className="w-full h-full">
                <img
                  src="/Images/meeting.jpg" // Replace with your iPhone mockup image
                  alt="iPhone Mockup"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          {/* Left Side: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Imagination is the only limit to what we can build
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Many times it’s hard to outsource a project due to communication
              challenges. It's always very important to spend time on
              brainstorming, finding edge-cases, understanding what can be
              improved and what should be postponed to grant an MVP and
              agile-oriented development.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Many times it’s hard to outsource a project due to communication
              challenges. It's always very important to spend time on
              brainstorming, finding edge-cases, understanding what can be
              improved and what should be postponed to grant an MVP and
              agile-oriented development.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With Qubex you will embrace the wonderful experience of
              a team that continuously thinks and refine the software, discover
              all aspects you didn't, and reasons like a product owner. Build
              your software with us and level up your
            </p>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <section className="py-5 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">
          Our Development Process
        </h2>
        <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto">
          Our approach to custom software development is designed to ensure that
          your business gets a fully functional and secure solution. We guide
          you through each stage of the process with clear communication and
          expert advice.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Step 1 - Consultation */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaUser className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Consultation
            </h3>
            <p className="text-gray-400">
              We begin by understanding your business goals and challenges,
              ensuring we deliver a custom solution that meets your specific
              needs.
            </p>
          </div>

          {/* Step 2 - Development */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaCode className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Development
            </h3>
            <p className="text-gray-400">
              Our expert developers start building your custom software with
              blockchain integration, ensuring security and efficiency.
            </p>
          </div>

          {/* Step 3 - Deployment & Support */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaRocket className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Deployment & Support
            </h3>
            <p className="text-gray-400">
              After development, we deploy your solution and provide ongoing
              support and maintenance to ensure long-term success.
            </p>
          </div>
        </div>
      </section>

      <div className=" py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-6 space-y-10 md:space-y-0">
          {/* Right Side: Images */}
          <div className="md:w-1/2 flex justify-center pt-10 relative">
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
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Imagination is the only limit to what we can build
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Many times it’s hard to outsource a project due to communication
              challenges. It's always very important to spend time on
              brainstorming, finding edge-cases, understanding what can be
              improved and what should be postponed to grant an MVP and
              agile-oriented development.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Many times it’s hard to outsource a project due to communication
              challenges. It's always very important to spend time on
              brainstorming, finding edge-cases, understanding what can be
              improved and what should be postponed to grant an MVP and
              agile-oriented development.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With Qubex you will embrace the wonderful experience of
              a team that continuously thinks and refine the software, discover
              all aspects you didn't, and reasons like a product owner. Build
              your software with us and level up your
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSoftwareDevelopment;
