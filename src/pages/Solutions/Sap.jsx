import React from "react";
import img2 from "/Images/PlatformDevloper.png";
import { Link } from 'react-router-dom';

const SAP = () => {
  const services = [
    {
      title: "SAP Implementation Services",
      description:
        "We implement SAP solutions tailored to your business needs by deploying customized SAP modules, ensuring seamless system integration, and optimizing processes for enhanced efficiency.",
      icon: "🌟", // Replace this with an actual icon component if you have one.
    },
    {
      title: "SAP Configurations & Customizations",
      description:
        "We configure unique SAP software settings, applications, features, and overall user experiences with customizable dashboards, graphs, forms, reports, layouts, and other extending functionalities.",
      icon: "⚙️",
    },
    {
      title: "SAP Integration Services",
      description:
        "Our team enhances your business processes by integrating SAP solutions with your systems, including third-party applications, databases, and ERP systems.",
      icon: "🔗",
    },
    {
      title: "SAP Consulting Services",
      description:
        "Our SAP consultant team provides insights on system selection, customization, and best practices, ensuring that your SAP environment aligns with your goals.",
      icon: "📱",
    },
    {
      title: "SAP Migration Services",
      description:
        "We leverage SAP tools to migrate your business operation processes to public cloud environments, as well as update your current software systems to ensure that they’re always up-to-date.",
      icon: "🔄",
    },
    {
      title: "SAP Managed Services",
      description:
        "Our team offers 24/7 system monitoring, proactive maintenance, strategy planning, and expert support to ensure your SAP environment is always up-to-date and functioning at peak performance.",
      icon: "🛠️",
    },
    
  ];

  return (
    <div className="min-h-screen">
      {/* Background Image */}
      <div
        className="bg-cover bg-center w-full h-screen"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${img2}) no-repeat center center fixed`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex items-left pt-10 sm:pt-20 px-4 flex-col">
          <h1 className="text-white font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">
            SAP Solutions for Business Transformation
          </h1>
          <p className="text-xl sm:text-2xl pt-5 w-[90%] sm:w-[80%] text-white">
            Streamline your business processes and achieve operational
            excellence with our tailored SAP solutions. From implementation to
            integration and support, we help organizations harness the power of
            SAP to drive innovation and growth.
          </p>
          <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg  transition w-full sm:w-auto">
            Start Your Project →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
      <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
          We’ve Got SAP® Developers
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Qubex is a leading SAP development company & certified SAP partner. We
          take pride in empowering businesses everywhere leveraging SAP software
          technologies and ensuring that your platforms have all the tools,
          features, and functionality needed to drive your business forward.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow ">
            GET SAP DEVELOPMENT SERVICES
          </button>
        </div>
      </div>
    </section>
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
          {/* Feature 1 */}
          <FeatureCard
            imgSrc="/Images/sap1.webp"
            title="SAP Implementation"
            description="Seamlessly implement SAP solutions tailored to your business requirements. Our experts ensure smooth deployment with minimal disruption to your operations."
          />
          {/* Feature 2 */}
          <FeatureCard
            imgSrc="/Images/sap2.webp"
            title="SAP Customization"
            description="Customize SAP modules to fit your unique business processes. From finance to supply chain management, we tailor solutions to optimize efficiency and performance."
          />
          {/* Feature 3 */}
          <FeatureCard
            imgSrc="/Images/sap3.webp"
            title="SAP Integration"
            description="Connect SAP seamlessly with third-party tools and platforms. Our integration services ensure smooth data flow across your enterprise systems for enhanced collaboration."
          />
          {/* Feature 4 */}
          <FeatureCard
            imgSrc="/Images/sap4.webp"
            title="SAP Support & Maintenance"
            description="Keep your SAP system running smoothly with our dedicated support and maintenance services. We ensure system reliability, performance, and regular updates."
          />
        </div>

        {/* Why Choose Us Section */}
        <div className=" p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
            Why Choose Our SAP Solutions?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black">
            <li>
              <strong>Certified SAP Experts:</strong> Our team of certified SAP
              consultants brings deep industry expertise to every project.
            </li>
            <li>
              <strong>Tailored Solutions:</strong> We design customized SAP
              solutions to meet your specific business needs.
            </li>
            <li>
              <strong>End-to-End Services:</strong> From implementation to
              ongoing support, we cover all aspects of SAP.
            </li>
            <li>
              <strong>Proven Success:</strong> Trusted by businesses across
              industries to deliver exceptional results with SAP.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="py-10 text-center">
          <Link
            to={"/contact"}
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium transition"
          >
            Contact Us for SAP Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

// Reusable FeatureCard Component
const FeatureCard = ({ imgSrc, title, description }) => {
  return (
    <div className="text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-center">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-2xl font-semibold text-blue-700 mb-2">{title}</h2>
      <p className="text-black">{description}</p>
    </div>
  );
};

export default SAP;
