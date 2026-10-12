import React from 'react';

import { Link } from 'react-router-dom';
import img2 from "/src/assets/Images/PlatformDevloper.png";
const SalesManagement = () => {
  const leftServices = [
    {
      title: "Inside Sales Software",
      description:
        "We develop inside sales systems with auto-dialers, live chat tools, call management modules, meetings management, proposal/quote generations, and 360-degree feedback tools, as well as engineer Computer Telephony Integrations (CTI).",
      icon: "💼", // Replace with the desired icon.
    },
    {
      title: "Sales Live Chat Platforms",
      description:
        "We seamlessly integrate live chat platforms to increase conversion rates, boost website engagement, and enable your entire sales team to effectively communicate and answer customer inquiries in real-time.",
      icon: "💬",
    },
    {
      title: "Sales Integrations",
      description:
        "Seamlessly integrate your CRM, ERP, HRIS/HRMS, and other business workflows to create a unified, all-in-one sales operations planning & management solution that your entire organization can utilize with ease.",
      icon: "🔗",
    },
  ];

  const rightServices = [
    {
      title: "Sales Lead Management Software",
      description:
        "We develop & integrate sales lead management software solutions, like Crunchbase, for inbound marketing workflows, including content marketing platforms, email marketing automation, SEO management, and behaviors/interactions analysis.",
      icon: "📈",
    },
    {
      title: "Sales Customer Relationship Management (CRM)",
      description:
        "We program sales customer relationship management (CRM) software systems that facilitate the performance of marketing information systems, sales pipeline software, and incorporate the best contact management & tracking software.",
      icon: "🤝",
    },
    {
      title: "Sales Tracking Software",
      description:
        "Our experts develop intelligent sales tracking software solutions, including orders/contracts management, field sales/territory management, commissions’ management, sales funnel software, and referrals tracking features.",
      icon: "📊",
    },
  ];
  return (
    <div className="min-h-screen">{/* Background Image */}
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
        Sales Management Solutions for Enhanced Productivity
        </h1>
        <p className="text-xl sm:text-2xl pt-5 text-white w-[90%] sm:w-[80%] ">
          Drive your business growth with our comprehensive sales management solutions. From lead tracking to
          performance analytics, we provide advanced tools to streamline your sales processes and maximize efficiency.
        </p>
        <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg  transition w-full sm:w-auto">
          Start Your Project →
        </Link>
      </div>
    </div>
      <div className="max-w-7xl mx-auto px-6">
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
          Sales & Operations Solutions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <img
              src="/Images/crew-4Hg8LH9Hoxc-unsplash.jpg" // Replace with actual image URL.
              alt="Sales Dashboard"
              className="mb-8 rounded-lg shadow-lg"
            />
            <div className="space-y-6">
              {leftServices.map((service, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="text-4xl text-blue-500">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <img
              src="/Images/kari-shea-1SAnrIxw5OY-unsplash.jpg" // Replace with actual image URL.
              alt="CRM Dashboard"
              className="mb-8 rounded-lg shadow-lg"
            />
            <div className="space-y-6">
              {rightServices.map((service, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="text-4xl text-blue-500">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow ">
            GET CUSTOM S&OP SOLUTIONS
          </button>
        </div>
      </div>
    </section>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
          {/* Feature 1 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-center">
            <img
              src="https://adynamics.com.my/wp-content/uploads/2022/05/crm-integration.png"
              alt="CRM Integration"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              CRM Integration
            </h2>
            <p className="text-black">
              Integrate robust CRM systems to manage customer relationships efficiently. Keep track of interactions,
              leads, and opportunities all in one platform.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-center">
            <img
              src="https://blog.clickpointsoftware.com/hs-fs/hubfs/lead%20management.jpg?width=1200&height=750&name=lead%20management.jpg"
              alt="Lead Management"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Lead Management
            </h2>
            <p className="text-black">
              Effectively capture, nurture, and convert leads with our sales management tools. Automate lead
              prioritization to focus on high-value prospects.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-center">
            <img
              src="https://www.smartsheet.com/sites/default/files/2022-08/IC-Sales-Leads-Pipeline-Template_Excel.png"
              alt="Sales Pipeline Tracking"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Sales Pipeline Tracking
            </h2>
            <p className="text-black">
              Monitor your sales pipeline in real-time. Track progress, forecast revenue, and identify bottlenecks to
              ensure consistent deal closures.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-center">
            <img
              src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-screenshots/pa-feature.1.lg.png"
              alt="Performance Analytics"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Performance Analytics
            </h2>
            <p className="text-black">
              Gain actionable insights into your sales team’s performance. Use data-driven reports to optimize
              strategies and drive sales growth.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className=" p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl font-bold text-black text-center text-blue-700 mb-4">
            Why Choose Our Sales Management Solutions?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black-300">
            <li>
              <strong>Comprehensive Tools:</strong> All-in-one platform to manage leads, opportunities, and sales
              performance.
            </li>
            <li>
              <strong>Customizable Solutions:</strong> Tailored to fit your business needs and sales processes.
            </li>
            <li>
              <strong>Enhanced Collaboration:</strong> Seamless integration with existing tools for team collaboration.
            </li>
            <li>
              <strong>Proven Results:</strong> Empower sales teams with insights to improve efficiency and close deals
              faster.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium "
          >
            Contact Us for Sales Management Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default SalesManagement;
