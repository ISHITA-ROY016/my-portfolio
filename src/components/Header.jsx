import { useState, useEffect } from "react";
import SunIcon from "/assets/sun-icon.svg";
import LinkedInIcon from "/assets/linkedin.svg";
import GithubIcon from "/assets/github.svg";
import LeetCodeIcon from "/assets/leetcode.svg";
import { BiCodeAlt } from "react-icons/bi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      id="site-header"
      style={{
        transition: "all 0.4s ease-in-out",
        backdropFilter: "blur(20px) saturate(1.5)",
        WebkitBackdropFilter: "blur(20px) saturate(1.5)",
        background:
          scrolled
            ? "rgba(10, 25, 47, 0.6)" // darker, translucent when scrolled
            : "rgba(15, 35, 60, 0.45)", // slightly lighter when idle
        boxShadow: scrolled
          ? "0 0 20px rgba(0, 255, 255, 0.15), 0 4px 30px rgba(0, 0, 0, 0.4)"
          : "0 0 15px rgba(0, 0, 0, 0.25)",
        border: scrolled
          ? "1px solid rgba(0, 255, 255, 0.25)"
          : "1px solid rgba(255, 255, 255, 0.08)",
      }}
      className={`fixed top-3 inset-x-0 mx-auto w-[90%] sm:w-3/4 max-w-[95%]
  p-2.5 sm:p-4 rounded-xl flex justify-between items-center z-50 transition-all duration-300`}
    >
      {/* 👈 Left Side: Menu + Logo */}
      <div className="flex items-center gap-3">
        {/* ☰ Menu Icon (Mobile only) */}
        <button
          className="bg-darkSecondary p-2.5 rounded-lg md:hidden hover:scale-105 transition-transform"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiOutlineMenuAlt3 className="w-5 h-5 text-iconColor" />
        </button>

        {/* 💻 Logo */}
        {/* 💻 Logo (Responsive auto-shortening) */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
          <BiCodeAlt className="w-7 h-7 text-iconColor" strokeWidth={1.5} />

          {/* Animated text that switches under 380px */}
          <span data-fade-text className="italic font-bold text-lg xs:text-xl sm:text-2xl tracking-wide transition-all duration-300">
            <span className="hidden [@media(max-width:380px)]:inline show">I.dev</span>
            <span className="[@media(max-width:380px)]:hidden show">Ishita.dev</span>
          </span>
        </div>

      </div>

      {/* 🌐 Nav Links (Desktop) */}
      <div className="hidden md:flex justify-between items-center gap-8 font-semibold text-lg">
        {["About Me", "Education", "Skills", "Projects", "Experience", "Connect"].map((section) => (
          <Link
            key={section}
            to={section.toLowerCase().replace(/\s+/g, "")}
            smooth={true}
            spy={true}
            offset={-80}
            duration={500}
            className="cursor-pointer text-white hover:text-darkHeading transition-colors duration-200"
            activeClass="text-borderColor font-bold"
          >
            {section}
          </Link>
        ))}
      </div>

      {/* 👉 Right Side: Socials + Theme */}
      <div className="flex items-center gap-3 sm:gap-4">
        <a href="https://www.linkedin.com/in/ishita-roy-67667a200/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 transition-transform" />
        </a>
        <a href="https://github.com/ISHITA-ROY016" target="_blank" rel="noopener noreferrer">
          <img src={GithubIcon} alt="Github" className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 transition-transform" />
        </a>
        <a href="https://leetcode.com/u/royishita016/" target="_blank" rel="noopener noreferrer">
          <img src={LeetCodeIcon} alt="LeetCode" className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 transition-transform" />
        </a>
        <button className="bg-darkSecondary p-2.5 rounded-lg hover:scale-110 transition-transform">
          <img src={SunIcon} alt="Sun Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 h-screen w-56 bg-darkHeaderBg/90 shadow-lg flex flex-col items-start p-4 space-y-3 z-50 backdrop-blur-lg"
        >
          <button
            className="text-white text-xl self-end mb-2"
            onClick={() => setMenuOpen(false)}
          >
            <HiOutlineX />
          </button>
          {["About Me", "Education", "Skills", "Projects", "Experience", "Connect"].map((section) => (
            <Link
              key={section}
              to={section.toLowerCase().replace(/\s+/g, "")}
              smooth={true}
              spy={true}
              offset={-80}
              duration={500}
              className="cursor-pointer text-white text-sm hover:text-darkHeading"
              activeClass="text-borderColor font-bold"
              onClick={() => setMenuOpen(false)}
            >
              {section}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
