import React from "react";
import { FaRobot, FaBrain, FaFileAlt, FaLanguage, FaShieldAlt } from "react-icons/fa";

const AiSolutions = () => {
  return (
    <main className="container mx-auto px-6">
      <div className="bg-white py-12">
        <div className="text-center">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Advanced Artificial Intelligence Solutions
          </h1>
          {/* Description */}
          <p className="text-gray-600 md:text-xl leading-relaxed max-w-3xl mx-auto px-4">
            At Chetu, we develop customized AI systems using advanced technologies such as
            machine learning models and natural language processing. Our solutions enhance
            enterprise process management, improve efficiency, and elevate customer experiences.
            We specialize in chatbots, predictive analytics, and image recognition. Let us
            transform your business with our AI development services.
          </p>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
        {/* Left Side - Text Content */}
        <div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <FaRobot className="text-blue-600" /> AI Operating Systems & Machine Learning
              </h2>
              <p className="text-gray-600 text-lg">
                Our AI developers utilize operating systems, statistical
                algorithms, and machine learning tools to develop{" "}
                <span className="text-blue-600 font-medium">
                  business intelligence (BI)
                </span>{" "}
                solutions from the ground up or integrate them into
                pre-existing corporate infrastructures. Our AI solutions
                include creating problem-solving tools prioritizing
                self-service capabilities, empowering analysts and top AI
                firms to identify performance gaps, and minimizing their
                reliance on IT.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <FaBrain className="text-blue-600" /> Machine Learning
              </h2>
              <p className="text-gray-600 text-lg">
                We program machine learning, deep learning, and other
                AI-powered network operating systems into your current IT
                infrastructure, enabling it to find patterns amongst your
                business data and automate mission-critical processes. We
                use machine learning models in industries as diverse as
                cybersecurity, healthcare, marketing automation, finance,
                and banking.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <FaRobot className="text-blue-600" /> Robotic Process Automation (RPA)
              </h2>
              <p className="text-gray-600 text-lg">
                Our AI developers create and integrate{" "}
                <span className="text-blue-600 font-medium">
                  robotic process automation (RPA)
                </span>{" "}
                programs to streamline workflows, including extracting
                structured & semi-structured data from documents, copying
                & pasting data, moving files & folders, scraping browsers,
                making calculations, and more to allow for superior
                scalability and flexibility within an enterprise.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Mobile Phone Image */}
        <div className="relative">
          <div className="w-4/3 md:w-3/4 mx-auto">
            <img
              src="/Images/AI Operating Systems & Machine Learning.jpg"
              alt="Mockup of AI assistant on mobile"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      {/* <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <FaLanguage className="text-blue-600" /> Natural Language Processing
          </h2>
          <p className="text-gray-600 text-lg">
            We develop NLP programming languages for analysts to analyze
            structured and semi-structured content, such as search queries,
            web-mined data, company information repositories, and audio
            sources.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <FaFileAlt className="text-blue-600" /> Intelligent Document Recognition
          </h2>
          <p className="text-gray-600 text-lg">
            Our expert AI developer teams build intelligent, robust, and
            reliable document recognition programs for AI applications.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <FaShieldAlt className="text-blue-600" /> Regulatory Compliance Monitoring
          </h2>
          <p className="text-gray-600 text-lg">
            We leverage AI programming languages to process large volumes
            of big data with advanced speed and accuracy.
          </p>
        </div>
      </section> */}
{/* hfwefgwfwgfyw */}
      <section className="py-16 px-6 mt-18 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 - Security */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
            <FaLanguage className="bg-blue-700 text-white p-2 mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
            Natural Language Processing            </h3>
            <p className="text-gray-400">
            We develop NLP programming languages for analysts to analyze
            structured and semi-structured content, such as search queries,
            web-mined data, company information repositories, and audio
            sources.
            </p>
          </div>

          {/* Card 2 - Transparency */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4 rounded-full p-2 ">
            <FaFileAlt className="bg-blue-700 rounded-full p-2 text-white mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
            Intelligent Document Recognition            </h3>
            <p className="text-gray-400">
            Our expert AI developer teams build intelligent, robust, and
            reliable document recognition programs for AI applications.
            </p>
          </div>

          {/* Card 3 - Decentralization */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
            <FaShieldAlt className="bg-blue-700 rounded-full p-2 text-white mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
            Regulatory Compliance Monitoring            </h3>
            <p className="text-gray-400">
            We leverage AI programming languages to process large volumes
            of big data with advanced speed and accuracy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AiSolutions;
