import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import SummerCourseBanner from "../Banner/SummerCourseBanner";
import "../../assets/css/mobile.css";
import logo from "../../config/siteConfig.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const desktopNavRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(event.target)
      ) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <>
      {/* Glass Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
        <div className="flex items-center justify-between px-6 py-4 rounded-full">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo.branding.hkislogo}
              alt="Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <ul
            ref={desktopNavRef}
            className="hidden md:flex items-center gap-6 text-sm font-medium text-white"
          >
            <li><Link to="/" className="hover:text-orange-400">Home</Link></li>

            <li>
              <Link to="/About/about-vss" className="hover:text-orange-400">
                About Us
              </Link>
            </li>

            <li className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); toggleDropdown(5); }}
                className="hover:text-orange-400"
              >
                Gallery ▾
              </button>
              {dropdownOpen === 5 && (
                <div className="absolute top-8 left-0 bg-white text-black rounded-lg shadow-md w-36 py-2">
                  <Link to="/Gallery/vss-gallery" className="block px-4 py-2 hover:bg-gray-100">Gallery</Link>
                  <Link to="/Gallery/vss-events" className="block px-4 py-2 hover:bg-gray-100">Events</Link>
                </div>
              )}
            </li>

            <li className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); toggleDropdown(3); }}
                className="hover:text-orange-400"
              >
                Academics ▾
              </button>
              {dropdownOpen === 3 && (
                <div className="absolute top-8 left-0 bg-white text-black rounded-lg shadow-md w-44 py-2">
                  <Link to="/examination" className="block px-4 py-2 hover:bg-gray-100">Examination</Link>
                  <Link to="/notification" className="block px-4 py-2 hover:bg-gray-100">Notification</Link>
                </div>
              )}
            </li>

            <li><Link to="/admission" className="hover:text-orange-400">Admission</Link></li>
            <li><Link to="/recruitment" className="hover:text-orange-400">Recruitment</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400">Contact Us</Link></li>

            {/* Get Started (Login) */}
            <Link to="/admin/login">
              <button className="ml-4 px-6 py-2 rounded-full text-white font-semibold
                bg-gradient-to-r from-orange-400 to-pink-500
                hover:scale-105 transition-all duration-300">
                Login →
              </button>
            </Link>
          </ul>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars size={22} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul
            ref={menuRef}
            className="mt-4 bg-gray-900 rounded-2xl p-4 space-y-2 md:hidden text-white"
          >
            <Link to="/" className="block px-4 py-2 hover:bg-gray-800 rounded">Home</Link>
            <Link to="/About/about-vss" className="block px-4 py-2 hover:bg-gray-800 rounded">About</Link>
            <Link to="/admission" className="block px-4 py-2 hover:bg-gray-800 rounded">Admission</Link>
            <Link to="/recruitment" className="block px-4 py-2 hover:bg-gray-800 rounded">Recruitment</Link>
            <Link to="/contact" className="block px-4 py-2 hover:bg-gray-800 rounded">Contact</Link>

            <Link to="/admin/login">
              <button className="w-full mt-2 py-2 rounded-full font-semibold
                bg-gradient-to-r from-orange-400 to-pink-500">
                Login
              </button>
            </Link>
          </ul>
        )}
      </nav>

      <SummerCourseBanner
        isVisible={isBannerVisible}
        onClose={() => setIsBannerVisible(false)}
      />
    </>
  );
};

export default Navbar;
