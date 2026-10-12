import React from "react";
import { FaRegCircleDot } from "react-icons/fa6";
const ServiceCard = ({ icon, title, services }) => {
  return (
    <div
      className="bg-[#e8eaee] shadow-lg py-10 px-5 w-full md:max-w-sm mx-auto mb-6 rounded-lg"
      // style={{
      //   clipPath: "polygon(79% 0, 90% 9%, 100% 18%, 100% 100%, 0 100%, 0% 60%, 0 0)",
      // }}
    >
      <div className="flex items-start gap-x-4 space-y-3 mb-4">
        <h1 className="text-5xl">{icon}</h1>
        <h2 className="text-lg font-semibold text-black">{title}</h2>
      </div>
      <ul className="space-y-3">
        {services.map((service, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 bg-white rounded-md px-2 py-2"
          >
            <span className="text-blue-500 text-xl "><FaRegCircleDot /></span>
            <span className="text-gray-700">{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
