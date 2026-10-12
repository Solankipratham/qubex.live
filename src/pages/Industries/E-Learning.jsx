import React from "react";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaEdit,
  FaUsers,
  FaLaptop,
  FaCogs,
  FaCommentDots,
  FaGamepad,
  FaPuzzlePiece,
  FaRobot,
  FaApple,
  FaAndroid,
  FaWindows,
  FaMobileAlt,
  FaCloud,
  FaVideo,
  // Import FaCogs to fix the error
} from "react-icons/fa";

import { Link } from "react-router-dom";
const ELearning = () => {
  return (
    <div className="">
      <div
        className="bg-cover opacity-6 bg-center w-full h-screen sm:h-[600px] z-[-10]"
        style={{
          background: `url(/Images/banner.png) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundAttachment: "fixed", // Keeps the image fixed
        }}
      >
        <div className="flex items-left text-white pt-10 sm:pt-20 px-10 flex-col">
          <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
            E-Learning & Education
          </h1>
          <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            At our company, we are committed to fostering a culture of
            continuous learning. We understand that staying updated with the
            latest technologies is key to personal and professional growth.
            That’s why we provide our employees with access to high-quality
            e-learning courses, resources, and training programs that ensure
            they are always at the cutting edge.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>
      {/* Hero Section */}

      <div className="bg-gray-50">
        <section className="bg-gray-50 py-12 px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Scalable Learning Management System (LMS) Development
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Our industry-experienced e-learning software developers create{" "}
              <span className="text-blue-500 font-medium">
                custom LMS software solutions
              </span>{" "}
              to manage, track, and achieve your corporate learning goals.
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Image */}
            <div className="flex justify-center">
              <img
                src="/Images/E-learning1.png" // Replace with your image link
                alt="LMS Development"
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Right: Features */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                LMS Software Development
              </h3>
              <ul className="space-y-6">
                {/* Feature 1 */}
                <li className="flex items-start">
                  <FaCommentDots className="text-blue-500 text-4xl mr-4" />
                  <div>
                    <h4 className="text-xl font-bold">
                      Custom Communication Interfaces
                    </h4>
                    <p className="text-gray-600">
                      We program and interface blended learning applications
                      with features for social learning, messaging, multimedia,{" "}
                      <span className="text-blue-500 underline">
                        web & video conferencing
                      </span>
                      , streaming, recording, VoIP, and more.
                    </p>
                  </div>
                </li>

                {/* Feature 2 */}
                <li className="flex items-start">
                  <FaGamepad className="text-blue-500 text-4xl mr-4" />
                  <div>
                    <h4 className="text-xl font-bold">
                      Custom Gamified Environments
                    </h4>
                    <p className="text-gray-600">
                      We create e-learning solutions with added gamification
                      features to bring courses alive, built with 2D and 3D
                      graphics for a more immersive, fun-filled, and engaging
                      learning experience.
                    </p>
                  </div>
                </li>

                {/* Feature 3 */}
                <li className="flex items-start">
                  <FaPuzzlePiece className="text-blue-500 text-4xl mr-4" />
                  <div>
                    <h4 className="text-xl font-bold">
                      Custom Plugins & Extensions
                    </h4>
                    <p className="text-gray-600">
                      We extend your LMS with custom activity modules, themes,
                      course formats, enrollment & authentication, filters,
                      document repositories, and many other plugins and
                      extensions.
                    </p>
                  </div>
                </li>

                {/* Feature 4 */}
                <li className="flex items-start">
                  <FaRobot className="text-blue-500 text-4xl mr-4" />
                  <div>
                    <h4 className="text-xl font-bold">Custom AI-Powered LMS</h4>
                    <p className="text-gray-600">
                      Modifying learning through the latest algorithms,
                      personalized features, inherent interface, and consistent
                      user experience for an exceptional educational drive.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Logos Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-700">
              We provide custom integrations with industry-leading LMS solutions
              for added functionality, flexibility, and usability.
            </p>
            <div className="flex justify-center space-x-8 mt-6 text-blue-500">
              <FaApple className="text-5xl" />
              <FaAndroid className="text-5xl" />
              <FaWindows className="text-5xl" />
            </div>
          </div>
        </section>

        {/* Header Section */}
        <section className="py-12 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Personalized eLearning Software Development Services
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-10">
            Chetu's custom e-learning software developers create solutions that
            enable higher education establishments, colleges/universities,
            primary schools, trade schools, high schools, enterprise-level
            corporations, and SMBs.
          </p>
          <div className="flex justify-center">
            <img
              src="/Images/E-learning2.png" // Replace with actual image path
              alt="eLearning Platforms"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              eLearning Software Support Services
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Our support services team provides responsive around-the-clock
              eLearning software support. We troubleshoot issues and carefully
              monitor the performance of all e-learning resources to eliminate
              latency and costly workflow interruption and ensure
              high-performing education materials that are SCORM compliant.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="flex items-start">
              <FaUsers className="text-blue-500 text-5xl mr-6" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Virtual Classroom Platform Assistance
                </h3>
                <p className="text-gray-600">
                  Chetu designs and customizes virtual classroom platforms to
                  facilitate seamless instruction, maximum course content
                  comprehension, and intuitive dashboards. Our technical
                  assistance team monitors all classroom platforms 24/7 for
                  performance and security.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex items-start">
              <FaChalkboardTeacher className="text-blue-500 text-5xl mr-6" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Student Management Software Support
                </h3>
                <p className="text-gray-600">
                  Chetu’s software specialists enhance e-classroom resources for
                  student management, providing insights into performance,
                  patterns, and anomalies through predictive analytics and
                  data-driven reports.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex items-start">
              <FaMobileAlt className="text-blue-500 text-5xl mr-6" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Mobile Learning App Assistance
                </h3>
                <p className="text-gray-600">
                  Chetu’s developers design custom mobile learning apps to
                  create new access points to education, providing smooth
                  transitions without interruptions or downtime.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex items-start">
              <FaCloud className="text-blue-500 text-5xl mr-6" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Cloud-Based eLearning Support
                </h3>
                <p className="text-gray-600">
                  Cloud-based resources enable collaborative workflow, reduced
                  expenses, and secure data access across multiple devices,
                  providing flexibility for students and educators.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="flex items-start">
              <FaVideo className="text-blue-500 text-5xl mr-6" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Video Conferencing Integration Assistance
                </h3>
                <p className="text-gray-600">
                  Chetu integrates video conferencing capabilities for
                  instructors, providing tools to eliminate lag time, enhance
                  user engagement, and improve overall learning outcomes.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="flex items-start">
              <FaCogs className="text-blue-500 text-5xl mr-6" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  LMS Customization Services
                </h3>
                <p className="text-gray-600">
                  Learning Management Systems allow for independent, self-guided
                  learning with customized courses tailored to individual needs.
                  Chetu’s LMS customization services improve engagement and
                  usability for educators and students alike.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="flex items-start">
            <FaGraduationCap className="text-blue-500 text-4xl mr-4" />
            <div>
              <h4 className="text-xl font-bold">Learning Management Systems</h4>
              <p className="text-gray-600">
                Build and implement powerful LMS platforms tailored to your
                needs for better management of learning content.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start">
            <FaUsers className="text-blue-500 text-4xl mr-4" />
            <div>
              <h4 className="text-xl font-bold">Student Information Systems</h4>
              <p className="text-gray-600">
                Manage student data effectively with custom-built student
                information systems that streamline administrative processes.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start">
            <FaLaptop className="text-blue-500 text-4xl mr-4" />
            <div>
              <h4 className="text-xl font-bold">Web-Based Training</h4>
              <p className="text-gray-600">
                Create engaging and interactive web-based training modules for
                online education.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start">
            <FaEdit className="text-blue-500 text-4xl mr-4" />
            <div>
              <h4 className="text-xl font-bold">Content Authoring</h4>
              <p className="text-gray-600">
                Develop custom content authoring tools to create, manage, and
                distribute educational materials effectively.
              </p>
            </div>
          </div>
        </section>

        {/* AI-Powered eLearning Solutions Section */}
        <section className="py-12 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-6">
            Custom AI-Powered eLearning Solutions
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-10">
            With eLearning representing an interesting facet of modern
            education, Artificial Intelligence represents a revolutionary path
            to make the learning experience more engaging and fruitful for
            learners!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaCogs className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                A Tailored AI-Powered eLearning Approach
              </h3>
              <p className="text-gray-600">
                Revolutionize learning with intelligent systems that adapt to
                specific learning styles, explore data, and identify patterns.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaLaptop className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Seamless Implementation
              </h3>
              <p className="text-gray-600">
                Integrate AI automation into your eLearning platform to
                streamline content creation, repetitive tasks, and assessments.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaChalkboardTeacher className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Natural Language Processing (NLP) for eLearning
              </h3>
              <p className="text-gray-600">
                Unlock eLearning’s potential with AI-driven NLP solutions for
                personalized and engaging educational experiences.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Course, Training, and Learning Services */}
      <div className="py-16 px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Courses Section */}
          <div className="bg-[#f5f7fa]] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
            <img
              src="/Images/learning1 (2).webp"
              alt="Comprehensive Courses"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-black mb-4">
              Comprehensive Courses
            </h2>
            <p className="text-black mb-4">
              We provide a wide range of courses across various fields to help
              our employees enhance their skills and knowledge. From software
              development to data science and digital marketing, our courses
              cover all the essentials of today’s rapidly evolving tech
              landscape.
            </p>
            <ul className="list-disc pl-5 text-black">
              <li>Programming and Web Development</li>
              <li>Data Science and Machine Learning</li>
              <li>Digital Marketing and SEO</li>
            </ul>
          </div>

          {/* Training Programs Section */}
          <div className="bg-[#f5f7fa]] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
            <img
              src="/Images/learning2.webp"
              alt="Training Programs"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-black mb-4">
              Training Programs
            </h2>
            <p className="text-black mb-4">
              We offer live training sessions and workshops conducted by
              industry experts. Our training programs are designed to provide
              hands-on experience and deep insights into emerging technologies
              and tools that shape the future of business.
            </p>
            <ul className="list-disc pl-5 text-black">
              <li>Live coding boot camps</li>
              <li>Technology and leadership webinars</li>
              <li>Soft skills development programs</li>
            </ul>
          </div>

          {/* Self-paced Learning Section */}
          <div className="bg-[#f5f7fa]] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
            <img
              src="/Images/learning3.webp"
              alt="Self-paced Learning"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-black mb-4">
              Self-Paced Learning
            </h2>
            <p className="text-black mb-4">
              We offer flexible learning options for employees who prefer to
              learn at their own pace. With a variety of online resources, video
              tutorials, and downloadable materials, our employees can access
              learning content at their convenience.
            </p>
            <ul className="list-disc pl-5 text-black">
              <li>Video tutorials and courses</li>
              <li>Access to eBooks and online reading materials</li>
              <li>Self-assessment quizzes and certifications</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About the Program */}
      <div className="">
        <p className="text-lg text-black text-center p-4">
          At our company, we believe in empowering our employees with the
          knowledge and skills needed to excel in their careers. Through our
          e-learning and education programs, we provide them with the resources
          they need to stay ahead in today’s fast-paced digital world. Whether
          you're looking to expand your technical skills or enhance your
          leadership capabilities, we are here to support your professional
          growth every step of the way.
        </p>
      </div>

      {/* Call to Action */}
      <div className=" text-center  text-black py-16 px-6 sm:px-8 lg:px-16 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
        <h3 className="text-3xl font-semibold mb-4">
          Transform Your Learning Experience
        </h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Partner with us for high-quality e-learning courses and training
          programs. We provide the resources to help you stay ahead in the
          competitive business world.
        </p>
        <Link
          to={"/contact"}
          className="inline-block bg-black text-white px-8 py-4 rounded-lg text-xl font-semibold  transition-colors transform hover:scale-105 duration-300"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default ELearning;
