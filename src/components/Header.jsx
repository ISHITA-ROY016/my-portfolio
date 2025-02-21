import SunIcon from "../assets/sun-icon.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";
import LeetCodeIcon from "../assets/leetcode.svg";
import { BiCodeAlt } from "react-icons/bi";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="bg-darkHeaderBg max-w-[90%] mx-auto mt-6 pl-7 rounded-lg flex justify-between items-center gap-8">
      <div className="flex-grow flex justify-between items-center gap-10">
        <div className="flex items-center gap-1">
          <BiCodeAlt className="w-9 h-9 text-iconColor" strokeWidth={1.5} />
          <span className="italic font-bold text-3xl">Ishita.dev</span>
        </div>
        <div className="flex justify-between items-center gap-10 font-semibold text-xl">
          <Link to="about"
            smooth={true}
            spy={true}
            duration={500}
            className="cursor-pointer text-white"
            activeClass="text-darkHeading">
            About Me
          </Link>
          <Link to="education"
            smooth={true}
            spy={true}
            duration={500}
            className="cursor-pointer text-white"
            activeClass="text-darkHeading">
            Education
          </Link>
          <Link to="skills"
            smooth={true}
            spy={true}
            duration={500}
            className="cursor-pointer text-white"
            activeClass="text-darkHeading">
            Skills
          </Link>
          <Link to="projects"
            smooth={true}
            spy={true}
            duration={500}
            className="cursor-pointer text-white"
            activeClass="text-darkHeading">
            Projects
          </Link>
          <Link to="experience"
            smooth={true}
            spy={true}
            duration={500}
            className="cursor-pointer text-white"
            activeClass="text-darkHeading">
            Experience
          </Link>
          <Link to="connect"
            smooth={true}
            spy={true}
            duration={500}
            className="cursor-pointer text-white"
            activeClass="text-darkHeading">
            Connect
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/ishita-roy-67667a200/"
            target="_blank"
            rel="noopener noreferrer"
            className= "transition-all duration-300"
          >
            <img src={LinkedInIcon} alt="LinkedIn Icon" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/ISHITA-ROY016"
            target="_blank"
            rel="noopener noreferrer"
            className= "transition-all duration-300"
          >
            <img src={GithubIcon} alt="Github Icon" className="w-6 h-6" />
          </a>
          <a
            href="https://leetcode.com/u/royishita016/"
            target="_blank"
            rel="noopener noreferrer"
            className= "transition-all duration-300"
          >
            <img src={LeetCodeIcon} alt="LeetCode Icon" className="w-6 h-6" />
          </a>
        </div>
      </div>
      <button className="bg-darkSecondary flex items-center self-stretch p-5 rounded-lg">
        <img src={SunIcon} alt="Sun Icon" className="w-8 h-8" />
      </button>
    </div>
  )
}

export default Header
