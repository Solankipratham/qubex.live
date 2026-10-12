import React from 'react'

import img2 from "/Images/PlatformDevloper.png";
import { Link } from 'react-router-dom';
const Wearable = () => {
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
        Wearable Solutions for Smart Living and Business Innovation
        </h1>
        <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] text-white">
        Enhance lives and revolutionize industries with our cutting-edge wearable technology solutions. From fitness trackers to enterprise-level wearable devices, we design and develop seamless experiences that drive efficiency and innovation.
        </p>
        <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
          Start Your Project →
        </Link>
      </div>
    </div>  
      <div className="max-w-7xl mx-auto px-6">
  <section className=" py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/Images/ExperiencedWearable.jpg" // Replace with your image URL
            alt="Wearable Tech Device"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Hire Experienced Wearable Device App Developers
          </h1>
          <p className="mb-8">
            Our expert programmers implement <span className="text-blue-500 underline">embedded software</span> for wearable-optimized IoT microcontrollers, including those developed by ARM, Arduino, Adafruit, and Stitchkit.
          </p>
          <div className="space-y-6">
            {/* Features */}
            <div className="flex items-start">
              <div className="text-blue-500 text-3xl mr-4">🌐</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Wristwear Technology</h3>
                <p className="text-gray-600">
                  Engineer wristwear technology solutions, including the software for smartwatches, connected jewelry, and fitness trackers enhanced with IoT sensors.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-blue-500 text-3xl mr-4">🎧</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Hearable Devices</h3>
                <p className="text-gray-600">
                  Develop in-ear device software for simultaneous interpreting, smart hearing aids, headphones with AI-powered noise cancellation, and more.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-blue-500 text-3xl mr-4">🕶️</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Head-Mounted Displays (HMDs)</h3>
                <p className="text-gray-600">
                  Create head-mounted display (HMD) software for augmented reality glasses and virtual reality headsets to create highly immersive user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Tizen Wearable App Development
          </h1>
          <p className="text-gray-600 mb-8">
            We leverage web-native languages, such as JavaScript, HTML5, and CSS, to create intuitive, non-intrusive{' '}
            <span className="text-blue-500 underline">Tizen wearable devices</span>, like the Samsung Gear watch series.
          </p>
          <div className="space-y-6">
            {/* Features */}
            <div className="flex items-start">
              <div className="text-blue-500 text-3xl mr-4">📈</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Wearable Web Apps</h3>
                <p className="text-gray-600">
                  Utilize the Tizen Studio to create <span className="text-blue-500 underline">.NET</span> and web
                  applications for wearable, mobile, and TV devices installed directly on the Tizen device.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-blue-500 text-3xl mr-4">⌚</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Wearable Web Watch Apps</h3>
                <p className="text-gray-600">
                  Engineer fully functional, wearable watch applications delivered with Tizen Studio to display a
                  customized watch face to the user.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-blue-500 text-3xl mr-4">➕</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Wearable Web Widget Apps</h3>
                <p className="text-gray-600">
                  Harness the power of Tizen to create web and native widgets that act as actionable & informative
                  shortcuts to applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/Images/TizenWearable.png" // Replace with your image URL
            alt="Tizen Wearable Device"
            className=""
          />
        </div>
      </div>
    </section>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
          {/* Feature 1 */}
          <div className="p-6 rounded-lg shadow-lg flex flex-col items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img
              src="/Images/Fitness.webp"
              alt="Fitness and Health Wearables"
              className="w-full h-48 rounded-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="font-semibold text-blue-700 mb-2 text-lg sm:text-xl md:text-2xl">
                Fitness and Health Wearables
              </h2>
              <p className="text-black text-sm sm:text-base">
                Design and develop wearable devices that monitor fitness, track health metrics, and improve overall well-being. Empower users with real-time insights for healthier living.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className=" p-6 rounded-lg shadow-lg flex flex-col items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img
              src="/Images/SmartWe.webp"
              alt="Smart Wearable Devices"
              className="w-full h-48 rounded-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="font-semibold text-blue-700 mb-2 text-lg sm:text-xl md:text-2xl">
                Smart Wearable Devices
              </h2>
              <p className="text-black text-sm sm:text-base">
                Create cutting-edge wearable devices with advanced connectivity features like Bluetooth, Wi-Fi, and IoT integration for seamless user experiences.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-lg shadow-lg flex flex-col items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img
              src="/Images/WearableApp.png"
              alt="Wearable App Development"
              className="w-full h-48 rounded-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="font-semibold text-blue-700 mb-2 text-lg sm:text-xl md:text-2xl">
                Wearable App Development
              </h2>
              <p className="text-black text-sm sm:text-base">
                Develop intuitive apps for wearable devices that provide seamless integration with smartphones and other platforms. Enhance user experiences with custom app solutions.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-lg shadow-lg flex flex-col items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img
              src="/Images/EnterpriseWe.webp"
              alt="Enterprise Wearable Solutions"
              className="w-full h-48 rounded-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="font-semibold text-blue-700 mb-2 text-lg sm:text-xl md:text-2xl">
                Enterprise Wearable Solutions
              </h2>
              <p className="text-black text-sm sm:text-base">
                Design wearable technology for industrial and enterprise applications. Improve productivity, safety, and efficiency with smart glasses, AR devices, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="p-6 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4 sm:text-4xl md:text-5xl">
            Why Choose Our Wearable Solutions?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black text-sm sm:text-base">
            <li>
              **Innovative Designs:** Delivering cutting-edge wearable designs that prioritize usability and aesthetics.
            </li>
            <li>
              **Custom Solutions:** Tailored wearable solutions to fit your specific business or personal needs.
            </li>
            <li>
              **Scalable Technology:** Wearables designed to grow with your business or adapt to evolving consumer demands.
            </li>
            <li>
              **Proven Expertise:** Trusted by businesses and consumers alike for advanced wearable technology.
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="py-10 text-center">
          <a
            href="/contact"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium  text-lg sm:text-xl"
          >
            Contact Us for Wearable Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Wearable