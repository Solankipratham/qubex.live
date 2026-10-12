import React from "react";
import { FiMapPin, FiGlobe, FiMonitor } from "react-icons/fi";
import {
  FaMapMarkerAlt,
  FaCogs,
  FaDatabase,
  FaChartLine,
  FaMap,
} from "react-icons/fa";

import img2 from "/Images/PlatformDevloper.png";
import { Link } from "react-router-dom";
const GIS = () => {
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
            GIS Solutions for Modern Businesses
          </h1>
          <p className="text-white text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Unlock the power of Geographic Information Systems (GIS) with our
            cutting-edge solutions designed to provide real-time mapping,
            spatial data analysis, and advanced geospatial insights. Our GIS
            services empower businesses to make data-driven decisions with
            precision and efficiency.
          </p>
          <Link
            to={"/contact"}
            className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto"
          >
            Start Your Project →
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white md: lg:">
          {/* Title Section */}
          <h2 className="text-3xl lg:text-4xl pt-20 font-bold text-center mb-4">
            Custom Geospatial Mapping Software
          </h2>
          <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Qubex’s GIS mapping software experts can customize any GIS system
            software to provide continuous access to geospatial data in a
            reliable GIS app, ensuring shareable insights of critical data to a
            host of different industries.
          </p>

          {/* Content Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Card 1 */}
              <div className="flex  gap-4">
                <FiMapPin className="text-blue-500 text-9xl" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Geospatial Mapping Software
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We leverage multiple big data sources & spatial mapping
                    tools to create complex data modeling applications for
                    topographical & hydrological studies, precision farming,
                    routing logistics, social science analysis, climate
                    forecasting, and
                    <a href="#" className="text-blue-500 underline">
                      {" "}
                      aerial drone mapping
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex gap-4">
                <FiMonitor className="text-blue-500 text-9xl" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    3D Visualization Software
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our 3D imaging/modeling experts harness the power of ESRI’s
                    ArcGIS APIs and other rendering tools to design overlays,
                    quantitative and qualitative symbols, legends, annotation
                    options, transitions, and more to visualize any 2D and 3D
                    thematic map.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex gap-4">
                <FiGlobe className="text-blue-500 text-9xl" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Geoprocessing & Geocoding
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We leverage open-source GIS platforms, like
                    <a href="#" className="text-blue-500 underline">
                      {" "}
                      Autodesk Civil 3D software
                    </a>
                    , to program automated geoprocessing software that
                    transforms unstructured datasets into useful inputs
                    (geo-coordinates app).
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Laptop Image */}
            <div className="flex justify-center pt-20 lg:justify-end">
              <img
                src="/Images/Gis.png"
                alt="Geospatial map on a laptop"
                className=" rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="px-6 py-16 ">
          <div className="container mx-auto">
            {/* GIS Software Development Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                Hire Developers with GIS Software Development Experience
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Qubex offers experienced GIS hackers and developers who can
                help you capture geospatial information and develop interactive
                GIS mapping solutions for a range of applications. With
                AI-powered GIS software, processing of massive amounts of
                spatial data is made possible, providing valuable insights into
                urban growth and climate change.
              </p>
              <div className="flex justify-center gap-12 mb-6">
                <div className="">
                  <img
                    src="/Images/Phone.png"
                    alt="GIS App"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="text-lg text-gray-600">
                We create custom GIS apps designed for tracking points or
                objects with accurate projections & realistic scaling, then
                pulling geographical data from various sources.
              </p>
            </div>

            {/* GIS Services Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                Custom Geospatial Mapping Software
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Qubex’s GIS mapping software experts can customize any GIS
                system software to provide continuous access to geospatial data
                in a reliable GIS app, ensuring shareable insights of critical
                data across different industries.
              </p>
              <div className="grid md:grid-cols-3 gap-12 px-4">
                <div className="space-y-4">
                  <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                    <FaMap />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Geospatial Mapping Software
                  </h3>
                  <p className="text-gray-600">
                    We leverage multiple big data sources & spatial mapping
                    tools to create complex data modeling applications for
                    topographical & hydrological studies, precision farming,
                    routing logistics, and more.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                    <FaChartLine />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    3D Visualization Software
                  </h3>
                  <p className="text-gray-600">
                    Our 3D imaging/rendering experts harness the power of Esri’s
                    ArcGIS APIs and other rendering tools to design overlays,
                    quantitative & qualitative symbols, legends, annotation
                    options, and more to visualize any 2D and 3D thematic maps.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                    <FaDatabase />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Geoprocessing & Geocoding
                  </h3>
                  <p className="text-gray-600">
                    We leverage open-source GIS platforms like Autodesk GIS,
                    ArcGIS, and others to program automated geoprocessing
                    software that transforms unstructured datasets into useful
                    inputs (maps, addresses, etc.) into coordinates.
                  </p>
                </div>
              </div>
            </div>

            {/* GIS Development Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                GIS Software Development & Programming
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Qubex seamlessly integrates Geographic Information Systems
                (GIS) with robust database features & third-party GIS software
                configurations, enabling companies to generate GIS maps and
                address other geospatial information needs.
              </p>
              <div className="grid md:grid-cols-2 gap-12 px-4">
                <div className="space-y-4">
                  <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                    <FaCogs />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    GIS Software Development
                  </h3>
                  <p className="text-gray-600">
                    We offer GIS development services, helping businesses build
                    powerful GIS applications and solutions using modern
                    programming languages like C++, Java, Python, and more.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                    <FaMapMarkerAlt />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    GIS Application Development
                  </h3>
                  <p className="text-gray-600">
                    Our GIS app development services focus on tracking points or
                    objects with accurate projections, allowing for realistic
                    scaling and gathering geographical data for analysis and
                    insight purposes.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                    <FaDatabase />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    GIS Database Design
                  </h3>
                  <p className="text-gray-600">
                    Our team configures cloud-hosted relational databases like
                    Microsoft SQL, MySQL, PostgreSQL, and more to GIS mapping
                    systems, ensuring seamless integration with web services
                    APIs (REST, SOAP, JSON, XML) for creating data interfaces.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                    <FaDatabase />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    GIS Programming Services
                  </h3>
                  <p className="text-gray-600">
                    Our superior back-end GIS experience comes with extensive
                    knowledge and experience with using top application
                    development tools & programming languages, such as C++,
                    Visual Basic, Visual C#k Java, JSP, ASP, XML, GML, and Cold
                    Fusion
                  </p>
                </div>
              </div>
            </div>

            {/* GIS Software Design Image */}
            <div className="text-center mb-12">
              <img
                src="/Images/Laptop.png"
                alt="GIS Design"
                className="object-cover w-full h-96"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-8">
          {/* Feature 1 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/gis1.webp"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Real-Time Mapping
            </h2>
            <p className="text-black">
              Utilize live mapping solutions for tracking, monitoring, and
              analyzing geospatial data. Our real-time mapping tools ensure you
              stay informed and make agile decisions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/gis2.webp"
              alt="Spatial Data Analysis"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Spatial Data Analysis
            </h2>
            <p className=" text-black">
              Leverage advanced spatial analysis to gain actionable insights.
              Identify trends, optimize resource allocation, and enhance
              planning with precision geospatial intelligence.
            </p>
          </div>

          {/* Feature 3 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/gis3.webp"
              alt="Custom GIS Solutions"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Custom GIS Solutions
            </h2>
            <p className="text-black">
              Our tailored GIS solutions address unique business challenges
              across industries. From logistics to environmental planning, our
              expertise ensures you have the tools to succeed.
            </p>
          </div>

          {/* Feature 4 */}
          <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Images/gis4.webp"
              alt="Geospatial Visualization"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Geospatial Visualization
            </h2>
            <p className="text-black">
              Transform complex data into intuitive visuals with interactive
              maps, 3D modeling, and heatmaps. Empower your team with
              easy-to-understand geospatial insights.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className=" p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
            Why Choose Our GIS Solutions?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black">
            <li>
              <strong>Comprehensive GIS Expertise:</strong> From data collection
              to visualization, we cover all aspects of GIS.
            </li>
            <li>
              <strong>Industry-Specific Solutions:</strong> Tailored GIS
              services for industries like transportation, healthcare, retail,
              and more.
            </li>
            <li>
              <strong>Scalable and Flexible:</strong> Our solutions grow with
              your business and adapt to your changing needs.
            </li>
            <li>
              <strong>State-of-the-Art Technology:</strong> Leverage the latest
              in GIS software, AI, and data analytics.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="mb-4 mt-4 text-center">
          <a
            href="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium transition"
          >
            Contact Us for GIS Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default GIS;
