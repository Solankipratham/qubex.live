import img2 from "/Images/PlatformDevloper.png";
import React from "react";
import {
  FaCode,
  FaExchangeAlt,
  FaPlug,
  FaCogs,
  FaMobileAlt,
  FaTools,
} from "react-icons/fa";
import {
  FaWordpress,
  FaDrupal,
  FaJoomla,
  FaHtml5,
  FaJs,
  FaPhp,
  FaAngular,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Cms = () => {
  return (
    <div className="min-h-screen">
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
            CMS Solutions Tailored to Your Business Needs
          </h1>
          <p className="text-white text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Our CMS solutions provide scalable, flexible, and secure content
            management systems designed to optimize your digital presence.
          </p>
          <Link
            to={"/contact"}
            className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto"
          >
            Start Your Project →
          </Link>
        </div>
      </div>

      <div className="bg-gray-50">
        {/* Header Section */}
        <section className="py-12 px-6">
          <h2 className="text-center text-3xl font-bold mb-4">
            We’ve Got Experienced CMS Developers
          </h2>
          <p className="text-center text-gray-700 text-lg max-w-4xl mx-auto mb-10">
            Chetu's Custom CMS Solutions are SEO-friendly and success-driven,
            designed to integrate with existing content management systems to
            enhance and elevate your website, application, social media network,{" "}
            <span className="text-blue-500">e-commerce store</span>, or blog.
          </p>
        </section>

        {/* Services Section */}
        <section className="py-12 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaCode className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">CMS Development Services</h3>
            <p className="text-gray-600">
              Our CMS developers are proficient in building and customizing CMS
              solutions for all industries. We specialize in platforms like{" "}
              <span className="text-blue-500">Joomla</span> and{" "}
              <span className="text-blue-500">WordPress</span>.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaExchangeAlt className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">CMS Integration</h3>
            <p className="text-gray-600">
              Integrate plugins, extensions, and tools for a streamlined
              workflow, designed to maximize efficiency and boost your ROI.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaMobileAlt className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">
              CMS Application Development
            </h3>
            <p className="text-gray-600">
              Utilize the latest technologies to deliver SEO-optimized,
              user-friendly, and customizable CMS applications for{" "}
              <span className="text-blue-500">digital marketing</span>.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaExchangeAlt className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">CMS Migration</h3>
            <p className="text-gray-600">
              We’ll redesign and migrate your website to newer platforms,
              improving speed, protocols, and capacity to handle larger traffic.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaPlug className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">CMS Plugin Development</h3>
            <p className="text-gray-600">
              Create and implement effective plugins to add features like
              drag-and-drop buttons, themes, or SEO-boosting modules.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaTools className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">
              CMS Support & Maintenance
            </h3>
            <p className="text-gray-600">
              Performance tuning, caching, testing, and database query
              optimization for maintenance of your CMS.
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-12 px-6">
          <div className="flex justify-center">
            <img
              src="/Images/CMS.png"
              alt="CMS Applications"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>

      <div className="bg-gray-50">
        {/* Header Section */}
        <section className="py-12 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            CMS Plugins & Integrations
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto mb-10">
            Adding custom features, integrating plugins, and implementing
            add-ons to your new and improved website allows you to turn your
            vision into a feature-rich, custom-tailored software reality. Chetu
            takes your existing content management system (CMS) and elevates it
            to new heights.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full transition">
            INTEGRATE YOUR CMS NOW
          </button>
        </section>

        {/* CMS Platforms and Open Source Section */}
        <section className="py-12 px-6 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* CMS Platforms */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-6">
              CMS Platforms
            </h3>
            <p className="text-gray-600 text-center mb-6">
              We implement customizable features, modules, plugins, and
              extensions within existing CMS platforms like WordPress, Drupal,
              Joomla, Brightspot, and Sitecore to optimize workflows.
            </p>
            <div className="flex justify-center space-x-6">
              <FaWordpress className="text-blue-500 text-5xl" />
              <FaDrupal className="text-blue-500 text-5xl" />
              <FaJoomla className="text-blue-500 text-5xl" />
            </div>
          </div>

          {/* Open Source Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-6">
              Open-Source Technologies
            </h3>
            <p className="text-gray-600 text-center mb-6">
              We utilize open-source technologies like Javascript, PHP,
              Angular.js, and HTML5 to develop your custom CMS solution to
              enable workflow management and maintain content.
            </p>
            <div className="flex justify-center space-x-6">
              <FaJs className="text-yellow-500 text-5xl" />
              <FaPhp className="text-blue-500 text-5xl" />
              <FaAngular className="text-red-500 text-5xl" />
              <FaHtml5 className="text-orange-500 text-5xl" />
            </div>
          </div>
        </section>

        {/* CMS Solutions Section */}
        <section className="py-12 px-6">
          <h3 className="text-2xl font-bold text-center mb-6">
            Our CMS Software Development Solutions
          </h3>
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Features Section */}
            <div className="space-y-8 lg:w-1/2">
              {/* Solution 1 */}
              <div className="flex items-start">
                <FaWordpress className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-bold">
                    CMS Microsoft SharePoint Services
                  </h4>
                  <hr className="my-2 border-gray-300" />
                </div>
              </div>

              {/* Solution 2 */}
              <div className="flex items-start">
                <FaDrupal className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-bold">
                    Custom CMS Drupal Development Services
                  </h4>
                  <hr className="my-2 border-gray-300" />
                </div>
              </div>

              {/* Solution 3 */}
              <div className="flex items-start">
                <FaJoomla className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-bold">CMS Sitecore Developers</h4>
                  <hr className="my-2 border-gray-300" />
                </div>
              </div>

              {/* Solution 4 */}
              <div className="flex items-start">
                <FaWordpress className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-bold">Joomla CMS Development</h4>
                  <hr className="my-2 border-gray-300" />
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:w-1/2">
              <img
                src="/Images/CMR2.png"
                alt="CMS Development Solutions"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <button className="bg-black text-white px-6 py-3 rounded-full transition">
              HIRE CMS DEVELOPMENT COMPANY
            </button>
          </div>
        </section>
      </div>

      <div className="max-w-7xl mx-auto py-6">
        {/* CMS Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CMS Content 1 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/cms1.webp"
              alt="CMS Solution 1"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              CMS for Content Creation
            </h2>
            <p className="text-black">
              Empower your team to create and manage content effortlessly with
              our intuitive CMS, designed for seamless content creation and
              editing.
            </p>
            <p className="text-black mt-4">
              Our platform provides a user-friendly interface, allowing your
              content creators to focus on crafting high-quality content while
              ensuring smooth collaboration within your team.
            </p>
          </div>

          {/* CMS Content 2 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/cms2.avif"
              alt="CMS Solution 2"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Scalable CMS Solutions
            </h2>
            <p className="text-black">
              Our CMS platforms are built to scale with your business, ensuring
              seamless growth and expansion without compromising performance.
            </p>
            <p className="text-black mt-4">
              Whether you’re running a small blog or managing an
              enterprise-level content system, our CMS solutions adapt to your
              specific needs, providing flexibility and efficiency.
            </p>
          </div>

          {/* CMS Content 3 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/cms3.webp"
              alt="CMS Solution 3"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Secure CMS for Enterprise
            </h2>
            <p className="text-black">
              Our CMS solutions provide top-level security to protect sensitive
              data, ensuring compliance and peace of mind for your enterprise.
            </p>
            <p className="text-black mt-4">
              From user authentication to data encryption, our CMS platforms
              offer built-in security features designed to safeguard your
              organization’s digital content and assets.
            </p>
          </div>
        </div>

        {/* More CMS Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* CMS Content 4 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/cms4.webp"
              alt="CMS Solution 4"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Advanced Analytics Integration
            </h2>
            <p className="text-black">
              Integrate advanced analytics into your CMS to gain real-time
              insights into user engagement, content performance, and site
              metrics.
            </p>
            <p className="text-black mt-4">
              Leverage data-driven decisions to optimize content strategies and
              improve your audience's experience with actionable insights.
            </p>
          </div>

          {/* CMS Content 5 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/cms5.webp"
              alt="CMS Solution 5"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Mobile-Friendly CMS
            </h2>
            <p className="text-black">
              Make your content management system accessible from anywhere with
              our mobile-friendly CMS platform.
            </p>
            <p className="text-black mt-4">
              Manage content on-the-go with responsive design and
              mobile-specific features that ensure smooth operation across all
              devices.
            </p>
          </div>

          {/* CMS Content 6 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            <img
              src="/Images/cms6.webp"
              alt="CMS Solution 6"
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Multi-Language CMS Support
            </h2>
            <p className="text-black">
              Reach a global audience with a CMS that supports multiple
              languages and localization features.
            </p>
            <p className="text-black mt-4">
              Our multi-language support ensures that your content is accessible
              to a diverse audience, making your website truly international.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium text-lg sm:text-xl"
          >
            Get Started with Our CMS Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cms;
