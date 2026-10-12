import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

import { FaHistory, FaBullseye } from "react-icons/fa";
import {
  FaHandshake,
  FaRegGem,
  FaEye,
  FaArrowsAlt,
  FaUsers,
  FaLightbulb,
  FaRecycle,
  FaBolt,
  FaLeaf,
} from "react-icons/fa"; // Import React Icons

import { Link } from "react-router-dom";
const AboutUs = () => {
  const images = [
    {
      image: "/Images/saas.jpg",
      description: "Programming",
    },
    {
      image: "/Images/qualityassurance.jpg",
      description: "Second Floor",
    },
    {
      image: "/Images/meet.webp",
      description: "Meet",
    },
    // {
    //   image: "/Images/office2.jpeg",
    //   description: "Teams",
    // },
    // {
    //   image: "/Images/office3.jpeg",
    //   description: "Blockchain",
    // },
    // {
    //   image: "/Images/office4.jpeg",
    //   description: "Staff",
    // },
  ];

  const values = [
    {
      icon: <FaHandshake className="text-blue-500 text-5xl mb-4" />,
      title: "Partners, not customers",
      description:
        "We focus on building relationships with partners and growing together. This growth is stable, safe, and organic.",
    },
    {
      icon: <FaRegGem className="text-blue-500 text-5xl mb-4" />,
      title: "Quality",
      description:
        "We accept only a few projects per year. This focus and exclusivity allow us to give everyone the same high-quality, turnkey service.",
    },
    {
      icon: <FaEye className="text-blue-500 text-5xl mb-4" />,
      title: "Transparency",
      description:
        "We track all our daily work. Partners can follow progress on the board of our workflow management system.",
    },
    {
      icon: <FaArrowsAlt className="text-blue-500 text-5xl mb-4" />,
      title: "Flexibility",
      description:
        "You can dismiss the Qubex team with only 30 days' notice, and payments are monthly – no percentage is upfront.",
    },
    {
      icon: <FaUsers className="text-blue-500 text-5xl mb-4" />,
      title: "Team-oriented",
      description:
        "We don’t just assign one person to work on a project part-time. Qubex puts a dedicated team focused 100% on your project.",
    },
    {
      icon: <FaLightbulb className="text-blue-500 text-5xl mb-4" />,
      title: "Innovation",
      description:
        "We are forward-looking innovators. Our team was pioneering the use of AI years before it became popular.",
    },
    {
      icon: <FaRecycle className="text-blue-500 text-5xl mb-4" />,
      title: "Reinvesting profits",
      description:
        "The group was built and grown from day 0 by reinvesting profits. We deeply understand how to provide value to partners – we have to.",
    },
    {
      icon: <FaBolt className="text-blue-500 text-5xl mb-4" />,
      title: "Agile process",
      description:
        "The Qubex development process is smooth and Agile. Our products always come with the latest tech stack, too.",
    },
    {
      icon: <FaLeaf className="text-blue-500 text-5xl mb-4" />,
      title: "Carbon Neutral",
      description:
        "We offset our carbon emissions to achieve carbon neutrality. Vera – which builds standards for climate action – certifies our carbon offsets.",
    },
  ];
  return (
    <div className="">
      <div
        className="p-6 min-h-96 md:py-20 text-white relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(/Images/aboutus.jpg)`, // Dark gradient over the image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white py-16 text-center animate-fadeIn">
          <div className="flex items-center justify-center gap-4 text-lg font-semibold mb-2">
            <span>About</span>
            <span className="bg-[#f5f7fa] text-black px-3 py-2 rounded-full">
              More Qubex 😊
            </span>
          </div>
          <h1 className="text-4xl font-bold">About Us</h1>
        </div>
      </div>
      {/* Images Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl font-semibold text-gray-900 leading-tight">
              Our partners have often tried other teams, failed, then found
              success with us.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              For many of our partners, we are a second chance at success.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            {/* Video Thumbnail */}
            <div className="relative w-full">
              <img
                src="/Images/Developers.png"
                alt="Who is Qubex?"
                className="w-full h-52  lg:h-56 rounded-lg shadow-lg"
              />
              <Link to={"https://www.youtube.com/watch?v=HhYl1QxZ5Qc"} className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-50 rounded-lg">
                <div className="text-white bg-white bg-opacity-30 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.752 11.168l-3.197-1.82A1 1 0 0010 10.257v3.486a1 1 0 001.555.832l3.197-1.82a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 20.25c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z"
                    />
                  </svg>
                </div>
                <div className=" text-lg font-semibold">
                  <p to={"https://www.youtube.com/watch?v=HhYl1QxZ5Qc"}>
                    Click to play
                  </p>{" "}
                  <br />
                </div>
              </Link>
            </div>

            {/* Images */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Image 1 */}
              <img
                src="/Images/Telecommunication.png"
                alt="Image 1"
                className="w-52 h-52 sm:w-60 sm:h-60 rounded-lg shadow-lg"
              />

              {/* Image 2 */}
              <img
                src="/Images/guide.webp"
                alt="Image 2"
                className="w-52 sm:w-60 h-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        {/* Header */}
        <h3 className="text-blue-500 text-2xl font-bold uppercase mb-2">
          Our Values
        </h3>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          See the principles that define us, drive us, and distinguish us.
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Our values stand at the core of everything we do. They are the
          foundation upon which we build our success and foster connections.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              {/* Icon */}
              {value.icon}
              {/* Title */}
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                {value.title}
              </h4>
              {/* Description */}
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center p-10 flex-col min-h-screen">
        {/* Header */}
        <h1 className="text-center text-4xl font-bold mb-12 text-gray-800">
          Our Workspace Gallery
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 place-items-center w-full">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay with Description */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-500 flex items-center justify-center px-4 text-center">
                <p className="text-white text-lg font-semibold">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-20 text-center">
        {/* Heading */}
        <h1 className="text-2xl md:text-6xl w-full md:w-3/4 leading-snug text-black">
          We are committed to delivering sustainable solutions
        </h1>

        {/* Paragraph */}
        <p className="text-lg md:text-2xl pt-4 md:pt-5 w-full md:w-4/5 leading-relaxed text-black">
          We will not sacrifice the long term for the short term. We are
          committed to enhancing the communities and environment that we share
          with our colleagues, partners, and customers. We assess and monitor
          all projects and activities against social, environmental, and
          financial impacts to ensure we deliver sustainable outcomes.
        </p>
      </div>

      {/* Services Section */}
      <div className="pb-10 pt-5 px-8 animate-fadeIn delay-200">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">
            We Provide You Flexible Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700">
            At Qubex, we pride ourselves on offering dynamic and flexible IT
            solutions to suit your specific requirements. Our adaptable approach
            ensures we can adjust our offerings to accommodate your evolving
            needs, whether you require comprehensive IT infrastructure support,
            strategic consultancy, or software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaHistory className="text-blue-700 w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black text-center">
              Our History
            </h3>
            <p className="mt-4 text-black text-center">
              Since 2021 we have been a visionary and reliable software
              engineering partner for world-class brands.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <FaBullseye className="text-orange-500 w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black text-center">
              Our Mission
            </h3>
            <p className="mt-4 text-black text-center">
              A mission statement clarifies what the company wants to achieve,
              who they want to support, and why they want to support them.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center mb-4">
              <div className="bg-pink-100 p-4 rounded-full">
                <FaLightbulb className="text-pink-500 w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black text-center">
              Our Vision
            </h3>
            <p className="mt-4 text-black text-center">
              A vision statement focuses on the potential inherent in the
              company’s future; it’s about what they intend to be.
            </p>
          </div>
        </div>
      </div>

      {/* CEO Message Section */}
      {/* <div className="rounded-xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-5 text-black px-10 rounded-lg">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-blue-700">
              Mauricio Correa
            </h3>
            <p className="text-lg mb-6">
              This year has been a pivotal one for our software development
              company, with a strong focus on blockchain projects and enterprise
              solutions for government sectors. We have expanded our
              technological leadership in blockchain, catalyzing economic
              engines and establishing links with leading economies in a
              competitive market. Looking ahead, the projections for 2025 are
              very promising. Our company is dedicated to advancing new
              technologies in AI, quantum algorithms, and blockchain. We are
              committed to innovation and excellence, driving forward with the
              same passion and dedication that has brought us success thus far.
              We look forward to continuing our growth and delivering
              exceptional solutions to our clients.
            </p>
            <div className="mt-6">
              <p className="text-blue-700 font-semibold">Social Media</p>
              <div className="flex items-center gap-x-4 mt-4">
                <a
                  href="#"
                  className="transform transition-transform duration-300 hover:scale-125"
                >
                  <FaFacebook size={25} />
                </a>
                <a
                  href="#"
                  className="transform transition-transform duration-300 hover:scale-125"
                >
                  <FaTwitter size={25} />
                </a>
                <a
                  href="#"
                  className="transform transition-transform duration-300 hover:scale-125"
                >
                  <FaLinkedin size={25} />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3">
            <img
              src="/Images/mauro.png"
              alt="mauro"
              className="w-58 h-54 object-cover center rounded-full "
            />
          </div>
        </div>
      </div> */}

      <div className="p-10 sm:p-20">
        <p className="text-xl sm:text-4xl lg:text-6xl xl:text-7xl leading-relaxed sm:leading-snug w-full sm:w-[90%] lg:w-[80%] mx-auto text-center">
          Our value proposition is to seamlessly take our clients from “Vision
          to Value” in digital transformation.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
