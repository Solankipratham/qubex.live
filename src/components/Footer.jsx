import React, { useState, useEffect } from "react";
import {
  FaArrowUp,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Scroll event listener to show the button
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 200); // Show button when scrolling 200px down
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll back to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#f5f7fa] shadow-xl p-6 md:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#878787] cursor-pointer">
              <Link to={"/about-us"}>About</Link>
            </li>
            <li className="hover:text-[#878787] cursor-pointer">
              <Link to={"/casestudy"}>Case Study</Link>
            </li>
            <li className="hover:text-[#878787] cursor-pointer">
              careers
            </li>
            <li className="hover:text-[#878787] cursor-pointer">
              {" "}
              <Link to={"/contact"}>Contacts</Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#878787] cursor-pointer">
              <Link to={"/game-development"}>Game Development</Link>
            </li>
            <li className="hover:text-[#878787] cursor-pointer">
              <Link to={"/custom-software-development"}>
                Custom Software Development{" "}
              </Link>
            </li>
            <li className="hover:text-[#878787] cursor-pointer">
              <Link to={"/ui-ux-design"}>Ui/Ux Design</Link>
            </li>
            <li className="hover:text-[#878787] cursor-pointer">
              <Link to={"/android-ios-development"}>App Development</Link>
            </li>
            <li className="hover:text-[#878787] cursor-pointer">
         VR/AR/MR Development
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Industries</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#878787] cursor-pointer">
              <Link to={"/banking-fintech"}>Banking</Link>
            </li>
            <li className="hover:text-[#878787] cursor-pointer">
              <Link to={"/healthcare"}>Healthcare</Link>
            </li>
            <li className="hover:text-[#878787] cursor-pointer">
              <Link to={"/gaming"}>Gaming</Link>
            </li>
            <li className="hover:text-[#878787] cursor-pointer">
              <Link to={"/real-estate"}>Real state</Link>
            </li>
            <li className="hover:text-[#878787] cursor-pointer">
              <Link to={"/retail"}>Retail</Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Newsletter</h3>
          <p className="mb-4 text-sm">
            Sign up to Qubex Global weekly newsletter to get the latest
            updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded border-none text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-2/3"
            />
            <button
              className="bg-[#171717] hover:bg-[#373737] text-white max-w-fit px-5 py-2 rounded-full transition"
              aria-label="Send Newsletter"
            >
              SEND
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 text-xl">
            <Link
              to={"https://www.instagram.com/Qubex?igsh=cXo4bGJ4ZmYwbGd1"}
              aria-label="Facebook"
              className="hover:text-[#878787]"
            >
              <FaInstagram />
            </Link>
            <Link to={""} aria-label="Twitter" className="hover:text-[#878787]">
              <FaTwitter />
            </Link>
            <Link
              to={"https://www.linkedin.com/company/Qubex-technologies/"}
              aria-label="LinkedIn"
              className="hover:text-[#878787]"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to={"https://www.youtube.com/results?search_query=Qubex"}
              aria-label="YouTube"
              className="hover:text-[#878787]"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Links and Scroll to Top Button */}
      <div className="flex flex-wrap justify-between items-center mt-10 pt-5 border-t border-gray-600 text-sm gap-4">
        <p className="text-center sm:text-left w-full sm:w-auto">
          Copyright © 2026 Qubex Technologies, All rights reserved.
        </p>
        <div className="flex justify-center gap-4">
          <Link to={""} className="hover:underline">
            Terms of Use
          </Link>
          <Link to={""} className="hover:underline">
            Privacy Policy
          </Link>
        </div>

        {/* Conditional Rendering of Scroll to Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 p-2 rounded-full bg-[#171717] text-white shadow-lg flex items-center justify-center"
            style={{
              width: "50px",
              height: "50px",
            }}
            aria-label="Scroll to Top"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
