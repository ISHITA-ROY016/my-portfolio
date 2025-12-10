import { useState, useEffect, useRef, useContext } from "react";
import SunIcon from "/assets/sun-icon.svg";
import MoonIcon from "/assets/moonIcon.svg";
import LinkedInIcon from "/assets/linkedin.svg";
import GithubIcon from "/assets/github.svg";
import LeetCodeIcon from "/assets/leetcode.svg";
import { BiCodeAlt } from "react-icons/bi";
import { Link } from "react-scroll";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { ThemeContext } from "../context/themeContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("About Me");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [manualScroll, setManualScroll] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const sidebarRef = useRef(null);
  const controls = useAnimation();
  const lastScrollY = useRef(window.scrollY);

  const isMobile = () => window.innerWidth < 768;

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let timeoutId;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const deltaY = currentScroll - lastScrollY.current;
      const multiplier = 0.7;
      const maxMove = 12;
      const movement = Math.max(-maxMove, Math.min(maxMove, -deltaY * multiplier));

      controls.start({
        y: movement,
        transition: { type: "spring", stiffness: 220, damping: 16 },
      });

      clearTimeout(timeoutId);

      timeoutId = window.setTimeout(() => {
        controls.start({
          y: 0,
          transition: { type: "spring", stiffness: 140, damping: 20 },
        });
      }, 120);

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [controls]);


  useEffect(() => {
    const sections = [
      { id: "aboutme", name: "About Me" },
      { id: "education", name: "Education" },
      { id: "skills", name: "Skills" },
      { id: "projects", name: "Projects" },
      { id: "miniprojects", name: "Projects" },
      { id: "experience", name: "Experience" },
      { id: "connect", name: "Connect" },
    ];

    const manualRef = { current: manualScroll };
    const manualUpdater = setInterval(() => {
      manualRef.current = manualScroll;
    }, 100);

    const threshold = 0.15;
    const observer = new IntersectionObserver(
      (entries) => {
        if (manualRef.current) return;

        const visibleEntries = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({ id: e.target.id, ratio: e.intersectionRatio }));

        if (visibleEntries.length === 0) return;

        visibleEntries.sort((a, b) => b.ratio - a.ratio);
        const top = visibleEntries[0];
        if (top.ratio >= threshold) {
          const found = sections.find((s) => s.id === top.id);
          if (found) setActiveSection(found.name);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -40% 0px",
        threshold: Array.from({ length: 20 }, (_, i) => i / 20),
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      clearInterval(manualUpdater);
      observer.disconnect();
    };
  }, [manualScroll]);


  useEffect(() => {
    if (!menuOpen) setDropdownOpen(false);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      setTimeout(() => setDropdownOpen(false), 150);
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <motion.header
      id="site-header"
      animate={controls}
      style={{
        backdropFilter: "blur(20px) saturate(1.5)",
        WebkitBackdropFilter: "blur(20px) saturate(1.5)",
        // background: "rgba(6, 18, 33, 0.45)",
        boxShadow: scrolled
          ? "0 8px 25px rgba(7, 45, 84, 0.25)"
          : "0 0 15px rgba(0, 0, 0, 0.25)",
        border: scrolled
          ? "1px solid rgba(135, 206, 250, 0.45)"
          : "1px solid rgba(80, 77, 77, 0.573)",
        willChange: "transform",
      }}
      className={`fixed top-3 inset-x-0 mx-auto w-[90%] max-w-[95%]
        p-2.5 sm:p-4 rounded-xl flex justify-between items-center z-50 transition-colors duration-300 bg-[#f0f7fc]/70 dark:bg-[rgba(6,18,33,0.45)]`}
    >
      {/* 👈 Left Side: Menu + Logo */}
      <div className="flex items-center gap-3">
        {/* ☰ Menu Icon (Mobile only) */}
        <button
          className="bg-[#7A8A8A] dark:bg-darkSecondary p-2.5 rounded-lg lg:hidden hover:scale-105 transition-transform"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiOutlineMenuAlt3 className="w-5 h-5 text-iconColor" />
        </button>

        {/* 💻 Logo */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
          <BiCodeAlt className="w-7 h-7 text-iconColor" strokeWidth={1.5} />
          <span
            data-fade-text
            className="italic font-bold text-text dark:text-white text-lg xs:text-xl sm:text-2xl tracking-wide transition-all duration-300"
          >
            <span className="hidden [@media(max-width:380px)]:inline">I.dev</span>
            <span className="[@media(max-width:380px)]:hidden">Ishita.dev</span>
          </span>
        </div>
      </div>

      {/* 🌐 Nav Links (Desktop) */}
      <div className="hidden lg:flex justify-between items-center gap-4 sm:gap-6 xl:gap-8 font-semibold text-lg relative">
        {["About Me", "Education", "Skills", "Projects", "Experience", "Connect"].map((section) => (
          <div key={section} className="relative">
            {section === "Projects" ? (
              <>
                <button
                  onMouseEnter={() => !isMobile() && setDropdownOpen(true)}
                  onMouseLeave={() => !isMobile() && setDropdownOpen(false)}
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className={`cursor-pointer transition-colors duration-200 ${activeSection === "Projects"
                    ? "text-[#D1495B] font-bold"
                    : "text-text dark:text-white hover:text-darkHeading"
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
                      className="absolute top-9 left-0 w-48 bg-[#d0e2fb] dark:bg-[#0d1b2a] 
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
                            offset={-120}
                            duration={500}
                            onSetActive={() => setActiveSection("Projects")}
                            onClick={() => {
                              setManualScroll(true);
                              setDropdownOpen(false);
                              const target = document.getElementById(to);
                              if (!target) return;

                              const observer = new IntersectionObserver(
                                (entries) => {
                                  const entry = entries[0];
                                  if (entry.isIntersecting) {
                                    setActiveSection("Projects");
                                    setManualScroll(false);
                                    observer.disconnect();
                                  }
                                },
                                { threshold: 0.4 }
                              );

                              observer.observe(target);
                            }}
                            className="w-full text-text dark:text-white group-hover:text-darkHeading transition-colors duration-200"
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
                offset={-120}
                duration={500}
                onSetActive={() => setActiveSection(section)}
                className={`cursor-pointer transition-colors duration-200 ${activeSection === section
                  ? "text-[#D1495B] font-bold"
                  : "text-text dark:text-white hover:text-darkHeading"
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
        <button className="bg-[#7A8A8A] dark:bg-darkSecondary p-2.5 rounded-lg hover:scale-110 transition-transform" onClick={toggleTheme} >
          <img src={theme === "dark" ? SunIcon : MoonIcon} alt="Theme Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={sidebarRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-screen w-56 bg-white dark:bg-darkHeaderBg/90 shadow-lg flex flex-col items-start p-4 space-y-3 z-50 backdrop-blur-lg"
          >
            {/* Close button */}
            <button
              className="text-text dark:text-white text-xl self-end mb-2"
              onClick={() => setMenuOpen(false)}
            >
              <HiOutlineX />
            </button>

            {/* Mobile Menu Links */}
            {["About Me", "Education", "Skills", "Projects", "Experience", "Connect"].map(
              (section) => (
                <div key={section} className="w-full">
                  {section === "Projects" ? (
                    <>
                      <button
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        className={`w-full text-left cursor-pointer transition-transform ease-in-out duration-300 flex justify-between items-center ${activeSection === "Projects"
                          ? "text-[#D1495B] font-bold"
                          : "text-text dark:text-white hover:text-darkHeading"
                          }`}
                      >
                        {section}
                        <HiChevronDown
                          className={`text-text dark:text-white transform transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"
                            }`}
                        />
                      </button>

                      {/* Submenu */}
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 flex flex-col gap-2"
                          >
                            {[{ name: "Projects", to: "projects" },
                            { name: "Mini Projects", to: "miniprojects" }].map(
                              ({ name, to }) => (
                                <Link
                                  key={name}
                                  to={to}
                                  smooth={true}
                                  spy={true}
                                  offset={-120}
                                  duration={500}
                                  onClick={() => {
                                    setManualScroll(true);
                                    setDropdownOpen(false);
                                    setMenuOpen(false);
                                    const target = document.getElementById(to);
                                    if (!target) return;

                                    const observer = new IntersectionObserver(
                                      (entries) => {
                                        const entry = entries[0];
                                        if (entry.isIntersecting) {
                                          setActiveSection("Projects");
                                          setManualScroll(false);
                                          observer.disconnect();
                                        }
                                      },
                                      { threshold: 0.4 }
                                    );

                                    observer.observe(target);
                                  }}
                                  className="text-black/80 dark:text-white/80 text-sm hover:text-[#D1495B] transition-colors"
                                >
                                  {name}
                                </Link>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={section.toLowerCase().replace(/\s+/g, "")}
                      smooth={true}
                      spy={true}
                      offset={-120}
                      duration={500}
                      onSetActive={() => setActiveSection(section)}
                      className={`block cursor-pointer transition-colors duration-200 ${activeSection === section
                        ? "text-[#D1495B] font-bold"
                        : "text-text dark:text-white hover:text-darkHeading"
                        }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {section}
                    </Link>
                  )}
                </div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
