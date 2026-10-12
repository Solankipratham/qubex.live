import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animation
import {
  FaEthereum,
  FaCloud,
  FaAndroid,
  FaTools,
  FaCog,
  FaUserFriends,
  FaVrCardboard,
  FaGamepad,
  FaPencilRuler,
  FaClipboardCheck,
  FaGraduationCap,
} from "react-icons/fa";

const Services = () => {
  // Services data
  const servicesData = [
    {
      to: "/nft-blockchain-development",
      icon: <FaEthereum />,
      title: "NFT & Blockchain Development",
      description: "Blockchain and NFTs create massive opportunities.",
    },
    {
      to: "/web-saas-platform-development",
      icon: <FaCloud />,
      title: "Web SaaS Platform Development",
      description:
        "Build scalable web SaaS platforms with our expert team and cutting-edge technology.",
    },
    {
      to: "/android-ios-development",
      icon: <FaAndroid />,
      title: "Android & iOS Development",
      description:
        "Empower your business with our expert Android and iOS app development.",
    },
    {
      to: "/custom-software-development",
      icon: <FaTools />,
      title: "Custom Software Development",
      description:
        "Web and mobile custom software development tailored to your business.",
    },
    {
      to: "/digital-transformation",
      icon: <FaCog />,
      title: "Digital Transformation",
      description:
        "Digital transformation is a set of tools that takes your company from today to the future.",
    },
    {
      to: "/Development-Team",
      icon: <FaUserFriends />,
      title: "Development Team Augmentation",
      description:
        "Hiring a dedicated agile team that will work with your in-house developers.",
    },
    // {
    //   to: "/vr-ar-mr-development",
    //   icon: <FaVrCardboard />,
    //   title: "VR/AR/MR Development",
    //   description:
    //     "Software solutions for VR, AR, and MR across platforms, reshaping interaction and learning.",
    // },
    {
      to: "/game-development",
      icon: <FaGamepad />,
      title: "Game Development",
      description:
        "Crafting captivating gaming experiences with passion, precision, and artistry.",
    },
    {
      to: "/ui-ux-design",
      icon: <FaPencilRuler />,
      title: "UI/UX Design",
      description:
        "Improve your digital product with a user-centric interface, highly appealing and easy to use.",
    },
    {
      to: "/software-quality-assurance",
      icon: <FaClipboardCheck />,
      title: "Software Quality Assurance",
      description:
        "Bug-free software ensured through manual and automated testing by our expert QA teams.",
    },
    {
      to: "/recruiting-training",
      icon: <FaGraduationCap />,
      title: "Recruiting and Academy Training",
      description:
        "Top-tier talent acquisition and tailored training programs.",
    },
  ];

  return (
    <div className="grid px-5 bg-black py-0 sm:py-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {servicesData.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Link
            to={service.to}
            className="bg-[#171717] text-white flex flex-col items-start rounded-lg p-4 shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            {/* Icon */}
            <div className=" text-blue-700  text-xl flex items-center gap-x-2  transition-all duration-300">
              {service.icon}
              <h3 className="text-blue-700 font-bold text-lg  transition-all duration-300">
                {service.title}
              </h3>
            </div>

            {/* Title and Description */}
            <div className="mt-4">
              <p className=" transition-all duration-300">
                {service.description}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
