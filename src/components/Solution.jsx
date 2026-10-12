import React from "react";
import { Link } from "react-router-dom"; // Ensure `Link` is imported
import { motion } from "framer-motion"; // Import framer-motion for animation
import {
  FaBrain,
  FaRobot,
  FaVrCardboard,
  FaDatabase,
  FaCloud,
  FaFingerprint,
  FaProjectDiagram,
  FaChartLine,
  FaNetworkWired,
  FaDigitalTachograph,
  FaServer,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa"; // Import required icons

const Solution = () => {
  // Solutions data
  const solutionsData = [
    { to: "/artificial-intelligence", icon: <FaBrain />, text: "Artificial Intelligence" },
    { to: "/animation-solution", icon: <FaRobot />, text: "Animation Solutions" },
    { to: "/ar-vr", icon: <FaVrCardboard />, text: "AR/VR" },
    { to: "/asset-tracking", icon: <FaDatabase />, text: "Asset Tracking" },
    { to: "/autodesk", icon: <FaCloud />, text: "Autodesk Solutions" },
    { to: "/cloud-computing", icon: <FaCloud />, text: "Cloud Computing" },
    { to: "/biometric", icon: <FaFingerprint />, text: "Biometric" },
    { to: "/blockchain", icon: <FaProjectDiagram />, text: "Blockchain" },
    { to: "/business-intelligence-analytics", icon: <FaChartLine />, text: "Business Intelligence" },
    { to: "/cms", icon: <FaDatabase />, text: "CMS" },
    { to: "/crm", icon: <FaNetworkWired />, text: "CRM Solutions" },
    { to: "/database", icon: <FaDatabase />, text: "Database" },
    { to: "/digital-asset", icon: <FaDigitalTachograph />, text: "Digital Asset Management" },
    { to: "/digital-marketing", icon: <FaChartLine />, text: "Digital Marketing" },
    { to: "/digital-signage", icon: <FaDatabase />, text: "Digital Signage" },
    { to: "/document-management", icon: <FaFingerprint />, text: "Document Management" },
    { to: "/embedded-software", icon: <FaDatabase />, text: "Embedded Software" },
    { to: "/erp", icon: <FaDatabase />, text: "ERP" },
    { to: "/facilities-management", icon: <FaDatabase />, text: "Facilities Management" },
    { to: "/field-service", icon: <FaDatabase />, text: "Field Service" },
    { to: "/firmware-solutions", icon: <FaDatabase />, text: "Firmware Solutions" },
    { to: "/franchise-management", icon: <FaDatabase />, text: "Franchise Management" },
    { to: "/fraud-protection", icon: <FaDatabase />, text: "Fraud Protection" },
    { to: "/gis", icon: <FaDatabase />, text: "GIS" },
    { to: "/iot-m2m", icon: <FaCloud />, text: "IoT & M2M" },
    { to: "/it-service", icon: <FaDatabase />, text: "IT Service" },
    { to: "/kiosk", icon: <FaServer />, text: "Kiosk Solutions" },
    { to: "/location-based-services", icon: <FaMapMarkerAlt />, text: "Location-Based Services" },
    { to: "/netsuite", icon: <FaDatabase />, text: "NetSuite" },
    { to: "/pos-payment", icon: <FaDatabase />, text: "POS Payment" },
    { to: "/salesforce", icon: <FaDatabase />, text: "Salesforce" },
    { to: "/sales-management", icon: <FaDatabase />, text: "Sales Management" },
    { to: "/sap", icon: <FaDatabase />, text: "SAP" },
    { to: "/telephony", icon: <FaDatabase />, text: "Telephony" },
    { to: "/ticketing", icon: <FaDatabase />, text: "Ticketing" },
    { to: "/uipath", icon: <FaDatabase />, text: "UiPath" },
    { to: "/ui-ux", icon: <FaDatabase />, text: "UI/UX" },
    { to: "/wearable", icon: <FaMobileAlt />, text: "Wearable Technology" },
  ];

  return (
    <div className="grid  bg-black grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 px-4 gap-6 py-0 sm:py-20">
      {solutionsData.map((solution, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Link
            to={solution.to}
            className="flex items-center space-x-2 bg-[#171717] p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Icon */}
            <div className="text-blue-500 text-lg group-hover:text-blue-500 transition-all duration-300">
              {solution.icon}
            </div>
            {/* Text */}
            <span className="text-white">{solution.text}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Solution;
