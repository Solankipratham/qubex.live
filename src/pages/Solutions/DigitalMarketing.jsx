import React from "react";

import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  const softwareSolutions = [
    {
      title: "Custom CRM Solutions",
      description:
        "We design integrated CRM modules and standalone solutions for generating, nurturing, scoring, and capturing qualified leads across all channels while providing full visibility of every client and information relative to their account.",
      icon: "📊",
    },
    {
      title: "Custom ERP Solutions",
      description:
        "Based on your preferences, we can integrate your custom digital marketing solution with your current ERP solution, allowing you to maintain daily workflow management, including accounting, project management, supply chain operations, and so much more.",
      icon: "⚙️",
    },
    {
      title: "Custom Landing Pages",
      description:
        "We develop portfolio-worthy, conversion-focused landing pages perfectly aligned with showcasing your marketing campaign or exciting new product launch in a way that brings users through a customer journey designed to drive traffic & increase sales.",
      icon: "📑",
    },
  ];

  const marketingApplications = [
    {
      title: "Custom Mobile & Web Apps",
      description:
        "We build AI-powered apps that make it easier to analyze user behavior and market scenarios, built with custom widgets for websites & CMS, SEO tools, and social media management tools.",
      icon: "📱",
    },
    {
      title: "Digital Analysis Apps",
      description:
        "We implement digital marketing online tools that help businesses analyze high-ranking keywords, Google search rankings, website loading speed, website auditing results, and bounce rates.",
      icon: "📈",
    },
    {
      title: "Enterprise Mobility Apps",
      description:
        "Our custom enterprise mobility applications are specifically designed for digital marketing companies to manage their daily operational workflows with the help of marketing automation.",
      icon: "🌐",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Full-Width Image with Overlayed Content */}
      <div className="relative w-full">
        <img
          src="/Images/soluciones.png" // Replace with your image URL
          alt="Digital Marketing"
          className="w-full h-screen object-cover"
        />
        {/* Overlay Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-6 sm:px-8 md:px-10 lg:px-12 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
            Digital Marketing Solutions for Your Business Growth
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4">
            Accelerate your brand's growth with comprehensive digital marketing
            strategies that drive engagement and increase ROI.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-center text-3xl mt-10 font-extrabold text-gray-900 mb-6">
          Custom Digital Marketing Software Solutions
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          We develop full-scale digital marketing software solutions built with
          workflow automation modules, reporting & analysis tools, CRM &
          marketing automation software, competitor analysis, ERP integration,
          and more for startups, SMBs, and enterprise-level businesses.
        </p>

        {/* Software Solutions Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
          <div className="flex justify-center">
            <img
              src="/src/assets/Images/thisisengineering-hoivM01c-vg-unsplash.jpg" // Replace with actual image URL
              alt="Digital Marketing Dashboard"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side: Features */}
          <div>
            {softwareSolutions.map((solution, index) => (
              <div key={index} className="flex items-start space-x-4 mb-8">
                <div className="text-4xl text-blue-500">{solution.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Digital Marketing Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Digital Marketing Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/digital1.webp"
              alt="SEO Optimization"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2">
              SEO Optimization
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Improve your website’s visibility on search engines with effective
              SEO strategies that increase organic traffic and help you stay
              ahead of the competition.
            </p>
          </div>

          {/* Digital Marketing Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/digital2.webp"
              alt="Social Media Marketing"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2">
              Social Media Marketing
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Engage with your audience on popular social media platforms. Our
              social media marketing services build brand awareness, drive
              traffic, and increase conversions.
            </p>
          </div>

          {/* Digital Marketing Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/digital3.webp"
              alt="Content Marketing"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2">
              Content Marketing
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Craft high-quality content that resonates with your target
              audience. Our content marketing strategies help in establishing
              thought leadership and enhancing engagement.
            </p>
          </div>

          {/* Digital Marketing Service 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/digital4.webp"
              alt="Email Marketing"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2">
              Email Marketing
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Reach your customers directly in their inbox with personalized
              email marketing campaigns that drive engagement, conversions, and
              customer retention.
            </p>
          </div>

          {/* Digital Marketing Service 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/digital5.webp"
              alt="PPC Advertising"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2">
              PPC Advertising
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Drive targeted traffic to your website with pay-per-click
              advertising. Our PPC campaigns maximize your return on investment
              by focusing on high-value keywords.
            </p>
          </div>

          {/* Digital Marketing Service 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/digital6.webp"
              alt="Affiliate Marketing"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2">
              Affiliate Marketing
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Leverage affiliate partnerships to boost sales. Our affiliate
              marketing strategies connect you with influencers who promote your
              products to a wider audience.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium text-lg sm:text-xl md:text-2xl"
          >
            Get Started with Our Digital Marketing Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
