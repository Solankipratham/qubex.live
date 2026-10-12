import React from "react";
import {
  AiOutlineBarChart,
  AiOutlineUsergroupAdd,
  AiOutlineRobot,
  AiOutlineSmile,
  AiOutlineMail,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  AiOutlineCloud,
  AiOutlineAppstore,
  AiOutlineTool,
  AiOutlineDatabase,
  AiOutlineCode,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";

import {
  FaPhoneAlt,
  FaChartBar,
  FaClipboardList,
  FaEnvelope,
  FaSitemap,
  FaFileAlt,
  FaChartLine,
} from "react-icons/fa";
import img2 from "/Images/PlatformDevloper.png";
import { Link } from "react-router-dom";
const Crm = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      {/* Background Image */}
      <div
        className="bg-cover opacity-6 bg-center w-full h-screen z-[-10]"
        style={{
          background: `url(${img2}) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundAttachment: "fixed", // Keeps the image fixed
        }}
      >
        <div className="flex items-left pt-10 sm:pt-20 px-4 flex-col">
          <h1 className="text-white font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
            CRM DEVELOPMENT SERVICES
          </h1>
          <p className="text-white text-xl sm:text-2xl pt-5 w-[90%] sm:w-[80%]">
            Unleashing the Power of AI for Custom CRM Solutions
          </p>
          <Link
            to="/contact"
            className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto"
          >
            Start Your Project →
          </Link>
        </div>
      </div>
      <div className="">
        {/* Header Section */}
        <section className="py-12 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Custom CRM Development Services
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto mb-10">
            Chetu develops custom-tailored CRM systems, implementing application
            development software features & functionalities that drive
            businesses forward.
          </p>
        </section>

        <div className=" py-12 px-5">
          {/* Header Section */}
          <h1 className="text-3xl font-bold text-center mb-4">
            CRM Software Services
          </h1>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Chetu provides{" "}
            <a href="#" className="text-blue-500 underline">
              custom CRM software services
            </a>{" "}
            focused on automating sales, marketing, and customer service
            business processes for{" "}
            <span className="font-semibold">
              healthcare, banking, real estate
            </span>
            , and other industries.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Industry Specific CRM */}
            <div className="flex items-start">
              <AiOutlineTool className="text-blue-500 w-10 h-10 mr-4" />
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Industry Specific CRM
                </h2>
                <p className="text-gray-600">
                  Overcome unique challenges with a customizable CRM that meets
                  needs across finance, e-commerce, supply chain industries, and
                  more, maintaining consistent alignment with industry
                  regulations to streamline operations and drive success.
                </p>
              </div>
            </div>

            {/* CRM Mobile App Development */}
            <div className="flex items-start">
              <AiOutlineAppstore className="text-blue-500 w-10 h-10 mr-4" />
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  CRM Mobile App Development
                </h2>
                <p className="text-gray-600">
                  Engineer custom mobile CRM applications, allowing users to
                  view calendars, check & create emails, review account updates,
                  join a video conference call, view dashboards & reports, and
                  so much more to help businesses close more deals and provide
                  faster support.
                </p>
              </div>
            </div>

            {/* Cloud Based CRM Software */}
            <div className="flex items-start">
              <AiOutlineCloud className="text-blue-500 w-10 h-10 mr-4" />
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Cloud Based CRM Software
                </h2>
                <p className="text-gray-600">
                  Develop custom cloud CRM solutions and provide hassle-free
                  cloud-based CRM system installation, enabling round-the-clock
                  accessibility to all essential client information both in the
                  office and remotely so that you’re always connected to your
                  customers.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto mb-12">
            <p className="text-gray-700 max-w-lg">
              Our CRM software services help organizations with
              industry-specific needs, offering unparalleled CRM customization
              and integration. Whether it’s for healthcare, e-commerce, or real
              estate, we ensure your business stays ahead.
            </p>
            <img
              src="/Images/software.png"
              alt="CRM Desktop"
              className="w-96 mt-6 lg:mt-0"
            />
          </div>
          <div className="text-center">
            <button className="bg-black text-white px-6 py-3 rounded-lg ">
              DEVELOP CUSTOM CRM SOLUTIONS
            </button>
          </div>

          {/* CRM Support Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-6">
              CRM Support and Maintenance
            </h2>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              Our CRM maintenance services include fixing bugs, managing data,
              performing system updates, and ensuring the security, integration,
              and performance monitoring of your CRM database. Our expertise
              comprises a wide range of CRM platforms, making our support
              services unparalleled.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* CRM System Support */}
              <div className="flex items-start">
                <AiOutlineDatabase className="text-blue-500 w-10 h-10 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    CRM System Support
                  </h3>
                  <p className="text-gray-600">
                    At Chetu, we recognize the indispensable role that seamless
                    CRM operation plays in the success of your business. Our
                    expert team excels in troubleshooting and resolving issues,
                    leaving no room for uncertainties that could disrupt your
                    daily operations.
                  </p>
                </div>
              </div>

              {/* Customized CRM Solutions */}
              <div className="flex items-start">
                <AiOutlineCode className="text-blue-500 w-10 h-10 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Customized CRM Solutions
                  </h3>
                  <p className="text-gray-600">
                    Our CRM maintenance services go beyond just fixing bugs. We
                    offer extended support to ensure long-term application
                    reliability. We make sure your CRM system remains resilient
                    and secure by providing security updates and technology
                    upgrades.
                  </p>
                </div>
              </div>

              {/* CRM Integration and Migration */}
              <div className="flex items-start">
                <AiOutlineSafetyCertificate className="text-blue-500 w-10 h-10 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    CRM Integration & Migration
                  </h3>
                  <p className="text-gray-600">
                    Chetu specializes in CRM implementation, data migration,
                    system auditing, and server administration, ensuring your
                    CRM software stays up-to-date and seamlessly integrated with
                    your other business systems.
                  </p>
                </div>
              </div>

              {/* Reliable CRM Support Services */}
              <div className="flex items-start">
                <AiOutlineSafetyCertificate className="text-blue-500 w-10 h-10 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Reliable CRM Support Services
                  </h3>
                  <p className="text-gray-600">
                    Exceptional service is at the core of our CRM maintenance
                    and support services. With our advanced ticketing system and
                    transparent communication, your queries and concerns are
                    addressed promptly.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <button className="bg-black text-white px-6 py-3 rounded-lg ">
                HIRE CRM CONSULTING SERVICES
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-12 px-6 grid lg:grid-cols-2 gap-12  mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaPhoneAlt className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Call Center Integrations
              </h3>
              <p className="text-gray-600">
                Incorporate tools like Twilio and RingCentral for scheduling,
                routing, and recording, reducing wait times and enhancing
                customer experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaChartBar className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Sales Management</h3>
              <p className="text-gray-600">
                Integrate third-party apps and plugins for accurate sales data
                directly in your custom CRM, enabling better sales decisions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaClipboardList className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Opportunity Management</h3>
              <p className="text-gray-600">
                View critical details like deal stages and necessary actions for
                closing deals in real-time.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaChartBar className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Lead Capture</h3>
              <p className="text-gray-600">
                Gain visibility and control of marketing campaigns, enabling
                successful lead management from capture to close.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaEnvelope className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Integrations</h3>
              <p className="text-gray-600">
                Seamlessly integrate email tools like Outlook or Gmail to enable
                full visibility of emails, calendars, and more.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaSitemap className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Workflow Management</h3>
              <p className="text-gray-600">
                Automate tasks with drag-and-drop tools to assign tasks, approve
                deals, and generate email alerts.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaFileAlt className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Reports & Dashboards</h3>
              <p className="text-gray-600">
                Create customized reports to track leads, conversion rates, and
                other metrics in real-time.
              </p>
            </div>

            {/* Feature 8 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaChartLine className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Sales Forecasting</h3>
              <p className="text-gray-600">
                Use pipeline data to anticipate market trends and predict future
                sales for better decision-making.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/Images/CRM.png"
              alt="CRM Software Dashboard"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 text-center">
          <button className="bg-black text-white px-6 py-3 rounded-full  transition">
            HIRE CRM SOFTWARE DEVELOPERS
          </button>
        </section>
      </div>

      <div className=" py-10 px-5">
        <h1 className="text-2xl font-bold text-center mb-8">
          AI-Powered CRM Solutions
        </h1>
        <p className="text-center text-gray-700 mb-12">
          AI in Customer Relationship Management (CRM) development services can
          significantly enhance the customer experience and help businesses
          improve their sales and marketing efforts. CRM artificial intelligence
          can be integrated into businesses to optimize and improve their work
          operations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Data Analysis */}
          <div className="flex items-start">
            <div className="text-blue-500 mr-4">
              <AiOutlineBarChart className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Data Analysis</h2>
              <p className="text-gray-600">
                We can integrate AI to analyze large amounts of customer data
                collected from social media, email interactions, website
                behavior, and purchase history. Leveraging machine learning
                algorithms, AI can identify patterns and trends in data to make
                predictions about customer behavior, preferences, and churn
                prediction, enabling businesses to make data-driven decisions.
                Data entry automation can also help minimize the time spent on
                repetitive tasks.
              </p>
            </div>
          </div>

          {/* Personalization and Customer Segmentation */}
          <div className="flex items-start">
            <div className="text-blue-500 mr-4">
              <AiOutlineUsergroupAdd className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Personalization and Customer Segmentation
              </h2>
              <p className="text-gray-600">
                Our experts can develop AI that segments customers based on
                their preferences, behaviors, and demographics. Understanding
                individual customers’ needs enables AI-powered CRM systems to
                deliver personalized recommendations, offers, and content,
                leading to higher customer satisfaction and increased
                engagement.
              </p>
            </div>
          </div>

          {/* Chatbots and Virtual Assistants */}
          <div className="flex items-start">
            <div className="text-blue-500 mr-4">
              <AiOutlineRobot className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Chatbots and Virtual Assistants
              </h2>
              <p className="text-gray-600">
                We can implement AI capabilities to power chatbots and virtual
                assistants. They can provide instant customer support by
                handling routine inquiries, addressing frequently asked
                questions, and resolving simple issues, improving customer
                service and reducing the workload on human agents, allowing them
                to focus on more complex tasks.
              </p>
            </div>
          </div>

          {/* Sentiment Analysis */}
          <div className="flex items-start">
            <div className="text-blue-500 mr-4">
              <AiOutlineSmile className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Sentiment Analysis</h2>
              <p className="text-gray-600">
                Our experts can leverage AI that analyzes customer interactions,
                emails, chat transcripts, and social media posts to gauge
                customer sentiment. It helps businesses understand customers’
                feelings about their products and services, enabling them to
                respond appropriately to any negative feedback or issues.
              </p>
            </div>
          </div>

          {/* Automated Marketing Campaigns */}
          <div className="flex items-start">
            <div className="text-blue-500 mr-4">
              <AiOutlineMail className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Automated Marketing Campaigns
              </h2>
              <p className="text-gray-600">
                We can implement AI that automates marketing solutions by
                optimizing the process of content creation, email campaigns, and
                social media scheduling. AI analyzes customer behavior to
                determine the most appropriate time and channel to engage,
                improving customer retention and churn prediction within the
                effectiveness of targeted marketing campaigns.
              </p>
            </div>
          </div>

          {/* Cross-Selling and Upselling */}
          <div className="flex items-start">
            <div className="text-blue-500 mr-4">
              <AiOutlineShoppingCart className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Cross-Selling and Upselling
              </h2>
              <p className="text-gray-600">
                Our experts can develop AI that identifies opportunities for
                cross-selling and upselling by analyzing customer purchase
                history and behavior. It allows businesses to offer relevant
                products and services to customers, increasing revenue and
                customer loyalty.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <button className="bg-black text-white px-6 py-3 rounded-lg ">
            Develop CRM with AI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Crm;
