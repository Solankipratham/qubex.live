import React, { useEffect } from "react";
import DynamicText from "../../components/DynamicText";
import { MdOutlineMessage } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
// import personImage from "../../assets/Images/mauro.png";
import ServiceCard from "../../components/ServiceCard";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoHardwareChipOutline } from "react-icons/io5";
import { RiNftLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { IoDesktopOutline } from "react-icons/io5";
import { VscDebugConsole } from "react-icons/vsc";
import { GrHostMaintenance } from "react-icons/gr";
import { FaBitcoin } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa6";
import CaseStudyCard from "../../components/CaseStudyCard";
import intelchainLogo from "/Images/intelchain.png";
import noddiImage from "/Images/noddipage.png";
import { Link } from "react-router-dom";

import { DiReact, DiPostgresql } from "react-icons/di";
import { TbBrandMongodb } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import ImageSlider from "../../components/ImageSlider";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
const servicesData = [
  {
    icon: <RiNftLine />,
    title: "NFT & Blockchain Development",
    services: [
      "Blockchain architecture",
      "Blockchain integration",
      "Blockchain as a service",
      "Business Implementation",
    ],
  },
  {
    icon: <FaBitcoin />,
    title: "Blockchain & Token Audit",
    services: [
      "Security Assessment & Identify vulnerabilities",
      "Smart Contract Review potential bugs or exploits",
      "Tokenomics Analysis token distribution and supply mechanisms.",
      "Performance Evaluation Assess the efficiency and speed",
    ],
  },
  {
    icon: <IoHardwareChipOutline />,
    title: "Custom Software Development",
    services: [
      "Software architecture design",
      "System integration services",
      "Data migration services",
      "Legacy app modernization",
    ],
  },
  {
    icon: <FaSitemap />,
    title: "Audit & IT Consulting Services",
    services: [
      "TechGuard Audit",
      "CyberSafe Audit & IT Consulting",
      "AssuranceEdge & IT Consulting",
      "IT Sentry Audit & IT Consulting",
    ],
  },
  {
    icon: <IoDesktopOutline />,
    title: "Web Application Design and Development",
    services: [
      "Web app development services",
      "Web portal development services",
      "Website development services",
      "Offshore web development",
    ],
  },
  {
    icon: <HiOutlineDevicePhoneMobile />,
    title: "Mobile App Design and Development",
    services: [
      "Android development services",
      "iOS app development services",
      "Mobile application design services",
      "Enterprise mobile app development",
    ],
  },
  {
    icon: <VscDebugConsole />,
    title: "Best UI/UX Design Services",
    services: [
      "PixelPerfection UI/UX Design",
      "DesignCraft UI/UX Design",
      "CreativeWave UI/UX Design",
      "InterfaceGenius UI/UX Design",
    ],
  },
  {
    icon: <GrHostMaintenance />,
    title: "Maintenance and Customer Support",
    services: [
      "CareCraft Maintenance",
      "FixItPro Maintenance",
      "TechCare Maintenance",
      "AssistEdge Maintenance",
    ],
  },
];

const caseStudies = [
  {
    category: "Commercialization of IntelChain’s nodes.",
    title: "Noddi",
    description:
      "Noddi plays a pivotal role in the commercialization of IntelChain’s nodes. Offering state-of-the-art node deployment and management technology, Noddi enables seamless access to staking liquidity mining, and minting within the IntelChain network.",
    industry: "Blockchain software",
    country: "Singapore",
    technologies: [{ icon: <DiReact /> }, { icon: <TbBrandMongodb /> }],
    buttonText: "READ CASE",
    buttonLink: "https://noddi.org/",
    imageSrc: noddiImage, // Correctly passing the image path
  },
  {
    category: "Computer Software",
    title: "Intelchain",
    description:
      "IntelChain transforms industries, empowers secure transactions, and strengthens security with its advanced blockchain technology.",
    industry: "Computer software",
    country: "Latam",
    technologies: [{ icon: <FaAngular /> }, { icon: <DiPostgresql /> }],
    buttonText: "READ CASE",
    buttonLink: "https://intelchain.org/",
    imageSrc: intelchainLogo, // Correctly passing the image path
  },
];

const QuoteSection = () => {
  return (
    <div className="rounded-xl ">
      {/* <div className="flex flex-col md:flex-row items-center just gap-x-5 text-black p-5 rounded-lg">
        <div className="md:w-2/3">
          <div className="text-5xl mb-2">“</div>
          <p className="text-lg mb-6">
            This year has been a pivotal one for our software development
            company, with a strong focus on blockchain projects and enterprise
            solutions for government sectors. We have expanded our technological
            leadership in blockchain, catalyzing economic engines and
            establishing links with leading economies in a competitive market.
            Looking ahead, the projections for 2025 are very promising. Our
            company is dedicated to advancing new technologies in AI, quantum
            algorithms, and blockchain. We are committed to innovation and
            excellence, driving forward with the same passion and dedication
            that has brought us success thus far. We look forward to continuing
            our growth and delivering exceptional solutions to our clients.
          </p>
          <h2 className="font-bold">Mauricio Correa</h2>
          <p>Chief Executive Officer</p>
        </div>
        <div className="md:w-1/3 items-center flex justify-center">
          <img
            src={personImage}
            alt="mauro"
            className="w-58 h-54 object-cover rounded-full sm:mt-0"
          />
        </div>
      </div> */}
    </div>
  );
};

const Home = () => {useEffect(() => {
  // Reset scroll position when the page is loaded
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      {/* Hero Section with Fullscreen Background Image */}

      <div className="relative w-full h-screen">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Images/ColibytBanner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/50 z-5"></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-start pl-0 sm:pl-14 justify-center text-white mt-52 ">
          <div className="relative z-10 px-5 max-w-4xl">
            <h2 className="uppercase text-lg md:text-xl font-semibold tracking-wide mb-4">
              Perfect Technology Solution
            </h2>
            <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-6">
              We Help Companies To Build their very own{" "}
              <span className="text-blue-200">
                <DynamicText />
              </span>
              .
            </h1>
            <p className="text-base md:text-lg mb-8 leading-relaxed">
              In today’s rapidly evolving digital landscape, staying ahead of
              the curve is essential for businesses aiming to thrive and
              succeed.
            </p>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-blue-200"></div>
                <span className="text-sm md:text-base">
                  Focus on quality first
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-blue-200"></div>
                <span className="text-sm md:text-base">
                  Get to the market on time
                </span>
              </li>
            </ul>
            <p className="mt-6 font-bold text-base md:text-lg">
              Software Consulting and Quality Development
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:px-10 px-5 items-center justify-center gap-x-10 py-5 sm:py-10">
        {/* Text Section */}
        <div className="text-start sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Explore. Inquire. Begin.
          </h1>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            Inquire about building quality products. Explore options. Begin a
            Qubex partnership.
          </p>
          <Link
            to="/contact"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Image Section (YouTube Video) */}
        <div className="mt-10 sm:mt-0 w-full sm:w-1/3 flex items-center justify-center">
          <div className="mt-10 sm:mt-0 flex items-center justify-center">
            <video className="w-full h-full rounded-lg" controls autoplay muted>
              <source src="/Images/Colibyt.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="services flex items-center justify-center flex-col pt-14 gap-y-6 px-4 md:px-8 lg:px-16">
        {/* Section Title */}
        <h1 className="text-2xl uppercase text-center">Our Services</h1>
        <p className="text-3xl md:text-4xl font-bold text-center">
          How We Can <span className="text-blue-500">Help</span> You
        </p>

        {/* Services Cards */}
        <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 ">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              services={service.services}
            />
          ))}
        </div>
      </div>

      {/* About us */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-5 sm:px-20 py-10">
        {/* Text Section */}
        <div className="sm:w-1/2 mb-8 sm:mb-0">
          <h3 className="text-xl font-bold uppercase tracking-wide text-gray-500 mb-2">
            About Us
          </h3>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            Giving partners a fresh start.
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            Many companies try budget providers first, only to realize the true
            cost of doing so. Missed deadlines. Low-quality work. Poor
            communication.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            Partners with bad past experiences with development teams are
            understandably hesitant. Still, we specialize in bringing ailing
            projects back to life.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            Qubex is an international, award-winning software development
            company. Quality meets sustainability and innovation here.
          </p>
          <Link
            to={"/about-us"}
            className="text-blue-600 font-medium inline-flex items-center"
          >
            Learn more about us
            <FiArrowRight className="ml-1 w-5 h-5" />{" "}
            {/* React icon for the arrow */}
          </Link>
        </div>

        {/* Image Section */}
        <div className="sm:w-1/2 flex items-center justify-center">
          <img
            src={"/Images/aboutus.jpg"} // Replace with the actual image URL
            alt="Qubex"
            className="rounded-lg shadow-lg object-cover w-full max-w-md"
          />
        </div>
      </div>

      {/* Background Image */}
      <div
        className="bg-cover bg-center w-full h-screen z-[-10]"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url("/Images/bg1.png") no-repeat center center fixed`,
          backgroundSize: "cover", // Ensures the background covers the container
          backgroundAttachment: "fixed", // Keeps the image fixed while scrolling
        }}
      >
        <div className="flex flex-col items-start p-6 md:p-10">
          {/* Heading */}
          <h1 className="text-4xl md:text-8xl w-full md:w-3/4 leading-snug text-white">
            We are committed to delivering sustainable solutions
          </h1>

          {/* Paragraph */}
          <p className="text-lg md:text-2xl pt-4 md:pt-5 w-full md:w-4/5 leading-relaxed text-white">
            We will not sacrifice the long term for the short term. We are
            committed to enhancing the communities and environment that we share
            with our colleagues, partners, and customers. We assess and monitor
            all projects and activities against social, environmental, and
            financial impacts to ensure we deliver sustainable outcomes.
          </p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="">
        <QuoteSection />
      </div>

      {/* Case Study */}
      <div className="flex flex-col sm:flex-row sm:px-10 px-5 items-center justify-around py-5 sm:py-16">
        {/* Text Section */}
        <div className="text-start sm:w-1/2">
          <h1 className="text-2xl uppercase  sm:text-3xl md:text-4xl lg:text-5xl">
            Our Showcase
          </h1>
          <p className="text-4xl font-bold pb-5 sm:text-5xl md:text-6xl lg:text-7xl">
            Our latest <span className="text-blue-500">Case</span> Studies
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Working across industries
          </h1>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            Delivering tailored software solutions across industries, from
            gaming to manufacturing.
          </p>
          <Link
            to={"/casestudy"}
            className="text-blue-600 text-2xl font-medium inline-flex items-center"
          >
            View all case studies
            <FiArrowRight className="ml-1 w-5 h-5" />{" "}
            {/* React icon for the arrow */}
          </Link>
        </div>
        <div className="w-full sm:w-1/2">
          <ImageSlider />
        </div>
      </div>

      {/* Case Studies */}
      <div className="services flex items-center justify-center flex-col pt-14 gap-y-2 px-4 md:px-8 lg:px-10">
        <div className="space-y-10 p-2">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              category={study.category}
              title={study.title}
              description={study.description}
              industry={study.industry}
              country={study.country}
              technologies={study.technologies}
              buttonText={study.buttonText}
              buttonLink={study.buttonLink}
              imageSrc={study.imageSrc}
            />
          ))}
        </div>
        <Link
          className="hover:bg-[#272727] text-white bg-[#171717]  px-7 py-2 rounded-full mt-2"
          to={"casestudy"}
        >
          More
        </Link>
      </div>

      <div className="flex flex-col items-center text-center py-10 bg-white">
        <p className="text-gray-600 mt-4 max-w-2xl">
          Your project is unique. So is the right approach. Reach out today, and
          share your requirements. Let us envision and develop a path towards
          mutual success.
        </p>
        <div className="flex items-center pb-10 pt-5 space-x-4">
          <FiChevronRight className="text-blue-600 text-2xl" />
          <div className="text-blue-600 text-2xl font-semibold">
            <Link to={"/contact"}>Get in touch</Link>
          </div>
          <FiChevronLeft className="text-blue-600 text-2xl" />
        </div>
      </div>
    </>
  );
};

export default Home;
