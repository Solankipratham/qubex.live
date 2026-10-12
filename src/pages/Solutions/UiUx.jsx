import React from 'react';

import img2 from "/Images/PlatformDevloper.png";
import { Link } from 'react-router-dom';
const UiUx = () => {
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
        UI/UX Design Solutions for Exceptional User Experiences
        </h1>
        <p className="text-white text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
        Elevate your digital presence with our cutting-edge UI/UX design solutions. We craft intuitive, engaging, and visually stunning interfaces to enhance user satisfaction and drive business success.
        </p>
        <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
          Start Your Project →
        </Link>
      </div>
    </div>
      <div className="max-w-7xl mx-auto px-6">

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img
              src="/Images/uiux1.webp"
              alt="User Research & Analysis"
              className="w-full h-48 rounded-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="font-semibold text-blue-700 mb-2 text-lg sm:text-xl md:text-2xl">
                User Research & Analysis
              </h2>
              <p className="text-black text-sm sm:text-base">
                Understand your users' needs and behaviors with our comprehensive research and analysis services. Create designs that resonate with your target audience.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img
              src="/Images/uiux2.webp"
              alt="Wireframing & Prototyping"
              className="w-full h-48 rounded-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2 text-lg sm:text-xl md:text-2xl">
                Wireframing & Prototyping
              </h2>
              <p className="text-black text-sm sm:text-base">
                Visualize your concepts with high-fidelity wireframes and interactive prototypes. Bring your ideas to life before development begins.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img
              src="/Images/uiux3.webp"
              alt="UI Design & Branding"
              className="w-full h-48 rounded-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="font-semibold text-blue-700 mb-2 text-lg sm:text-xl md:text-2xl">
                UI Design & Branding
              </h2>
              <p className="text-black text-sm sm:text-base">
                Create visually captivating and cohesive designs that align with your brand identity. Enhance your digital presence with stunning UI designs.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img
              src="/Images/uiux4.webp"
              alt="Usability Testing"
              className="w-full h-48 rounded-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2 text-lg sm:text-xl md:text-2xl">
                Usability Testing
              </h2>
              <p className="text-black text-sm sm:text-base">
                Ensure your design delivers an optimal user experience through thorough usability testing. Identify and address pain points to create seamless interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4 sm:text-4xl md:text-5xl">
            Why Choose Our UI/UX Design Services?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black text-sm sm:text-base">
            <li>
              **User-Centric Designs:** Every design decision is focused on improving user satisfaction and engagement.
            </li>
            <li>
              **Experienced Designers:** A team of experts with extensive experience in creating modern and innovative designs.
            </li>
            <li>
              **End-to-End Services:** From research to testing, we provide comprehensive UI/UX design solutions.
            </li>
            <li>
              **Proven Results:** Delivering designs that not only look great but also achieve business objectives.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="py-10 text-center">
          <a
            href="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium text-lg sm:text-xl"
          >
            Contact Us for UI/UX Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default UiUx;
