import React from "react";
import { FaLock, FaChartLine, FaServer } from "react-icons/fa"; // Importing icons from React Icons
import { FaShieldAlt, FaEye, FaProjectDiagram } from "react-icons/fa"; // Importing relevant icons
import { FaSyncAlt, FaShareAlt } from "react-icons/fa"; // Importing icons from react-icons
import img2 from "../../assets/Images/Servicesbg.png";
import { Link } from "react-router-dom";

import {
  FaBuilding,
  FaBrain,
  FaUniversity,
  FaTools,
  FaLaptopMedical,
} from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { AiOutlineBank } from "react-icons/ai";
import { GiHealthNormal } from "react-icons/gi";
import { CiCreditCard1 } from "react-icons/ci";
import {
  FaCogs,
  FaLaptopCode,
  FaPenFancy,
  FaCheckCircle,
} from "react-icons/fa";

const TeamSolution = () => {
  const services = [
    {
      title: "Front End",
      description:
        "Responsive interface, grid-based, reusable components, design pattern, state management",
      icon: <FaLaptopCode size={40} />,
    },
    {
      title: "Back End & DevOps",
      description:
        "Clusters design, micro-services, RDBMS & NoSQL, REST & Graph API",
      icon: <FaCogs size={40} />,
    },
    {
      title: "Full Stack Developer & Tech Leads",
      description:
        "Software architectures, reviews, boilerplate decisions, R&D, feasibility assessment",
      icon: <FaTools size={40} />,
    },
    {
      title: "UI/UX Design & Illustration",
      description:
        "User flows, wireframes, hi-fi prototypes, animations, web design, and game assets",
      icon: <FaPenFancy size={40} />,
    },
    {
      title: "Agile Project Manager",
      description:
        "SCRUM, OKRs, team management, blockers analysis, communication, retrospectives, daily updates",
      icon: <FaProjectDiagram size={40} />,
    },
    {
      title: "Quality Assurance",
      description:
        "UAT, regression, performance, compatibility, UI, sanity, and smoke testing",
      icon: <FaCheckCircle size={40} />,
    },
  ];

  return (
    <div className="p-8 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Full team turnkey solution</h2>
        <p className="text-gray-600">
          Our dedicated agile teams guarantee the success of your web
          development products. With expertise and collaboration, we deliver
          high-quality results on time. Trust us to bring your vision to life
          for outstanding digital projects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-blue-500 mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const industries = [
    { icon: <MdOutlineRealEstateAgent size={40} />, name: "Real Estate" },
    { icon: <FaBrain size={40} />, name: "Neuroscience" },
    { icon: <AiOutlineBank size={40} />, name: "Banking" },
    { icon: <CiCreditCard1 size={40} />, name: "Insurance" },
    { icon: <FaTools size={40} />, name: "Constructions" },
    { icon: <FaUniversity size={40} />, name: "Education" },
    { icon: <FaLaptopMedical size={40} />, name: "Workflow Management System" },
    { icon: <GiHealthNormal size={40} />, name: "Healthcare" },
  ];

  return (
    <div className="p-8 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Decade of experience, 30+ SaaS platforms across diverse industries
        </h2>
        <p className="text-gray-600">
          With a decade of experience under our belt, we've successfully
          developed over 30 SaaS platforms and web applications, delivering
          bespoke solutions for an array of sectors. We've demonstrated
          exceptional expertise in developing software and digital tools for the
          Banking, Insurance, Neuroscience, Constructions, Real Estate,
          Education, Healthcare, and several other sectors.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-blue-500 mb-2">{industry.icon}</div>
            <span className="font-medium text-gray-700">{industry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SaaSPlatformPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Image Section with Text Overlay */}
        <div className="relative">
          <img
            src="/Images/webdevelopment.jpg" // Replace with your uploaded image URL
            alt="Custom Software Development"
            className="w-full h-screen object-cover"
          />

          {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center bg-black/50 px-4 sm:px-8 md:px-14 lg:px-24 py-16 sm:py-20 md:py-32">
  
  <h1 className="text-white font-bold leading-tight 
                 text-2xl sm:text-4xl md:text-5xl lg:text-6xl 
                 mt-16 sm:mt-0 mb-4 max-w-4xl">
    Web SaaS Platform Development
  </h1>

  <p className="text-gray-300 
                text-base sm:text-lg md:text-xl lg:text-2xl 
                max-w-3xl mb-6">
    We specialize in creating scalable, secure, and decentralized SaaS
    platforms powered by blockchain technology. Our blockchain-based
    SaaS solutions are designed to transform businesses and provide
    unmatched transparency and efficiency.
  </p>

  <Link
    to="/contact"
    className="inline-flex items-center justify-center 
               bg-black text-white 
               px-6 sm:px-8 py-3 
               rounded-lg 
               text-sm sm:text-base 
               w-full sm:w-fit 
               transition hover:bg-white hover:text-black"
  >
    Start Your Project →
  </Link>

</div>

        </div>
      </div>

      {/* Background Image */}
      <div>
        <div className="flex items-start p-10 flex-col">
          <h1 className="text-blue-700 font-bold text-4xl sm:text-5xl md:text-6xl w-full sm:w-2/3">
            About Our Blockchain SaaS Platform
          </h1>
          <p className="text-black text-xl sm:text-2xl pt-5 w-full sm:w-4/5">
            Our SaaS platform leverages the power of blockchain to provide a
            secure, transparent, and decentralized environment for your business
            operations. We offer tailored solutions that enhance performance,
            reduce fraud, and improve operational efficiency, all while ensuring
            the integrity of your data and transactions.
          </p>
        </div>
      </div>

      {/* Blockchain Features Section */}
      <section className="py-16 px-6 mt-18 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Blockchain Security Feature */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaShieldAlt className="text-blue-600 mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Blockchain Security
            </h3>
            <p className="text-gray-400">
              Blockchain technology ensures the highest level of security with
              decentralized control and cryptographic hashing, reducing risks
              and ensuring data integrity.
            </p>
          </div>

          {/* Full Transparency Feature */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaEye className="text-blue-600 mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Full Transparency
            </h3>
            <p className="text-gray-400">
              Our SaaS platform offers full transparency by making transaction
              data visible to all parties involved, creating an ecosystem built
              on trust.
            </p>
          </div>

          {/* Decentralized Management Feature */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaProjectDiagram className="text-blue-600 mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Decentralized Management
            </h3>
            <p className="text-gray-400">
              With decentralized architecture, our platform eliminates single
              points of failure, enhancing scalability and reducing operational
              risks.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row sm:px-10 px-5 items-start  justify-around py-10 sm:py-20">
        {/* Text Section */}
        <div className="text-start sm:w-1/2 ">
          <p className="mb-6 text-2xl sm:text-2xl text-gray-600">
            Eager to digitize your vision?
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Custom Web & SaaS Platform Development Services
          </h1>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            Turn your business ideas into tangible web solutions. From
            enterprise tools to comprehensive SaaS platforms, we harness the
            latest in web technologies and trends to offer you a competitive
            edge in the digital world.
          </p>
          <Link
            to="/contact"
            className="bg-black text-white px-6 py-3  rounded-full hover:bg-gray-800 transition duration-300"
          >
            Receive a quotation
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center  relative">
          <div className="flex sm:py-0 py-10">
            {/* iPhone Mockup */}
            <div className="w-full h-full">
              <img
                src="/Images/saas.jpg" // Replace with your iPhone mockup image
                alt="saas"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <ExperienceSection />
      </div>

      {/* SaaS Platform Features */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">
          Features of Our Blockchain SaaS Platform
        </h2>
        <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto">
          Our platform includes advanced features that harness blockchain
          technology to streamline your business processes. From secure data
          storage to efficient contract execution, discover how our SaaS
          platform can help your company grow.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 - Smart Contracts */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaLock className="text-blue-600 mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Smart Contracts
            </h3>
            <p className="text-gray-400">
              Automate agreements and streamline business workflows with
              blockchain-based smart contracts, ensuring secure and
              self-executing transactions.
            </p>
          </div>

          {/* Feature 2 - Real-Time Data Analytics */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaChartLine className="text-blue-600 mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Real-Time Data Analytics
            </h3>
            <p className="text-gray-400">
              Leverage blockchain’s transparent and immutable data for real-time
              analytics, gaining valuable insights and driving informed
              decisions.
            </p>
          </div>

          {/* Feature 3 - Scalable Infrastructure */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaServer className="text-blue-600 mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Scalable Infrastructure
            </h3>
            <p className="text-gray-400">
              Our platform is designed to scale with your business needs,
              offering flexible infrastructure to accommodate growth and
              increase efficiency.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row sm:px-10 px-5 items-center  justify-around py-10 sm:py-20">
        {/* Text Section */}
        <div className="text-start sm:w-1/2 ">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Responsive design approach
          </h1>
          <p className="mb-6 text-lg sm:text-2xl text-gray-600">
            Responsive web design, or RWD, is a design approach that addresses
            the range of devices and device sizes, enabling automatic adaption
            to the screen, whether the content is viewed on a tablet, phone,
            television, or watch.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center  relative">
          <div className="flex sm:py-0 py-10">
            {/* iPhone Mockup */}
            <div className="w-full h-auto">
              <img
                src="/Images/responsive.jpg" // Replace with your iPhone mockup image
                alt="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <TeamSolution />
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6  text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto">
          As pioneers in blockchain-based SaaS development, we offer tailored
          solutions that optimize your business processes while ensuring
          security, scalability, and trust. Our team is committed to delivering
          innovative solutions that empower your business to succeed in the
          digital era.
        </p>
        <Link to={"/contact"} className="bg-black text-white px-8 py-3 rounded-lg transition">
          Contact Us →
        </Link>
      </section>
    </div>
  );
};

export default SaaSPlatformPage;
