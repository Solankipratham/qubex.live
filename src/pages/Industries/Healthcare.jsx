import React from "react";
import {
  FaRobot,
  FaHeartbeat,
  FaStethoscope,
  FaLaptopMedical,
  FaChartLine,
  FaMobileAlt,
  FaCogs,
  FaCloud,
} from "react-icons/fa";

import { Link } from "react-router-dom";
const Healthcare = () => {
  return (
    <div className="">
      <div
        className="bg-cover opacity-6 bg-center w-full h-screen sm:h-[600px] z-[-10]"
        style={{
          background: `url(/Images/banner.png) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundAttachment: "fixed", // Keeps the image fixed
        }}
      >
        <div className="flex items-left text-white pt-10 sm:pt-20 px-10 flex-col">
          <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
            Employee Healthcare & Wellness
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            At our company, we prioritize the health and well-being of our
            employees. We understand that a healthy and happy workforce is the
            backbone of our success, and we are dedicated to providing
            comprehensive healthcare services and support to all of our team
            members.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>
      {/* Hero Section */}

      <div className="px-6 py-16 bg-gray-50">
        <div className="container mx-auto">
          {/* AI-Powered Custom Healthcare Software Development Solutions Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-800">
              AI-Powered Custom Healthcare Software Development Solutions
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Our expert-level software developers leverage the power and
              versatility of Artificial Intelligence (AI) to design and
              implement innovative solutions to meet the healthcare industry’s
              evolving needs. Our transformative solutions enable healthcare
              providers and institutions to modernize medicine by deploying
              cutting-edge resources designed to improve workflows, processes,
              and optimize patient engagement and care.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <FaRobot className="text-indigo-500 text-4xl mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                AI-Enabled Remote Monitoring
              </h3>
              <p className="text-gray-600">
                Our skilled software developers enable healthcare professionals
                to monitor patients remotely in real-time, reducing the expenses
                of patient triage while providing a unique insight into patient
                health.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <FaHeartbeat className="text-indigo-500 text-4xl mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                AI-Powered EHRs
              </h3>
              <p className="text-gray-600">
                Electronic Health Record platforms are integral to streamlining
                patient documents. We build AI-powered EHR with features like
                intelligent data entry, personalized care recommendations, and
                clinical decision support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <FaStethoscope className="text-indigo-500 text-4xl mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                Natural Language Processing
              </h3>
              <p className="text-gray-600">
                We transform complex data into a medically-based language to
                support medical providers in delivering customized patient care
                plans, enhancing communication between healthcare providers and
                EHR systems.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:w-1/2">
              <img
                src="/Images/HealthcareSoftware.png" // Replace with the actual image URL
                alt="Environmental Management"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <FaLaptopMedical className="text-indigo-500 text-4xl mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                Medical AI Chatbots
              </h3>
              <p className="text-gray-600">
                Our AI chatbots utilize Natural Language Processing (NLP) to
                increase patient engagement and automate patient data collection
                and inquiries, reducing reliance on traditional communication
                channels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <FaChartLine className="text-indigo-500 text-4xl mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800">
                Medical Imaging Analysis
              </h3>
              <p className="text-gray-600">
                We seamlessly integrate AI-based, predictive analytics to
                monitor and analyze medical images to eliminate human error and
                assist in accurate diagnoses, enhancing overall patient care.
              </p>
            </div>
          </div>

          <div className="px-6 py-16 bg-gray-50">
            <div className="container mx-auto">
              {/* EHR App Development Section Title */}
              <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold text-gray-800">
                  Electronic Health Record / Medical Record App Development
                </h2>
                <p className="text-lg text-gray-600 mt-4">
                  We engineer custom web, desktop, or mobile apps that promote
                  enhanced interoperability, streamline clinical workflows, and
                  improve doctor-patient communications. Healthcare IT software
                  implementation is useful for tracking critical information in
                  the medical system.
                </p>
              </div>

              {/* Service Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                  <FaMobileAlt className="text-indigo-500 text-4xl mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Mobile App Development
                  </h3>
                  <p className="text-gray-600">
                    Provide custom design and development of eHealth apps that
                    allow patients and medical providers seamlessly exchange
                    health-related information, track patient data, and more.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                  <FaCogs className="text-indigo-500 text-4xl mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Implementation Services
                  </h3>
                  <p className="text-gray-600">
                    Healthcare app developers facilitate the implementation of
                    legacy record of medical software system evaluation, data
                    migration, user training, pilot testing, ICD-10 codes, and
                    more.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                  <FaCloud className="text-indigo-500 text-4xl mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Integration Services
                  </h3>
                  <p className="text-gray-600">
                    Integrate third-party technologies for cloud-based billing,
                    lab data transfers, insurance databases, communication
                    modules, charting & reporting, and more.
                  </p>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="text-center mt-12">
                <Link
                  to={"/contact"}
                  className="inline-block bg-black text-white font-semibold py-3 px-8 rounded-lg "
                >
                  CONSULTATION FOR EHR
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="py-16 px-6 sm:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Health Insurance */}
            <div className="bg-[#f5f7fa] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
              <img
                src="/Images/healthy1.webp"
                alt="Health Insurance"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold text-black mb-4">
                Health Insurance
              </h2>
              <p className="text-black mb-4">
                We offer comprehensive health insurance coverage for all our
                employees, included in their salary package. Our insurance
                covers a wide range of medical services to ensure our team
                members are always taken care of.
              </p>
              <ul className="list-disc pl-5 text-black">
                <li>Full medical coverage for employees and their families</li>
                <li>Prescription medication and treatment coverage</li>
                <li>Annual health check-ups and wellness exams</li>
              </ul>
            </div>

            {/* Medical Services */}
            <div className="bg-[#f5f7fa] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
              <img
                src="/Images/healthy2.webp"
                alt="Medical Services"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold text-black mb-4">
                Medical Services
              </h2>
              <p className="text-black mb-4">
                Our company ensures that all medical services are readily
                available. Employees have access to a variety of healthcare
                professionals, with on-site clinics and facilities, making it
                easy for them to seek care when needed.
              </p>
              <ul className="list-disc pl-5 text-black">
                <li>On-site healthcare professionals</li>
                <li>Access to medical consultations and treatments</li>
                <li>Emergency medical services and support</li>
              </ul>
            </div>

            {/* Wellness Programs */}
            <div className="bg-[#f5f7fa] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
              <img
                src="/Images/healthy3.webp"
                alt="Wellness Programs"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold text-black mb-4">
                Wellness Programs
              </h2>
              <p className="text-black mb-4">
                We believe in supporting the overall wellness of our employees,
                and as part of our commitment to their health, we offer various
                wellness programs that promote physical and mental well-being.
              </p>
              <ul className="list-disc pl-5 text-black">
                <li>Fitness and yoga classes</li>
                <li>Stress management and mental health support</li>
                <li>Health seminars and nutrition workshops</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className=" py-16 px-6 sm:px-8 lg:px-16">
          <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
            <h2 className="text-3xl font-semibold text-black mb-6">
              Additional Healthcare & Wellness Services
            </h2>
            <p className="text-lg text-black mb-6">
              Our comprehensive healthcare and wellness services also include:
            </p>
            <ul className="list-disc pl-5 text-black space-y-3">
              <li className="text-lg hover:text-blue-500 transition-colors">
                Employee Assistance Programs
              </li>
              <li className="text-lg hover:text-blue-500 transition-colors">
                Mental Health Support
              </li>
              <li className="text-lg hover:text-blue-500 transition-colors">
                Flexible Working Arrangements
              </li>
              <li className="text-lg hover:text-blue-500 transition-colors">
                Health and Fitness Challenges
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className=" text-center py-16 px-6 sm:px-8 lg:px-16 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
          <h3 className="text-3xl font-semibold mb-4">
            Invest in Your Health Today
          </h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            We prioritize the well-being of our employees by providing
            comprehensive healthcare services and wellness programs. Join us in
            fostering a healthy, happy, and productive workforce that drives
            success.
          </p>
          <Link
            to={"/contact"}
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-xl font-semibold  transition-colors transform hover:scale-105 duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
