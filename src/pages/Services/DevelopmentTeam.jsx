import React from "react";
import {
  FaClipboardList,
  FaUserCheck,
  FaUsers,
  FaLaptopCode,
  FaCogs,
  FaHandHolding,
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaAws,
  FaAndroid,
  FaApple,
  FaJsSquare,
} from "react-icons/fa"; // Importing relevant icons

import {
  SiTypescript,
  SiGraphql,
  SiRedux,
  SiNextdotjs,
  SiNestjs,
  SiFlask,
  SiDjango,
  SiExpress,
  SiLaravel,
  SiJest,
  SiMobx,
} from "react-icons/si"; // Importing additional icons
import { FaLightbulb } from "react-icons/fa";
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
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          How we develop
        </h2>
        <p className="text-gray-600 mb-10">
          The service we provide to all of our clients is an entire dedicated
          team from software design and development to project management and
          DevOps, ranging between any kind of digital product.
        </p>

        {/* Timeline Section */}
        <div className="relative flex flex-wrap md:flex-nowrap justify-between items-center mb-10">
          {/* Timeline Line */}
          <div className="absolute md:top-1/2 top-16 w-full h-[2px] bg-gray-200 md:block hidden"></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center md:w-auto w-1/2 mb-8 md:mb-0"
            >
              {/* Step Number */}
              <div className="text-blue-600 font-bold text-xl">
                {step.number}
              </div>
              {/* Step Dot */}
              <div className="w-3 h-3 bg-blue-600 rounded-full my-2"></div>
              {/* Step Label */}
              <div className="text-gray-500 text-sm">{step.label}</div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm mb-6 mx-4 md:mx-0">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <FaLightbulb className="text-blue-500 text-3xl" />
            <p className="text-gray-700 text-base text-center md:text-left">
              "Working with Qubex is super-easy from a contract
              perspective as well: you can dismiss any time the team with only
              30 days upfront notice, the payments of the team is on a monthly
              basis, no percentage in upfront!"
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <Link to={"/about-us"} className="bg-black text-white px-6 py-3 rounded-lg hover:bg-black transition">
        Discover more
        </Link >
      </div>
    </div>
  );
};

const TechnologyStack = () => {
  const technologies = [
    { icon: <FaReact className="text-blue-500 text-3xl" />, label: "React" },
    {
      icon: <FaReact className="text-blue-500 text-3xl" />,
      label: "React Native",
    },
    {
      icon: <FaJsSquare className="text-yellow-500 text-3xl" />,
      label: "JavaScript",
    },
    {
      icon: <SiTypescript className="text-blue-500 text-3xl" />,
      label: "TypeScript",
    },
    {
      icon: <SiNextdotjs className="text-gray-800 text-3xl" />,
      label: "Next.js",
    },
    {
      icon: <SiGraphql className="text-pink-500 text-3xl" />,
      label: "GraphQL",
    },
    { icon: <SiRedux className="text-purple-600 text-3xl" />, label: "Redux" },
    { icon: <SiMobx className="text-orange-600 text-3xl" />, label: "MobX" },
    {
      icon: <FaNodeJs className="text-green-600 text-3xl" />,
      label: "Node.js",
    },
    {
      icon: <SiExpress className="text-gray-700 text-3xl" />,
      label: "Express",
    },
    { icon: <SiNestjs className="text-red-600 text-3xl" />, label: "Nest.js" },
    { icon: <FaPhp className="text-indigo-600 text-3xl" />, label: "PHP" },
    { icon: <SiLaravel className="text-red-600 text-3xl" />, label: "Laravel" },
    { icon: <FaPython className="text-blue-400 text-3xl" />, label: "Python" },
    { icon: <SiFlask className="text-black text-3xl" />, label: "Flask" },
    { icon: <SiDjango className="text-green-700 text-3xl" />, label: "Django" },
    { icon: <SiJest className="text-pink-500 text-3xl" />, label: "Jest" },
    { icon: <FaAws className="text-orange-500 text-3xl" />, label: "AWS" },
    {
      icon: <FaAndroid className="text-green-600 text-3xl" />,
      label: "Android Studio",
    },
    { icon: <FaApple className="text-gray-800 text-3xl" />, label: "XCode" },
  ];

  return (
    <div className="py-5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Technology stack
        </h2>
        <p className="text-gray-600 mb-10">
          We have complete teams of backend and frontend developers, trained and
          specialized in the most innovative technology to guarantee durable
          digital solutions. Tell us about your project and we will choose the
          right stack for your needs.
        </p>

        {/* Technologies Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              {tech.icon}
              <h3 className="text-sm font-medium text-gray-800 mt-4">
                {tech.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const DevelopmentTeam = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative text-white">
        <div className="relative">
          <img
            src="/Images/meeting.jpg" // Replace with your uploaded image URL
            alt="Custom Software Development"
            className="w-full h-screen object-cover"
          />
          <div className="absolute inset-0 flex flex-col pt-10 sm:pt-20 px-4 bg-black bg-opacity-50">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-10 sm:mt-20 mb-4 text-white">
              Development Team Augmentation
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300  w-[90%] sm:w-[80%]  mb-6">
              We provide skilled developers to augment your team and accelerate
              your software development process. Our flexible approach allows
              you to scale your team as needed while ensuring high-quality
              project delivery.
            </p>
            <Link to={"/contact"} className="bg-black max-w-fit text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
              Start Your Project →
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:px-10 px-5 items-center  justify-around py-10 sm:py-20">
        {/* Text Section */}
        <div className="text-start sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            What is a team augmentation service?
          </h1>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            When a company grows, entrepreneurs might experience difficulties in
            hiring professionals due to lack of knowledge on a certain tech
            stack or just because of the short deadline that imposes to not
            start a long and difficult recruitment process.
          </p>
          <p className="mb-2 text-lg sm:text-2xl text-gray-600">
            Why reinvent the wheel?
          </p>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            The best solution is to hire a team that would plug into the
            in-house existing team bringing the required workforce and
            expertise, taking the benefit of working with people that already
            know each other, and already knows how to solve similar challenges.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/4 flex justify-center relative">
          <div className="flex">
            {/* iPhone Mockup */}
            <div className="w-full h-96">
              <img
                src="/Images/meeting.jpg" // Replace with your iPhone mockup image
                alt="iPhone Mockup"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <TechnologyStack />

      <div className="flex flex-col sm:flex-row sm:px-10 px-5 items-center  justify-around py-10 sm:py-20">
        {/* Image Section */}
        <div className="md:w-1/4 flex justify-center relative">
          <div className="flex">
            {/* iPhone Mockup */}
            <div className="w-full h-96">
              <img
                src="/Images/meeting.jpg" // Replace with your iPhone mockup image
                alt="iPhone Mockup"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-start sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Neither employees, nor freelancers
          </h1>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            We know that hire employees could be very difficult and expensive
            considering the salary, medical assurance, licenses, taxes and
            training.
          </p>
          <p className="mb-2 text-lg sm:text-2xl text-gray-600">
            On the other hand, hiring a freelancer is maybe the cheapest
            solution you can get, but paying less will probably make you pay
            double or triple for disappointing results.
          </p>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            An already trained team from our software house is often the best
            solution to avoid waste of time and obtain the best job without side
            costs. Qubex engineers would join the existing in-house
            team and work closely with them as a unique team.
          </p>
        </div>
      </div>

      
      <HowWeDevelop />

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto">
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

export default DevelopmentTeam;
