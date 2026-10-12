    import React, { useState, useEffect } from "react";
    import { FaChevronDown, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
    import { Link } from "react-router-dom";
    // import logo from "../assets/Images/logo.png";
    import Services from "./Services";
    import Industries from "./Industries";
    import Solution from "./Solution";

    const Header = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [activeDropdown, setActiveDropdown] = useState(null);
      const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

      // Track window resizing to adjust between mobile and desktop views
      useEffect(() => {
        const handleResize = () => {
          setIsDesktop(window.innerWidth >= 768);
          if (window.innerWidth >= 768) {
            setIsMobileMenuOpen(false); // Close mobile menu if switching to desktop
          }
        };

        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      const handleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
      };

      const handleMenuClose = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      };

      return (
        <div>
          {/* Navigation bar */}
          <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-10 py-4 bg-transparent text-white">
    <Link to="/" className="w-24" onClick={handleMenuClose}>
      <img
        src="/Images/logo1.png"
        alt="Qubex Tech Logo"
        className="w-full h-auto object-contain"
      />
    </Link>

            {/* Mobile menu toggle */}
            {!isDesktop && (
              <button
                className="text-white text-2xl"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            )}

            {/* Desktop menu */}
            {isDesktop && (
              <ul className="flex list-none gap-6">
                <li
                  className="cursor-pointer flex items-center gap-x-2"
                  onClick={() => handleDropdown("services")}
                >
                  Services <FaChevronDown />
                </li>
                <li
                  className="cursor-pointer flex items-center gap-x-2"
                  onClick={() => handleDropdown("industries")}
                >
                  Industries <FaChevronDown />
                </li>
                <Link
                  to="/about-us"
                  className="flex items-center gap-x-2"
                  onClick={handleMenuClose}
                >
                  About <FaChevronDown />
                </Link>
                <li
                  className="cursor-pointer flex items-center gap-x-2"
                  onClick={() => handleDropdown("solutions")}
                >
                  Solutions <FaChevronDown />
                </li>
                <Link
                  to="/contact"
                  className="bg-[#272727] text-white px-5 py-2 rounded-full flex items-center"
                  onClick={handleMenuClose}
                >
                  Get Started <FaArrowRight className="ml-2" />
                </Link>
              </ul>
            )}
          </nav>

          {/* Mobile menu */}
        {/* Mobile menu */}
{!isDesktop && isMobileMenuOpen && (
  <div className="fixed inset-0 z-50 bg-black text-white overflow-y-auto">
    
    {/* Mobile Header */}
    <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
      
      {/* Close Button (LEFT of logo, FRONT layer) */}
      <button
        className="text-2xl text-white z-50"
        onClick={handleMenuClose}
      >
        <FaTimes />
      </button>

      {/* Logo */}
      <Link to="/" className="w-32 mx-auto" onClick={handleMenuClose}>
        <img
          src="/Images/logo1.png"
          alt="Qubex Tech Logo"
          className="w-full h-auto object-contain"
        />
      </Link>

      {/* Empty spacer for balance */}
      <div className="w-6" />
    </div>

    {/* Menu Items */}
    <ul className="flex flex-col gap-4 px-4 py-6">
      
      <li
        className="cursor-pointer flex items-center justify-between"
        onClick={() => handleDropdown("services")}
      >
        Services <FaChevronDown />
      </li>
     {activeDropdown === "services" && (
  <div onClick={handleMenuClose}>
    <Services />
  </div>
)}

      <li
        className="cursor-pointer flex items-center justify-between"
        onClick={() => handleDropdown("industries")}
      >
        Industries <FaChevronDown />
      </li>
    {activeDropdown === "industries" && (
  <div onClick={handleMenuClose}>
    <Industries />
  </div>
)}


      <Link
        to="/about-us"
        className="flex items-center justify-between"
        onClick={handleMenuClose}
      >
        About <FaChevronDown />
      </Link>

      <li
        className="cursor-pointer flex items-center justify-between"
        onClick={() => handleDropdown("solutions")}
      >
        Solutions <FaChevronDown />
      </li>
   {activeDropdown === "solutions" && (
  <div onClick={handleMenuClose}>
    <Solution />
  </div>
)}


      <Link
        to="/contact"
        className="mt-6 bg-[#171717] text-white px-5 py-3 rounded-lg flex items-center justify-center"
        onClick={handleMenuClose}
      >
        Get Started <FaArrowRight className="ml-2" />
      </Link>

    </ul>
  </div>
)}


          {/* Desktop dropdowns */}
          {isDesktop && activeDropdown === "services" && (
            <div onClick={handleMenuClose} className=" h-full">
              <Services />
            </div>
          )}
          {isDesktop && activeDropdown === "industries" && (
            <div onClick={handleMenuClose} className=" h-full">
              <Industries />
            </div>
          )}
          {isDesktop && activeDropdown === "solutions" && (
            <div onClick={handleMenuClose} className=" h-full">
              <Solution />
            </div>
          )}
        </div>
      );
    };

    export default Header;
