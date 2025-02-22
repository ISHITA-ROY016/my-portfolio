import { useState } from "react";
import SunIcon from "../assets/sun-icon.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";
import LeetCodeIcon from "../assets/leetcode.svg";
import { BiCodeAlt } from "react-icons/bi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-darkHeaderBg w-full md:max-w-[70%] max-w-[95%] mx-auto mt-3 sm:mt-6 p-2 sm:p-4 rounded-lg flex flex-wrap justify-between items-center gap-4 sm:gap-8">

      <button className="bg-darkSecondary p-3 rounded-lg md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <HiOutlineMenuAlt3 className="w-5 h-5 text-darkHeading" />
      </button>

      <div className="flex items-center gap-1">
        <BiCodeAlt className="w-8 h-8 text-iconColor" strokeWidth={1.5} />
        <span className="italic font-bold text-2xl sm:text-3xl">Ishita.dev</span>
      </div>

      <div className="hidden md:flex justify-between items-center gap-6 font-semibold text-lg">
        {["About Me", "Education", "Skills", "Projects", "Experience", "Connect"].map((section) => (
          <Link
            key={section}
            to={section.toLowerCase().replace(" ", "")}
            smooth={true}
            spy={true}
            duration={500}
            className="cursor-pointer text-white hover:text-darkHeading"
            activeClass="text-darkHeading"
          >
            {section}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <a href="https://www.linkedin.com/in/ishita-roy-67667a200/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>
        <a href="https://github.com/ISHITA-ROY016" target="_blank" rel="noopener noreferrer">
          <img src={GithubIcon} alt="Github" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>
        <a href="https://leetcode.com/u/royishita016/" target="_blank" rel="noopener noreferrer">
          <img src={LeetCodeIcon} alt="LeetCode" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>

        <button className="bg-darkSecondary p-3 rounded-lg">
          <img src={SunIcon} alt="Sun Icon" className="w-6 h-6" />
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 h-screen w-56 bg-darkHeaderBg shadow-lg flex flex-col items-start p-4 space-y-2 z-50">
          <button className="text-white text-xl self-end" onClick={() => { setMenuOpen(false) }}>
            <HiOutlineX />
          </button>
          {["About Me", "Education", "Skills", "Projects", "Experience", "Connect"].map((section) => (
            <Link
              key={section}
              to={section.toLowerCase().replace(" ", "")}
              smooth={true}
              spy={true}
              duration={500}
              className="cursor-pointer text-white text-sm hover:text-darkHeading"
              onClick={() => setMenuOpen(false)} // Close menu after click
            >
              {section}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Header;
