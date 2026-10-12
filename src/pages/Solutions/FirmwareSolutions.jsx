import React from "react";
import { FiCpu, FiSettings, FiShield, FiCode } from 'react-icons/fi';
import { FaCogs, FaLaptopCode, FaCloud, FaWifi, FaMobileAlt, FaMicrochip } from 'react-icons/fa';



import img2 from "/Images/PlatformDevloper.png";
import { Link } from "react-router-dom";
const FirmwareSolutions = () => {
  return (
    <div className="min-h-screen text-white">{/* Background Image */}
    <div
      className="bg-cover opacity-6 bg-center w-full h-screen z-[-10]"
      style={{
        background: `url(${img2}) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))`,
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundAttachment: "fixed", // Keeps the image fixed
      }}
    >
      <div className="flex items-left pt-10 sm:pt-20 px-4 flex-col">
        <h1 className="text-white font-bold text-3xl sm:text-4xl mt-5 sm:mt-20 w-full sm:w-2/3">Hire Experienced Firmware Developers for Your Embedded Systems
        </h1>
        <p className="text-xl sm:text-2xl pt-5  w-[90%] sm:w-[80%] ">
            Qubex is a leading embedded systems & firmware development firm specializing in developing world-class embedded systems,
            along with a broad range of embedded firmware and software development services for startups, SMBs, and enterprise-level businesses.
        </p>
        <Link to={"/contact"} className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition w-full sm:w-auto">
          Start Your Project →
        </Link>
      </div>
    </div>

    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl text-black md:text-5xl font-bold">
          Custom Firmware Management Software Solutions
        </h1>
        <p className="text-gray-700 max-w-5xl mx-auto">
          Qubex designs & develops robust firmware management solutions to ensure seamless updates, secure device communication, and optimized hardware performance for IoT devices, industrial equipment, and embedded systems.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src="/Images/firmware.jpg"
            alt="Firmware Management Dashboard"
            className="w-full max-w-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-8">
          {/* Card 1 */}
          <div className="flex items-center gap-4">
            <FiCpu className="text-[#02b5f1] text-7xl" />
            <div>
              <h2 className="text-xl font-bold">Custom Firmware Development</h2>
              <p className="text-gray-700">
                We design and develop customized firmware solutions tailored to your device needs, ensuring compatibility, performance optimization, and feature enrichment for IoT and embedded systems.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4">
            <FiSettings className="text-[#02b5f1] text-7xl" />
            <div>
              <h2 className="text-xl font-bold">Automated Firmware Updates</h2>
              <p className="text-gray-700">
                Enable seamless Over-The-Air (OTA) updates for devices, ensuring secure and efficient firmware delivery to improve device functionality without downtime.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4">
            <FiShield className="text-[#02b5f1] text-7xl" />
            <div>
              <h2 className="text-xl font-bold">Secure Firmware Solutions</h2>
              <p className="text-gray-700">
                Our firmware solutions integrate robust security features like encrypted communication, secure boot, and vulnerability patching to protect devices from cyber threats.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center gap-4">
            <FiCode className="text-[#02b5f1] text-7xl" />
            <div>
              <h2 className="text-xl font-bold">Firmware Testing & Debugging</h2>
              <p className="text-gray-700">
                Comprehensive testing and debugging services ensure that firmware is free of bugs, fully optimized, and performs reliably under all operating conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <button className="px-8 py-3 bg-black text-white font-semibold rounded-full">
        Develop Firmware Management Solutions
      </button>
    </div>

    <div className="px-6 py-16 ">
      <div className="container mx-auto">
        {/* Custom Firmware Solutions for IoT & Consumer Electronics Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Custom Firmware Solutions for IoT & Consumer Electronics
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Qubex offers comprehensive, custom-tailored firmware solutions that allow companies to control their IoT devices and equipment, gather and process sensor data, and connect their devices within a centralized embedded IoT system.
          </p>
          <div className="flex justify-center gap-12 mb-6">
            <div className="w-1/2">
              <img src="/Images/Laptop.png" alt="Firmware Solutions" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* Firmware Solutions Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Custom Firmware Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-12 px-4">
            <div className="space-y-4">
              <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                <FaCogs />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Linux Kernel Development</h3>
              <p className="text-gray-600">Our Linux Kernel developers extend your current device’s memory, manage peripherals, optimize CPU usage, and interface the device with other IT infrastructure components.</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                <FaLaptopCode />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Android Open Source Project (AOSP) Development</h3>
              <p className="text-gray-600">We build customized operating systems using AOSP, installed either on macOS or Linux devices, and apply modifications to the source code to enable desired functionalities.</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                <FaCloud />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Board Support Package (BSP) Development</h3>
              <p className="text-gray-600">We create BSP firmware with device drivers, libraries, and applications, allowing RTOS and/or Linux to function on customized gadget or hardware devices.</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                <FaWifi />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Network Connectivity</h3>
              <p className="text-gray-600">After we’ve tested your boards, we provide IoT device network connectivity, allowing your IoT devices to interact with a mobile app via Bluetooth, WiFi, LoRaWAN, or 4g/LTE.</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Digital Signal Processing (DSP) Development</h3>
              <p className="text-gray-600">Our DSP experts use machine learning algorithms to recognize patterns in equipment performance data, clean up audio noises, and detect objects within camera feeds.</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center text-[#02b5f1] text-5xl mb-4">
                <FaMicrochip />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Device Driver Development</h3>
              <p className="text-gray-600">Our skilled developers can build device drivers designed to drive peripherals within IoT devices, including LEDs, buzzers, buttons, actuators, sensors, timers, and more.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-12">
          <a href="#" className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[#171717] rounded-lg ">
            Get Custom Firmware Solutions Now
          </a>
        </div>
      </div>
    </div>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {/* Feature Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="text-blue-600 text-center">
              <i className="fas fa-code text-3xl mb-4"></i> {/* Replace with proper icons */}
            </div>
            <h2 className="text-xl font-bold mb-2 text-black text-center">Embedded Firmware Development</h2>
            <p className="text-sm text-center text-black">
              We work with both high-level firmware and low-level firmware to power various embedded systems and programming components for all kinds of embedded devices.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="text-blue-600 text-center">
              <i className="fas fa-cogs text-3xl mb-4"></i>
            </div>
            <h2 className="text-xl font-bold mb-2 text-black text-center">Embedded Firmware Integrations</h2>
            <p className="text-sm text-center text-black">
              Our high-quality firmware integrations are compatible with microprocessors & hardware from companies like ARM, Qualcomm, NVIDIA, and more.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="text-blue-600 text-center">
              <i className="fas fa-keyboard text-3xl mb-4"></i>
            </div>
            <h2 className="text-xl font-bold mb-2 text-black text-center">Embedded Firmware Programming</h2>
            <p className="text-sm text-center text-black">
              We perform post-validation, including chip bring-up, memory architecture optimization, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Details Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-black">Choose Qubex's Developers-for-Hire for Your Next Firmware Project</h2>
          <p className="text-lg mb-8 text-black">
            We provide firmware development for RTOS, ROS, and non-OS embedded systems, offering tailored solutions for leading brands.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
            <div className="text-center bg-white p-4 rounded-lg">
              <i className="fas fa-laptop-code text-blue-600 text-3xl mb-2"></i>
              <h4 className="font-bold text-black">RTOS Development</h4>
              <p className="text-black">Efficient firmware solutions for real-time operating systems.</p>
            </div>
            <div className="text-center bg-white p-4 rounded-lg ">
              <i className="fas fa-robot text-blue-600 text-3xl mb-2"></i>
              <h4 className="font-bold text-black">ROS Development</h4>
              <p className="text-black">Engineering robotics systems with robust frameworks.</p>
            </div>
            <div className="text-center bg-white p-4 rounded-lg">
              <i className="fas fa-infinity text-blue-600 text-3xl mb-2"></i>
              <h4 className="font-bold text-black">Non-OS Embedded Firmware</h4>
              <p className="text-black">Embedded C applications without operating systems.</p>
            </div>
            <div className="text-center bg-white p-4 rounded-lg">
              <i className="fas fa-history text-blue-600 text-3xl mb-2"></i>
              <h4 className="font-bold text-black">Legacy Firmware Migration</h4>
              <p className="text-black">Migrate firmware from one MCU vendor to another.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <div className="text-center mb-4">
        <button className="bg-black text-white px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out">
          AUGMENT YOUR TEAM WITH FIRMWARE DEVELOPERS
        </button>
      </div>
    </div>
  );
};

export default FirmwareSolutions;
