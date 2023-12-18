import React, { useState, useEffect } from "react";
import { mainBody, about } from "../../Assets/config";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-4 ${
        isScrolled ? "fixed top-0 w-full text-black bg-white bg-opacity-80 shadow-md": "bg-gray-800 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home">
            <span className="font-semibold text-lg">
              {`<${mainBody.firstName} />`}
            </span>
          </a>
        </div>
        <div className="hidden md:flex">
          <a
            href="#projects"
            className={
              isScrolled
                ? "text-black mr-4 hover:text-gray-700"
                : "text-white mr-4 hover:text-gray-300"
            }
          >
            Projects
          </a>
          <a
            href={about.resume}
            className={
              isScrolled
                ? "text-black mr-4 hover:text-gray-700"
                : "text-white mr-4 hover:text-gray-300"
            }
          >
            Resume
          </a>
          <a
            href="#skills"
            className={
              isScrolled
                ? "text-black mr-4 hover:text-gray-700"
                : "text-white mr-4 hover:text-gray-300"
            }
          >
            Skills
          </a>
          <a
            href="#getintouch"
            className={
              isScrolled
                ? "text-black hover:text-gray-700"
                : "text-white hover:text-gray-300"
            }
          >
            Get In Touch
          </a>
        </div>
        <div
          className={`md:hidden mt-2 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          {/* Mobile menu toggle */}
          <button className={
              isScrolled
                ? "text-black"
                : "text-white"
            } onClick={toggleMenu}>
            {/* You can use an icon like a hamburger menu here */}
            Menu
          </button>
        </div>
      </div>
      {/* Collapsible mobile menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden mt-2 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <a href="#projects" className="block mb-2">
            Projects
          </a>
          <a href="#resume" className="block mb-2">
            Resume
          </a>
          <a href="#skills" className="block mb-2">
            Skills
          </a>
          <a href="#get-in-touch" className="block">
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
