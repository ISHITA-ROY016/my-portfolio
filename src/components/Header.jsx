import { useState, useEffect } from "react";
import SunIcon from "/assets/sun-icon.svg";
import LinkedInIcon from "/assets/linkedin.svg";
import GithubIcon from "/assets/github.svg";
import LeetCodeIcon from "/assets/leetcode.svg";
import { BiCodeAlt } from "react-icons/bi";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("About Me");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionsToWatch = ["projects", "miniprojects"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("Projects");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4, // how much of section is visible before trigger
      }
    );

    sectionsToWatch.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <motion.header
      id="site-header"
      style={{
        transition: "all 0.4s ease-in-out",
        backdropFilter: "blur(20px) saturate(1.5)",
        WebkitBackdropFilter: "blur(20px) saturate(1.5)",
        background: scrolled
          ? "rgba(10, 25, 47, 0.6)"
          : "rgba(15, 35, 60, 0.45)",
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
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
          <BiCodeAlt className="w-7 h-7 text-iconColor" strokeWidth={1.5} />
          <span
            data-fade-text
            className="italic font-bold text-lg xs:text-xl sm:text-2xl tracking-wide transition-all duration-300"
          >
            <span className="hidden [@media(max-width:380px)]:inline">I.dev</span>
            <span className="[@media(max-width:380px)]:hidden">Ishita.dev</span>
          </span>
        </div>
      </div>

      {/* 🌐 Nav Links (Desktop) */}
      <div className="hidden md:flex justify-between items-center gap-8 font-semibold text-lg relative">
        {["About Me", "Education", "Skills", "Projects", "Experience", "Connect"].map((section) => (
          <div key={section} className="relative">
            {section === "Projects" ? (
              <>
                <button
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className={`cursor-pointer transition-colors duration-200 ${activeSection === "Projects"
                    ? "text-[#D1495B] font-bold"
                    : "text-white hover:text-darkHeading"
                    }`}
                >
                  {section}
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                      className="absolute top-9 left-0 w-48 bg-[#0d1b2a] 
        border border-cyan-500/20 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.45)] 
        overflow-hidden flex flex-col py-2"
                    >
                      {[
                        { name: "Projects", to: "projects" },
                        { name: "Mini Projects", to: "miniprojects" },
                      ].map(({ name, to }) => (
                        <motion.div
                          key={name}
                          whileHover={{ x: 6 }}
                          className="group flex items-center gap-2 px-5 py-2 cursor-pointer transition-all duration-200"
                        >
                          <Link
                            to={to}
                            smooth={true}
                            spy={true}
                            offset={-80}
                            duration={500}
                            onSetActive={() => setActiveSection("Projects")}
                            onClick={() => {
                              setActiveSection("Projects");
                              setDropdownOpen(false);
                            }}
                            className="w-full text-white group-hover:text-darkHeading transition-colors duration-200"
                          >
                            {name}
                          </Link>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#D1495B]">
                            →
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link
                to={section.toLowerCase().replace(/\s+/g, "")}
                smooth={true}
                spy={true}
                offset={-80}
                duration={500}
                onSetActive={() => setActiveSection(section)}
                className={`cursor-pointer transition-colors duration-200 ${activeSection === section
                  ? "text-[#D1495B] font-bold"
                  : "text-white hover:text-darkHeading"
                  }`}
              >
                {section}
              </Link>
            )}
          </div>
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
              onSetActive={() => setActiveSection(section)}
              className={`cursor-pointer transition-colors duration-200 ${activeSection === section
                ? "text-[#D1495B] font-bold"
                : "text-white hover:text-darkHeading"
                }`}
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
