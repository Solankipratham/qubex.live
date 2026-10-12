import React, { useState } from "react";
import {
  FaDollarSign,
  FaBell,
  FaFileAlt,
  FaChartLine,
  FaWallet,
  FaFileInvoice,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const BankingFintech = () => {
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFAQ = (index) => {
    setFaqOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const faqData = [
    {
      question: "What is banking software?",
      answer:
        "Banking software enables financial institutions to manage accounts, process transactions, and offer services such as online banking, mobile apps, and digital wallets.",
    },
    {
      question: "How can AI improve customer experience in banking software?",
      answer:
        "AI can improve customer experiences through personalized recommendations, fraud detection, predictive analytics, and chatbots for customer support.",
    },
    {
      question: "What is a Loan Origination System?",
      answer:
        "A Loan Origination System helps automate the process of managing and approving loan applications, ensuring efficiency and compliance.",
    },
    {
      question:
        "How does AI improve risk management in Loan Origination Systems?",
      answer:
        "AI evaluates credit risk by analyzing data trends, ensuring better decision-making and reducing potential defaults.",
    },
    {
      question:
        "What are some emerging technologies used in Mobile Banking Software?",
      answer:
        "Emerging technologies include blockchain for secure transactions, biometric authentication, and AI-driven analytics for enhanced customer engagement.",
    },
    {
      question:
        "How can Mobile Banking Software be integrated with other banking systems?",
      answer:
        "Mobile banking software can be integrated with APIs to connect with core banking systems, allowing seamless data synchronization and transactions.",
    },
  ];
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
            Banking & Fintech Solutions
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Transforming banking with AI, powering fraud detection, wealth
            management, KYC automation, and predictive analytics.
          </p>
          <Link
            to={"/contact"}
            className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto"
          >
            HIRE BANKING SOFTWARE DEVELOPERS →
          </Link>
        </div>
      </div>
      {/* Hero Section */}

      <div className="bg-gray-100 py-12 px-6 md:px-16">
        {/* Header */}
        <h2 className="text-3xl font-semibold text-center mb-6">
          Banking Software Support
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-12">
          Banking and fiscal services have seen a significant transformation
          because of the use of new software solutions and apps. Qubex's
          banking software support enhances efficiency, reliability, and
          regulatory compliance while improving the customer experience.
        </p>

        {/* Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            {[
              {
                title: "Currency Exchange Support",
                description:
                  "Currency Exchange Support enables real-time currency conversion. Qubex's engineers can enable your software or app to integrate and maintain data exchanges with international banking systems while monitoring and updating exchange rates.",
                icon: <FaDollarSign className="text-4xl text-blue-500" />,
              },
              {
                title: "Automated Alerts Configuration",
                description:
                  "Our engineers can program automated alert configurations for your banking software to aid users in receiving fully automated alerts for potential fraud, fiscal updates, or regular account activities.",
                icon: <FaBell className="text-4xl text-blue-500" />,
              },
              {
                title: "Electronic Statement Issues",
                description:
                  "Our software experts write code that enables your software users to avoid electronic statement issues. They can access their electronic statements on desktop and mobile devices securely.",
                icon: <FaFileAlt className="text-4xl text-blue-500" />,
              },
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                {service.icon}
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {[
              {
                title: "Tax Reporting Guidance",
                description:
                  "Our engineers help with tax reporting guidance for your banking software. Automation ensures compliance with financial reporting and tax standards.",
                icon: <FaChartLine className="text-4xl text-blue-500" />,
              },
              {
                title: "Virtual Wallet Support",
                description:
                  "With virtual wallet support, our coders enable virtual wallets to function seamlessly in your banking software, allowing secure and easy-to-use payment systems.",
                icon: <FaWallet className="text-4xl text-blue-500" />,
              },
              {
                title: "Automatic Bill Pay Assistance",
                description:
                  "Our software team supports automatic bill pay assistance banking software, enabling recurring payments for subscriptions, utilities, and other services.",
                icon: <FaFileInvoice className="text-4xl text-blue-500" />,
              },
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                {service.icon}
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center"
                >
                  <span className="text-lg text-gray-700">{faq.question}</span>
                  <span className="text-blue-500">
                    {faqOpen[index] ? "▲" : "▼"}
                  </span>
                </button>
                {faqOpen[index] && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="py-16 px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Digital Banking */}
          <div className=" p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
            <img
              src="/Images/banking1.webp"
              alt="Digital Banking"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-black mb-4">
              Digital Banking
            </h2>
            <p className="text-black mb-4">
              Our digital banking solutions are designed to provide customers
              with convenient, secure, and accessible banking services at their
              fingertips. We focus on creating user-friendly mobile applications
              and web platforms that allow individuals and businesses to manage
              their finances with ease.
            </p>
            <ul className="list-disc pl-5 text-black">
              <li>Mobile banking and e-wallets</li>
              <li>Real-time transaction tracking</li>
              <li>Advanced encryption and security features</li>
            </ul>
          </div>

          {/* Payments & Transactions */}
          <div className=" p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
            <img
              src="/Images/banking2.webp"
              alt="Payments & Transactions"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-black mb-4">
              Payments & Transactions
            </h2>
            <p className="text-black mb-4">
              We offer innovative payment solutions that make financial
              transactions faster, more secure, and efficient. From contactless
              payments to blockchain technology, we are revolutionizing the way
              people transfer and receive money.
            </p>
            <ul className="list-disc pl-5 text-black">
              <li>Instant payment processing</li>
              <li>Blockchain and cryptocurrency solutions</li>
              <li>Secure cross-border payments</li>
            </ul>
          </div>

          {/* Fintech Innovation */}
          <div className=" p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
            <img
              src="/Images/banking3.webp"
              alt="Fintech Innovation"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-black mb-4">
              Fintech Innovation
            </h2>
            <p className="text-black mb-4">
              We are at the forefront of fintech innovation, working on
              solutions that leverage AI, machine learning, and big data to
              transform financial services. Our goal is to make financial
              products smarter, more accessible, and personalized for every
              user.
            </p>
            <ul className="list-disc pl-5 text-black">
              <li>AI-driven financial analytics</li>
              <li>Personalized investment strategies</li>
              <li>Automated loan and credit scoring systems</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 px-6 sm:px-8 lg:px-16">
        <div className="bg-[#f5f7fa] p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 duration-300">
          <h2 className="text-3xl font-semibold text-black mb-6">
            Additional Services
          </h2>
          <p className="text-lg text-black mb-6">
            Beyond core software solutions, we offer a range of services to
            further enhance your banking and fintech operations:
          </p>
          <ul className="list-disc pl-5 text-black space-y-3">
            <li className="text-lg">Blockchain consulting</li>
            <li className="text-lg">Regulatory compliance solutions</li>
            <li className="text-lg">Mobile and web application development</li>
            <li className="text-lg">Cloud-based payment platforms</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className=" text-center text-black py-16 px-6 sm:px-8 lg:px-16 rounded-xl shadow-xl hover:shadow-2xl">
        <h3 className="text-3xl font-semibold mb-4">
          Transform Your Financial Operations
        </h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Partner with us to develop customized banking and fintech solutions
          that meet the unique needs of your business. Our team is dedicated to
          delivering high-quality, scalable, and user-friendly applications that
          drive efficiency and enhance security.
        </p>
        <Link
          to={"/contact"}
          className="inline-block bg-black  text-white px-8 py-4 rounded-lg text-xl font-semibold transform hover:scale-105 duration-300"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default BankingFintech;
