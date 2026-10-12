import React from "react";
import {
  FaSearch,
  FaUserCheck,
  FaClipboardCheck,
  FaCode,
  FaCloud,
  FaLock,
} from "react-icons/fa"; // Importing the necessary icons
import { FiUsers, FiAward, FiArrowUp, FiGlobe } from "react-icons/fi";
import { FaEye, FaCalendarAlt, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProblemSolution = () => {
  const solutions = [
    {
      icon: <FiUsers size={40} className="text-blue-500" />,
      text: "Connecting top talent with top companies",
    },
    {
      icon: <FiAward size={40} className="text-blue-500" />,
      text: "Validating their growth with final exams",
    },
    {
      icon: <FiArrowUp size={40} className="text-blue-500" />,
      text: "Upgrading their skills by our in-house experts in 90 days",
    },
    {
      icon: <FiGlobe size={40} className="text-blue-500" />,
      text: "Accepting pre-qualified developers globally to Academy",
    },
  ];

  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-bold mb-8">
        This is how we solve the problem
      </h2>
      <div className="relative flex flex-wrap justify-center items-center gap-6">
        {/* First Two Cards */}
        {solutions.slice(0, 2).map((solution, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 rounded-lg p-6 shadow-md max-w-xs text-center"
          >
            {solution.icon}
            <p className="text-gray-700 mt-4">{solution.text}</p>
          </div>
        ))}

        {/* Center Image */}
        <div className="w-full flex sm:px-0 px-5 justify-center">
          <img
            src="/Images/meeting.jpg"
            alt="Team Collaboration"
            className="rounded-lg shadow-md  sm:max-w-md my-4"
          />
        </div>

        {/* Last Two Cards */}
        {solutions.slice(2, 4).map((solution, index) => (
          <div
            key={index + 2}
            className="flex flex-col items-center bg-gray-100 rounded-lg p-6 shadow-md max-w-xs text-center"
          >
            {solution.icon}
            <p className="text-gray-700 mt-4">{solution.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const AcademyTraining = () => {
  const features = [
    {
      icon: <FaEye className="text-blue-600 text-4xl mb-4" />,
      title: "TRANSPARENCY",
      description:
        "Process is risk-free and includes a one-time fee only if you have successfully hired a developer from our Academy.",
    },
    {
      icon: <FaCalendarAlt className="text-blue-600 text-4xl mb-4" />,
      title: "3 MONTHS WARRANTY",
      description:
        "Our engineers understand the value of long-lasting partnerships and look for a permanent position. To motivate them further, we award them with additional yearly bonuses for staying loyal to your company.",
    },
    {
      icon: <FaAward className="text-blue-600 text-4xl mb-4" />,
      title: "QUALITY",
      description:
        "All engineers from our Academy have been trained by our award-winning team and successfully graduated from our 90-days program with a certificate.",
    },
  ];

  return (
    <div className="min-h-screen">
      
      {/* Background Image */}
      <div
        className="bg-cover opacity-6 bg-center w-full h-screen z-[-10]"
        style={{
          background: `url(/Images/academytraining.jpg) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundAttachment: "fixed", // Keeps the image fixed
        }}
      >
        <div className="flex items-left text-white pt-10 sm:pt-20 px-10 flex-col">
          <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
            Recruiting & Academy Training
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Top-tier talent acquisition and tailored training programs to ensure
            your team has the skills they need to succeed in the competitive
            software industry.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:px-10 px-5 items-start  justify-around py-10 sm:py-20">
        {/* Text Section */}
        <div className="text-start sm:w-1/2 ">
          <p className="mb-6 text-2xl sm:text-2xl text-gray-600">
            Building a competent tech team?
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Tech Team Building & Training Solutions
          </h1>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            Gain exclusive access to a decade-tested process. Partner with one
            of Europe's top software houses. We offer re-skilling, up-skilling,
            and tech talent scouting services to increase your team's
            performance.
          </p>
          <Link
            to="/contact"
            className="bg-black text-white px-6 py-3  rounded-full hover:bg-gray-800 transition duration-300"
          >
            Consult our experts today.
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/4 flex justify-center  relative">
          <div className="flex sm:py-0 py-10">
            {/* iPhone Mockup */}
            <div className="w-full h-auto">
              <img
                src="/Images/techteam.jpg" // Replace with your iPhone mockup image
                alt="iPhone Mockup"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <ProblemSolution />

      {/* Our Talent Acquisition Process */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-blue-700 text-3xl sm:text-4xl font-bold ">
          Our Talent Acquisition Process
        </h2>
        <p className="text-lg text-black mb-6 max-w-3xl mx-auto">
          We help businesses hire the best talent by following a rigorous
          recruitment process. Our approach ensures that your company gets the
          skilled professionals it needs for success.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Step 1 - Sourcing */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaSearch className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-blue-700 text-2xl font-semibold mb-4">
              Sourcing
            </h3>
            <p className="text-gray-400">
              We use advanced sourcing techniques to identify top-tier
              candidates, tapping into both active and passive talent pools to
              find the perfect match.
            </p>
          </div>
          {/* Step 2 - Screening */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaUserCheck className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-blue-700 text-2xl font-semibold mb-4">
              Screening
            </h3>
            <p className="text-gray-400">
              Our expert recruiters carefully screen candidates through
              interviews, technical assessments, and reference checks to ensure
              they meet your needs.
            </p>
          </div>
          {/* Step 3 - Onboarding */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaClipboardCheck className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-blue-700 text-2xl font-semibold mb-4">
              Onboarding
            </h3>
            <p className="text-gray-400">
              We ensure a smooth transition for new hires, offering guidance and
              support throughout the onboarding process to ensure their success
              from day one.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row sm:px-10 px-5 items-center  justify-around py-10 sm:py-20">
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center relative">
          <div className="flex">
            {/* iPhone Mockup */}
            <div className="w-full h-auto">
              <img
                src="/Images/skill.jpg" // Replace with your iPhone mockup image
                alt="iPhone Mockup"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-start sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            The pursuit of perfection
          </h1>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            We understand the challenge—finding talent that aligns with your
            company culture and needs can feel as elusive as chasing unicorns.
            In our quest to grow our own in-house team, we faced countless
            obstacles trying to discover the perfect fit. This struggle inspired
            the creation of the Academy. It was born out of necessity, and after
            witnessing its transformative impact, we knew we had to share it.
            Now, the Academy extends its value to partners and engineers around
            the globe.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center rounded-lg shadow-lg p-6  hover:shadow-xl transition"
            >
              {/* Icon */}
              {feature.icon}
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:px-10 px-5 items-center  justify-around py-10 sm:py-20">
        {/* Text Section */}
        <div className="text-start sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Have additional questions or want to hire team of experts on demand?
          </h1>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            A Qubex director of engineering will work with you to
            understand your goals, technical needs, and team dynamics.
          </p>
        </div>

        <div className="md:w-1/4 flex justify-center relative">
          <div className="flex">
            {/* iPhone Mockup */}
            <Link
              to="/contact"
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyTraining;
