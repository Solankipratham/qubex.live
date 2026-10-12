import React from "react";
import {
  FaHandsHelping,
  FaDonate,
  FaUsers,
  FaHandHoldingHeart,
  FaSnowflake,
  FaGift,
  FaMobileAlt,
  FaChartLine,
  FaChurch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Nonprofit = () => {
  const platforms = [
    {
      name: "Jotform",
      description:
        "Qubex's software experts can integrate Jotform to customize all your documentation needs to grow your nonprofit's presence. Streamline all donor online forms, organize volunteer applications, and mobilize partnerships with persuasive applications customized to boost sponsorships and co-branding.",
      icon: <FaHandsHelping className="text-blue-500 w-12 h-12" />,
    },
    {
      name: "Fundly",
      description:
        "Our expert software developers understand how critical effective fundraising is for nonprofits. We can integrate your nonprofit platform with Fundly to streamline all digital fundraising efforts and propel your nonprofit organization forward.",
      icon: <FaDonate className="text-green-500 w-12 h-12" />,
    },
    {
      name: "Donorbox",
      description:
        "Qubex's dedicated software developers can leverage Donorbox to modernize fundraising, enabling your nonprofit to safely and efficiently receive donations via the Internet. Our expert-level developers work to ensure all transactions are secure by implementing trusted and proven resources, enabling expedient receipt of all donations.",
      icon: <FaUsers className="text-orange-500 w-12 h-12" />,
    },
    {
      name: "Donately",
      description:
        "Our software experts can integrate Donately to provide multiple donor payment options with embedded tools such as WordPress, Squarespace, and Webflow, enabling the creation of customized, interactive campaigns to attract multiple donors to boost your nonprofit’s messaging campaign.",
      icon: <FaHandHoldingHeart className="text-purple-500 w-12 h-12" />,
    },
    {
      name: "Snowball",
      description:
        "Qubex's expert-level developers can leverage Snowball to deploy an intuitive CRM software that optimizes donor data, efficiently tracks donations and gifts, and enables creation of a fully customized online store to sell products to raise funds for your nonprofit. Qubex’s skilled software experts can seamlessly program and integrate this one-stop-shop resource to modernize your nonprofit operations.",
      icon: <FaSnowflake className="text-teal-500 w-12 h-12" />,
    },
    {
      name: "Qgiv",
      description:
        "Attract top donors with Qgiv fully customized and integrated with your nonprofit management system by Qubex. Our expert developers utilize Qgiv to create intuitive donation receipts detailing every donation's direct impact, enabling donors to gain unique insight and transparency into how their charitable funding is making positive gains within your nonprofit.",
      icon: <FaGift className="text-red-500 w-12 h-12" />,
    },
    {
      name: "OneCause",
      description:
        "Qubex's adept nonprofit software developers seamlessly integrate OneCause, an intuitive platform for nonprofits that promotes mobile auctions and enables gamification of donor drives, keeping prospective donors engaged while providing a rich, end-user experience.",
      icon: <FaMobileAlt className="text-blue-400 w-12 h-12" />,
    },
    {
      name: "RaiseDonors",
      description:
        "Qubex's dedicated developers integrate RaiseDonors and utilize its custom reporting options to enable real-time campaign monitoring and generate customized thank-you and donor acknowledgment reports to individualize donor end-user experiences.",
      icon: <FaChartLine className="text-indigo-500 w-12 h-12" />,
    },
    {
      name: "Vision2",
      description:
        "Qubex's nonprofit software specialists configure and integrate Vision2 to help meet the demands of church donor campaigns. Our software experts enable mobile text-to-give with unlimited transaction options and the ability to create recurring gifts. With customized donor self-service tools, Vision2 facilitates donor independence that adheres to all tax-free donation regulations.",
      icon: <FaChurch className="text-yellow-500 w-12 h-12" />,
    },
  ];

  return (
    <div className=""><div
    className="bg-cover opacity-6 bg-center w-full h-screen sm:h-[600px] z-[-10]"
    style={{
      background: `url(/Images/banner.png) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))`,
      backgroundSize: "cover", // Ensures the image covers the entire div
      backgroundAttachment: "fixed", // Keeps the image fixed
    }}
  >
    <div className="flex items-left text-white pt-10 sm:pt-20 px-10 flex-col">
      <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
      Nonprofit Software Solutions
      </h1>
      <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Our company specializes in developing custom software solutions
            tailored for nonprofit organizations. We offer a comprehensive suite
            of services designed to enhance operational efficiency, improve
            donor engagement, and streamline fundraising efforts, enabling
            nonprofits to focus on their mission-driven goals.
      </p>
      <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
    </div>
  </div>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
            Custom Nonprofit Platform Integrations
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Qubex's software developers can seamlessly integrate intuitive
            software for nonprofits with third-party platforms to enable
            streamlined donation processes, real-time donation campaign
            monitoring, and interactive gamification to engage further donors
            that are vital for nonprofit organizations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <p>{platform.icon}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {platform.name}
                </h3>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-black text-white px-6 py-3 rounded-lg transition">
              Integrate Your Nonprofit Management Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <div className="grid grid-cols-1 px-4 py-10 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Fundraising Platforms */}
        <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/nonprofit1.webp"
            alt="Fundraising Platforms"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Fundraising Platforms
          </h2>
          <p className="text-black mb-4">
            Our fundraising platforms empower nonprofits to create and manage
            campaigns, track donations, and engage with donors effectively.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Customizable donation forms</li>
            <li>Recurring donation management</li>
            <li>Donor analytics and reporting</li>
          </ul>
        </div>

        {/* Membership Management Systems */}
        <div className="p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/nonprofit2.webp"
            alt="Membership Management Systems"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Membership Management Systems
          </h2>
          <p className="text-black mb-4">
            Our membership management systems streamline member registration,
            renewals, and communication, fostering a strong community.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Online member portals</li>
            <li>Automated renewal reminders</li>
            <li>Event registration and management</li>
          </ul>
        </div>

        {/* Volunteer Management Solutions */}
        <div className="p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Images/nonprofit3.webp"
            alt="Volunteer Management Solutions"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">
            Volunteer Management Solutions
          </h2>
          <p className="text-black mb-4">
            Our solutions facilitate volunteer recruitment, scheduling, and
            tracking, ensuring effective utilization of volunteer resources.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Volunteer registration and profiles</li>
            <li>Shift scheduling and reminders</li>
            <li>Volunteer performance tracking</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nonprofit;
