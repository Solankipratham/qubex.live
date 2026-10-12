import React from 'react';
import img2 from "/Images/PlatformDevloper.png";
import { Link } from 'react-router-dom';
const Ticketing = () => {
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
        Ticketing Solutions for Seamless Event Management
        </h1>
        <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] text-white">
          Simplify event management and improve customer experience with our cutting-edge ticketing solutions. From
          digital ticketing to real-time analytics, we provide the tools to ensure your events run smoothly and efficiently.
        </p>
        <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg  transition w-full sm:w-auto">
          Start Your Project →
        </Link>
      </div>
    </div>
      <div className="max-w-7xl mx-auto px-6">

 
    <section className=" py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative flex items-center gap-6">
              {/* Laptop Mockup */}
              <div className="w-[400px]">
                <img
                  src="/Images/img01.jpg"
                  alt="Laptop showing RSVP list"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Event Management Solutions
            </h2>
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <i className="fas fa-music text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Event Management Integrations</h3>
                  <p className="text-gray-600">
                    We integrate Event Management Software to include scanning,
                    ticket validation, admission control, fraud prevention, and
                    more, along with centralized ticketing and reservation management
                    systems.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex space-x-4">
                <div className="bg-green-500 p-3 rounded-full">
                  <i className="fas fa-ticket-alt text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Online Ticketing Software Solutions</h3>
                  <p className="text-gray-600">
                    Our developers create custom online ticketing software for
                    multi-channel applications, supporting e-commerce, reseller
                    providers, and mobile and web apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className=" py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Ticket Preview Section */}
          <div className="flex justify-center">
            <div className="relative w-[300px] h-[600px] bg-blue-900 text-white p-4 rounded-lg shadow-lg">
              <div className="text-lg font-bold uppercase">Big Show Arena Concert</div>
              <div className="mt-2 text-xl font-semibold">Dracula The Musical</div>
              <div className="mt-6 space-y-2">
                <div>
                  <span className="font-semibold">Ticket:</span> 
                </div>
                <div>
                  <span className="font-semibold">Date:</span> 
                </div>
                <div>
                  <span className="font-semibold">Time:</span> 
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-yellow-400 text-black py-2 px-4 rounded shadow">
                Admit One
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <i className="fas fa-code text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold">Ticketing App Development</h3>
                </div>
                <p className="text-gray-600">
                  We deliver open-source, feature-rich ticketing software for
                  web & mobile apps, integrating CRMs, seating maps, and more.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-500 p-3 rounded-full">
                    <i className="fas fa-ticket-alt text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold">Ticketing Software Design</h3>
                </div>
                <p className="text-gray-600">
                  We design ticketing solutions optimized for e-ticketing and
                  smooth user experiences.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <i className="fas fa-map text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold">Venue Mapping Development</h3>
                </div>
                <p className="text-gray-600">
                  We create custom venue mapping software to integrate with
                  ticketing platforms and enhance user experience.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="bg-red-500 p-3 rounded-full">
                    <i className="fas fa-mobile-alt text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold">
                    Mobile Scanning Application
                  </h3>
                </div>
                <p className="text-gray-600">
                  We build mobile scanning apps for ticket verification,
                  payments, and VIP recognition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center flex-col items-center flex sm:space-x-6 hover:scale-105 transition-transform">
            <img
              src="/Images/ticket1.webp"
              alt="Online Ticketing"
              className="w-full  h-auto rounded-md mb-4 sm:mb-0"
            />
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">Online Ticketing</h2>
              <p className="text-black">
                Create and sell tickets online with ease. Our platform ensures a seamless purchase experience for
                customers, with secure payment options and instant ticket delivery.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center flex-col items-center flex sm:space-x-6 hover:scale-105 transition-transform">
            <img
              src="/Images/ticket2.webp"
              alt="Mobile Ticketing"
              className="w-full  h-auto rounded-md mb-4 sm:mb-0"
            />
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">Mobile Ticketing</h2>
              <p className="text-black">
                Enable customers to purchase, store, and validate tickets directly from their mobile devices. Our
                mobile ticketing solutions ensure convenience and efficiency.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center flex-col items-center flex sm:space-x-6 hover:scale-105 transition-transform">
            <img
              src="/Images/ticket3.webp"
              alt="Event Analytics"
              className="w-full  h-auto rounded-md mb-4 sm:mb-0"
            />
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">Event Analytics</h2>
              <p className="text-black">
                Gain insights into ticket sales, attendance, and customer behavior. Our analytics tools help you
                optimize event performance and make data-driven decisions.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center flex-col items-center flex sm:space-x-6 hover:scale-105 transition-transform">
            <img
              src="/Images/ticket4.webp"
              alt="Custom Ticketing Solutions"
              className="w-full  h-auto rounded-md mb-4 sm:mb-0"
            />
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">Custom Ticketing Solutions</h2>
              <p className="text-black">
                Tailor ticketing systems to meet the unique requirements of your events. From branding to
                functionality, our solutions are designed to align with your goals.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
            Why Choose Our Ticketing Solutions?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black">
            <li>
              <strong>Comprehensive Platform:</strong> Manage all aspects of ticketing, from sales to validation, in
              one place.
            </li>
            <li>
              <strong>Seamless Integration:</strong> Integrate with existing platforms for a unified event management
              experience.
            </li>
            <li>
              <strong>Scalable Solutions:</strong> Designed to accommodate events of all sizes, from small gatherings to
              large-scale conferences.
            </li>
            <li>
              <strong>Enhanced Customer Experience:</strong> Provide attendees with a smooth and hassle-free ticketing
              process.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="py-10 text-center">
          <a
            href="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium "
          >
            Contact Us for Ticketing Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ticketing;
