import React from "react";
import {
  FaCogs,
  FaRobot,
  FaTools,
  FaLayerGroup,
  FaChartLine,
  FaProjectDiagram,
  FaTasks,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import img2 from "/Images/PlatformDevloper.png";
import AiSolutions from "../../components/AiSolutions";
import AICarousel from "../../components/AICarousel";

const ArtificialIntelligence = () => {
  return (
    <div className="min-h-screen">
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
          <h1 className="text-white font-bold text-3xl sm:text-4xl mt-10 sm:mt-20 w-full sm:w-2/3">
            Artificial Intelligence Solutions for Smarter Businesses
          </h1>
          <p className="text-white text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Transform your business operations with advanced Artificial
            Intelligence (AI) solutions. From predictive analytics to
            intelligent automation, our AI services empower businesses to
            innovate, optimize, and stay ahead in the competitive market.
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
        {/* Generative AI Solutions Section */}
        <section className="py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Generative AI Solutions
          </h2>
          <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-10">
            Transform your workflows with our custom generative AI solutions
            tailored to your unique needs. We ensure seamless integration and
            ongoing support for optimal performance.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaTools className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Techniques and Tools Used in Generative AI
              </h3>
              <p className="text-gray-600">
                Leverage tools like GANs and VAEs to enable applications that
                represent content, designs, and more—reaping the rewards of
                cutting-edge technology.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaCogs className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Seamless Generative AI Implementation
              </h3>
              <p className="text-gray-600">
                Implement Generative AI with minimal disruptions. We provide
                scalable solutions while ensuring maximum efficiency.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaRobot className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Support and Continuous Improvement
              </h3>
              <p className="text-gray-600">
                Receive continuous support to monitor and improve your
                Generative AI models as your needs evolve.
              </p>
            </div>
          </div>
        </section>

        {/* Deep Learning Solutions Section */}
        <section className="py-12 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-6">
            Deep Learning Solutions
          </h2>
          <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-10">
            Leveraging advanced techniques, we create deep learning models
            designed to deliver the most impactful results for your business.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaLayerGroup className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Tailored Deep Learning Solutions
              </h3>
              <p className="text-gray-600">
                Develop models tailored to your needs using NLP, Image
                Recognition, and Predictive Analytics.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaProjectDiagram className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Leveraging Several Architectures for Maximum Impact
              </h3>
              <p className="text-gray-600">
                Use CNNs, RNNs, and transformers to handle your unique tasks and
                optimize results.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaTasks className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Solving Conflicts within Deep Learning
              </h3>
              <p className="text-gray-600">
                Provide post-deployment support and continuous monitoring for a
                reliable deep learning model.
              </p>
            </div>
          </div>
        </section>

        {/* Predictive AI Section */}
        <section className="py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Predictive AI</h2>
          <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-10">
            Make informed decisions more effectively with our custom predictive
            AI solutions. Our models leverage robust algorithms for accurate
            forecasting.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="flex items-start">
              <FaChartLine className="text-blue-500 text-4xl mr-4" />
              <div>
                <h4 className="text-xl font-bold">
                  Robust Predictive Algorithms for Accurate Forecasting
                </h4>
                <p className="text-gray-600">
                  Use historical data and trends to provide accurate
                  predictions, enabling better business decisions.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <FaCogs className="text-blue-500 text-4xl mr-4" />
              <div>
                <h4 className="text-xl font-bold">
                  Data Preprocessing and Management
                </h4>
                <p className="text-gray-600">
                  Ensure high-quality data with pipelines for cleaning,
                  normalizing, and extracting relevant data.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <AiSolutions />

      <div className="max-w-7xl mx-auto py-6">
        <AICarousel />
        {/* Why Choose Us Section */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-4">
            Why Choose Our AI Solutions?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-black">
            <li>
              <strong>Industry Expertise:</strong> Proven experience in
              delivering AI solutions across diverse industries.
            </li>
            <li>
              <strong>Custom AI Models:</strong> Tailored AI algorithms and
              models to meet your business requirements.
            </li>
            <li>
              <strong>End-to-End Services:</strong> From AI strategy development
              to deployment and maintenance.
            </li>
            <li>
              <strong>Cutting-Edge Technology:</strong> Leverage the latest AI
              tools and techniques for superior results.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium"
          >
            Contact Us for AI Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtificialIntelligence;
