import React from "react";
import { FaAngular } from "react-icons/fa";
import { DiPostgresql, DiReact } from "react-icons/di";
import { TbBrandMongodb } from "react-icons/tb";
import intelchainLogo from "/Images/intelchain.png";
import noddiImage from "/Images/noddipage.png";
// import bywinn from "/Images/bywinnpage.png";
import aramco from "/Images/aramco.png";
import laconic from "/Images/laconic.png";
import CaseStudyCard from "../../components/CaseStudyCard";
import { Link } from "react-router-dom";

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

  // {
  //   category: "Computer Software",
  //   title: "Bywinn",
  //   description:
  //     "ByWinn delivers innovative and tailored digital solutions, including web design and e-commerce platforms, to help businesses succeed. We combine creativity, technical expertise, and collaboration to create impactful results. Success is our promise in every project we undertake.",
  //   industry: "Computer software",
  //   country: "US",
  //   technologies: [{ icon: <DiReact /> }, { icon: <TbBrandMongodb /> }],
  //   buttonText: "READ CASE",
  //   buttonLink: "https://bywinn.com/",
  //   imageSrc: bywinn, // Correctly passing the image path
  // },
  {
    category: "Computer Software",
    title: "Intelchain",
    description:
      "IntelChain transforms industries, empowers secure transactions, and strengthens security with its advanced blockchain technology.",
    industry: "Computer software",
    country: "Singapore",
    technologies: [{ icon: <FaAngular /> }, { icon: <DiPostgresql /> }],
    buttonText: "READ CASE",
    buttonLink: "https://intelchain.org/",
    imageSrc: intelchainLogo, // Correctly passing the image path
  },
  {
    category: "Computer Software",
    title: "aramco",
    description:
      "Through our tailored software solution, we enhanced industrial value connectivity, substantially improving operational safety and efficiency. This initiative focused on optimizing processes, integrating advanced technology, and boosting overall productivity, making a significant impact on the industry's performance.",
    industry: "Computer software",
    country: "US",
    technologies: [{ icon: <DiReact /> }, { icon: <TbBrandMongodb /> }],
    buttonText: "READ CASE",
    buttonLink: "https://www.aramco.com/en",
    imageSrc: aramco, // Correctly passing the image path
  },
  {
    category: "Computer Software",
    title: "Laconic",
    description:
      "Laconic is at the forefront of the carbon credit ecosystem, fostering transparency and security in carbon trading. Our solutions enable traceable, verifiable transactions, ensuring trust in carbon offset programs. We leverage cutting-edge technology to streamline processes, making carbon credits more accessible and reliable for all stakeholders.",
    industry: "Computer software",
    country: "US",
    technologies: [{ icon: <DiReact /> }, { icon: <TbBrandMongodb /> }],
    buttonText: "READ CASE",
    buttonLink: "https://www.laconicglobal.com/",
    imageSrc: laconic, // Correctly passing the image path
  },
];

const CaseStudy = () => {
  return (
    <>
      <div className="relative text-white">
        {/* Image Section with Text Overlay */}
        <div className="relative">
          <img
            src="/Images/casestudy.jpg" // Replace with your uploaded image URL
            alt="Custom Software Development"
            className="w-full h-[800px] md:h-[600px] object-cover"
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col sm:pt-20 pt-10 bg-black bg-opacity-50 px-6 py-12 sm:py-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 mt-20 text-white">
              Our team brings projects to life with quality-oriented, lifelong
              partnerships
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300  w-[90%] sm:w-[80%]  mb-6">
              Take a look at our case studies, accomplishments with partners,
              and products we've pioneered.
            </p>
         <Link
  to="/contact"
  className="
    inline-flex items-center justify-center
    w-full sm:w-auto
    bg-[#171717] text-white
    px-5 sm:px-8
    py-3
    text-sm sm:text-base
    rounded-lg
    transition
    hover:bg-[#272727]
  "
>
  Start Your Project →
</Link>

          </div>
        </div>
      </div>
      <div className="space-y-10 py-20 px-2">
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
    </>
  );
};

export default CaseStudy;
