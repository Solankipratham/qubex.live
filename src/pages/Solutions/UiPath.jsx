import React from "react";
import img2 from "/Images/PlatformDevloper.png";
import { Link } from "react-router-dom";
import {
  FaCogs,
  FaCog,
  FaBrain,
  FaCloud,
  FaChartBar,
  FaUserShield,
  FaTools,
  FaSyncAlt,
} from "react-icons/fa";
const UiPath = () => {
  return (
    <div className="min-h-screen ">
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
            UiPath Solutions for Intelligent Automation
          </h1>
          <p className="text-xl sm:text-2xl pt-5  text-white w-[90%] sm:w-[80%] ">
            Accelerate your business processes with UiPath's industry-leading
            robotic process automation (RPA) platform. Our expert solutions
            streamline workflows, reduce operational costs, and enhance
            productivity through intelligent automation.
          </p>
          <Link
            to={"/contact"}
            className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto"
          >
            Start Your Project →
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <section className=" py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-10">
              UiPath & BPO: The Perfect Fit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left Text Section */}
              <div className="space-y-8">
                {/* Automation Section */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FaCogs className="h-10 w-10 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Automation
                    </h3>
                    <p className="text-gray-600">
                      We utilize UiPath's intelligent computer vision and image
                      recognition technology to seamlessly automate enterprises'
                      processes at speeds up to 10X faster.
                    </p>
                  </div>
                </div>

                {/* Intelligent Operations Platform Section */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FaBrain className="h-10 w-10 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Intelligent Operations Platform
                    </h3>
                    <p className="text-gray-600">
                      We utilize Intelligent Scheduling, Intelligent Execution,
                      Intelligent Scalability & AI/Cognitive Automation to
                      deliver best-in-class BPO solutions.
                    </p>
                  </div>
                </div>

                {/* Virtual Delivery Centers Section */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FaCloud className="h-10 w-10 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Virtual Delivery Centers
                    </h3>
                    <p className="text-gray-600">
                      Chetu develops VDCs that allow BPOs to manage their
                      workforce virtually. Our solutions centralize operations
                      allowing work-teams from multiple locations to coordinate
                      activities via the cloud.
                    </p>
                  </div>
                </div>

                {/* Reporting Section */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FaChartBar className="h-10 w-10 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Reporting
                    </h3>
                    <p className="text-gray-600">
                      We develop operations platforms for reporting. Our
                      reporting solutions provide data-driven analytics coupled
                      with graphical outputs and customizable dashboards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="flex justify-center">
                <img
                  src="/Images/block.png"
                  alt="Dashboard"
                  className="rounded-lg shadow-lg max-w-full"
                />
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="mt-10 flex justify-center">
              <button className="bg-black text-white font-bold py-3 px-6 rounded-lg  transition duration-300">
                Get UiPath Developers
              </button>
            </div>
          </div>
        </section>
        <section className=" py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
              Certified UiPath Partners for Your UiPath Implementation
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Chetu is a UiPath partner with years of experience providing
              businesses with{" "}
              <span className="text-blue-500">RPA solutions</span> to automate
              processes across all applications, interfaces, and environments.
              Our experts utilize RPA and AI technologies to transform your
              business by implementing, integrating, and customizing branded
              solutions for UiPath that improve customer experience, reduce
              repetitive tasks, and minimize human error.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* UiPath Configuration */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex-shrink-0 text-blue-500">
                    <FaCog className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    UiPath Configuration
                  </h3>
                  <p className="text-gray-600">
                    Our UiPath developers and project managers understand the
                    complexities of your vertical. We gather all technology and
                    regulatory environment requirements to ensure you are
                    operating the required Windows software, .NET Framework, and
                    hardware for a successful configuration and implementation.
                  </p>
                </div>

                {/* UiPath Administrator */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex-shrink-0 text-green-500">
                    <FaUserShield className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    UiPath Administrator for Your Business
                  </h3>
                  <p className="text-gray-600">
                    We configure the UiPath platform for High-Density Robots,
                    User additions, and Proxy settings for improved security to
                    help businesses have a competitive advantage.
                  </p>
                </div>

                {/* Custom UiPath Solutions */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex-shrink-0 text-orange-500">
                    <FaTools className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Custom UiPath Solutions
                  </h3>
                  <p className="text-gray-600">
                    UiPath RPA development solutions are extensible tools that
                    can be scaled and tailored to your specific needs. Our
                    UiPath developers customize all UiPath automation solutions.
                  </p>
                </div>

                {/* UiPath App Integration & Upgrades */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex-shrink-0 text-purple-500">
                    <FaSyncAlt className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    UiPath App Integration & Upgrades
                  </h3>
                  <p className="text-gray-600">
                    Chetu makes upgrades easy. Our UiPath developers analyze
                    your systems to ensure compatibility and data protection
                    when upgrading your UiPath versions.
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center">
                <img
                  src="/Images/soluciones.png"
                  alt="UiPath Diagram"
                  className="rounded-lg shadow-lg max-w-full"
                />
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10 flex justify-center">
              <button className="bg-black text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <div className="flex flex-col sm:grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-10 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center sm:space-x-6 space-y-6 sm:space-y-0">
            <img
              src="/Images/uipath1.webp"
              alt="UiPath Implementation"
              className="w-full  h-48 rounded-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="font-semibold text-blue-700 mb-2 text-lg sm:text-xl md:text-2xl">
                UiPath Implementation
              </h2>
              <p className="text-black text-sm sm:text-base">
                Deploy UiPath seamlessly into your existing infrastructure with
                our implementation expertise. We ensure smooth integration and
                minimal disruption to your business operations.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img
              src="/Images/uipath2.webp"
              alt="Workflow Automation"
              className="w-full  h-48 rounded-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2 text-lg sm:text-xl md:text-2xl">
                Workflow Automation
              </h2>
              <p className="text-black text-sm sm:text-base">
                Automate repetitive tasks and complex workflows with UiPath's
                advanced tools. Optimize efficiency and enable your team to
                focus on higher-value activities.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col  items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img
              src="/Images/uipath3.webp"
              alt="Custom RPA Solutions"
              className="w-full xl:w-full  h-48 rounded-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2 text-lg sm:text-xl md:text-2xl">
                Custom RPA Solutions
              </h2>
              <p className="text-black text-sm sm:text-base">
                Tailor UiPath RPA solutions to your business needs. From data
                extraction to process monitoring, our custom bots streamline
                operations across industries.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img
              src="/Images/uipath4.webp"
              alt="UiPath Support & Maintenance"
              className="w-full  h-48 rounded-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2 text-lg sm:text-xl md:text-2xl">
                UiPath Support & Maintenance
              </h2>
              <p className="text-black text-sm sm:text-base">
                Keep your UiPath environment running smoothly with our dedicated
                support and maintenance services. From troubleshooting to
                upgrades, we've got you covered.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4 sm:text-4xl md:text-5xl">
            Why Choose Our UiPath Solutions?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black text-sm sm:text-base">
            <li>
              **Certified Experts:** Our team of UiPath-certified professionals
              delivers exceptional automation solutions.
            </li>
            <li>
              **End-to-End Services:** From implementation to maintenance, we
              cover all aspects of UiPath RPA.
            </li>
            <li>
              **Tailored Automation:** Customized solutions to address your
              unique business challenges and objectives.
            </li>
            <li>
              **Proven Success:** Trusted by businesses across industries to
              drive innovation and efficiency with UiPath.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="py-10 text-center">
          <a
            href="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium text-lg sm:text-xl"
          >
            Contact Us for UiPath Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default UiPath;
