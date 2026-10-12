import React from "react";
import img2 from "/src/assets/Images/PlatformDevloper.png";
import { Link } from "react-router-dom";
const Telephony = () => {
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
          <h1 className="text-white font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
            Telephony Solutions for Seamless Communication
          </h1>
          <p className="text-xl text-white sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Enhance your communication infrastructure with our advanced
            telephony solutions. From VoIP to unified communications, we provide
            scalable, efficient, and secure services tailored to meet the
            demands of modern businesses.
          </p>
          <Link
            to={"/contact"}
            className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg  transition w-full sm:w-auto"
          >
            Start Your Project →
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <section className="py-12 px-6 ">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="flex justify-center items-center">
              <img
                src="/Images/HireExperienced.png" // Replace with your actual image path
                alt="CTI Software Overview"
                className="w-full max-w-md lg:max-w-lg"
              />
            </div>

            {/* Content Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Hire Experienced Computer Telephony Integration Software
                Developers
              </h2>
              <p className="text-gray-600 mb-8">
                Qubex provides seamless computer telephony integration (CTI)
                software to enhance call and contact center operations, elevate
                service quality, and create enriching customer experiences with
                maximum efficiency.
              </p>

              {/* Features */}
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-blue-500">
                    {/* Replace with your icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 4v16h16M4 8h16M4 12h16M4 16h16"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Click-to-Call Software Development
                    </h3>
                    <p className="text-gray-600">
                      We customize click-to-dial and click-to-talk software to
                      augment personnel by enabling seamless digital
                      communication, streamlining customer service processes in
                      real-time to improve customer satisfaction. Qubex
                      enhances CRMs to include this valuable sales team
                      resource.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-blue-500">
                    {/* Replace with your icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 3H7a4 4 0 00-4 4v11a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4h-3"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Call Logging Software Solutions
                    </h3>
                    <p className="text-gray-600">
                      Qubex designs cutting-edge call logging software and
                      customized apps to automatically capture call data,
                      delivering valuable insights into agent performance
                      metrics and customer experiences, leveraged to ensure
                      optimal performance of call logging software for helpdesk.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-blue-500">
                    {/* Replace with your icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 8h-6m6 4h-6m6 4h-6m-8-2a2 2 0 012-2h.06a2 2 0 011.7.92L9.62 15H4a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Omnichannel Routing
                    </h3>
                    <p className="text-gray-600">
                      Our solutions incorporate omnichannel routing and
                      interaction management, automatic call distributor (ACD),
                      and interactive voice response (IVR) software
                      integrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
          {/* Feature 1 */}
          <div className=" p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
            <img
              src="/Images/tele1.webp"
              alt="VoIP Solutions"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              VoIP Solutions
            </h2>
            <p className="text-black-300">
              Leverage Voice over IP technology to streamline communication
              while reducing costs. Our VoIP solutions ensure high-quality calls
              with advanced features like call routing and conferencing.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
            <img
              src="/Images/tele2.webp"
              alt="Unified Communications"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Unified Communications
            </h2>
            <p className="text-black-300">
              Integrate all communication channels, including voice, video, and
              messaging, into a unified platform. Enhance collaboration and
              productivity with our advanced solutions.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
            <img
              src="/Images/tele3.webp"
              alt="Cloud Telephony"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Cloud Telephony
            </h2>
            <p className="text-black-300">
              Modernize your communication infrastructure with cloud telephony.
              Enjoy flexibility, scalability, and secure access to telephony
              services from anywhere.
            </p>
          </div>

        </div>
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Revolutionize Customer Service with AI Call Center Software
            </h2>
            <p className="text-gray-600 mb-12">
              We incorporate{" "}
              <span className="text-blue-500">AI-powered technology</span> by
              integrating advanced call center artificial intelligence software
              to automate processes, expedite resolutions, and drive improved
              business outcomes.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="text-blue-500 mb-4">
                  {/* Replace with your icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-4.215a2 2 0 00-1.546-1.272L14 11m-4 6H5l1.405-4.215a2 2 0 011.546-1.272L10 11m-2-7h8m-2 3H8m4 0V4m0 0a2 2 0 012-2h2a2 2 0 012 2v1m-6 0H8a2 2 0 00-2 2v1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Automated Calling System
                </h3>
                <p className="text-gray-600">
                  Qubex uses AI to enhance automated calling services for call
                  center agents, enabling personalized interactions, real-time
                  responses, and learning from past calls to improve future
                  ones.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="text-blue-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m0 7a2 2 0 11-4 0 2 2 0 014 0zm-6 5h12m2-16h-5a2 2 0 01-2-2H9a2 2 0 01-2 2H2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  AI Sentiment Analysis
                </h3>
                <p className="text-gray-600">
                  AI-based tools determine the emotional tone of customer
                  discussions, monitoring customer emotions to enhance services
                  and reputation.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="text-blue-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16h8a4 4 0 014-4V8a4 4 0 00-4-4H8a4 4 0 00-4 4v4a4 4 0 004 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  AI Call Analysis
                </h3>
                <p className="text-gray-600">
                  AI analyzes calls and interacts with patrons to optimize
                  workflows, enhancing responses and ignoring unwanted calls.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="text-blue-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12h5.5M8 12H2.5m8-6H2m13 18h5m-5-18V6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Automated Screen Pop
                </h3>
                <p className="text-gray-600">
                  Qubex developers implement screen pop features for call
                  agents to view detailed caller information automatically.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-center text-center">
                <div className="text-blue-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 20h9m-9-9h9m-9-6h9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Predictive Dialer System
                </h3>
                <p className="text-gray-600">
                  Predictive dialer systems automate messaging and recalls while
                  improving agents' efficiency and productivity.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="flex flex-col items-center text-center">
                <div className="text-blue-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2.25 2.25L8.25 9m10.5 6L19.5 9m1.5 13a2 2 0 100-4 2 2 0 000 4zm-16 0a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Smart Call Center Analytics
                </h3>
                <p className="text-gray-600">
                  AI analyzes call data, trends, and customer interactions to
                  improve organizational efficiency.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12">
              <button className="px-6 py-3 bg-black  text-white font-semibold rounded-lg ">
                Develop Call Intelligence Software
              </button>
            </div>
          </div>
        </section>
        {/* Why Choose Us Section */}
        <div className="p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
            Why Choose Our Telephony Solutions?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black">
            <li>
              <strong>Comprehensive Services:</strong> From VoIP to cloud
              telephony, we offer end-to-end solutions for all your
              communication needs.
            </li>
            <li>
              <strong>Scalable Infrastructure:</strong> Solutions designed to
              grow with your business and adapt to your evolving requirements.
            </li>
            <li>
              <strong>Enhanced Security:</strong> Secure telephony solutions to
              protect your business communications.
            </li>
            <li>
              <strong>Proven Expertise:</strong> Trusted by businesses across
              industries for reliable and efficient telephony services.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="py-10 text-center">
          <a
            href="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium  transition"
          >
            Contact Us for Telephony Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Telephony;
