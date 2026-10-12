import React from "react";
import { Link } from "react-router-dom"; // Ensure `Link` is imported
import { motion } from "framer-motion"; // Import framer-motion for animation
import {
  FaHome,
  FaPlane,
  FaGamepad,
  FaGraduationCap,
  FaLeaf,
  FaMedkit,
  FaBusinessTime,
  FaGlobeAmericas,
  FaFilm,
  FaCalendarAlt,
  FaCreditCard,
  FaHandHoldingUsd,
  FaTruck,
  FaStore,
  FaShippingFast,
  FaBuilding,
} from "react-icons/fa"; // Import required icons
import { BsBank2 } from "react-icons/bs"; // Import additional required icons

const Industries = () => {
  // Industries data
  const industriesData = [
    // { to: "/agritech", icon: <FaHome />, text: "AgriTech" },
    // { to: "/aviation", icon: <FaPlane />, text: "Aviation" },
    // { to: "/banking-fintech", icon: <BsBank2 />, text: "Banking & Fintech" },
    // { to: "/casino-games", icon: <FaGamepad />, text: "Casino Games" },
    { to: "/e-learning", icon: <FaGraduationCap />, text: "E-Learning & Education" },
    { to: "/energy-utilities", icon: <FaLeaf />, text: "Energy & Utilities" },
    { to: "/environmental-management", icon: <FaMedkit />, text: "Environmental Management" },
    { to: "/gaming", icon: <FaGamepad />, text: "Gaming" },
    { to: "/healthcare", icon: <FaMedkit />, text: "Healthcare" },
    { to: "/hospitality", icon: <FaBusinessTime />, text: "Hospitality & Travel" },
    { to: "/hcm", icon: <FaGlobeAmericas />, text: "Human Capital Management (HCM)" },
    { to: "/media-entertainment", icon: <FaFilm />, text: "Media & Entertainment" },
    { to: "/meetings-events", icon: <FaCalendarAlt />, text: "Meetings & Events" },
    { to: "/mortgage-lending", icon: <FaCreditCard />, text: "Mortgage & Lending" },
    { to: "/nonprofit", icon: <FaHandHoldingUsd />, text: "Nonprofit" },
    { to: "/oil-gas", icon: <FaTruck />, text: "Oil & Gas" },
    { to: "/political-campaigns", icon: <FaStore />, text: "Political Campaigns" },
    { to: "/retail", icon: <FaShippingFast />, text: "Retail" },
    { to: "/real-estate", icon: <FaBuilding />, text: "Real Estate" },
    { to: "/sports", icon: <FaTruck />, text: "Sports" },
    { to: "/supply-chain", icon: <FaShippingFast />, text: "Supply Chain" },
    { to: "/telecommunications", icon: <FaGlobeAmericas />, text: "Telecommunications" },
    { to: "/transportation", icon: <FaTruck />, text: "Transportation" },
  ];

  return (
    <>
      {/* Industries Grid */}
      <div className="grid bg-black grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 gap-6 py-0 sm:py-20 ">
        {industriesData.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Link
              to={industry.to}
              className="flex items-center space-x-2 bg-[#171717] p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="text-blue-500 text-2xl">{industry.icon}</div>
              {/* Text */}
              <span className="text-white font-medium">{industry.text}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Industries;
