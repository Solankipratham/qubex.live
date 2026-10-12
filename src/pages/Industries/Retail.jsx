import React from 'react';

import { Link } from "react-router-dom";
const Retail = () => {
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
      <h1 className=" font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 w-full sm:w-2/3">Retail Software Solutions
      </h1>
      <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
          Our company specializes in developing custom software solutions tailored for the retail industry. We offer a
          comprehensive suite of services designed to enhance customer engagement, streamline operations, and drive
          profitability, ensuring a seamless shopping experience across all channels.
      </p>
      <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
            Start Your Project →
          </Link>
    </div>
  </div>
      <section className="mt-10">
      <div className="container mx-auto px-5">
        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">
            Hear What Our Clients Have to Say
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Testimonial 1 */}
          <div className="space-y-4">
            <blockquote className="text-gray-600 italic">
              “We were looking to create a hybrid mobile app to accompany our
              Magento platform but only had 45 days before a huge trade show to
              make this happen. We thought this was an impossible task for sure.
              Thankfully, the team at Qubex was able to come in and take
              complete control of our software development needs. They were
              able to complete the task a week ahead of schedule and with zero
              mistakes. Their work has been invaluable to us, and we are very
              grateful for their hard work and pool of highly talented
              developers.”
            </blockquote>
            <cite className="text-gray-800 font-medium">
              Director of Operations, Retail Manufacturing Company
            </cite>
          </div>

          {/* Testimonial 2 */}
          <div className="space-y-4">
            <blockquote className="text-gray-600 italic">
              “Qubex was able to build us the website and app we wanted. We
              absolutely loved working with them, they kept us updated weekly,
              and their skill sets were mind-blowing, and if you don’t
              understand something they will explain exactly what it is. Our
              project manager was phenomenal, not only did he keep us updated,
              but we also had meetings one on one to talk about the options we
              had about a specific task.”
            </blockquote>
            <cite className="text-gray-800 font-medium">
              Vice President, Healthcare Industry
            </cite>
          </div>
        </div>
        <div className="text-center mb-12">
          <button className="bg-black text-white py-3 px-8 rounded-full font-semibold transition">
            Get AI-Powered Retail Solutions
          </button>
        </div>

        {/* Retail Software Development Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Custom Retail & Wholesale Software Development
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto mt-4">
            We develop custom retail & wholesale software solutions as
            full-featured retail systems or integrated modules for corporate
            infrastructures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/Images/cardmapr-nl-aU-tyT7E0lw-unsplash.jpg"
              alt="Retail Software"
              className="rounded-lg shadow-md h-96 mx-auto"
            />
          </div>
          <div className="space-y-6">
            {[
              {
                title: "Retail Loyalty Software Solutions",
                description:
                  "Encompass all operational components, including membership, customer account management, and member self-service.",
                icon: "🎟️",
              },
              {
                title: "Mobile Retail Application Solutions",
                description:
                  "Develop solutions for customers, retailers, and distributors to manage mobile POS, inventory, and orders.",
                icon: "📱",
              },
              {
                title: "AR & VR Retail Solutions",
                description:
                  "Showcase virtual fitting rooms, AR product catalogs, VR showrooms, and more immersive experiences.",
                icon: "🕶️",
              },
              {
                title: "Omnichannel Retail Solutions",
                description:
                  "Feature-rich customer service and care management solutions with self-service options and communication tools.",
                icon: "🔗",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl text-blue-500">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-black text-white py-3 px-8 rounded-full font-semibold transition">
            Get Retail Solutions
          </button>
        </div>
      </div>
    </section>
      {/* Service Areas */}
      <div className="grid px-4 pt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Retail Loyalty Software Solutions */}
        <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img 
            src="Images/retail1.webp"
            alt="Retail Loyalty Software" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">Retail Loyalty Software Solutions</h2>
          <p className="text-black mb-4">
            Our custom loyalty solutions encompass all operational components, including membership, customer account
            management, member self-service, rewards, and more.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Membership management</li>
            <li>Customer account management</li>
            <li>Member self-service portals</li>
            <li>Reward program integration</li>
          </ul>
        </div>

        {/* AR & VR Retail Solutions */}
        <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img 
            src="Images/retail2.webp"
            alt="AR & VR Retail Solutions" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">AR & VR Retail Solutions</h2>
          <p className="text-black mb-4">
            We develop immersive augmented & virtual reality solutions that showcase virtual fitting rooms, AR product
            catalogs, VR & touchscreen showrooms, and more.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Virtual fitting rooms</li>
            <li>AR product catalogs</li>
            <li>VR & touchscreen showrooms</li>
            <li>Interactive product demonstrations</li>
          </ul>
        </div>

        {/* Mobile Retail Application Solutions */}
        <div className=" p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img 
            src="Images/retail3.webp"
            alt="Mobile Retail Application" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-black mb-4">Mobile Retail Application Solutions</h2>
          <p className="text-black mb-4">
            We create mobile retail solutions for customers, retailers, and distributors to manage mobile POS, inventory
            management, order processing, and more.
          </p>
          <ul className="list-disc pl-5 text-black">
            <li>Mobile POS systems</li>
            <li>Inventory management</li>
            <li>Order processing</li>
            <li>Customer engagement tools</li>
          </ul>
        </div>
      </div>

      {/* Additional Services */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-black mb-6">Additional Services</h2>
        <p className="text-lg text-black">
          Beyond core software solutions, we offer a range of services to further enhance your retail operations:
        </p>
        <ul className=" text-black mt-4">
          <li>Custom e-commerce software development</li>
          <li>Omnichannel retail solutions</li>
          <li>Shopping cart integration and support</li>
          <li>Product Information Management (PIM) solutions</li>
          <li>Inventory management software</li>
        </ul>
      </div>

      <section>
      {/* Featured Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Featured Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title:
                  "The Evolution of Customer Engagement: Omni-Channel Retailing Platforms",
                img: "/Images/ExperiencedWearable.jpg",
              },
              {
                title:
                  "Prestashop vs Magento: Choosing the E-Commerce Framework That Best Showcases Your Business",
                img: "/Images/radek-grzybowski-eBRTYyjwpRY-unsplash.jpg",
              },
              {
                title:
                  "Custom Software for Convenience and Grocery Store Inventory Management",
                img: "/Images/christopher-gower-m_HRfLhgABo-unsplash.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className=" py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-8">
            Drop us a line or give us a ring with any questions regarding our
            retail management software development. We love to hear from you
            and are happy to answer any questions.
          </p>
          <Link to={"/contact"} className=" font-semibold py-3 px-8 rounded-full bg-black text-white transition mb-12">
            Schedule a Discovery Call
          </Link>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "20000+", label: "Apps Built", icon: "👍" },
              { value: "7000+", label: "Happy Customers", icon: "😊" },
              { value: "47%", label: "Repeat and Referral Business", icon: "❤️" },
              { value: "2800+", label: "Developers", icon: "👨‍💻" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.icon}</div>
                <h3 className="text-2xl font-semibold">{stat.value}</h3>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Retail;
