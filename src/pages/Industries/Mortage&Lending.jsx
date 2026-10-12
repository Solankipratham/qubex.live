import React from "react";

import {
  FaChartPie,
  FaFileInvoiceDollar,
  FaLaptopCode,
  FaNetworkWired,
} from "react-icons/fa";
import FAQ from "../../components/FAQ";
import { Link } from "react-router-dom";
const MortageLending = () => {
  const faqs = [
    {
      question: "What is lending software?",
      answer:
        "Lending software is a tool for lending institutions that provide many benefits, including reduced manual labor, monitoring risk, improved decision-making, and streamlined loan management.",
    },
    {
      question: "Can lending software help automate routines?",
      answer:
        "This software can automate routine lending processes like application processing and document verification, freeing up staff to tackle more complex tasks.",
    },
    {
      question: "What is commercial lending software?",
      answer:
        "Commercial lending software is a platform that is designed to assist commercial lenders in managing their lending operations more efficiently.",
    },
    {
      question: "Can lending software help the real estate industry?",
      answer:
        "The real estate industry, in particular, benefits from lending software, as it simplifies loan procedures and speeds up loan approval times. It enables real estate lenders to efficiently process loan applications, verify creditworthiness, and track loan repayment schedules.",
    },
    {
      question: "Why integrate AI into my loan software?",
      answer:
        "The real estate industry, in particular, benefits from lending software, as it simplifies loan procedures and speeds up loan approval times. It enables real estate lenders to efficiently process loan applications, verify creditworthiness, and track loan repayment schedules.",
    },
    {
      question: "How can CRM platforms improve lending industries?",
      answer:
        "CRM can improve lending industries by providing a central system to manage customer interactions and data, automate loan origination processes, and track leads and sales.",
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
            Mortgage & Lending Software Solutions
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Our company specializes in developing custom software solutions for
            the mortgage and lending industry. We offer a comprehensive suite of
            services designed to streamline loan origination, enhance risk
            assessment, and improve customer experiences, ensuring seamless
            operations for lenders and borrowers alike.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>
      {/* Hero Section with Full-Width Background Image and Heading */}

      <div className="">
        <div className="container mx-auto px-4">
          {/* ICE Mortgage Technology Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-800">
              ICE Mortgage Technology Integration & Support Services
            </h2>
            <p className="text-gray-600">
              Qubex is one of the few ICE Mortgage Technology Pro-Select and
              Developer Partners to assist with ICE Mortgage Technology
              development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="mb-4">
                <FaLaptopCode className="text-blue-500 w-16 h-16" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                ICE Mortgage Technology Encompass® Lending Platform Development
              </h3>
              <p className="text-gray-600">
                We harness the power of the Encompass® Lending Platform to
                facilitate workflow automation processes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="mb-4">
                <FaNetworkWired className="text-green-500 w-16 h-16" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Encompass® Developer Connect Assistance
              </h3>
              <p className="text-gray-600">
                We leverage ICE Mortgage Technology's Encompass® Developer
                Connect Assistance to provide full developer resources.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-black text-white px-6 py-2 rounded-lg shadow-lg ">
              GET ICE MORTGAGE TECHNOLOGY SUPPORT
            </button>
          </div>

          {/* Debt Collection Software Section */}
          <div className="text-center my-12">
            <h2 className="text-2xl font-semibold text-gray-800">
              Debt Collection Software Solutions
            </h2>
            <p className="text-gray-600">
              We engineer custom debt collection software solutions for advanced
              case management and reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="mb-4">
                <FaChartPie className="text-blue-500 w-16 h-16" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Credit Risk Reporting
              </h3>
              <p className="text-gray-600">
                We develop credit risk reporting software integrated with
                Experian, Equifax, and TransUnion for advanced scoring and
                analysis.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="mb-4">
                <FaFileInvoiceDollar className="text-green-500 w-16 h-16" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Debt Collection Case Management
              </h3>
              <p className="text-gray-600">
                We engineer custom solutions for debt collection case management
                to streamline operations.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-black text-white px-6 py-2 rounded-lg shadow-lg">
              GET DEBT COLLECTION SOLUTIONS
            </button>
          </div>
        </div>
      </div>
      {/* Service Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Loan Origination Systems */}
        <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/mortagage1.webp"
            alt="Loan Origination Systems"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Loan Origination Systems
          </h2>
          <p className="text-black mb-4">
            Our Loan Origination Systems (LOS) streamline the loan application
            process, from initial application to approval, ensuring efficiency
            and compliance at every step.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Online application portals</li>
            <li>Automated underwriting</li>
            <li>Credit pull and decision support</li>
          </ul>
        </div>

        {/* Loan Servicing Software */}
        <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/mortagage2.webp"
            alt="Loan Servicing Software"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Loan Servicing Software
          </h2>
          <p className="text-black mb-4">
            Our loan servicing solutions manage the entire loan lifecycle,
            including payment processing, escrow management, and customer
            communications.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Automated payment processing</li>
            <li>Escrow management</li>
            <li>Customer portals for account access</li>
          </ul>
        </div>

        {/* Risk Assessment Tools */}
        <div className="p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/mortagage3.webp"
            alt="Risk Assessment Tools"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Risk Assessment Tools
          </h2>
          <p className="text-black mb-4">
            Our advanced risk assessment tools utilize AI and machine learning
            to evaluate borrower creditworthiness and predict loan performance.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>AI-powered credit scoring</li>
            <li>Fraud detection algorithms</li>
            <li>Predictive analytics for loan performance</li>
          </ul>
        </div>
      </div>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold  text-center text-gray-800 mb-6">
            Frequently Asked Questions about Lending Software
          </h2>

          <div>
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Feature Contents Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Feature Contents
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "ICE Mortgage Technology Spotlight",
                image: "/Images/HireExperienced.png",
              },
              {
                title: "How to Create a Crowdfunding Site",
                image: "/Images/ExperiencedWearable.jpg",
              },
              {
                title: "3 Must-Have Features for Your BHPH Dealership Software",
                image: "/Images/SmartWe.webp",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg overflow-hidden"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <button className="text-black-500 font-medium border border-black-500 px-4 py-2 rounded-lg hover:bg-black-100">
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Stats Section */}
      <section className=" text-black py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6">
            Drop us a line or give us a ring about Lending Software Development.
            We are happy to answer any questions!
          </p>
          <Link to={"/contact"} className="bg-black text-white font-medium px-6 py-2 rounded-lg">
            REQUEST A CONSULT
          </Link>
        </div>
        <div className="container mx-auto px-4 mt-12">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { value: "20000+", label: "Apps Built" },
              { value: "7000+", label: "Happy Customers" },
              { value: "47%", label: "Repeat and Referral Business" },
              { value: "2800+", label: "Developers" },
            ].map((stat, index) => (
              <div key={index} className="bg-black text-white rounded-lg p-6">
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <p className="text-teal-100 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MortageLending;
