import React from "react";
import {
  FaCog,
  FaUsers,
  FaRocket,
  FaHandshake,
  FaCode,
  FaHeadset,
  FaBuilding,
  FaHeartbeat,
  FaGamepad,
  FaShoppingCart,
  FaCheckCircle,
  FaTools,
  FaLaptopCode,
  FaSearch,
  FaBullseye,
} from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { GiBrain } from "react-icons/gi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";
// import loopVideo from "../../assets/Images/Loop Qubex.mp4"; // Adjust the path based on your project
import InteractiveSection from "../../components/InteractiveSection";

const QualityAssuranceSection = () => {
  const testingFeatures = [
    {
      icon: <FaCheckCircle className="text-blue-600 text-2xl" />,
      title: "User acceptance testing",
      description:
        "Automated tests will find bugs that you can’t get a read of, and prevent them from happening again and again.",
    },
    {
      icon: <FaTools className="text-blue-600 text-2xl" />,
      title: "Sanity and smoke testing",
      description:
        "Unlike manual testing, automated testing can process larger data volumes, providing much test coverage.",
    },
    {
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
      title: "Regression testing",
      description:
        "Reducing the time required to perform tests, automation can definitely increase overall productivity.",
    },
    {
      icon: <FaCog className="text-blue-600 text-2xl" />,
      title: "Compatibility testing",
      description:
        "Thanks to automated tests, your QA teams can focus on important tasks without wasting time looking for bugs or regressions manually.",
    },
    {
      icon: <FaBullseye className="text-blue-600 text-2xl" />,
      title: "Performance testing",
      description:
        "You can accelerate the time-to-market of your software because automated tests can be run quickly, decreasing the overall testing time.",
    },
    {
      icon: <FaSearch className="text-blue-600 text-2xl" />,
      title: "Unit testing",
      description:
        "While automated tests are running, your teams can focus on testing different and most important functionality.",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Error-free adventures: why quality assurance testing is essential
            for seamless VR journeys
          </h2>
          <p className="text-gray-600">
            With an unwavering commitment to excellence, we meticulously test
            and optimize every aspect of our VR experiences, ensuring flawless
            performance and uninterrupted immersion for users to embark on
            captivating virtual adventures. Through rigorous quality assurance,
            we deliver unforgettable journeys that showcase our dedication to
            crafting cutting-edge VR solutions.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <img
              src="/Images/mr.jpg" // Replace with actual image path
              alt="Quality Assurance VR"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Features Section */}
          <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {testingFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-start p-4 bg-white shadow-sm rounded-lg hover:shadow-md transition"
              >
                {feature.icon}
                <h3 className="mt-2 text-lg font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DomainIndustryApplication = () => {
  const industries = [
    {
      icon: <FaBuilding className="text-blue-600 text-3xl" />,
      label: "Real Estate",
    },
    {
      icon: <FaHeartbeat className="text-blue-600 text-3xl" />,
      label: "Healthcare",
    },
    { icon: <MdTour className="text-blue-600 text-3xl" />, label: "Tourism" },
    { icon: <FaGamepad className="text-blue-600 text-3xl" />, label: "Gaming" },
    {
      icon: <FaShoppingCart className="text-blue-600 text-3xl" />,
      label: "Retail",
    },
    {
      icon: <IoSchool className="text-blue-600 text-3xl" />,
      label: "Education",
    },
    {
      icon: <GiBrain className="text-blue-600 text-3xl" />,
      label: "Neuroscience",
    },
    {
      icon: <AiOutlineShareAlt className="text-blue-600 text-3xl" />,
      label: "Social",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-10">
          <div className="sm:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Domain and industry application
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Virtual Reality and Augmented Reality are shaping a range of
              industries worldwide. Whether it's about giving your customers a
              virtual tour of a travel destination or an interactive shopping
              experience, VR and AR technologies are making it happen. By
              fostering customer engagement, streamlining operations, and
              sparking innovation, they're playing a crucial role in modern
              business growth. In essence, embracing VR and AR means staying
              ahead in your business journey.
            </p>
          </div>
          <div className="sm:w-1/2 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {industry.icon}
                <h3 className="mt-2 text-sm font-medium text-gray-800">
                  {industry.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MRDevelopment = () => {
  const testingFeatures = [
    {
      icon: <FaCheckCircle className="text-blue-600 text-2xl" />,
      title: "User acceptance testing",
      description:
        "Automated tests will find bugs that you can’t get a read of, and prevent them from happening again and again.",
    },
    {
      icon: <FaTools className="text-blue-600 text-2xl" />,
      title: "Sanity and smoke testing",
      description:
        "Unlike manual testing, automated testing can process larger data volumes, providing much test coverage.",
    },
    {
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
      title: "Regression testing",
      description:
        "Reducing the time required to perform tests, automation can definitely increase overall productivity.",
    },
    {
      icon: <FaCog className="text-blue-600 text-2xl" />,
      title: "Compatibility testing",
      description:
        "Thanks to automated tests, your QA teams can focus on important tasks without wasting time looking for bugs or regressions manually.",
    },
    {
      icon: <FaBullseye className="text-blue-600 text-2xl" />,
      title: "Performance testing",
      description:
        "You can accelerate the time-to-market of your software because automated tests can be run quickly, decreasing the overall testing time.",
    },
    {
      icon: <FaSearch className="text-blue-600 text-2xl" />,
      title: "Unit testing",
      description:
        "While automated tests are running, your teams can focus on testing different and most important functionality.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative text-white">
        <div className="relative">
          <img
            src="/Images/AndroidTraining.png" // Replace with your uploaded image URL
            alt="Custom Software Development"
            className="w-full h-screen object-cover"
          />
          <div className="absolute inset-0 flex flex-col pt-10 sm:pt-20 bg-black bg-opacity-50 px-6 py-12 sm:py-16 md:py-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 mt-20 text-white">
              VR/AR/MR Development
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 w-[90%] sm:w-[80%] mb-6">
              As a leading software company, we specialize in developing
              cutting-edge Virtual Reality (VR), Augmented Reality (AR), and
              Mixed Reality (MR) solutions. Our immersive technologies are
              designed to transform user experiences and revolutionize
              industries, from entertainment to healthcare, retail, and beyond.
            </p>
            <Link to={"/contact"} className="bg-black max-w-fit text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
              Start Your Project →
            </Link>
          </div>
        </div>
      </div>

      <InteractiveSection />

      <DomainIndustryApplication />

      <div className="flex flex-col sm:flex-row sm:px-10 px-5 items-center gap-x-10 justify-center py-5 sm:py-12">
        <div className="text-start sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Get a free consultancy today
          </h1>
          <p className="mb-8 text-lg sm:text-3xl  text-gray-600">
            Let our experienced team of designers and developers bring your
            vision to life, crafting a captivating and immersive experience that
            will leave users spellbound.
          </p>
          <Link
            to="/contact"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
          >
            Get in touch
          </Link>
        </div>
        <div className="mt-10 sm:mt-0 sm:w-1/2 flex items-center justify-center">
          <div className="relative w-full pb-[56.25%]">
            <video
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              loop
              autoPlay
              muted
            >
              <source src={loopVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Error-free adventures: why quality assurance testing is essential
              for seamless VR journeys
            </h2>
            <p className="text-gray-600">
              With an unwavering commitment to excellence, we meticulously test
              and optimize every aspect of our VR experiences, ensuring flawless
              performance and uninterrupted immersion for users to embark on
              captivating virtual adventures. Through rigorous quality
              assurance, we deliver unforgettable journeys that showcase our
              dedication to crafting cutting-edge VR solutions.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="lg:w-1/2 w-full">
              <img
                src="/Images/mr.jpg" // Replace with actual image path
                alt="Quality Assurance VR"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              {testingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start p-4 bg-white shadow-sm rounded-lg hover:shadow-md transition"
                >
                  {feature.icon}
                  <h3 className="mt-2 text-lg font-bold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto">
          As a software company specializing in VR/AR/MR development, we have
          the expertise to create innovative and immersive experiences. Our team
          uses the latest technologies and industry best practices to deliver
          exceptional results that will transform your business.
        </p>
        <Link to={"/contact"} className="bg-black text-white px-8 py-3 rounded-lg hover:bg-black transition w-full sm:w-auto">
          Contact Us →
        </Link>
      </section>
    </div>
  );
};

export default MRDevelopment;
