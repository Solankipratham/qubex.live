import React from "react";
import {
  FaCogs,
  FaPlayCircle,
  FaReact,
  FaRobot,
  FaSitemap,
  FaRegPlayCircle,
  FaFileAlt,
  FaGitAlt,
  FaLink,
  FaCheckCircle,
  FaCalendarCheck,
  FaRegClock,
  FaProjectDiagram,
  FaLightbulb,
  FaRegCheckCircle,
  FaClipboardList,
  FaMousePointer,
  FaTachometerAlt,
} from "react-icons/fa";

import img2 from "../../assets/Images/Servicesbg.png";
import {
  MdSpeed,
  MdBuild,
  MdPhoneIphone,
  MdCheckCircle,
  MdInsertDriveFile,
  MdSecurity,
} from "react-icons/md";
import { Link } from "react-router-dom";

const SoftwareQuality = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Image Section with Text Overlay */}
        <div className="relative">
          <img
            src="/Images/softwarequality.jpg" // Replace with your uploaded image URL
            alt="Custom Software Development"
            className="w-full h-screen object-cover"
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col sm:pt-20 pt-10 bg-black bg-opacity-50 px-6 py-12 sm:py-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-20 mb-4">
              Software Quality
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300  w-[90%] sm:w-[80%]  mb-6">
              Bug-free software ensured through manual and automated testing by
              our expert QA teams. We provide comprehensive software testing
              solutions that ensure your product performs flawlessly and meets
              all user requirements.
            </p>
            <Link to={"/contact"} className="bg-black max-w-fit text-white px-8 py-3 rounded-lg  transition w-full sm:w-auto">
              Start Your Project →
            </Link>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div>
        <div className="flex items-start p-10 flex-col">
          <h1 className="font-bold text-4xl sm:text-5xl w-[70%] text-blue-700">
            Our Software Quality Process
          </h1>
          <p className="text-black text-xl sm:text-2xl pt-5 w-[90%]">
            We follow a rigorous process to ensure the highest level of quality
            in every software project we handle. From functional testing to
            performance testing, our process guarantees that your software
            delivers superior results.
          </p>
        </div>
      </div>

      {/* Software Quality Process Section */}
      <section className="py-7 px-6 mt-18 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Step 1 - Requirement Analysis */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaRegCheckCircle className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Requirement Analysis
            </h3>
            <p className="text-gray-400">
              We begin by analyzing the project requirements and defining the
              testing scope to ensure the software meets all specifications.
            </p>
          </div>

          {/* Step 2 - Test Planning */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaClipboardList className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Test Planning
            </h3>
            <p className="text-gray-400">
              We develop a detailed test plan, outlining testing strategies,
              tools, and timelines to ensure thorough test coverage.
            </p>
          </div>

          {/* Step 3 - Test Execution */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaPlayCircle className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Test Execution
            </h3>
            <p className="text-gray-400">
              Our expert QA team conducts manual and automated testing to
              identify bugs, ensure functionality, and verify performance.
            </p>
          </div>
        </div>
      </section>

      <div className="py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800">
              The largest testing spectrum you can have
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Within the multifaceted domain of software development, quality
              assurance plays a pivotal role. It goes beyond detecting defects;
              it ensures consistent functionality across various browsers,
              operating systems, and devices. Prioritizing optimal performance,
              user experience, and interface design is essential. As software
              undergoes updates and enhancements, maintaining stability in
              pre-existing modules becomes equally vital to prevent regression.
              <br />
              At Qubex, we pride ourselves on offering a holistic
              suite of testing services tailored to diverse software needs:
            </p>
          </div>

          {/* Testing Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <MdSpeed className="text-4xl text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                Performance Testing
              </h3>
              <p className="mt-2 text-gray-500">
                Ensuring that systems operate efficiently, even under load.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <MdBuild className="text-4xl text-green-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                Regression Testing
              </h3>
              <p className="mt-2 text-gray-500">
                Making certain that new code changes don’t inadvertently disrupt
                existing functionalities.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <MdPhoneIphone className="text-4xl text-yellow-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                Compatibility Testing
              </h3>
              <p className="mt-2 text-gray-500">
                Validating that software operates consistently across different
                environments, be it various browsers, devices, or operating
                system versions.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <MdCheckCircle className="text-4xl text-orange-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                UI Testing
              </h3>
              <p className="mt-2 text-gray-500">
                Evaluating the user interfaces for intuitiveness,
                responsiveness, and user satisfaction.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <MdInsertDriveFile className="text-4xl text-red-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                User Acceptance Testing (UAT)
              </h3>
              <p className="mt-2 text-gray-500">
                Collaborating with end-users to ascertain that the solution
                aligns with their expectations and requirements.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <MdSecurity className="text-4xl text-purple-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                Domain Testing
              </h3>
              <p className="mt-2 text-gray-500">
                Targeting specific application areas or operating conditions, we
                make sure all paths are clear of potential pitfalls.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Software Quality Services */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">
          Our Software Quality Services
        </h2>
        <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto">
          We provide a wide range of software quality services to ensure that
          your product is reliable, efficient, and secure. Our team utilizes
          both manual and automated testing to deliver top-notch results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 - Manual Testing */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaMousePointer className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Manual Testing
            </h3>
            <p className="text-gray-400">
              Our manual testers thoroughly examine your software to identify
              user interface and usability issues, ensuring a flawless user
              experience.
            </p>
          </div>

          {/* Service 2 - Automated Testing */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaCogs className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Automated Testing
            </h3>
            <p className="text-gray-400">
              We use automated testing tools to accelerate the testing process,
              ensuring that repetitive tasks are executed efficiently and
              accurately.
            </p>
          </div>

          {/* Service 3 - Performance Testing */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaTachometerAlt className="text-black mx-auto text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Performance Testing
            </h3>
            <p className="text-gray-400">
              We ensure that your software performs at its best under varying
              loads by simulating real-world conditions and stress testing.
            </p>
          </div>
        </div>
      </section>

      <div className="py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800">
              The significance of Quality Assurance
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Even for seasoned engineers, an external validation remains
              essential. No matter the expertise, a developer's primary focus is
              building functionality. A separate party is crucial to rigorously
              examine every detail, ensuring nothing is overlooked.
              <br />
              This bifurcation fosters a holistic approach: one creates, another
              validates. This collaborative interplay between software creation
              and QA engineers guarantees robustness and refinement in the final
              product. It's a testament to the adage: no software truly thrives
              without dedicated quality assurance.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaCogs className="text-4xl text-blue-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                Improve Product Quality
              </h3>
              <p className="mt-2 text-gray-500">
                Make sure the end user will not discover embarrassing errors.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaCheckCircle className="text-4xl text-green-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                Lower Overall QA Costs
              </h3>
              <p className="mt-2 text-gray-500">
                Investing in a QA team drastically helps cutting development and
                maintenance costs.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaCalendarCheck className="text-4xl text-yellow-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                Wider Test Coverage
              </h3>
              <p className="mt-2 text-gray-500">
                A strategic combination of automated and manual tests can grant
                a wide tests coverage.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaRegClock className="text-4xl text-red-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                Fast Releasing
              </h3>
              <p className="mt-2 text-gray-500">
                The integration of CICD tools is fundamental to increase
                deployment speed and help the QA team executing a large amount
                of tests.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaProjectDiagram className="text-4xl text-purple-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                Performance Monitoring
              </h3>
              <p className="mt-2 text-gray-500">
                Performance is not a static value, it might change in time:
                that’s why it’s crucial to have an accurate performance testing
                strategy.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaLightbulb className="text-4xl text-orange-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                Optimize Team Activities
              </h3>
              <p className="mt-2 text-gray-500">
                Introducing automated tests can radically decrease the time
                spent for manual testing and help your QA team concentrating on
                other productive activities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800">
              Technology Stack
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The power of the latest and most advanced technology to develop
              innovative software solutions. Our carefully curated technology
              stack delivers high-performance, scalable, and future-proof
              applications tailored to meet your unique business needs.
            </p>
          </div>

          {/* Technology Stack Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Technology 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaCogs className="text-4xl text-blue-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                Cypress
              </h3>
              <p className="mt-2 text-gray-500">
                A modern testing framework for dynamic web applications,
                providing real-time testing capabilities.
              </p>
            </div>

            {/* Technology 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaRobot className="text-4xl text-purple-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                Bitrise
              </h3>
              <p className="mt-2 text-gray-500">
                Mobile app development’s ally, Bitrise automates integration and
                delivery, ensuring seamless deployment.
              </p>
            </div>

            {/* Technology 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaSitemap className="text-4xl text-red-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                Protractor
              </h3>
              <p className="mt-2 text-gray-500">
                A specialized end-to-end testing framework for Angular
                applications.
              </p>
            </div>

            {/* Technology 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaRegPlayCircle className="text-4xl text-yellow-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                Selenium
              </h3>
              <p className="mt-2 text-gray-500">
                A powerful open-source tool for automating web browsers,
                streamlining testing processes.
              </p>
            </div>

            {/* Technology 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaLink className="text-4xl text-green-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                BrowserStack
              </h3>
              <p className="mt-2 text-gray-500">
                Cloud-based testing, BrowserStack ensures cross-browser and
                device consistency, minimizing compatibility issues.
              </p>
            </div>

            {/* Technology 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaReact className="text-4xl text-teal-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                React Testing Library
              </h3>
              <p className="mt-2 text-gray-500">
                Boost React app testing with user interaction-focused React
                Testing Library, enabling efficient UI testing.
              </p>
            </div>

            {/* Technology 7 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaFileAlt className="text-4xl text-orange-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">Jest</h3>
              <p className="mt-2 text-gray-500">
                Swift JavaScript testing framework, excelling in unit and
                integration testing with simplicity and speed.
              </p>
            </div>

            {/* Technology 8 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaGitAlt className="text-4xl text-indigo-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                TestRail
              </h3>
              <p className="mt-2 text-gray-500">
                Collaborative test management tool, TestRail organizes efforts,
                enhancing team coordination and documentation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto">
          As a software company, we understand the importance of delivering
          bug-free, high-performance software. Our team of expert QA engineers
          uses the latest tools and techniques to ensure your software is tested
          thoroughly, meets high-quality standards, and exceeds user
          expectations.
        </p>
        <Link to={"/contact"} className="bg-black text-white px-8 py-3 rounded-lg transition">
          Contact Us →
        </Link>
      </section>
    </div>
  );
};

export default SoftwareQuality;
